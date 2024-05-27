'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoColored from '@/components/icons/LogoColored';
import AuthedHeaderLinks from '@/components/ui/layout/AuthedHeaderLinks';
import MarketingHeader from '@/components/ui/layout/MarketingHeader';

import { AUTHENTICATED_ROUTES } from '@/lib/static/authenticatedRoutes';
import LogoWhite from '@/components/icons/LogoWhite';
import { Logomark } from '@/components/icons/Logomark';

const AuthedHeader = () => {
    const pathname = usePathname();

    return (
        <>
            {AUTHENTICATED_ROUTES.some((route) => pathname.includes(route)) ? (
                <div className='border-b-[1px] border-b-[#ffffff16] bg-[#ffffff07] w-full'>
                    <div className='container relative mx-auto flex w-full items-center'>
                        <header className='relative flex min-h-[72px] w-full items-center justify-between'>
                            <div className="flex w-full items-center gap-6 [&>div[style='position:relative']]:!w-full">
                                <Link aria-label='Pyro Home Page' className='shrink-0' href='/account'>
                                    <div className='flex h-6 w-6 shrink-0'>
                                        <Logomark />
                                    </div>
                                </Link>

                                <ul className='hidden w-full items-center gap-2 md:flex'>
                                    <AuthedHeaderLinks />
                                </ul>
                            </div>
                        </header>
                    </div>
                </div>
            ) : (
                <MarketingHeader />
            )}
        </>
    );
};

export default AuthedHeader;
