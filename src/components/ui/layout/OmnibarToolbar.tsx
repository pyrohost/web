import Link from "next/link";

import { MixIcon } from "@radix-ui/react-icons";

import { PyroButton } from "@/components/ui/PyroButton";

import { getUserBySession } from "@/lib/api/user";
import { Tooltip, TooltipContent, TooltipTrigger } from "../primitives/Tooltip";

const HeaderLoginButton = async () => {
	const sessionUser = await getUserBySession();

	return (
		<div className="pointer-events-auto ml-auto select-none">
			{sessionUser ? (
				<div className="flex items-center gap-4">
					{sessionUser.admin && (
						<Link
							href="/admin"
							className="flex h-fit shrink-0 flex-row items-center justify-center rounded-full p-2 font-bold text-sm transition hover:bg-[#ffffff22]"
						>
							<MixIcon className="h-6 w-6" />
						</Link>
					)}
					<Tooltip delayDuration={0}>
						<TooltipTrigger>
							<Link
								href="/account"
								aria-label="Account page"
								className="relative flex shrink-0 flex-row items-center justify-center rounded-full p-2 transition hover:bg-[#ffffff22]"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute inset-0 flex p-4">
									<path
										fillRule="evenodd"
										d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
										clipRule="evenodd"
									/>
								</svg>

								<img
									alt=""
									src={`https://source.boringavatars.com/marble/120/${sessionUser.id}?colors=f06d61,da825f,c4975c,a8ab7b,8cbf99`}
									width={30}
									height={30}
									className="min-sh-8 flex min-w-8 shrink-0 rounded-full"
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent className="font-bold">Account</TooltipContent>
					</Tooltip>
				</div>
			) : (
				<PyroButton size={"small"} variant={"tertiary"} href="/login">
					Login
				</PyroButton>
			)}
		</div>
	);
};

export default HeaderLoginButton;
