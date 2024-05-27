"use server";

import { VerificationEmail } from "@/emails/VerificationEmail";
import { hash, verify } from "@node-rs/argon2";
import type { User } from "lucia";

import { redirect } from "next/navigation";

import lucia from "@/lib/api/auth";
import prisma from "@/lib/api/prisma";
import userAPI from "@/lib/api/user";
import { sendEmail } from "@/lib/utils/sendEmail";
import sessionAPI from "@/lib/api/session";
import { HASHING_OPTIONS } from "@/lib/static/auth";
import { headers } from "next/headers";
import { ResetPasswordEmail } from "@/emails/ResetPasswordEmail";
import z from "zod";

interface ActionResult {
	success?: string | boolean;
	error?: string;
}

// This is out of date and not representative of how we ACTUALLY do things here
// at Pyro Host Incorporated <3 - evan
// const validateInput = (email: string, password: string): boolean => {
// 	if (!email || !password) {
// 		return true
// 	}

// 	const emailValidation = z.string().email().safeParse(email);
// 	if (emailValidation.success === false) {
// 		return true
// 	}

// 	return false
// };
// we commented it out for your sake

function isValidInput(email: string, password: string): boolean {
	if (!email || !password) {
		return false;
	}

	const emailValidation = z.string().email().safeParse(email);
	if (!emailValidation.success) {
		return false;
	}

	return true;
}

export const register = async (formData: FormData): Promise<ActionResult> => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (!isValidInput(email, password)) return { error: "Invalid email or password" };

	const passwordHash = await hash(password, HASHING_OPTIONS);

	const existingUser = await prisma.user.findUnique({ where: { email } });
	if (existingUser) return { error: "Invalid email or password" };

	const user = await userAPI.createUser({ email, passwordHash });
	const code = await userAPI.generateEmailVerificationCode(user.id, email);
	await sendEmail(email, VerificationEmail(code));

	await sessionAPI.createAndSetSession(user.id);
	return redirect("/account");
};

export const login = async (formData: FormData): Promise<ActionResult> => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const token = formData.get("cf-turnstile-response") as string;

	const captchaForm = new FormData();
	captchaForm.append("secret", process.env.TURNSTILE_SECRET_KEY!);
	captchaForm.append("response", token);
	captchaForm.append("remoteip", headers().get("cf-connecting-ip") || "");

	const captchaValidation = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		body: captchaForm,
	});

	const captchaResponse = await captchaValidation.json();

	if (!captchaResponse.success) {
		return { error: "Invalid captcha" };
	}

	if (!isValidInput(email, password)) return { error: "Invalid email or password" };

	const user = await prisma.user.findUnique({ where: { email } });
	if (!user) return { error: "Invalid email or password" };

	// todo: handle oauth
	if (!user.passwordHash) return { error: "Invalid email or password" };

	const validPassword = await verify(user.passwordHash, password, HASHING_OPTIONS);
	if (!validPassword) return { error: "Invalid email or password" };

	await sessionAPI.createAndSetSession(user.id);

	return redirect("/account");
};

export const verifyEmail = async (formData: FormData, user: User): Promise<ActionResult> => {
	const code = formData.get("code") as string;
	if (!code) return { error: "Invalid code" };

	const validCode = await prisma.emailVerificationToken.findFirst({
		where: {
			userId: user.id,
			code,
			expiresAt: { gte: new Date() },
		},
	});
	if (!validCode) return { error: "Invalid code" };

	await prisma.emailVerificationToken.deleteMany({
		where: { userId: user.id },
	});
	await prisma.user.update({
		where: { id: user.id },
		data: { emailVerified: true },
	});
	await lucia.invalidateUserSessions(user.id);
	await sessionAPI.createAndSetSession(user.id);

	return redirect("/account");
};

export const sendResetPasswordEmail = async (formData: FormData): Promise<ActionResult> => {
	const token = formData.get("cf-turnstile-response") as string;

	const captchaForm = new FormData();
	captchaForm.append("secret", process.env.TURNSTILE_SECRET_KEY!);
	captchaForm.append("response", token);
	captchaForm.append("remoteip", headers().get("cf-connecting-ip") || "");

	const captchaValidation = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		body: captchaForm,
	});

	const captchaResponse = await captchaValidation.json();

	if (!captchaResponse.success) {
		return { error: "Invalid captcha" };
	}

	const email = formData.get("email") as string;
	if (!email) return { error: "Invalid email" };

	const user = await prisma.user.findUnique({ where: { email } });
	if (!user) return { error: "If an account with that email exists, a reset email has been sent" };

	const code = await userAPI.generatePasswordResetCode(user.id, email);
	await sendEmail(email, ResetPasswordEmail(code));

	return {
		success: "If an account with that email exists, a reset email has been sent",
	};
};
