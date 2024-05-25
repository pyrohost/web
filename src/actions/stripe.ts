'use server';

import Stripe from 'stripe';

import { headers } from 'next/headers';

import stripe from '@/lib/api/stripe';

export const createCheckoutSession = async (
    data: FormData,
): Promise<{ client_secret: string | null; url: string | null }> => {
    const origin: string = headers().get('origin') as string;
    const { price_id, customer_id } = Object.fromEntries(data);

    if (!price_id || !customer_id) {
        throw new Error('Invalid price or customer ID');
    }

    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
        customer: customer_id.toString(),
        ui_mode: 'embedded',
        line_items: [
            {
                price: price_id.toString(),
                quantity: 1,
            },
        ],
        phone_number_collection: {
            enabled: true,
        },
        mode: 'subscription',
        return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        consent_collection: {
            terms_of_service: 'required',
        },
        billing_address_collection: 'required',
        automatic_tax: {
            enabled: false,
        },
    });

    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url,
    };
};

export const createPortalSession = async (data: FormData): Promise<{ url: string | null }> => {
    const origin: string = headers().get('origin') as string;

    const portalSession: Stripe.BillingPortal.Session = await stripe.billingPortal.sessions.create({
        customer: data.get('customer') as string,
        return_url: `${origin}/dashboard`,
        // TODO: Disallow email changes via portal (SEE PYRO-95)
    });

    return {
        url: portalSession.url,
    };
};

// NOT TESTED! ALL COPILOT
export const updateSubscription = async (data: FormData): Promise<{ client_secret: string | null }> => {
    const subscription: Stripe.Subscription = await stripe.subscriptions.update(data.get('subscription') as string, {
        items: [
            {
                id: data.get('subscription_item') as string,
                price: data.get('price') as string,
            },
        ],
    });

    return {
        client_secret: subscription.latest_invoice as string,
    };
};

// private
export const cancelSubscription = async (data: FormData): Promise<{ subscription: Stripe.Subscription }> => {
    const { subscriptionId } = Object.fromEntries(data);
    const subscription: Stripe.Subscription = await stripe.subscriptions.cancel(subscriptionId.toString());

    return {
        subscription,
    };
};

export const cancelSubscriptionAtPeriodEnd = async (
    data: FormData,
): Promise<{ serializedSubscription: Stripe.Subscription }> => {
    const { subscriptionId } = Object.fromEntries(data);

    if (!subscriptionId || !/^sub_\w+$/.test(subscriptionId.toString())) {
        throw new Error('Invalid subscription ID');
    }

    let subscription: Stripe.Subscription;
    try {
        subscription = await stripe.subscriptions.update(subscriptionId.toString(), {
            cancel_at_period_end: true,
        });
    } catch (error) {
        console.error('Failed to cancel subscription: ', error);
        throw error;
    }

    const serializedSubscription = JSON.parse(JSON.stringify(subscription));

    return {
        serializedSubscription,
    };
};

export const resumeSubscription = async (data: FormData): Promise<{ serializedSubscription: Stripe.Subscription }> => {
    const { subscriptionId } = Object.fromEntries(data);

    if (!subscriptionId || !/^sub_\w+$/.test(subscriptionId.toString())) {
        throw new Error('Invalid subscription ID');
    }

    let subscription: Stripe.Subscription;
    try {
        subscription = await stripe.subscriptions.update(subscriptionId.toString(), {
            cancel_at_period_end: false,
        });
    } catch (error) {
        console.error('Failed to resume subscription: ', error);
        throw error;
    }

    const serializedSubscription = JSON.parse(JSON.stringify(subscription));

    return {
        serializedSubscription,
    };
};
