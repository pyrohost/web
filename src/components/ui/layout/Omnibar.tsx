import AuthedHeader from '@/components/ui/layout/AuthedHeader';
import HeaderLoginButton from '@/components/ui/layout/HeaderLoginButton';
import MarketingHeader from '@/components/ui/layout/MarketingHeader';

import { getUserBySession } from '@/lib/api/user';

const Omnibar = async () => {
    const user = await getUserBySession();

    return (
        <div className='container mx-auto flex w-full items-center'>
            <div className='relative flex w-full flex-row items-center justify-between'>
                {user ? <AuthedHeader /> : <MarketingHeader />}
                <div className='absolute -right-2 top-3 h-12 flex items-center'>
                    <HeaderLoginButton />
                </div>
            </div>
        </div>
    );
};

export default Omnibar;
