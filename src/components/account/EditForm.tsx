"use client";

import type { User } from "@prisma/client";

import { useRouter } from "next/navigation";

import { useEffect, useState, useTransition } from "react";

import { editAddress, editName, editPhoneNumber, editPassword } from "@/actions/user";

import { PencilIcon } from "@/components/ui/Icons";
import {
	Credenza,
	CredenzaBody,
	CredenzaClose,
	CredenzaContent,
	CredenzaDescription,
	CredenzaFooter,
	CredenzaHeader,
	CredenzaTitle,
	CredenzaTrigger,
} from "@/components/ui/primitives/Credenza";
import { PyroButton } from "@/components/ui/PyroButton";
import { toast } from "sonner";

const EditForm = ({ label, user }: { label: string; user: User }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [firstNameState, setFirstNameState] = useState<string | null>(user.firstName);
	const [lastNameState, setLastNameState] = useState<string | null>(user.lastName);

	const [street1State, setStreet1State] = useState<string | null>("");
	const [street2State, setStreet2State] = useState<string | null>("");
	const [cityState, setCityState] = useState<string | null>("");
	const [stateState, setStateState] = useState<string | null>("");
	const [zipState, setZipState] = useState<string | null>("");
	const [countryState, setCountryState] = useState<string | null>("");

	const [phoneState, setPhoneState] = useState<string | null>("");

	useEffect(() => {
		if (isPending) return;

		router.refresh();
	}, [isPending, router]);

	const fullNameAction = async (data: FormData): Promise<void> => {
		try {
			startTransition(async () => {
				const name = await editName(data, user);
				toast.success("Successfully updated your name!");
			});
		} catch (error) {
			console.error(error);
			router.refresh();
			toast.error("We couldn't update your name. Please try again.");
		}
	};

	const phoneAction = async (data: FormData): Promise<void> => {
		try {
			startTransition(async () => {
				const phone = await editPhoneNumber(data, user);
				toast.success("Successfully updated your phone number!");
			});
		} catch (error) {
			console.error(error);
			router.refresh();
			toast.error("We couldn't update your phone number. Please try again.");
		}
	};

	const addressAction = async (data: FormData): Promise<void> => {
		try {
			startTransition(async () => {
				const address = editAddress(data, user);
				toast.success("Successfully updated your address!");
			});
		} catch (error) {
			console.error(error);
			router.refresh();
			toast.error("We couldn't update your address. Please try again.");
		}
	};

	const passwordAction = async (data: FormData): Promise<void> => {
		try {
			startTransition(async () => {
				const password = await editPassword(data, user);
			});
		} catch (error) {
			console.error(error);
			router.refresh();
		}
	};

	return (
		<Credenza>
			<CredenzaTrigger asChild>
				<button type="button" className="flex h-5 w-5">
					<PencilIcon />
				</button>
			</CredenzaTrigger>

			<CredenzaContent>
				<div className="flex flex-col p-4 text-sm md:p-0">
					<CredenzaHeader>
						<CredenzaTitle className="mb-4 font-extrabold text-xl tracking-tight">Edit {label}</CredenzaTitle>
					</CredenzaHeader>
					{label === "Full Name" && (
						<form className="flex flex-col gap-2" action={fullNameAction}>
							<div className="contents">
								<label className="text-[#ffffff77] text-sm" htmlFor="firstName">
									First Name
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
									value={firstNameState || ""}
									onChange={(e) => setFirstNameState(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="given-name"
								/>
							</div>
							<div className="contents">
								<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="lastName">
									Last Name
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									value={lastNameState || ""}
									onChange={(e) => setLastNameState(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="family-name"
								/>
							</div>
							<PyroButton className="mt-2" type="submit" isPending={isPending}>
								Save
							</PyroButton>
						</form>
					)}

					{label === "Phone Number" && (
						<form className="flex flex-col gap-2" action={phoneAction}>
							<div className="contents">
								<label className="text-[#ffffff77] text-sm" htmlFor="phone">
									Phone Number
								</label>
								<p>Example: +1234567890</p>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="tel"
									id="phone"
									name="phone"
									placeholder="Phone Number"
									value={phoneState || ""}
									onChange={(e) => setPhoneState(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="tel"
								/>
							</div>
							<PyroButton className="mt-2" type="submit" isPending={isPending}>
								Save
							</PyroButton>
						</form>
					)}

					{label === "Address" && (
						<form className="flex flex-col gap-2" action={addressAction}>
							<div className="contents">
								<label className="text-[#ffffff77] text-sm" htmlFor="street1">
									Street Address 1
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="street1"
									name="street1"
									placeholder="Street Address 1"
									value={street1State || ""}
									onChange={(e) => setStreet1State(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="street-address"
								/>
							</div>
							<div className="contents">
								<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="street2">
									Street Address 2
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="street2"
									name="street2"
									placeholder="Street Address 2"
									value={street2State || ""}
									onChange={(e) => setStreet2State(e.target.value)}
									enterKeyHint="next"
									autoComplete=""
								/>
							</div>
							<div className="contents">
								<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="city">
									City
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="city"
									name="city"
									placeholder="City"
									value={cityState || ""}
									onChange={(e) => setCityState(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="address-level2"
								/>
							</div>
							<div className="contents">
								<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="state">
									State
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="state"
									name="state"
									placeholder="State"
									value={stateState || ""}
									onChange={(e) => setStateState(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="address-level1"
								/>
							</div>
							<div className="contents">
								<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="postal">
									Zip Code
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="postal"
									name="postal"
									placeholder="Zip Code"
									value={zipState || ""}
									onChange={(e) => setZipState(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="postal-code"
								/>
							</div>
							<div className="contents">
								<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="country">
									Country
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="text"
									id="country"
									name="country"
									placeholder="Country"
									value={countryState || ""}
									onChange={(e) => setCountryState(e.target.value)}
									enterKeyHint="next"
									required
									autoComplete="country-name"
								/>
							</div>
							<PyroButton className="mt-2" type="submit" isPending={isPending}>
								Save
							</PyroButton>
						</form>
					)}

					{label === "Password" && (
						<form className="flex flex-col gap-2" action={passwordAction}>
							<div className="contents">
								<label className="text-[#ffffff77] text-sm" htmlFor="newPassword">
									New Password
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="password"
									id="newPassword"
									name="newPassword"
									placeholder="Password"
									required
									autoComplete="new-password"
								/>
							</div>
							<div className="contents">
								<label className="mt-2 text-[#ffffff77] text-sm" htmlFor="confirmPassword">
									Confirm Password
								</label>
								<input
									className="rounded-2xl bg-[#ffffff17] px-4 py-2 text-sm shadow-md outline-none"
									type="password"
									id="confirmPassword"
									name="confirmPassword"
									placeholder="Confirm Password"
									required
									autoComplete="new-password"
								/>
							</div>
							<PyroButton className="mt-2" type="submit" isPending={isPending}>
								Save New Password
							</PyroButton>
						</form>
					)}
				</div>
			</CredenzaContent>
		</Credenza>
	);
};

export default EditForm;
