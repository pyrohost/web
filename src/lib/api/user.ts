import { VerificationEmail } from '@/emails/VerificationEmail';
import { Session, SessionUser } from 'lucia';
import { TimeSpan, createDate } from 'oslo';
import { alphabet, generateRandomString } from 'oslo/crypto';

import { cookies } from 'next/headers';

import { cache } from 'react';

import { Address, User } from '@prisma/client';

import lucia from '@/lib/api/auth';
import prisma from '@/lib/api/prisma';
import pterodactyl from '@/lib/api/pterodactyl';
import stripe from '@/lib/api/stripe';
import { sendEmail } from '@/lib/utils/sendEmail';

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
    async generateEmailVerificationCode(userId: string, email: string): Promise<string> {
        await prisma.emailVerificationToken.deleteMany({ where: { userId } });

        const code = generateRandomString(6, alphabet('0-9', 'A-Z'));
        await prisma.emailVerificationToken.create({
            data: {
                userId,
                email,
                code,
                expiresAt: createDate(new TimeSpan(15, 'm')),
            },
        });

        return code;
    }

    async getUserBySessionUser(sessionUser: SessionUser): Promise<User | null> {
        return prisma.user.findUnique({ where: { id: sessionUser.id } });
    }

    async getUserById(id: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { id } });
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { email } });
    }

    async updateUser(user: User): Promise<User> {
        const updatedUser = prisma.user.update({
            where: { id: user.id },
            data: user,
        });

        await this.syncChanges(user);
        return updatedUser;
    }

    async syncChanges(user: User): Promise<void> {
        if (!user.stripeCustomerId) return;
        const customer = await stripe.customers.retrieve(user.stripeCustomerId);
        if (!customer || customer.deleted) return;

        let fullName = null;
        if (user.firstName && user.lastName) fullName = `${user.firstName} ${user.lastName}`;

        if (fullName && fullName !== customer.name) {
            await stripe.customers.update(customer.id, { name: fullName });
        }

        if (user.email !== customer.email) {
            await stripe.customers.update(customer.id, { email: user.email });
        }

        if (user.phone && user.phone !== customer.phone) {
            await stripe.customers.update(customer.id, { phone: user.phone });
        }
    }

    async createUser(email: string, passwordHash: string | null): Promise<User> {
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
            },
        });

        await this.linkOrCreateExternalAccounts(user);

        const code = await this.generateEmailVerificationCode(user.id, email);
        await sendEmail(email, VerificationEmail(code));

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

    async getUserAddress(user: User): Promise<Address | null> {
        return prisma.address.findUnique({ where: { userId: user.id } });
    }

    async setUserAddress(user: User, address: any): Promise<Address> {
        const newAddress = prisma.address.upsert({
            where: { userId: user.id },
            update: address,
            create: {
                userId: user.id,
                street1: address.street1,
                street2: address.street2,
                city: address.city,
                state: address.state,
                postal: address.postal,
                country: address.country,
            },
        });

        if (!user.stripeCustomerId) return newAddress;

        const customer = await stripe.customers.retrieve(user.stripeCustomerId);
        if (!customer || customer.deleted) return newAddress;

        const stripeAddress = {
            line1: address.street1,
            line2: address.street2,
            city: address.city,
            state: address.state,
            postal_code: address.postal,
            country: address.country,
        };

        await stripe.customers.update(user.stripeCustomerId, { address: stripeAddress });

        return newAddress;
    }
}

const userAPI = new UserAPI();
export default userAPI;
