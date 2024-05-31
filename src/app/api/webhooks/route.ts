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

	const permittedEvents: string[] = [
		"invoice.paid",
		// "invoice.payment_failed",
		// "invoice.overdue", // suspend servers that are 3 days overdue
	];

	if (!permittedEvents.includes(event.type)) {
		return NextResponse.json({ message: "ACK" });
	}

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

	switch (event.type) {
		case "invoice.paid": {
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

				const email = PyrodactylCredentialsEmail(credentials.username, credentials.password);
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

			const server = await serverAPI.createServer(user, product, "MANAGED");
			if ("error" in server) {
				console.log(`${server.error}`);
				return NextResponse.json({ error: server.error }, { status: 400 });
			}

			break;
		}

		// todo: handle invoice.payment_failed and invoice.overdue
	}

	return NextResponse.json({ message: "OK" });
}
