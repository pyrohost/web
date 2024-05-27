import { User } from "@prisma/client";

import { CaretSortIcon } from "@radix-ui/react-icons";

import { PyroButton } from "@/components/ui/PyroButton";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/primitives/Collapsible";

const AccountConnections = ({ user }: { user: any }) => {
	return (
		<Collapsible>
			<div className="flex flex-col rounded-xl border-[1px] border-[#ffffff11] bg-[#ffffff09] shadow-sm">
				<CollapsibleTrigger asChild>
					<div className="group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left">
						<div className="flex flex-col gap-2">
							<h2 className="text-2xl font-extrabold">Account Connections</h2>
							<div className="flex items-center gap-1 text-sm font-bold text-neutral-500">
								<p>Manage your linked accounts and apps</p>
							</div>
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
					<div className="flex flex-col gap-4 p-6 pt-0">
						<div className="flex flex-row items-center justify-between">
							<div className="flex flex-row items-center gap-4">
								<svg viewBox="0 0 16 16" className="h-4 w-4">
									<path
										fill="currentColor"
										d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
									></path>
								</svg>
								<p>Discord</p>
							</div>
							<div className="text-sm font-bold">
								{user.discordTokens ? (
									<div className="text-green-700">
										<span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
										Connected!
									</div>
								) : (
									// we know it's hardcoded. too bad!
									<PyroButton
										size={"small"}
										href="https://discord.com/oauth2/authorize?client_id=1107058928061263942&response_type=code&redirect_uri=https%3A%2F%2Fpyro.host%2Fapi%2Fdiscord%2Flinked-role%2Fcallback&scope=role_connections.write+identify+email"
									>
										Link Discord
									</PyroButton>
								)}
							</div>
						</div>
					</div>
				</CollapsibleContent>
			</div>
		</Collapsible>
	);
};

export default AccountConnections;
