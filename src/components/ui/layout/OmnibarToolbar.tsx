import Link from "next/link";

import { MixIcon } from "@radix-ui/react-icons";

import { PyroButton } from "@/components/ui/PyroButton";

import { getUserBySession } from "@/lib/api/user";

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
					<Link
						href="/account"
						aria-label="Account page"
						className="flex shrink-0 flex-row items-center justify-center rounded-full p-2 transition hover:bg-[#ffffff22]"
					>
						<img
							alt=""
							src={`https://source.boringavatars.com/marble/120/${sessionUser.id}?colors=f06d61,da825f,c4975c,a8ab7b,8cbf99`}
							width={30}
							height={30}
							className="min-sh-8 flex min-w-8 shrink-0 rounded-full"
						/>
					</Link>
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
