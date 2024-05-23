import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { auth } from '@/lib/auth';
import discord from '@/lib/discord';
import prisma from '@/lib/prisma';
import stripe from '@/lib/stripe';

export async function GET(req: NextRequest, res: Response) {
    let session = await auth();
    if (!session) {
        return redirect('/auth/login');
    }

    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');

    let tokens = await discord.getOAuthTokens(code!);
    const accessToken = await discord.getAccessToken(tokens);
    tokens.access_token = accessToken.access_token;
    tokens.expires_at = accessToken.expires_at;

    const discordUser = await discord.getUserData(tokens.access_token);
    const dbUser = await prisma.user.findUnique({
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

    await discord.pushMetadata(tokens, {
        services: subscriptions.data.length,
        customer_since: dbUser.createdAt,
    });

    await prisma.user.update({
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

    return redirect('/account/?success=DiscordLinkedRole');
}
