import { VerificationEmail } from "@/emails/VerificationEmail";

import { redirect } from "next/navigation";

import userAPI, { getUserBySession } from "@/lib/api/user";
import { sendEmail } from "@/lib/utils/sendEmail";

export async function GET() {
	const user = await getUserBySession();
	if (!user) {
		return redirect("/login");
	}

	if (user.emailVerified) {
		return redirect("/account");
	}

	const code = await userAPI.generateEmailVerificationCode(user.id, user.email);
	await sendEmail(user.email, VerificationEmail(code));

	return redirect("/verify-email");
}
