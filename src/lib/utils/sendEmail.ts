import type Email from "@/emails/Email";
import { createTransport } from "nodemailer";

const server = {
	host: process.env.SMTP_HOST!,
	port: Number.parseInt(process.env.SMTP_PORT!),
	auth: {
		user: process.env.SMTP_USER!,
		pass: process.env.SMTP_PASS!,
	},
};

export async function sendEmail(to: string, email: Email) {
	const transporter = createTransport(server);

	return transporter.sendMail({
		from: {
			name: process.env.SMTP_FROM_NAME!,
			address: process.env.SMTP_FROM_EMAIL!,
		},
		sender: {
			name: process.env.SMTP_FROM_NAME!,
			address: process.env.SMTP_FROM_EMAIL!,
		},
		to,
		priority: "high",
		subject: email.subject,
		html: email.html,
		text: email.fallback,
	});
}
