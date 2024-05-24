import Image from 'next/image';
import Link from 'next/link';

import { PyroButton } from '@/components/ui/PyroButton';

import { auth } from '@/lib/api/auth';

const HeaderLoginButton = async () => {
    const session = await auth();

    return (
        <>
            {session ? (
                <div className='ml-auto'>
                    <Link
                        href='/account'
                        className='flex shrink-0 flex-row items-center justify-center rounded-full p-2 transition hover:bg-[#ffffff22]'
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={
                                session?.user?.image ||
                                `https://source.boringavatars.com/marble/120/${session.user?.name}?colors=264653,2a9d8f,f4a261,e9c46a,e76f51`
                            }
                            alt={`${session.user?.name}'s' avatar`}
                            width={30}
                            height={30}
                            className='flex min-h-8 min-w-8 shrink-0 rounded-full'
                        />
                    </Link>
                </div>
            ) : (
                <PyroButton className='ml-auto' size={'small'} href='/auth/login'>
                    Login
                </PyroButton>
            )}
        </>
    );
};

export default HeaderLoginButton;
