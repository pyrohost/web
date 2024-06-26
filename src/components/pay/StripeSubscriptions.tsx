import type Stripe from "stripe";

// import StripeCancelSubscriptionImmediately from './unsafe_StripeCancelSubscriptionImmediately';
import { CaretSortIcon } from "@radix-ui/react-icons";

import StripeCancelSubscription from "@/components/pay/StripeCancelSubscription";
import StripeResumeSubscription from "@/components/pay/StripeResumeSubscription";
import GoToServerDropdownItem from "@/components/pay/GoToServerDropdownItem";
import { MoreIcon } from "@/components/ui/Icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/primitives/Collapsible";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/primitives/DropdownMenu";

import stripe from "@/lib/api/stripe";
import { formatAmountForDisplay } from "@/lib/utils/stripeHelpers";

interface ExtendedSubscription extends Stripe.Subscription {
	productID?: string;
	productName?: string;
	productDescription?: string | null;
	productMetadata?: any;
}

const StripeSubscriptions = async ({ customerId }: { customerId: string }) => {
	if (!customerId || customerId === "") {
		return <p>No customer ID provided</p>;
	}

	let listUserSubscriptions: any;

	try {
		listUserSubscriptions = await stripe.subscriptions.list({
			customer: customerId,
			limit: 100,
		});

		if (listUserSubscriptions.data.length > 0) {
			const updatedSubscriptions: ExtendedSubscription[] = [];
			const productCache: { [id: string]: Stripe.Product } = {};

			for (const subscription of listUserSubscriptions.data as ExtendedSubscription[]) {
				if (subscription.items.data[0]) {
					const productId = subscription.items.data[0].price.product as string;

					if (!productCache[productId]) {
						const product = await stripe.products.retrieve(productId);
						productCache[productId] = product;
					}

					subscription.productID = productCache[productId].id;
					subscription.productName = productCache[productId].name;
					subscription.productDescription = productCache[productId].description;

					if (productCache[productId].metadata) {
						subscription.productMetadata = productCache[productId].metadata;
					}
				}
				updatedSubscriptions.push(subscription);
			}
			listUserSubscriptions.data = updatedSubscriptions;
		}
	} catch (error) {
		return (
			<p>
				Failed to retrieve customer information. This could be due to a misconfiguration by this instance of Pyro Pay, such as a wrong Stripe API key, or your
				Stripe Customer was deleted unexpectedly. Please try signing out, then signing in again, or contact{" "}
				<a className="text-brand" target="_blank" rel="noreferrer noopener" href="https://pyro.host/discord">
					Pyro on Discord to fix this issue.
				</a>
			</p>
		);
	}

	return (
		<Collapsible>
			<div className="flex flex-col rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] shadow-sm">
				<CollapsibleTrigger asChild>
					<div className="group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left">
						<div className="flex flex-col gap-2">
							<h2 className="font-extrabold text-2xl">Subscriptions</h2>
							<div className="flex items-center gap-1 font-bold text-neutral-500 text-sm">
								<p>
									You have{" "}
									{listUserSubscriptions.data.filter((subscription: any) => !subscription.cancel_at_period_end).length === 1
										? "1 active subscription"
										: `${listUserSubscriptions.data.filter((subscription: any) => !subscription.cancel_at_period_end).length} active subscriptions`}
								</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-2">
							<div className="rounded-full p-2 transition group-hover:bg-[#ffffff11]">
								<CaretSortIcon className="h-6 w-6" />
								<span className="sr-only">Toggle</span>
							</div>
						</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className="flex flex-col gap-4 overflow-hidden p-6 pt-0">
						<div className="flex flex-col gap-4">
							{listUserSubscriptions.data.length > 0 ? (
								<div
									style={{
										background: "radial-gradient(124.75% 124.75% at 50.01% -10.55%, rgb(16, 16, 16) 0%, rgb(4, 4, 4) 100%)",
									}}
									className="flex flex-col gap-1 rounded-xl border-[#ffffff12] border-[1px] p-1"
								>
									{listUserSubscriptions.data.map((subscription: ExtendedSubscription) => (
										<div
											className="relative flex w-full flex-col gap-4 truncate rounded-lg border-[#ffffff11] border-[1px] bg-[#ffffff09] p-6 shadow-sm"
											key={subscription.id}
											data-key={subscription.id}
											data-product-id={subscription.productID}
											data-subscription-id={subscription.id}
										>
											<div>
												<h2 className="font-bold text-lg">{subscription.productName}</h2> <h2 className="font-bold text-lg">{subscription.description}</h2>
												{/* {JSON.stringify(subscription.metadata)} */}
												{subscription.canceled_at && <p className="text-red-500">Pending Cancellation</p>}
											</div>
											<p className="text-wrap">
												Your subscription {subscription.canceled_at ? "ends" : "will renew"} on{" "}
												{new Date(subscription.current_period_end * 1000).toLocaleDateString()}
												{subscription.canceled_at ? (
													<>.</>
												) : (
													<> for {subscription.items.data[0]?.plan?.amount ? formatAmountForDisplay(subscription.items.data[0].plan.amount, "usd") : "N/A"}</>
												)}
											</p>
											{subscription.canceled_at ? (
												<StripeResumeSubscription subscriptionId={subscription.id} />
											) : (
												<>
													<StripeCancelSubscription subscriptionId={subscription.id} />
													{/* <StripeCancelSubscriptionImmediately
                                                        subscriptionId={subscription.id}
                                                    /> */}
												</>
											)}
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<button
														type="button"
														className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-md p-1 text-white hover:bg-[#ffffff11]"
													>
														<MoreIcon />
													</button>
												</DropdownMenuTrigger>
												<DropdownMenuContent>
													<GoToServerDropdownItem subscriptionId={subscription.id} />
												</DropdownMenuContent>
											</DropdownMenu>
										</div>
									))}
								</div>
							) : (
								<p>You don&apos;t have any active subscriptions. Check out our Store to subscribe to a plan.</p>
							)}
						</div>
					</div>
				</CollapsibleContent>
			</div>
		</Collapsible>
	);
};

export default StripeSubscriptions;
