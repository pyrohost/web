"use client";

import { useEffect, useState, useTransition } from "react";

import { importProductsFromStripe } from "@/actions/admin";

import { PyroButton } from "@/components/ui/PyroButton";

const ImportProductsForm = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		if (isPending) return;
	}, [isPending]);

	const formAction = async (data: FormData) => {
		startTransition(async () => {
			const { success, error } = await importProductsFromStripe();
			setError(error);
			setSuccess(success);
		});
	};

	return (
		<form action={formAction}>
			<PyroButton className="w-full" type="submit" size="medium" variant="primary" isPending={isPending}>
				Import Products
			</PyroButton>
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
	);
};

export default ImportProductsForm;
