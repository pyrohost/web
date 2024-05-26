import AuthedHeader from '@/components/ui/layout/AuthedHeader';
import HeaderLoginButton from '@/components/ui/layout/HeaderLoginButton';
import MarketingHeader from '@/components/ui/layout/MarketingHeader';

import { getUserBySession } from '@/lib/api/user';

const Omnibar = async () => {
    const user = await getUserBySession();

    return (
        <div className='container mx-auto flex w-full items-center'>
            <div className='flex w-full flex-row items-center justify-between'>
                {user ? <AuthedHeader /> : <MarketingHeader />}
                <HeaderLoginButton />
            </div>
        </div>
    );
};

export default Omnibar;
