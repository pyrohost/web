import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import React, { Suspense } from "react";

import { Cross1Icon } from "@radix-ui/react-icons";

import AccountInformation from "@/components/account/AccountInformation";
import AccountConnections from "@/components/account/AccountConnections";
import DashboardSkeletonSection from "@/components/pay/DashboardSkeletonSection";
import StripeSubscriptions from "@/components/pay/StripeSubscriptions";

import userAPI, { getUserBySession } from "@/lib/api/user";
import LogoutForm from "@/components/account/LogoutForm";

export const metadata: Metadata = {
	title: "Pyro - Account",
};

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
	const sessionUser = await getUserBySession();
	if (!sessionUser) {
		return redirect("/login?error=SessionUserNotFound");
	}

	const dbUser = await userAPI.getUserBySessionUser(sessionUser);

	if (!dbUser) {
		return redirect("/login?error=NoUserFound");
	}

	return (
		<div className="container mx-auto flex flex-col gap-4 py-8">
			{searchParams?.error === "NoActiveSubscriptionsDiscordLinkedRole" && (
				<div className="relative flex rounded-full bg-red-800/20 px-4 py-3 text-red-400" role="alert">
					<strong className="font-bold">Failed to link Discord account! </strong>
					<span className="ml-0.5 block sm:inline">You need to purchase something before linking your Discord.</span>
					<Link aria-label="Close alert" className="ml-auto" href="/account">
						<Cross1Icon className="h-6 w-6" />
					</Link>
				</div>
			)}
			{searchParams?.success === "DiscordLinkedRole" && (
				<div className="relative flex rounded-full bg-red-800/20 px-4 py-3 text-red-400" role="alert">
					<strong className="font-bold">Your Discord account is now linked!</strong>
					<span className="ml-0.5 block sm:inline">Check your roles on the Pyro Discord server!</span>
					<Link aria-label="Close alert" className="ml-auto" href="/account">
						<Cross1Icon className="h-6 w-6" />
					</Link>
				</div>
			)}

			<Suspense fallback={<DashboardSkeletonSection title={"Payment Information"} />}>
				<AccountInformation user={dbUser} />
			</Suspense>

			<Suspense fallback={<DashboardSkeletonSection title={"Connections"} />}>
				<AccountConnections user={dbUser} />
			</Suspense>

			<Suspense fallback={<DashboardSkeletonSection title={"Subscriptions"} />}>
				<StripeSubscriptions customerId={dbUser.stripeCustomerId ?? ""} />
			</Suspense>

			<div className="flex flex-col rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] shadow-sm">
				<div className="group flex w-full select-none items-center justify-between p-6 text-left">
					<div className="flex w-full flex-row items-center justify-between">
						<h2 className="font-extrabold text-2xl">Log Out</h2>
						<LogoutForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
