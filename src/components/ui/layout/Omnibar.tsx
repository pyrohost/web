import AuthedHeader from '@/components/ui/layout/AuthedHeader';
import HeaderLoginButton from '@/components/ui/layout/HeaderLoginButton';
import MarketingHeader from '@/components/ui/layout/MarketingHeader';

import { getUserBySession } from '@/lib/api/user';

const Omnibar = async () => {
    const user = await getUserBySession();

    return (
        <div className='relative flex w-full flex-row items-center justify-between'>
            {user ? <AuthedHeader /> : <MarketingHeader />}
            <div className='absolute -right-2 top-3 flex h-12 items-center'>
                <HeaderLoginButton />
            </div>
        </div>
    );
};

export default Omnibar;
