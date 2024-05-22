import { PrismaAdapter } from '@auth/prisma-adapter';

import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';
import GitHub from 'next-auth/providers/github';
import Nodemailer from 'next-auth/providers/nodemailer';

import prisma from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

import { sendEmail } from './email';

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    events: {
        signIn: async (event) => {
            // check if the user exists in the database
            const user = await prisma.user.findUnique({ where: { id: event.user.id! } });
            if (!user) {
                throw new Error('User not found in database, this should never happen!');
            }

            // user doesn't have a stripe customer id, check if one exists in stripe with their email
            if (!user.stripeCustomerId) {
                const stripeCustomer = await stripe.customers.list({ email: user.email! });

                // if a customer is found, update the user with the stripe customer id
                if (stripeCustomer.data.length == 1) {
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { stripeCustomerId: stripeCustomer.data[0].id },
                    });
                    // if a customer is not found, create a new customer with their email and update the user with the stripe customer id
                } else {
                    const stripeCustomer = await stripe.customers.create({ email: user.email! });
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { stripeCustomerId: stripeCustomer.id },
                    });
                }
                // user has a stripe customer id, check if it exists in stripe
            } else {
                const stripeCustomer = await stripe.customers.retrieve(user.stripeCustomerId).catch(() => null);
                // if the customer is not found, create a new customer with their email and update the user with the stripe customer id
                if (!stripeCustomer || stripeCustomer.deleted) {
                    const stripeCustomer = await stripe.customers.create({ email: user.email! });
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { stripeCustomerId: stripeCustomer.id },
                    });
                }
            }

            return Promise.resolve();
        },
    },
    providers: [
        Nodemailer({
            server: {
                raw: process.env.EMAIL_SERVER!,
            },
            from: process.env.EMAIL_FROM!,
            sendVerificationRequest({ identifier: email, url, provider: { server, from } }) {
                sendEmail(email, 'Magic Link', `<a href="${url}">${url}</a>`, { server, from });
            },
        }),
        GitHub({
            clientId: process.env.GITHUB_APP_CLIENT_ID!,
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
        Discord({
            clientId: process.env.DISCORD_APP_CLIENT_ID!,
            clientSecret: process.env.DISCORD_APP_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    pages: {
        signIn: '/auth/login',
        verifyRequest: '/auth/verify-email',
        error: '/auth/error',
    },
});
