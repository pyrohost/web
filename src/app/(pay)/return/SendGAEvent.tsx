"use client";
import { sendGAEvent } from "@next/third-parties/google";
import type Stripe from "stripe";

const SendGAEvent = ({
	session
}: {
	session: Stripe.Checkout.Session;
}) => {
	return <>{session.amount_total && sendGAEvent({ event: "conversion_event_purchase", value: session.amount_total / 100 })}</>;
};

export default SendGAEvent;
