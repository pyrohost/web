import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Discord, GitHub, Twitch, Twitter } from 'arctic';
import { Lucia, TimeSpan } from 'lucia';

import prisma from '@/lib/api/prisma';

export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);

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
            // info
            id: attributes.id,
            fullName:
                attributes.firstName && attributes.lastName ? `${attributes.firstName} ${attributes.lastName}` : null,
            firstName: attributes.firstName,
            lastName: attributes.lastName,

            // email
            email: attributes.email,
            emailVerified: attributes.emailVerified,
            admin: attributes.admin,

            // external
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
            id: string;
            fullName: string | null;
            firstName: string | null;
            lastName: string | null;
            email: string;
            emailVerified: boolean;
            admin: boolean;
            stripeCustomerId: string | null;
            pyrodactylUserId: string | null;
        };
    }
    // what the fuck
    export type SessionUser = Register['DatabaseUserAttributes'];
}
