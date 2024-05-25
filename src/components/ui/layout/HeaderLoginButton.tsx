import Link from 'next/link';

import { PyroButton } from '@/components/ui/PyroButton';

import { getUserBySession } from '@/lib/api/user';

const HeaderLoginButton = async () => {
    const user = await getUserBySession();

    return (
        <>
            {user ? (
                <div className='ml-auto'>
                    <Link
                        href='/account'
                        className='flex shrink-0 flex-row items-center justify-center rounded-full p-2 transition hover:bg-[#ffffff22]'
                    >
                        <img
                            src={`https://source.boringavatars.com/marble/120/${user.id}?colors=f06d61,da825f,c4975c,a8ab7b,8cbf99`}
                            width={30}
                            height={30}
                            className='min-sh-8 flex min-w-8 shrink-0 rounded-full'
                        />
                    </Link>
                </div>
            ) : (
                <PyroButton className='ml-auto' size={'small'} href='/login'>
                    Login
                </PyroButton>
            )}
        </>
    );
};

export default HeaderLoginButton;
