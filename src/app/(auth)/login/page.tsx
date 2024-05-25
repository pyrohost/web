import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import EmailLogIn from '@/components/auth/EmailLogIn';
import LogoColored from '@/components/ui/layout/LogoColored';

import { getUserBySession } from '@/lib/api/user';

const Page = async () => {
    const user = await getUserBySession();
    if (user) {
        return redirect('/account');
    }

    return (
        <div className='relative m-auto flex w-full max-w-[400px] flex-col gap-4 rounded-xl border-[1px] border-[#ffffff15] bg-[#ffffff14] p-8 shadow-sm'>
            <div className=''>
                <LogoColored />
            </div>

            <h2 className='text-xl font-extrabold'>Login</h2>
            <div className='mb-4 text-sm'>
                New to Pyro?{' '}
                <Link className='text-brand' href='/register'>
                    Sign up
                </Link>
            </div>
            <EmailLogIn />
        </div>
    );
};

export default Page;
