import Image from 'next/image';
import { redirect } from 'next/navigation';

import EmailLogIn from '@/components/auth/EmailLogIn';
import LogInErrors from '@/components/auth/LogInErrors';
import OauthLogIn from '@/components/auth/OauthLogIn';

import { auth } from '@/lib/auth';

const Page = async () => {
    const session = await auth();
    if (session) {
        return redirect('/');
    }

    return (
        <div className='relative m-auto flex w-full max-w-[400px] flex-col gap-4 p-4'>
            <LogInErrors />
            <div className='flex w-full flex-row items-center justify-center'>
                <Image src='/logo.svg' alt='Pyro Logo' width={64} height={64} />
                <span className='ml-2 text-2xl font-bold'>Login</span>
            </div>
            <span className='border-subtext m-auto grow border-[1px] border-solid opacity-10'></span>
            <OauthLogIn />
            <span className='flex w-full select-none justify-center gap-2 text-center opacity-75'>
                <span className='border-subtext m-auto grow border-[1px] border-solid opacity-10'></span>
                <span className='px-4 text-xs font-bold'>or</span>
                <span className='border-subtext m-auto grow border-[1px] border-solid opacity-10'></span>
            </span>
            <EmailLogIn />
        </div>
    );
};

export default Page;
