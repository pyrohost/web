// steps:
// user goes to this page, enters their email, and clicks submit
// the server sends an email with a verification code, notably this SHOULD error if their email is not verified
// user enters the code on the page with their email
// the server verifies the code and allows the user to set a new password
// user is redirected to the login page

import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import ResetPasswordNoCode from "@/components/auth/ResetPasswordNoCode";
import LogoColored from "@/components/icons/LogoColored";
import Script from "next/script";

const Page = async ({
	searchParams,
}: {
	searchParams: { code: string };
}) => {
	const resetCode = searchParams.code;

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

				<h2 className="font-extrabold text-xl">Reset Password</h2>
				{resetCode ? <ResetPasswordForm resetCode={resetCode} /> : <ResetPasswordNoCode />}
			</div>
		</>
	);
};

export default Page;
