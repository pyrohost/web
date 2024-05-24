import { PyrodactylCredentialsEmail } from '@/emails/PyrodactylCredentialsEmail';
import { randomBytes } from 'crypto';
import type { Stripe } from 'stripe';

import { NextResponse } from 'next/server';

import prisma from '@/lib/api/prisma';
import PterodactylClient, { UserObject } from '@/lib/api/pterodactyl';
import stripe from '@/lib/api/stripe';
import { sendEmail } from '@/lib/utils/sendEmail';

function getNames(name: string): [string, string] {
    let names = name.trim().split(' ');
    if (names.length < 2) return ['Pyro', 'Customer'];

    let first_name = names[0];
    let last_name = names.slice(1).join(' ');
    return [first_name, last_name];
}

export async function POST(req: Request) {
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            await (await req.blob()).text(),
            req.headers.get('stripe-signature') as string,
            process.env.STRIPE_WEBHOOK_SECRET as string,
        );
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';

        if (err! instanceof Error) console.log(err);
        console.log(`❌ Error message: ${errorMessage}`);
        return NextResponse.json({ message: `Webhook Error: ${errorMessage}` }, { status: 400 });
    }

    console.log('✅ Success:', event.id);

    const permittedEvents: string[] = [
        'customer.subscription.deleted',
        'checkout.session.completed',
        'payment_intent.succeeded',
        'payment_intent.payment_failed',
    ];

    if (permittedEvents.includes(event.type)) {
        let data: Stripe.Checkout.Session | Stripe.PaymentIntent;

        try {
            switch (event.type) {
                case 'checkout.session.completed':
                    data = event.data.object as Stripe.Checkout.Session;
                    break;
                case 'customer.subscription.deleted':
                    const deletedSubscription = event.data.object as Stripe.Subscription;

                    const deletedServer = await PterodactylClient.getServerByExternalId(deletedSubscription.id);

                    if (deletedServer) {
                        await PterodactylClient.suspendServer(deletedServer.id);
                    } else {
                        console.log(`No server found with external ID ${deletedSubscription.id}.`);
                    }
                    break;
                case 'payment_intent.payment_failed':
                    data = event.data.object as Stripe.PaymentIntent;
                    console.log(`❌ Payment failed: ${data.last_payment_error?.message}`);

                    const failureInvoice = await stripe.invoices.retrieve(data.invoice as string);

                    const failureSubscription = await stripe.subscriptions.retrieve(
                        failureInvoice.subscription as string,
                    );

                    const failureServer = await PterodactylClient.getServerByExternalId(failureSubscription.id);

                    if (failureServer) {
                        await PterodactylClient.suspendServer(failureServer.id);
                    } else {
                        console.log(`No server found with external ID ${failureSubscription.id}.`);
                    }
                    break;
                case 'payment_intent.succeeded':
                    data = event.data.object as Stripe.PaymentIntent;

                    let invoice = await stripe.invoices.retrieve(data.invoice as string);
                    let subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
                    let metadata = (await stripe.products.retrieve(invoice.lines.data[0].plan!.product as string))
                        .metadata;

                    let existingServer = await PterodactylClient.getServerByExternalId(subscription.id);

                    if (existingServer) {
                        return NextResponse.json({ message: 'Server already exists' }, { status: 400 });
                    }

                    let stripeCustomer = await stripe.customers.retrieve(data.customer as string);
                    if (!stripeCustomer) return NextResponse.json({ message: 'Customer not found' }, { status: 404 });
                    if (stripeCustomer.deleted)
                        return NextResponse.json({ message: 'Customer is deleted' }, { status: 404 });

                    let dbUser = await prisma.user.findFirst({ where: { stripeCustomerId: stripeCustomer.id } });
                    if (!dbUser) return NextResponse.json({ message: 'User not found' }, { status: 404 });

                    let pyrodactylUser: UserObject | null;

                    // NOTE: these are arrow operators on purpose as they
                    // perserve the context of the function.
                    const getUser = !dbUser.pyrodactylUserId
                        ? (idOrEmail: string) => PterodactylClient.getUserByEmail(idOrEmail)
                        : (idOrEmail: string) => PterodactylClient.getUserById(idOrEmail);

                    const userSearchableAttr = !dbUser.pyrodactylUserId ? dbUser.email : dbUser.pyrodactylUserId;
                    pyrodactylUser = await getUser(userSearchableAttr as string);

                    if (!pyrodactylUser) {
                        let password = randomBytes(32).toString('hex');
                        let [first_name, last_name] = getNames(dbUser.preferredName || stripeCustomer.name!);

                        pyrodactylUser = await PterodactylClient.createUser(
                            dbUser.email!,
                            dbUser.id,
                            first_name,
                            last_name,
                            password,
                        );

                        await sendEmail(
                            dbUser.email!,
                            PyrodactylCredentialsEmail(dbUser.email!, password),
                        );

                        await prisma.user.update({
                            where: { id: dbUser.id },
                            data: { pyrodactylUserId: pyrodactylUser.id },
                        });
                    }

                    let allocation = await PterodactylClient.getFirstAvailableAllocation(2);

                    let server = await PterodactylClient.createBlankServer(
                        'Server',
                        pyrodactylUser.id,
                        allocation.id,
                        {
                            io: 500,
                            cpu: Number(metadata.vcores) * 100 || 0,
                            memory: Number(metadata.ram) * 1024 || 0,
                            swap: Number(metadata.overflow_memory) * 1024 || 0,
                            disk: 32 * 1024,
                        },
                        {
                            databases: 5,
                            backups: 5,
                            allocations: 5,
                        },
                    );

                    const serverName = `Server #${server.id}`;
                    await PterodactylClient.updateServerDetails(server.id, {
                        name: serverName,
                        user: pyrodactylUser.id,
                        external_id: subscription.id,
                    });

                    console.log(`💰 PaymentIntent status: ${data.status}`);
                    break;
                default:
                    throw new Error(`Unhandled event: ${event.type}`);
            }
        } catch (error) {
            console.log(error);
            return NextResponse.json({ message: 'Webhook handler failed' }, { status: 500 });
        }
    }

    return NextResponse.json({ message: 'Received' }, { status: 200 });
}
