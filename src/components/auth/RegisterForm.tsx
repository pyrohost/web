'use client';

import { useEffect, useState, useTransition } from 'react';

import { register } from '@/actions/auth';

import { PyroButton } from '@/components/ui/PyroButton';

const RegisterForm = () => {
    const [error, setError] = useState('');
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (isPending) return;
    }, [isPending]);

    const formAction = async (data: FormData) => {
        startTransition(async () => {
            const { error } = await register(data);
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
                    <PyroButton className='w-full' type='submit' size='medium' variant='primary' isPending={isPending}>
                        Sign Up
                    </PyroButton>
                </div>
                {error && (
                    <p role='alert' className='mx-auto mt-4 text-sm font-bold text-red-500'>
                        {error}
                    </p>
                )}
            </form>
        </>
    );
};

export default RegisterForm;
