import Image from 'next/image';

import { PyroButton } from '@/components/ui/PyroButton';

import { auth } from '@/lib/auth';

const HeaderLoginButton = async () => {
    const session = await auth();

    return (
        <>
            {session ? (
                <div className='ml-auto'>
                    <div className='flex flex-row shrink-0 justify-center items-center bg-[#ffffff11] p-1 rounded-full'>
                    <img
                        src={
                            session?.user?.image ||
                            `https://source.boringavatars.com/marble/120/${session.user?.name}?colors=264653,2a9d8f,f4a261,e9c46a,e76f51`
                        }
                        alt={`${session.user?.name}'s' avatar`}
                        width={30}
                        height={30}
                        className='flex shrink-0 min-h-8 min-w-8 rounded-full'
                    />
                    <p className='text-sm font-bold px-2'>
                        {session.user?.name}
                    </p>
                    </div>
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
