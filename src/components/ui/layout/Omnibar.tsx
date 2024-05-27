import AuthedHeader from "@/components/ui/layout/AuthedHeader";
import HeaderLoginButton from "@/components/ui/layout/HeaderLoginButton";
import MarketingHeader from "@/components/ui/layout/MarketingHeader";

import { getUserBySession } from "@/lib/api/user";

const Omnibar = async () => {
	const user = await getUserBySession();

	return (
		<div className="relative flex w-full flex-row">
			{user ? <AuthedHeader /> : <MarketingHeader />}
			<div className="container pointer-events-none absolute -right-4 left-0 flex h-[72px] items-center">
				<HeaderLoginButton />
			</div>
		</div>
	);
};

export default Omnibar;
