"use client";

import { useEffect, useState, useTransition } from "react";

import { resetPassword } from "@/actions/user";

import { PyroButton } from "@/components/ui/PyroButton";
import Link from "next/link";

const ResetPasswordForm = ({
	resetCode,
}: {
	resetCode: string;
}) => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		if (isPending) return;
	}, [isPending]);

	const formAction = async (data: FormData) => {
		startTransition(async () => {
			const { success, error } = await resetPassword(data);
			setError(error);
			setSuccess(success);
		});
	};

	return (
		<>
			<form action={formAction}>
				<div className="flex flex-col gap-2">
					<label className="text-[#ffffff77] text-sm" htmlFor="code">
						Reset Code
					</label>
					<input
						id="code"
						name="code"
						value={resetCode}
						aria-disabled
						readOnly
						className="rounded-lg bg-[#ffffff17] px-4 py-2 text-[#ffffff55] text-sm outline-none"
						type="text"
					/>

					<label className="text-[#ffffff77] text-sm" htmlFor="existingEmail">
						Email
					</label>
					<input className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none" id="existingEmail" name="existingEmail" type="email" />

					<label className="text-[#ffffff77] text-sm" htmlFor="newPassword">
						New Password
					</label>
					<input className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none" id="newPassword" name="newPassword" type="password" />

					<label className="text-[#ffffff77] text-sm" htmlFor="confirmPassword">
						Confirm Password
					</label>
					<input className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none" id="confirmPassword" name="confirmPassword" type="password" />
				</div>
				<div id="turnstile-widget" className="[&>iframe]:!w-full mt-4 flex w-full items-center justify-center" />
				<div className="mt-6">
					<PyroButton className="w-full" type="submit" size="medium" variant="primary" isPending={isPending}>
						Reset Password
					</PyroButton>
				</div>
				<Link className="mt-4 flex w-full justify-center text-center font-bold text-brand text-sm" href="/reset-password">
					Request a new code
				</Link>
				{error && (
					<p role="alert" className="mx-auto mt-4 font-bold text-red-500 text-sm">
						{error}
					</p>
				)}
				{success && (
					<p role="alert" className="mx-auto mt-4 font-bold text-green-500 text-sm">
						{success}
					</p>
				)}
			</form>
		</>
	);
};

export default ResetPasswordForm;
