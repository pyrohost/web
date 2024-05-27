"use client";

import { User } from "@prisma/client";

import { LockClosedIcon } from "@radix-ui/react-icons";

import EditForm from "@/components/account/EditForm";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/primitives/Tooltip";

const AccountInformationRow = ({
	label,
	required,
	locked,
	value,
	error,
	user,
}: {
	label: string;
	required?: boolean;
	locked?: boolean;
	value: string | null;
	error?: string;
	user: User;
}) => {
	return (
		<TooltipProvider>
			<div className="flex flex-col truncate text-wrap break-words">
				<div
					aria-level={1}
					aria-label={label}
					role="heading"
					className="flex flex-row items-center gap-2 text-sm font-bold"
				>
					<p>{label}</p>
					{locked && (
						<Tooltip delayDuration={0}>
							<TooltipTrigger>
								<LockClosedIcon />
							</TooltipTrigger>

							<TooltipContent>
								<p>
									{label} is locked and cannot be edited. If you need to make
									changes, please contact support.
								</p>
							</TooltipContent>
						</Tooltip>
					)}
					{locked ? null : <EditForm label={label} user={user} />}
					{required && null}
				</div>
				<div className="flex flex-row items-center gap-2">
					{error && (
						<div className="max-h-2 min-h-2 min-w-2 max-w-2 animate-pulse rounded-full bg-red-500"></div>
					)}
					{value}{" "}
					{error && (
						<span className="text-sm font-bold text-red-500">{error}</span>
					)}
				</div>
			</div>
		</TooltipProvider>
	);
};

export default AccountInformationRow;
