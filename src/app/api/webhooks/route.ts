import PyrodactylCredentialsEmail from "@/emails/PyrodactylCredentialsEmail";
import { randomBytes } from "node:crypto";
import type { Stripe } from "stripe";

import { NextResponse } from "next/server";

import prisma from "@/lib/api/prisma";
import stripe from "@/lib/api/stripe";
import { sendEmail } from "@/lib/utils/sendEmail";

import { isUserAbleToSubscribe } from "@/lib/utils/isUserAbleToSubscribe";
import { alphabet, generateRandomString } from "oslo/crypto";
import { serverAPI, userAPI } from "@/lib/api/pyrodactyl";
import { formatAmountForDisplay } from "@/lib/utils/stripeHelpers";
import type { Product, User } from "@prisma/client";

const webhook = process.env.DISCORD_WEBHOOK_URL;

async function createEmbed(title: string, description: string, fields: any[], url: string) {
	return {
		title,
		description,
		fields,
		url,
		color: 0xff4438,
	};
}

async function postToDiscordWebhook(embed: any) {
	const data = { embeds: [embed] };

	try {
		await fetch(webhook!, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	} catch (err) {
		console.log(`❌ Error posting to Discord webhook: ${err}`);
	}
}

async function notifyInvoicePaid(user: User, product: Product, invoice: Stripe.Invoice, subscription: Stripe.Subscription) {
	const embed = await createEmbed(
		"🎉 Invoice Paid",
		`\`${user?.email}\` has paid an invoice.`,
		[
			{ name: "Product", value: product?.name, inline: false },
			{
				name: "Amount",
				value: `${formatAmountForDisplay(invoice.total, invoice.currency.toUpperCase())} ${invoice.currency.toUpperCase()}`,
				inline: false,
			},
			{ name: "Renews", value: `<t:${subscription.current_period_end}:R>`, inline: false },
		],
		`https://dashboard.stripe.com/invoices/${invoice.id}`,
	);

	await postToDiscordWebhook(embed);
}

async function notifyDisputeCreated(dispute: Stripe.Dispute, charge: Stripe.Charge) {
	const embed = await createEmbed(
		"🚨 Dispute Created",
		"A dispute has been created for an invoice.",
		[
			{ name: "Amount", value: `${formatAmountForDisplay(charge.amount, charge.currency.toUpperCase())} ${charge.currency.toUpperCase()}`, inline: false },
			{ name: "Status", value: dispute.status, inline: false },
		],
		`https://dashboard.stripe.com/disputes/${dispute.id}`,
	);

	await postToDiscordWebhook(embed);
}

export async function POST(req: Request) {
	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			await (await req.blob()).text(),
			req.headers.get("stripe-signature") as string,
			process.env.STRIPE_WEBHOOK_SECRET as string,
		);
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : "Unknown error";

		if (err! instanceof Error) console.log(err);
		console.log(`❌ Error message: ${errorMessage}`);
		return NextResponse.json({ message: `Webhook Error: ${errorMessage}` }, { status: 400 });
	}

	console.log("✅ Success:", event.id);

	const permittedEvents: string[] = ["invoice.paid", "invoice.payment_failed", "charge.dispute.created"];

	if (!permittedEvents.includes(event.type)) {
		return NextResponse.json({ message: "ACK" });
	}

	switch (event.type) {
		case "invoice.paid": {
			const invoice = event.data.object as Stripe.Invoice;
			const customer = await stripe.customers.retrieve(invoice.customer as string);

			if (!customer || customer.deleted) {
				return NextResponse.json({ error: "Customer not found" }, { status: 404 });
			}

			let user = await prisma.user.findFirst({
				where: {
					stripeCustomerId: customer.id,
				},
			});

			if (!user || !(await isUserAbleToSubscribe(user))) {
				return NextResponse.json({ error: "User not found or not able to subscribe" }, { status: 404 });
			}

			const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);

			if (!subscription) {
				return NextResponse.json({ error: "Subscription not found" }, { status: 404 });
			}

			const product = await prisma.product.findFirst({
				where: {
					stripeId: subscription.items.data[0].price.product as string,
				},
			});

			if (!product) {
				return NextResponse.json({ error: "Product not found" }, { status: 404 });
			}

			await notifyInvoicePaid(user, product, invoice, subscription);

			const existingServer = await prisma.server.findFirst({
				where: {
					userId: user.id,
					stripeSubscriptionId: invoice.subscription as string,
				},
			});

			if (existingServer) {
				return NextResponse.json({ message: "OK" });
			}

			if (!user.pyrodactylUserId) {
				const credentials = {
					email: user.email,
					first_name: user.firstName!,
					last_name: user.lastName!,
					username: `user-${randomBytes(8).toString("hex")}`,
					password: generateRandomString(16, alphabet("a-z", "A-Z", "0-9")),
				};

				const pyrodactylUser = await userAPI.createUser(
					credentials.email,
					credentials.username,
					credentials.first_name,
					credentials.last_name,
					credentials.password,
				);

				if ("error" in pyrodactylUser) {
					console.log(`Failed to create user: ${pyrodactylUser.error}`);
					return NextResponse.json({ error: pyrodactylUser.error }, { status: 400 });
				}

				const email = PyrodactylCredentialsEmail(credentials.email, credentials.password);
				await sendEmail(user.email, email);

				user = await prisma.user.update({
					where: {
						id: user.id,
					},
					data: {
						pyrodactylUserId: pyrodactylUser.id,
					},
				});

				console.log(`Created Pyrodactyl user for ${user.email}`);
			}

			const server = await serverAPI.createServer(user, product, subscription, "MANAGED");
			if ("error" in server) {
				console.log(`${server.error}`);
				return NextResponse.json({ error: server.error }, { status: 400 });
			}

			console.log(`Created server ${server.serverId} for ${user.email}`);

			break;
		}

		case "invoice.payment_failed": {
			const invoice = event.data.object as Stripe.Invoice;
			const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
			const customer = await stripe.customers.retrieve(invoice.customer as string);

			break;
		}

		case "charge.dispute.created":
			{
				const dispute = event.data.object as Stripe.Dispute;
				const charge = await stripe.charges.retrieve(dispute.charge as string);
				const invoice = await stripe.invoices.retrieve(charge.invoice as string);
				await notifyDisputeCreated(dispute, charge);
				const server = await prisma.server.findFirst({
					where: {
						stripeSubscriptionId: invoice.subscription as string,
					},
				});
				if (server) {
					await serverAPI.suspendServer(server.serverId);
					console.log(`❌ Dispute created for server ${server.serverId}, suspending...`);
				} else {
					console.warn(`❌ Dispute created for an unknown server with subscription ${invoice.subscription}`);
				}
			}

			break;
	}

	return NextResponse.json({ message: "OK" });
}
