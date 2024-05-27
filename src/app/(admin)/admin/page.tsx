import { notFound, redirect } from "next/navigation";
import Link from "next/link";

import { ArchiveIcon } from "@radix-ui/react-icons";

import UserAPI, { getUserBySession } from "@/lib/api/user";
import { PyroButton } from "@/components/ui/PyroButton";

const Page = async () => {
	const user = await getUserBySession();
	if (!user || !user.admin) {
		return notFound();
	}

	return (
		<div className="container mx-auto flex flex-col gap-4 lg:py-4">
			<h1 className="font-extrabold text-[max(24px,min(5vw,48px))] leading-[1.09] tracking-tighter">Pyroneers</h1>
			<Link
				className="flex flex-col gap-4 rounded-2xl border-2 border-[#ffffff14] bg-[#ffffff14] p-8 font-bold text-2xl transition hover:bg-[#ffffff24]"
				href="/admin/products"
			>
				<div className="flex flex-row items-center gap-4">
					<ArchiveIcon className="h-8 w-8" />
					Products
				</div>
			</Link>
		</div>
	);
};

export default Page;
