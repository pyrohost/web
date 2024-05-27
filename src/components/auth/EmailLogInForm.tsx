"use client";

import { useEffect, useState, useTransition } from "react";

import { login } from "@/actions/auth";

import { PyroButton } from "@/components/ui/PyroButton";

const EmailLogIn = () => {
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		if (isPending) return;
	}, [isPending]);

	const formAction = async (data: FormData) => {
		startTransition(async () => {
			const { error } = await login(data);
			setError(error);
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

					<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="password">
						Password
					</label>
					<input className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none" id="password" name="password" type="password" />
				</div>
				<div id="turnstile-widget" className="[&>iframe]:!w-full mt-4 flex w-full items-center justify-center" />
				<div className="mt-6">
					<PyroButton className="w-full" type="submit" size="medium" variant="primary" isPending={isPending}>
						Login
					</PyroButton>
				</div>
				{error && (
					<p role="alert" className="mx-auto mt-4 font-bold text-red-500 text-sm">
						{error}
					</p>
				)}
			</form>
		</>
	);
};

export default EmailLogIn;
