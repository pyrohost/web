import type Email from "@/emails/Email";

export const ResetPasswordEmail = (code: string): Email => {
	return {
		subject: "Reset your Pyro password",
		html: undefined,
		fallback: `Go to https://pyro.host/reset-password?code=${code} to reset your password.`,
	};
};
