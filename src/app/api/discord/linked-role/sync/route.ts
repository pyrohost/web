import type { NextRequest } from 'next/server';

import discord, { TokenInfo } from '@/lib/discord';
import prisma from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

export async function GET(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', {
            status: 401,
        });
    }

    const discordLinkedRoles: { userId: string }[] = await prisma.discordLinkedRole.findMany({
        where: { discordId: { not: null } },
        select: { userId: true },
    });

    const userIds: string[] = discordLinkedRoles.map((role: { userId: string }) => role.userId);

    const users = await prisma.user.findMany({
        where: { discordLinkedRoles: { some: { userId: { in: userIds } } } },
    });

    for (const user of users) {
        try {
            const data = await prisma.discordLinkedRole.findUniqueOrThrow({
                where: { userId: user.id },
            });

            let tokens: TokenInfo = {
                access_token: data.accessToken,
                refresh_token: data.refreshToken,
                expires_at: data.expiresAt,
            };

            const accessToken = await discord.getAccessToken(tokens);
            tokens.access_token = accessToken.access_token;
            tokens.expires_at = accessToken.expires_at;

            prisma.discordLinkedRole.update({
                where: { userId: user.id },
                data: {
                    accessToken: accessToken.access_token,
                    expiresAt: accessToken.expires_at,
                },
            });

            const subscriptions = await stripe.subscriptions.list({
                customer: user.stripeCustomerId!,
                status: 'active',
            });

            await discord.pushMetadata(accessToken, {
                services: subscriptions.data.length,
                customer_since: user.createdAt,
            });
        } catch (error) {
            console.error(`Error running cron job for user ${user.id}: ${error}`);
        }
    }

    return new Response('Success', {
        status: 200,
    });
}
