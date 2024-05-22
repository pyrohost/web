'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

import LoadingIcon from '@/components/ui/LoadingIcon';

// import { usePersistedState } from '@/lib/hooks/usePersistedState';

const OauthLogIn = () => {
    const [loggingInProvider, setLoggingInProvider] = useState<string | null>(null);
    // const [lastUsedProvider, setLastUsedProvider] = usePersistedState<string | null>(`lastUsedProvider`, null);

    const handleSignIn = async (provider: string) => {
        if (loggingInProvider) {
            return;
        }

        setLoggingInProvider(provider);
        // setLastUsedProvider(provider);
        await signIn(provider, { callbackUrl: '/dashboard' });

        // it should never take this long fyi
        setTimeout(() => {
            setLoggingInProvider(null);
        }, 7500);
    };

    return (
        <div className='mb-6 flex flex-col gap-2'>
            {/* Todo: move to new component */}
            {/* {lastUsedProvider && (
                <div className='text-center text-xs font-bold text-subtext'>
                    You logged in last with {lastUsedProvider.charAt(0).toUpperCase() + lastUsedProvider.slice(1)}
                </div>
            )} */}

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
