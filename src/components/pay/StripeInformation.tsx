import { CaretSortIcon, CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import StripePortal from "@/components/pay/StripePortal";
import { LockClosedIcon } from "@/components/ui/Icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/primitives/Collapsible";

import stripe from "@/lib/api/stripe";
import formatPhoneNumber from "@/lib/utils/formatPhoneNumber";

const InfoRow = ({
	label,
	required,
	locked,
	value,
	error,
}: {
	label: string;
	required?: boolean;
	locked?: boolean;
	value: string | null;
	error?: string;
}) => (
	<div className="flex flex-col truncate text-wrap break-words">
		<div aria-level={1} aria-label={label} role="heading" className="flex flex-row items-center gap-2 font-bold text-sm">
			{label}
			{locked && (
				<div className="h-4 w-4">
					<LockClosedIcon />
				</div>
			)}
		</div>
		<div className="flex flex-row items-center gap-2">
			{error && <div className="max-h-2 min-h-2 min-w-2 max-w-2 animate-pulse rounded-full bg-red-500" />}
			{value} {error && <span className="font-bold text-red-500 text-sm">{error}</span>}
		</div>
	</div>
);

const UserInformation = async ({ customerId }: { customerId: string }) => {
	if (!customerId || customerId === "") {
		return <p>No customer ID provided</p>;
	}

	let customerObject;

	try {
		customerObject = await stripe.customers.retrieve(customerId);
	} catch (error) {
		return <p>Failed to retrieve customer information.</p>;
	}

	// This should never happen because we create a new customer on login. But it makes it type safe!
	if (customerObject.deleted) {
		return <p>Customer has been deleted</p>;
	}

	const address = customerObject.address;
	const fullAddress = address
		? `${address.line1}${address.line2 ? ` , ${address.line2}` : ""}, ${address.city}, ${address.state}, ${address.postal_code}, ${address.country}`
		: undefined;

	return (
		<Collapsible>
			<div className="flex flex-col rounded-xl border-[#ffffff11] border-[1px] bg-[#ffffff09] shadow-sm">
				<CollapsibleTrigger asChild>
					<div className="group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left">
						<div className="flex flex-col gap-2">
							<h2 className="font-extrabold text-2xl">Account Information</h2>
							{!fullAddress || !customerObject.phone ? (
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
							<StripePortal customerId={customerId} />
							<div className="rounded-full p-2 transition group-hover:bg-[#ffffff11]">
								<CaretSortIcon className="h-6 w-6" />
								<span className="sr-only">Toggle</span>
							</div>
						</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className="flex flex-col gap-4 overflow-hidden p-6 pt-0">
						{/* <p>Customer ID: {customerObject.id}</p> */}
						<InfoRow label="Name" value={customerObject.name || "N/A"} />
						<InfoRow label="Email" locked value={customerObject.email || "N/A"} />
						<InfoRow
							label="Phone Number"
							value={formatPhoneNumber(customerObject.phone || "") || null}
							error={customerObject.phone ? undefined : "A phone number is required"}
						/>
						<InfoRow label="Address" value={fullAddress || null} error={fullAddress ? undefined : "An address is required"} />
					</div>
				</CollapsibleContent>
			</div>
		</Collapsible>
	);
};

export default UserInformation;
