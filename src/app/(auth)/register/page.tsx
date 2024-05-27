import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { register } from '@/actions/auth';

import OauthLogIn from '@/components/auth/OauthLogInForm';
import RegisterForm from '@/components/auth/RegisterForm';
import LogoColored from '@/components/icons/LogoColored';

import { getUserBySession } from '@/lib/api/user';

export const metadata: Metadata = {
    title: 'Pyro - Sign Up',
};

export default async function Page() {
    const user = await getUserBySession();
    if (user) {
        return redirect('/account');
    }

    return (
        <div className='relative m-auto flex w-full max-w-[400px] flex-col gap-4 rounded-xl border-[1px] border-[#ffffff15] bg-[#ffffff14] p-8 shadow-sm'>
            <div className=''>
                <LogoColored />
            </div>
            <h2 className='text-xl font-extrabold'>Sign Up</h2>
            <div className='mb-4 text-sm'>
                Already have an account?{' '}
                <Link className='text-brand' href='/login'>
                    Login
                </Link>
            </div>
            <OauthLogIn />
            <RegisterForm />
        </div>
    );
}
