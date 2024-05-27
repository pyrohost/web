import type { NextRequest } from "next/server";

import discord from "@/lib/api/discord";
import prisma from "@/lib/api/prisma";
import stripe from "@/lib/api/stripe";

export async function GET(request: NextRequest) {
	const authHeader = request.headers.get("authorization");
	if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
		return new Response("Unauthorized", { status: 401 });
	}

	const connections = await prisma.oAuthConnection.findMany({
		where: { providerId: "discord" },
	});

	for (const connection of connections) {
		if (!connection.accessToken || !connection.refreshToken || !connection.expiresAt) {
			continue;
		}

		const user = await prisma.user.findUnique({
			where: { id: connection.userId },
		});

		if (!user) {
			await prisma.oAuthConnection.delete({
				where: { id: connection.id },
			});
			continue;
		}

		const accessToken = await discord.getAccessToken({
			access_token: connection.accessToken,
			refresh_token: connection.refreshToken,
			expires_at: connection.expiresAt,
		});

		connection.accessToken = accessToken.access_token;
		connection.refreshToken = accessToken.refresh_token;
		connection.expiresAt = accessToken.expires_at;

		await prisma.oAuthConnection.update({
			where: { id: connection.id },
			data: {
				accessToken: connection.accessToken,
				refreshToken: connection.refreshToken,
				expiresAt: connection.expiresAt,
			},
		});

		if (!user.stripeCustomerId) {
			return new Response("OK", { status: 200 });
		}

		const stripeCustomer = await stripe.customers.retrieve(user.stripeCustomerId);

		if (!stripeCustomer || stripeCustomer.deleted) {
			return new Response("OK", { status: 200 });
		}

		const stripeSubscription = await stripe.subscriptions.list({
			customer: user.stripeCustomerId,
			status: "active",
		});

		await discord.pushMetadata(accessToken, {
			is_active_customer: !!stripeSubscription.data.length,
			active_services: stripeSubscription.data.length,
			customer_since: new Date(stripeCustomer.created).toISOString(),
		});
	}
}
