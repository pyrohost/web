import type { NextRequest } from "next/server";

import discord from "@/lib/api/discord";
import prisma from "@/lib/api/prisma";
import stripe from "@/lib/api/stripe";

export async function GET(request: NextRequest) {
	const authHeader = request.headers.get("authorization");
	if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
		return new Response("Unauthorized", { status: 401 });
	}

	const dbTokens = await prisma.discordTokens.findMany();
	const promises = dbTokens.map(async (token: any) => {
		try {
			const tokenData = await discord.getAccessToken({
				access_token: token.accessToken,
				refresh_token: token.refreshToken,
				expires_at: token.expiresAt,
			});

			const dbUser = await prisma.user.findUnique({
				where: { id: token.userId },
			});

			if (!dbUser || !dbUser.stripeCustomerId) {
				return;
			}

			const subscriptions = await stripe.subscriptions.list({
				customer: dbUser.stripeCustomerId,
				status: "active",
			});

			await discord.pushMetadata(tokenData, {
				services: subscriptions.data.length,
				customer_since: dbUser.createdAt,
			});

			await prisma.discordTokens.update({
				where: { userId: dbUser.id },
				data: {
					accessToken: tokenData.access_token,
					refreshToken: tokenData.refresh_token,
					expiresAt: tokenData.expires_at,
				},
			});

			console.log(
				`Updated token for user ${dbUser.id} with ${subscriptions.data.length} services.`,
			);
		} catch (error) {
			console.error(`Failed to update token for user ${token.userId}:`, error);
		}
	});

	await Promise.all(promises);

	return new Response("OK", { status: 200 });
}
