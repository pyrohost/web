import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Lucia, TimeSpan } from 'lucia';

import prisma from './prisma';

const adapter = new PrismaAdapter(prisma.session, prisma.user);

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: true,
        attributes: {
            secure: process.env.NODE_ENV === 'production',
        },
    },
    getUserAttributes: (attributes) => {
        return {
            email: attributes.email,
            emailVerified: attributes.email_verified,
            stripeCustomerId: attributes.stripeCustomerId,
            pyrodactylUserId: attributes.pyrodactylUserId,
        };
    },
    sessionExpiresIn: new TimeSpan(1, 'w'),
});

export default lucia;

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: {
            email: string;
            email_verified: boolean;
            stripeCustomerId: string;
            pyrodactylUserId: string;
        };
    }
}
