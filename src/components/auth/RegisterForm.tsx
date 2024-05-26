'use client';

import { register } from '@/actions/auth';
import { useState } from 'react';

const RegisterForm = () => {
    const [error, setError] = useState('');

    const formAction = async (data: FormData) => {
        const { error } = await register(data);
        setError(error);
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
                    <button
                        className='relative mt-4 w-full rounded-full border-0 bg-brand py-2 text-sm font-bold capitalize outline-none ring-0'
                        type='submit'
                    >
                        Register
                    </button>
                </div>
                {error && <div className='text-red-500'>{error}</div>}
            </form>
        </>
    );
};

export default RegisterForm;
