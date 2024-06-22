"use client";

import type { User } from "@prisma/client";
import React, { useState } from "react";

import type { Price, Product } from "@prisma/client";

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";

import { createCheckoutSession } from "@/actions/stripe";

import * as Dialog from "@radix-ui/react-dialog";

import { CloseIcon } from "@/components/ui/Icons";

import { TIME_TABLE } from "@/lib/static/time";
import getStripe from "@/lib/utils/getStripe";

const ProductListing = ({
	product,
	prices,
	everyMonths,
	user,
	displaySubscribe,
}: {
	product: Product;
	prices: Price[];
	everyMonths: number;
	user: User | null;
	displaySubscribe: boolean;
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [clientSecret, setClientSecret] = useState<string | null>(null);
	const price = prices.find((price) => price.every_months === everyMonths);

	if (!price) return null;
	const formAction = async (data: FormData): Promise<void> => {
		window.scrollTo(0, 0);
		setOpen(true);

		if (user?.stripeCustomerId === null) {
			return setOpen(false);
		}

		data.append("price_id", price?.stripeId);
		data.append("customer_id", user?.stripeCustomerId.toString() ?? "");

		const { client_secret } = await createCheckoutSession(data);

		return setClientSecret(client_secret);
	};

	const closeStripe = (): void => {
		setOpen(false);
		setClientSecret(null);
	};

	return (
		<>
			<Dialog.Root open={open}>
				<li className="flex h-fit w-full">
					<div className="contents">
						<div
							className="relative flex w-full flex-col gap-4 break-words rounded-xl border-[#ffffff11] border-[1px] bg-[#ffffff09] p-6 shadow-sm"
							data-price-id={product.stripeId}
							key={product.id}
						>
							<h1 className="flex items-center font-extrabold text-2xl">
								{product.name}
								<span className="mt-2 ml-4 font-mono text-sm tracking-tighter opacity-50">
									{Intl.NumberFormat("en-US", {
										style: "currency",
										currency: price.currency,
									}).format(price.amount / 100)}{" "}
									/ {TIME_TABLE[everyMonths as keyof typeof TIME_TABLE]}
								</span>
							</h1>
							{product.description ? <p className="w-full break-words text-sm opacity-50">{product.description}</p> : null}
							<Dialog.Trigger asChild>
								{/* {displaySubscribe ? (
									<button
										className="rounded-full border-[#ffffff12] border-[1px] bg-[#ffffff11] px-8 py-3 font-bold text-sm shadow-md transition-all hover:bg-[#ffffff22]"
										type="submit"
									>
										Subscribe
									</button>
								) : null} */}
							</Dialog.Trigger>
						</div>
					</div>
					{/* {clientSecret ? (
						<EmbeddedCheckoutProvider stripe={getStripe()} options={{ clientSecret }}>
							<Dialog.Portal>
								<Dialog.Overlay className="stripe-bg-animate-in fixed inset-0 z-[9997] h-screen w-screen bg-[#ffffff11] backdrop-blur-xl" />
								<div className="absolute inset-0 z-[9998] flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden md:py-8">
									<Dialog.Content className="stripe-animate-in relative inset-0 my-auto max-h-fit min-h-fit w-full overflow-hidden rounded-2xl md:max-w-[400px]">
										<Dialog.Close onClick={() => closeStripe()} className="fixed top-4 right-4 z-[9999] rounded-full bg-black p-2">
											<CloseIcon />
										</Dialog.Close>
										<div className="h-fit w-full select-none overflow-hidden rounded-xl">
											<EmbeddedCheckout />
										</div>
									</Dialog.Content>
								</div>
							</Dialog.Portal>
						</EmbeddedCheckoutProvider>
					) : null} */}
				</li>
			</Dialog.Root>
		</>
	);
};

export default ProductListing;
