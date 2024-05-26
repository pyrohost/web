import LogoColored from "@/components/ui/layout/LogoColored";
import VerifyEmailForm from "@/components/auth/VerifyEmailForm";
import { getUserBySession } from '@/lib/api/user';
import { redirect } from "next/navigation";


const Page = async () => {
    const user = await getUserBySession();
    if (!user) {
        // if this happens something terrible has gone wrong enog sa
        return redirect('/login');
    }

    return (
        <>
        <div className='relative m-auto flex w-full max-w-[400px] flex-col gap-4 p-8 rounded-xl border-[1px] border-[#ffffff15] bg-[#ffffff14] shadow-sm'>
            <div className=''>
                <LogoColored />
            </div>

            <VerifyEmailForm user={user} />
        </div>
        </>
    );
};

export default Page;
