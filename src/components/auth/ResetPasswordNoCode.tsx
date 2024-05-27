"use client";

import { useEffect, useState, useTransition } from "react";

import { sendResetPasswordEmail } from "@/actions/auth";

import { PyroButton } from "@/components/ui/PyroButton";

const ResetPasswordNoCode = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | boolean | undefined>("");
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		if (isPending) return;
	}, [isPending]);

	const formAction = async (data: FormData) => {
		startTransition(async () => {
			const { success, error } = await sendResetPasswordEmail(data);
			setError(error);
			setSuccess(success);
		});
	};

	return (
		<>
			<form action={formAction}>
				<div className="flex flex-col gap-2">
					<label className="text-[#ffffff77] text-sm" htmlFor="email">
						Email
					</label>
					<input className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none" id="email" name="email" type="email" />
				</div>
				<div id="turnstile-widget" className="[&>iframe]:!w-full mt-4 flex w-full items-center justify-center" />
				<div className="mt-6">
					<PyroButton className="w-full" type="submit" size="medium" variant="primary" isPending={isPending}>
						Send Reset Email
					</PyroButton>
				</div>
				{error && (
					<p role="alert" className="mx-auto mt-4 font-bold text-green-500 text-sm">
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

export default ResetPasswordNoCode;
