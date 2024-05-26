'use client';

import { verifyEmail } from '@/actions/auth';
import { User } from 'lucia';
import { useState } from 'react';

const VerifyEmailForm = ({ user }: { user: User }) => {
    const [error, setError] = useState('');

    const formAction = async (data: FormData) => {
        const { error } = await verifyEmail(data, user);
        setError(error);
    };

    return (
        <>
            <form action={formAction}>
                <div className='flex flex-col gap-2'>
                    <label className='mt-2 text-sm text-[#ffffff77]' htmlFor='code'>
                        Verification Code
                    </label>
                    <input
                        className='rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none'
                        id='code'
                        name='code'
                        type='text'
                    />
                </div>
                <div className='mt-6'>
                    <button
                        className='relative mt-4 w-full rounded-full border-0 bg-brand py-2 text-sm font-bold capitalize outline-none ring-0'
                        type='submit'
                    >
                        Verify
                    </button>
                </div>
                {error && <div className='text-red-500'>{error}</div>}
            </form>
        </>
    );
};

export default VerifyEmailForm;