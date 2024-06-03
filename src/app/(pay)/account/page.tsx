import type { Metadata } from "next";
import { redirect } from "next/navigation";

import React, { Suspense } from "react";

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
			{dbUser.emailVerified === false && (
				<div className="w-full max-w-[400px] rounded-xl bg-red-600/10 p-4 text-sm">Check your email to verify your email address and unlock all Pyro features.</div>
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
