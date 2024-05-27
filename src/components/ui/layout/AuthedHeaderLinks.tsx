'use client';

import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AuthedHeaderLinks = () => {
    const pathname = usePathname();

    const getLinkClasses = (linkPath: string) =>
        clsx('flex h-fit w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition', {
            'hover:bg-[#ffffff22]': pathname !== linkPath,
            'bg-white text-black': pathname === linkPath,
        });

    return (
        <>
            <li>
                <Link href={'/account'} className={getLinkClasses('/account')}>
                    Overview
                </Link>
            </li>
            <li>
                <Link href={'/for/all'} className={getLinkClasses('/for/all')}>
                    Store
                </Link>
            </li>
        </>
    );
};

export default AuthedHeaderLinks;
