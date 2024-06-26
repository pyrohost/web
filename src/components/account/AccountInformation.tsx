import type { User } from "@prisma/client";

import { CaretSortIcon, CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import AccountInformationRow from "@/components/account/AccountInformationRow";
import LogoutForm from "@/components/account/LogoutForm";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/primitives/Collapsible";

import userAPI from "@/lib/api/user";
import { buildAddress } from "@/lib/utils/address";
import formatPhoneNumber from "@/lib/utils/formatPhoneNumber";

const AccountInformation = async ({ user }: { user: User }) => {
	if (!user) {
		return (
			<div className="flex flex-col rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] shadow-sm">
				<div className="group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left">
					<div className="flex flex-col gap-2">
						<h2 className="font-extrabold text-2xl">Payment Information</h2>
						<p>A user was not passed via props.</p>
					</div>
				</div>
			</div>
		);
	}

	const userAddress = await userAPI.getUserAddress(user);
	const fullName = user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : null;

	return (
		<Collapsible>
			<div className="flex flex-col rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] shadow-sm">
				<CollapsibleTrigger asChild>
					<div className="group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left">
						<div className="flex flex-col gap-2">
							<h2 className="font-extrabold text-2xl">Payment Information</h2>
							{!fullName || !user.phone || !userAddress ? (
								<div className="flex items-center gap-1 font-bold text-red-500 text-sm">
									<CrossCircledIcon className="h-5 w-5" />
									<p>Missing Information</p>
								</div>
							) : (
								<div className="flex items-center gap-1 font-bold text-green-500 text-sm">
									<CheckCircledIcon className="h-5 w-5" />
									<p>Your information is up to date!</p>
								</div>
							)}
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
						<AccountInformationRow error={fullName ? "" : "You must provide your full name."} label="Full Name" value={fullName} user={user} />
						<AccountInformationRow locked label="Email" value={user.email} user={user} />
						<AccountInformationRow locked label="Email Verified" value={user.emailVerified ? "Yes" : "No"} user={user} />
						<AccountInformationRow label="Password" hidden user={user} />
						<AccountInformationRow
							error={user.phone ? "" : "You must provide a phone number."}
							label="Phone Number"
							value={formatPhoneNumber(user.phone as string)}
							user={user}
						/>
						<AccountInformationRow error={userAddress ? "" : "You must provide an address."} label="Address" value={buildAddress(userAddress)} user={user} />
					</div>
				</CollapsibleContent>
			</div>
		</Collapsible>
	);
};

export default AccountInformation;
