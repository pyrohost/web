import { User } from '@prisma/client';
import { Session } from 'lucia';
import { cache } from 'react';
import Stripe from 'stripe';

import { cookies } from 'next/headers';

import lucia from '@/lib/api/auth';
import prisma from '@/lib/api/prisma';
import pterodactyl from '@/lib/api/pterodactyl';
import stripe from '@/lib/api/stripe';

export const getUserBySession = cache(async () => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) return null;
    const { user, session } = await lucia.validateSession(sessionId);
    try {
        if (session && session.fresh) {
            const sessionCookie = lucia.createSessionCookie(session.id);
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        }
        if (!session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        }
    } catch {
        // Next.js throws error when attempting to set cookies when rendering page
    }
    return user;
});

class UserAPI {
    

    async createUser(email: string, passwordHash: string): Promise<User> {
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
            },
        });

        await this.linkOrCreateExternalAccounts(user);

        return user;
    }

    async linkOrCreateExternalAccounts(user: User): Promise<void> {
        await this.handleStripeAccount(user);
        await this.handlePyrodactylAccount(user);
    }

    async handleStripeAccount(user: User): Promise<void> {
        let stripeCustomer;

        if (!user.stripeCustomerId) {
            const customers = await stripe.customers.list({ email: user.email });
            stripeCustomer =
                customers.data.length === 1 ? customers.data[0] : await stripe.customers.create({ email: user.email });
        } else {
            try {
                stripeCustomer = await stripe.customers.retrieve(user.stripeCustomerId);
            } catch (error) {
                stripeCustomer = null;
            }
            if (!stripeCustomer || stripeCustomer.deleted) {
                stripeCustomer = await stripe.customers.create({ email: user.email });
            }
        }

        if (stripeCustomer && !user.stripeCustomerId) {
            await prisma.user.update({
                where: { id: user.id },
                data: { stripeCustomerId: stripeCustomer.id },
            });
        }
    }

    async handlePyrodactylAccount(user: User): Promise<void> {
        if (!user.pyrodactylUserId) {
            const pyrodactylUser = await pterodactyl.getUserByEmail(user.email);
            if (pyrodactylUser) {
                await prisma.user.update({
                    where: { id: user.id },
                    data: { pyrodactylUserId: pyrodactylUser.id },
                });
            }
        }
    }
}

const userAPI = new UserAPI();
export default userAPI;
