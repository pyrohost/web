import Image from 'next/image';

import EmailLogIn from '@/components/auth/EmailLogIn';
import LogInErrors from '@/components/auth/LogInErrors';
import OauthLogIn from '@/components/auth/OauthLogIn';
import { getUserBySession } from '@/lib/api/user';
import { redirect } from 'next/navigation';
import LogoColored from '@/components/ui/layout/LogoColored';

const Page = async () => {
    const user = await getUserBySession();
    if (user) {
        return redirect('/account');
    }
    
    return (
        <div className='relative m-auto flex w-full max-w-[400px] flex-col gap-4 p-4'>
            <div className='mb-4'>
            <LogoColored />
                </div>
            <EmailLogIn />
        </div>
    );
};

export default Page;
