"use client";

import { verifyEmail } from "@/actions/auth";
import type { User } from "lucia";
import { useState } from "react";

const VerifyEmailForm = ({ verifyCode, user }: { verifyCode?: string; user: User }) => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | boolean | undefined>("");

	const formAction = async (data: FormData) => {
		const { success, error } = await verifyEmail(data, user);
		setError(error);
		setSuccess(success);
	};

	return (
		<>
			<form action={formAction}>
				<div className="flex flex-col gap-2">
					{verifyCode && "Simply click verify to confirm your email address."}
					<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="code">
						Verification Code
					</label>
					{verifyCode ? (
						<input
							aria-disabled
							readOnly
							value={verifyCode}
							className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none"
							id="code"
							name="code"
							type="text"
						/>
					) : (
						<input className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none" id="code" name="code" type="text" />
					)}
				</div>
				<div className="mt-6">
					<button className="relative mt-4 w-full rounded-full border-0 bg-brand py-2 font-bold text-sm capitalize outline-none ring-0" type="submit">
						Verify
					</button>
				</div>
				{error && <div className="text-red-500">{error}</div>}
				{success && <div className="text-green-500">{success}</div>}
			</form>
		</>
	);
};

export default VerifyEmailForm;
