'use client';

import { signIn } from 'next-auth/react';

const EmailLogIn = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            email: { value: string };
        };

        const email = target.email.value;

        if (!email) {
            return;
        }

        await signIn('nodemailer', { email, callbackUrl: '/account' });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-[#ffffff77]' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none'
                        id='email'
                        name='email'
                        type='email'
                    />
                </div>
                <div className='mt-6'>
                    <button
                        className='relative mt-4 w-full rounded-full border-0 bg-brand py-2 text-sm font-bold capitalize outline-none ring-0'
                        type='submit'
                    >
                        Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default EmailLogIn;
