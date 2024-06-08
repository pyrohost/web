"use server";

import { Address, type User } from "@prisma/client";

import userAPI from "@/lib/api/user";
import { hash, verify } from "@node-rs/argon2";
import { HASHING_OPTIONS } from "@/lib/static/auth";
import { redirect } from "next/navigation";

interface ActionResult {
	success?: string;
	error?: string;
}

export const editName = (formData: FormData, user: User) => {
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;

	if (!firstName || !lastName) {
		throw new Error("You must provide a first and last name.");
	}

	user.firstName = firstName;
	user.lastName = lastName;

	return userAPI.updateUser(user);
};

export const editPreferredName = (formData: FormData, user: User) => {
	const preferredName = formData.get("preferredName") as string;

	user.preferredName = preferredName;

	return userAPI.updateUser(user);
};

export const editEmail = async (formData: FormData, user: User) => {
	const email = formData.get("email") as string;

	if (!email) {
		throw new Error("You must provide an email address.");
	}

	user.email = email;

	return userAPI.updateUser(user);
};

export const editAddress = async (formData: FormData, user: User) => {
	const street1 = formData.get("street1") as string;
	const street2 = formData.get("street2") as string;
	const city = formData.get("city") as string;
	const state = formData.get("state") as string;
	const postal = formData.get("postal") as string;
	const country = formData.get("country") as string;

	if (!street1 || !city || !state || !postal || !country) {
		throw new Error("You must provide a street address, city, state, postal code, and country.");
	}

	const address = {
		street1,
		street2,
		city,
		state,
		postal,
		country,
	};

	return userAPI.setUserAddress(user, address);
};

export const editPhoneNumber = async (formData: FormData, user: User): Promise<ActionResult> => {
	const phone = formData.get("phone") as string;

	if (!phone) {
		return { error: "You must provide a phone number." };
	}

	const phone_number_regex = /^\+[1-9]\d{1,14}$/;
	if (!phone_number_regex.test(phone)) {
		return { error: "You must provide a valid phone number. Example: +1234567890" };
	}

	user.phone = phone;

	await userAPI.updateUser(user);

	return { success: "Phone number updated" };
};

export const editPassword = async (formData: FormData, user: User) => {
	const newPassword = formData.get("newPassword") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (!newPassword || !confirmPassword) {
		throw new Error("You must provide a new password and confirm it.");
	}

	if (newPassword !== confirmPassword) {
		throw new Error("Passwords do not match.");
	}

	const passwordHash = await hash(newPassword, HASHING_OPTIONS);
	return userAPI.setUserPassword(user, passwordHash);
};

export const resetPassword = async (formData: FormData): Promise<ActionResult> => {
	const code = formData.get("code") as string;
	const existingEmail = formData.get("existingEmail") as string;
	const newPassword = formData.get("newPassword") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (!code || !newPassword || !confirmPassword || !existingEmail) {
		return { error: "Please fill out all fields" };
	}

	if (newPassword !== confirmPassword) {
		return { error: "Passwords do not match" };
	}

	const user = await userAPI.getUserByEmail(existingEmail);
	if (!user || existingEmail !== user.email) {
		return { error: "Invalid email" };
	}

	if (!user.emailVerified) {
		return { error: "Email must be verified" };
	}

	const passwordHash = await hash(newPassword, HASHING_OPTIONS);
	try {
		await userAPI.resetPassword(user, passwordHash, code);
	} catch (error) {
		return { error: "Something went wrong." };
	}

	return redirect("/login?c=password_reset");
};
