'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoColored from '@/components/ui/layout/LogoColored';

import { AUTHENTICATED_ROUTES } from '@/lib/static/authenticatedRoutes';

import AuthedHeaderLinks from '@/components/ui/layout/AuthedHeaderLinks';
import MarketingHeader from '@/components/ui/layout/MarketingHeader';

const AuthedHeader = () => {
    const pathname = usePathname();

    return (
        <>
            {AUTHENTICATED_ROUTES.some((route) => pathname.includes(route)) ? (
                <header className='relative flex min-h-[72px] w-full items-center justify-between'>
                    <div className="flex w-full items-center gap-8 [&>div[style='position:relative']]:!w-full">
                        <Link aria-label='Pyro Home Page' className='shrink-0' href='/'>
                            <LogoColored />
                        </Link>

                        <ul className='hidden w-full items-center gap-2 md:flex'>
                            <AuthedHeaderLinks />
                        </ul>
                    </div>
                </header>
            ) : (
                <MarketingHeader />
            )}
        </>
    );
};

export default AuthedHeader;
