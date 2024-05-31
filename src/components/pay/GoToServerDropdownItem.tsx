"use client";

import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/primitives/DropdownMenu";

const GoToServerDropdownItem = ({ subscriptionId }: { subscriptionId: string }) => {
	// const router = useRouter();

	// const goToServer = async (subscriptionId: string) => {
	// 	if (server) {
	// 		router.push(`https://panel.pyro.host/server/${server.identifier}`);
	// 	} else {
	// 		console.log(`No server found with external ID ${subscriptionId}.`);
	// 	}
	// };

	// return <DropdownMenuItem onSelect={() => goToServer(subscriptionId)}>Manage Server</DropdownMenuItem>;
	return null
};

export default GoToServerDropdownItem;
