import { PyroButton } from "@/components/ui/PyroButton";
import { PyroLink } from "@/components/ui/PyroLink";

import stripe from "@/lib/api/stripe";
import { sendGAEvent } from "@next/third-parties/google";
import type Stripe from "stripe";

export default async function ResultPage({
	searchParams,
}: {
	searchParams: { session_id: string };
}): Promise<JSX.Element> {
	if (!searchParams.session_id) throw new Error("Invalid session ID provided.");

	let session: Stripe.Checkout.Session;
	try {
		session = await stripe.checkout.sessions.retrieve(searchParams.session_id, {
			expand: ["line_items", "payment_intent"],
		});
	} catch (error) {
		return (
			<div className="flex flex-1 flex-col items-center justify-center">
				<div className="mx-auto w-full max-w-lg rounded-2xl border border-brand border-opacity-20 bg-[#111111] p-4">
					<img alt="" src="https://i.giphy.com/ISOckXUybVfQ4.webp" className="mb-4 w-full rounded-xl" />
					<h1 className="text-center font-extrabold text-3xl">Payment Failed</h1>
					<div className="mt-2">
						<p className="text-center">Your payment could not be processed.</p>{" "}
						<p className="text-center">
							Please try again or <PyroLink href="/discord">contact support</PyroLink> for assistance.
						</p>
					</div>
					<div className="mx-auto my-4 w-full max-w-lg border-brand border-t border-opacity-20" />

					<PyroButton href="/for" className="mt-6">
						Go Back to Games
					</PyroButton>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="flex flex-1 flex-col items-center justify-center">
				<div className="mx-auto w-full max-w-lg rounded-2xl border border-brand border-opacity-20 bg-[#111111] p-4">
					<img alt="" src="https://media1.tenor.com/m/P63DgPMZ8-sAAAAC/party-hellmo.gif" className="mb-4 w-full rounded-xl" />
					<h1 className="text-center font-extrabold text-3xl">Thank You for Choosing Pyro!</h1>
					<p className="mt-2 text-center">We&apos;re excited to have you on board!</p>
					<div className="mx-auto my-4 w-full max-w-lg border-brand border-t border-opacity-20" />

					<h2 className="text-center font-extrabold text-2xl">What&apos;s next?</h2>
					<p className="mt-2 text-center">Check your email for login details if you don&apos;t already have a Pyrodactyl account.</p>

					<PyroButton href="https://panel.pyro.host" external={true} className="mt-6">
						Go to Pyrodactyl Panel
					</PyroButton>
				</div>
			</div>

			{session.amount_total && sendGAEvent({ event: "conversion_event_purchase", value: session.amount_total / 100 })}
		</>
	);
}
