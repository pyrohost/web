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

    if (!code) {
        return redirect('/account/?error=NoCodeDiscordLinkedRole');
    }

    const discordTokens = await discord.getOAuthTokens(code);

    const dbUser = await prisma.user.findUnique({
        where: {
            id: session.user?.id,
        },
        include: {
            discordLinkedRole: true,
        },
    });

    if (!dbUser || !dbUser.stripeCustomerId) {
        throw new Error('Achievement Get: How did we get here?');
    }

    if (!dbUser.discordLinkedRole) {
        const discordUser = await discord.getUserData(discordTokens);

        await prisma.discordLinkedRole.create({
            data: {
                userId: dbUser.id,
                discordId: discordUser.id,
                accessToken: discordTokens.access_token,
                refreshToken: discordTokens.refresh_token,
                expiresAt: discordTokens.expires_at,
            },
        });
    } else {
        await prisma.discordLinkedRole.update({
            where: {
                id: dbUser.discordLinkedRole.id,
            },
            data: {
                accessToken: discordTokens.access_token,
                refreshToken: discordTokens.refresh_token,
                expiresAt: discordTokens.expires_at,
            },
        });
    }

    const subscriptions = await stripe.subscriptions.list({
        customer: dbUser.stripeCustomerId,
        status: 'active',
    });

    await discord.pushMetadata(discordTokens, {
        services: subscriptions.data.length,
        customer_since: dbUser.createdAt,
    });

    return redirect('/account/?success=DiscordLinkedRole');
}
