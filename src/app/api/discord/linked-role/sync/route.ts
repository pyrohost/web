import type { NextRequest } from "next/server";

import prisma from "@/lib/api/prisma";
import stripe from "@/lib/api/stripe";
import { discord } from "@/lib/api/auth";
import userAPI from "@/lib/api/user";

export async function GET(request: NextRequest) {
	const authHeader = request.headers.get("authorization");
	if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
		return new Response("Unauthorized", { status: 401 });
	}

	const discordConnections = await prisma.oAuthConnection.findMany({
		where: {
			providerId: "discord",
		},
	});

	for (const connection of discordConnections) {
		try {
			if (connection.expiresAt! < new Date()) {
				const { accessToken, accessTokenExpiresAt } = await discord.refreshAccessToken(connection.refreshToken!)
				connection.accessToken = accessToken;
				connection.expiresAt = accessTokenExpiresAt;

				await prisma.oAuthConnection.update({
					where: {
						id: connection.id,
					},
					data: {
						accessToken,
						expiresAt: accessTokenExpiresAt,
					},
				});
			}

			const user = await userAPI.getUserByProvider("discord", connection.providerUserId);
			if (!user || !user.stripeCustomerId) {
				continue;
			}

			const activeSubscriptions = await stripe.subscriptions.list({
				status: "active",
				customer: user.stripeCustomerId,
			});

			await fetch(`https://discord.com/api/v9/users/@me/applications/${process.env.DISCORD_APPLICATION_ID}/role-connection`, {
				method: "PUT",
				headers: {
					"Authorization": `Bearer ${connection.accessToken}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					metadata: {
						is_active_customer: !!activeSubscriptions.data.length,
						active_services: activeSubscriptions.data.length,
						customer_since: new Date(user.createdAt).toISOString(),
					},
				}),
			});

			console.log(`Synced metadata for user ${connection.providerUserId}`)
		} catch (error) {
			console.error(`Failed to sync metadata for user ${connection.providerUserId}: ${error}`)
		}
	}

	return new Response("OK");
}