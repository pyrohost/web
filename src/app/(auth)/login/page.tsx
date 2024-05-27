import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import EmailLogIn from "@/components/auth/EmailLogInForm";
import OauthLogIn from "@/components/auth/OauthLogInForm";
import LogoColored from "@/components/icons/LogoColored";

import { getUserBySession } from "@/lib/api/user";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Pyro - Login",
};

const Page = async () => {
	const user = await getUserBySession();
	if (user) {
		return redirect("/account");
	}

	return (
		<>
			<Script id="cf-turnstile-callback">
				{`window.onloadTurnstileCallback = function () {
          window.turnstile.render('#turnstile-widget', {
            sitekey: '${process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}',
          })
        }`}
			</Script>
			<Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" async={true} defer={true} />
			<div className="relative m-auto flex w-full max-w-[400px] flex-col gap-4 rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] p-8 shadow-sm">
				<div className="">
					<LogoColored />
				</div>

				<h2 className="font-extrabold text-xl">Login</h2>
				<div className="mb-2 text-sm">
					New to Pyro?{" "}
					<Link className="text-brand" href="/register">
						Sign up
					</Link>
				</div>
				<OauthLogIn />
				<EmailLogIn />
			</div>
		</>
	);
};

export default Page;
