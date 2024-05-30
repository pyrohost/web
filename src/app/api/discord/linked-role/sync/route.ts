import type { NextRequest } from "next/server";

import prisma from "@/lib/api/prisma";
import stripe from "@/lib/api/stripe";
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
				const tokens = await fetch(`https://discord.com/api/v10/oauth2/token`, {
					method: "POST",
					headers: {
						"Authorization": `Basic ${Buffer.from(`${process.env.DISCORD_CLIENT_ID}:${process.env.DISCORD_CLIENT_SECRET}`).toString("base64")}`,
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						grant_type: "refresh_token",
						refresh_token: connection.refreshToken!,
					}),
				}).then(response => response.json());

				await prisma.oAuthConnection.update({
					where: {
						id: connection.id,
					},
					data: {
						accessToken: tokens.access_token,
						refreshToken: tokens.refresh_token,
						expiresAt: new Date(Date.now() + (tokens.expires_in * 1000)),
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