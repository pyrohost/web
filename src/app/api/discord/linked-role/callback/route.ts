import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { auth } from '@/lib/auth';
import discord from '@/lib/discord';
import prisma from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

export async function GET(req: NextRequest, res: Response) {
    let session = await auth();
    if (!session) {
        return redirect('/auth/login');
    }

    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');

    const tokens = await discord.getOAuthTokens(code as string);
    const discordUser = await discord.getUserData(tokens.access_token);

    prisma.user.update({
        where: {
            id: session.user?.id,
        },
        data: {
            discordLinkedRole: {
                create: {
                    discordId: discordUser.id,
                    accessToken: tokens.access_token,
                    refreshToken: tokens.refresh_token,
                    expiresAt: tokens.expires_at,
                },
            },
        },
    });

    let dbUser = await prisma.user.findUnique({
        where: {
            id: session.user?.id,
        },
    });

    if (!dbUser || !dbUser.stripeCustomerId) {
        throw new Error('Achievement Get: How Did We Get Here?');
    }

    const subscriptions = await stripe.subscriptions.list({
        customer: dbUser.stripeCustomerId,
        status: 'active',
    });

    if (subscriptions.data.length === 0) {
        return redirect('/account?error=NoActiveSubscriptionsDiscordLinkedRole');
    }

    await discord.pushMetadata(tokens, {
        services: subscriptions.data.length,
        customer_since: dbUser.createdAt,
    });

    return redirect('/account/?success=DiscordLinkedRole');
}
