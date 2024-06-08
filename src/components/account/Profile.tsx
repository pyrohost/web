import type { User } from "@prisma/client";

import { CaretSortIcon, CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import AccountInformationRow from "@/components/account/AccountInformationRow";
import LogoutForm from "@/components/account/LogoutForm";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/primitives/Collapsible";

import userAPI from "@/lib/api/user";
import { buildAddress } from "@/lib/utils/address";
import formatPhoneNumber from "@/lib/utils/formatPhoneNumber";

const Profile = async ({ user }: { user: User }) => {
	if (!user) {
		return (
			<div className="flex flex-col rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] shadow-sm">
				<div className="group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left">
					<div className="flex flex-col gap-2">
						<h2 className="font-extrabold text-2xl">Profile</h2>
						<p>A user was not passed via props.</p>
					</div>
				</div>
			</div>
		);
	}

	const preferredName = user.preferredName;

	return (
		<Collapsible>
			<div className="flex flex-col rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] shadow-sm">
				<CollapsibleTrigger asChild>
					<div className="group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left">
						<div className="flex flex-col gap-2">
							<h2 className="font-extrabold text-2xl">Profile</h2>{" "}
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
						<AccountInformationRow
							tooltip={
								"If you prefer to be called by a name other than your legal first name, you can enter it here. We'll use this to address you in emails and other communications."
							}
							required
							label="Preferred Name"
							value={preferredName}
							user={user}
						/>
					</div>
				</CollapsibleContent>
			</div>
		</Collapsible>
	);
};

export default Profile;
