import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import EmailLogIn from "@/components/auth/EmailLogInForm";
import OauthLogIn from "@/components/auth/OauthLogInForm";
import LogoColored from "@/components/icons/LogoColored";

import { getUserBySession } from "@/lib/api/user";

export const metadata: Metadata = {
	title: "Pyro - Login",
};

const Page = async () => {
	const user = await getUserBySession();
	if (user) {
		return redirect("/account");
	}

	return (
		<div className="relative m-auto flex w-full max-w-[400px] flex-col gap-4 rounded-xl border-[1px] border-[#ffffff15] bg-[#ffffff14] p-8 shadow-sm">
			<div className="">
				<LogoColored />
			</div>

			<h2 className="text-xl font-extrabold">Login</h2>
			<div className="mb-2 text-sm">
				New to Pyro?{" "}
				<Link className="text-brand" href="/register">
					Sign up
				</Link>
			</div>
			<OauthLogIn />
			<EmailLogIn />
		</div>
	);
};

export default Page;
