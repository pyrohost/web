"use server";

import { VerificationEmail } from "@/emails/VerificationEmail";
import { hash, verify } from "@node-rs/argon2";
import { User } from "lucia";

import { redirect } from "next/navigation";

import lucia from "@/lib/api/auth";
import prisma from "@/lib/api/prisma";
import userAPI from "@/lib/api/user";
import { isValidEmail } from "@/lib/utils/auth";
import { sendEmail } from "@/lib/utils/sendEmail";
import sessionAPI from "@/lib/api/session";

interface ActionResult {
	error: string;
}

// Common validation logic
const validateInput = (
	email: string,
	password: string,
): ActionResult | null => {
	if (!email || !password) {
		return { error: "Please fill out all fields" };
	}
	if (!isValidEmail(email)) {
		return { error: "Invalid email" };
	}
	return null;
};

// Common session creation and cookie setting logic

// Hashing parameters
const HASHING_OPTIONS = {
	memoryCost: 19456,
	timeCost: 2,
	outputLen: 32,
	parallelism: 1,
};

export const register = async (formData: FormData): Promise<ActionResult> => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const validationResult = validateInput(email, password);
	if (validationResult) return validationResult;

	const passwordHash = await hash(password, HASHING_OPTIONS);

	const existingUser = await prisma.user.findUnique({ where: { email } });
	if (existingUser) return { error: "Invalid email or password" };

	const user = await userAPI.createUser(email, passwordHash);
	const code = await userAPI.generateEmailVerificationCode(user.id, email);
	await sendEmail(email, VerificationEmail(code));

	await sessionAPI.createAndSetSession(user.id);
	return redirect("/account");
};

export const login = async (formData: FormData): Promise<ActionResult> => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const validationResult = validateInput(email, password);
	if (validationResult) return validationResult;

	const user = await prisma.user.findUnique({ where: { email } });
	if (!user) return { error: "Invalid email or password" };

	// todo: handle oauth
	if (!user.passwordHash) return { error: "Invalid email or password" };

	const validPassword = await verify(
		user.passwordHash,
		password,
		HASHING_OPTIONS,
	);
	if (!validPassword) return { error: "Invalid email or password" };

	await sessionAPI.createAndSetSession(user.id);

	return redirect("/account");
};

export const verifyEmail = async (
	formData: FormData,
	user: User,
): Promise<ActionResult> => {
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
