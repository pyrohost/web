import type Email from "@/emails/Email";

export const VerificationEmail = (code: string): Email => {
	return {
		subject: "Verify your Pyro account",
		html: undefined,
		fallback: `Your verification code is ${code}. Go to https://pyro.host/verify-email?code=${code} to verify your account. It will expire in 15 minutes. If you didn't request this, you can safely ignore this email.`,
	};
};
