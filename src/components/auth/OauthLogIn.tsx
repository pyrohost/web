'use client';

import { useState } from 'react';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

import LoadingIcon from '@/components/ui/LoadingIcon';

const OauthLogIn = () => {
    const [loggingInProvider, setLoggingInProvider] = useState<string | null>(null);

    const handleSignIn = async (provider: string) => {
        if (loggingInProvider) {
            return;
        }

        setLoggingInProvider(provider);
        await signIn(provider, { callbackUrl: '/account' });

        setTimeout(() => {
            setLoggingInProvider(null);
        }, 10000);
    };

    return (
        <div className='mb-6 flex flex-col gap-2'>
            {['github', 'discord'].map((provider) => (
                <button
                    className='flex max-h-[36px] min-h-[36px] w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#ffffff17] px-4 py-2 text-sm font-bold outline-none transition hover:bg-[#ffffff24] hover:duration-0'
                    key={provider}
                    aria-label={`Sign in with third-party account: ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
                    aria-disabled={loggingInProvider === provider}
                    onClick={() => handleSignIn(provider)}
                >
                    <div className='flex flex-col items-center justify-center'>
                        <div
                            className={`flex flex-row items-center justify-center gap-2 transition-all ${loggingInProvider === provider ? '-mt-5 opacity-0' : 'mt-5'}`}
                        >
                            <Image
                                width={16}
                                height={16}
                                src={`/icons/${provider}.svg`}
                                alt={`${provider} Logo`}
                                className='invert'
                            />
                            Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
                        </div>
                        <div
                            aria-hidden
                            className={`transition-all ${loggingInProvider === provider ? 'opacity-100' : ' opacity-0'}`}
                        >
                            <LoadingIcon />
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default OauthLogIn;
