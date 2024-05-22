import Link from 'next/link';
import { Suspense } from 'react';

import AuthErrors from '@/components/auth/AuthErrors';

const Page = async () => {
    return (
        <div
            className='flex h-full w-full items-center justify-center rounded-md'
            style={{
                background: 'radial-gradient(124.75% 124.75% at 50.01% -10.55%, rgb(18, 18, 18) 0%, rgb(0, 0, 0) 100%)',
            }}
        >
            <div className='w-full max-w-lg'>
                <div className='mx-auto mb-5 flex h-12 w-fit'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/pyropay.svg' alt='pyropay logo' />
                </div>
                <Suspense>
                    <AuthErrors />
                </Suspense>
                <div className='text-center'>
                    <Link
                        href='/auth/login'
                        className='rounded-full border-0 bg-brand px-12 py-2 text-sm font-bold capitalize outline-none ring-0'
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
