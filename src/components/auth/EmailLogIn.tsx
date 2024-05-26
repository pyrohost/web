'use client';

import clsx from 'clsx';

import { useEffect, useState, useTransition } from 'react';

import { login } from '@/actions/auth';

import LoadingIcon from '@/components/ui/LoadingIcon';

const SubmitButton = ({ isPending }: { isPending: boolean }) => {
    const buttonClasses = clsx(
        'relative mt-2 w-full rounded-full border-0 bg-brand py-2 text-sm font-bold capitalize outline-none ring-0 flex flex-row items-center justify-center gap-4',
        {
            'opacity-40 pointer-events-none': isPending,
        },
    );

    return (
        <button aria-label='Login' className={buttonClasses} type='submit' disabled={isPending}>
            {isPending ? (
                <>
                    <LoadingIcon />
                </>
            ) : (
                'Login'
            )}
        </button>
    );
};

const EmailLogIn = () => {
    const [error, setError] = useState('');
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (isPending) return;
    }, [isPending]);

    const formAction = async (data: FormData) => {
        startTransition(async () => {
            const { error } = await login(data);
            setError(error);
        });
    };

    return (
        <>
            <form action={formAction}>
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

                    <label className='mt-2 text-sm text-[#ffffff77]' htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none'
                        id='password'
                        name='password'
                        type='password'
                    />
                </div>
                <div className='mt-6'>
                    <SubmitButton isPending={isPending} />
                </div>
                {error && <div className='text-red-500'>{error}</div>}
            </form>
        </>
    );
};

export default EmailLogIn;
