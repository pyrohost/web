import { PrismaAdapter } from '@auth/prisma-adapter';

import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';
import GitHub from 'next-auth/providers/github';
import Nodemailer from 'next-auth/providers/nodemailer';

import prisma from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

import { sendEmail } from './utils/sendEmail';
import { VerificationEmail } from '@/emails/VerificationEmail';
import PterodactylClient from './pterodactyl';

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

            if (!user.pyrodactylUserId) {
                const pyrodactylUser = await PterodactylClient.getUserByEmail(user.email!);
                if (pyrodactylUser) {
                    // Link their Pyrodactyl account to their user in the database
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { pyrodactylUserId: pyrodactylUser.id },
                    });
                }
                
                // NOTE: We don't create them a pterodactyl account here because it 
                // requires us to send them an email with their password, which we
                // would rather send them when they purchase a product.
            }
            
            return Promise.resolve();
        },
    },
    providers: [
        Nodemailer({
            server: {
                host: process.env.SMTP_HOST!,
                port: parseInt(process.env.SMTP_PORT!),
                auth: {
                    user: process.env.SMTP_USER!,
                    pass: process.env.SMTP_PASS!,
                },
            },
            from: process.env.EMAIL_FROM!,
            sendVerificationRequest({ identifier: email, url, provider: { server, from } }): Promise<void> {
                sendEmail(
                    email,
                    VerificationEmail(url)
                );
                
                return Promise.resolve();
            },
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    pages: {
        signIn: '/auth/login',
        verifyRequest: '/auth/verify-email',
        error: '/auth/error',
    },
});
