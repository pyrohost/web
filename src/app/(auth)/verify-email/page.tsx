import LogoColored from "@/components/icons/LogoColored";
import VerifyEmailForm from "@/components/auth/VerifyEmailForm";
import { getUserBySession } from "@/lib/api/user";
import { redirect } from "next/navigation";

const Page = async ({
	searchParams,
}: {
	searchParams: { code: string };
}) => {
	const verifyCode = searchParams.code;
	const user = await getUserBySession();
	if (!user) {
		return redirect("/login");
	}

	return (
		<>
			<div className="relative m-auto flex w-full max-w-[400px] flex-col gap-4 rounded-xl border-[#ffffff15] border-[1px] bg-[#ffffff14] p-8 shadow-sm">
				<div className="">
					<LogoColored />
				</div>

				<VerifyEmailForm verifyCode={verifyCode} user={user} />
			</div>
		</>
	);
};

export default Page;
