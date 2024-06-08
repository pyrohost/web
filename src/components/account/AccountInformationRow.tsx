"use client";

import type { User } from "@prisma/client";

import { LockClosedIcon, InfoCircledIcon } from "@radix-ui/react-icons";

import EditForm from "@/components/account/EditForm";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/primitives/Tooltip";

const AccountInformationRow = ({
	tooltip,
	label,
	required,
	locked,
	hidden,
	value,
	error,
	user,
}: {
	tooltip?: string;
	label: string;
	required?: boolean;
	locked?: boolean;
	hidden?: boolean;
	value?: string | null;
	error?: string;
	user: User;
}) => {
	return (
		<TooltipProvider>
			<div className="flex flex-col truncate text-wrap break-words">
				<div aria-level={1} aria-label={label} role="heading" className="flex flex-row items-center gap-2 font-bold text-sm">
					<p>{label}</p>
					{locked && (
						<Tooltip delayDuration={0}>
							<TooltipTrigger>
								<LockClosedIcon className="w-5 h-5" />
							</TooltipTrigger>

							<TooltipContent>
								<p>{label} is locked and cannot be edited. If you need to make changes, please contact support.</p>
							</TooltipContent>
						</Tooltip>
					)}
					{tooltip && (
						<Tooltip delayDuration={0}>
							<TooltipTrigger>
								<InfoCircledIcon className="w-5 h-5" />
							</TooltipTrigger>

							<TooltipContent className="max-w-[50ch]">
								<p>{tooltip}</p>
							</TooltipContent>
						</Tooltip>
					)}

					{locked ? null : <EditForm label={label} user={user} required={required} />}
					{required && null}
				</div>
				<div className="flex flex-row items-center gap-2">
					{error && <div className="max-h-2 min-h-2 min-w-2 max-w-2 animate-pulse rounded-full bg-red-500" />}
					{hidden ? (
						<>
							<span className="font-bold text-neutral-400 text-sm">Hidden</span>
						</>
					) : (
						<>{value}</>
					)}
					{error && <span className="font-bold text-red-500 text-sm">{error}</span>}
				</div>
			</div>
		</TooltipProvider>
	);
};

export default AccountInformationRow;
