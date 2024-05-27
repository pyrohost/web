import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { register } from "@/actions/auth";

import OauthLogIn from "@/components/auth/OauthLogInForm";
import RegisterForm from "@/components/auth/RegisterForm";
import LogoColored from "@/components/icons/LogoColored";

import { getUserBySession } from "@/lib/api/user";
import Script from 'next/script';

export const metadata: Metadata = {
	title: "Pyro - Sign Up",
};

export default async function Page() {
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
				<h2 className="font-extrabold text-xl">Sign Up</h2>
				<div className="text-sm">
					Already have an account?{" "}
					<Link className="text-brand" href="/login">
						Login
					</Link>
				</div>
				<OauthLogIn />
				<RegisterForm />
			</div>
		</>
	);
}
