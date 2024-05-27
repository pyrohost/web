'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoWhite from '@/components/icons/LogoWhite';
import { Logomark } from '@/components/icons/Logomark';

import { AUTHENTICATED_ROUTES } from '@/lib/static/authenticatedRoutes';

const Footer = () => {
    const pathname = usePathname();

    return (
        <>
            {AUTHENTICATED_ROUTES.some((route) => pathname.includes(route)) ? (
                <div className='border-t-[1px] border-t-[#ffffff16] bg-[#ffffff07]'>
                    <footer className='container sticky bottom-0 flex w-full flex-wrap items-center justify-center gap-4 px-4 py-8 text-[#999]'>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='flex h-5 w-5 shrink-0'>
                                <Logomark />
                            </div>
                            <p className='text-xs text-[#999]'>© 2024 Pyro Host Inc.</p>
                        </div>
                        <Link href='https://status.pyro.host' className='text-xs text-[#999] hover:text-[#fff] transition'>
                            Terms
                        </Link>
                        <Link href='https://status.pyro.host' className='text-xs text-[#999] hover:text-[#fff] transition'>
                            Privacy
                        </Link>
                        <Link href='https://status.pyro.host' className='text-xs text-[#999] hover:text-[#fff] transition'>
                            Status
                        </Link>
                        <Link href='https://status.pyro.host' className='text-xs text-[#999] hover:text-[#fff] transition'>
                            Cookies
                        </Link>
                    </footer>
                </div>
            ) : (
                <footer className='container sticky bottom-0 flex w-full flex-col justify-between gap-12 rounded-t-3xl px-8 py-7 sm:flex-row md:gap-x-12'>
                    <div className='flex flex-col items-start gap-4 md:w-full lg:w-fit'>
                        <LogoWhite />
                        <div className='flex flex-col gap-3'>
                            <p className='text-xs text-[#999]'>© 2024 Pyro Host Inc.</p>
                            <div className='flex flex-row gap-4'>
                                <Link href='/legal/tos' className='text-xs text-[#999]'>
                                    Terms of Service
                                </Link>
                                <Link href='/legal/privacy' className='text-xs text-[#999]'>
                                    Privacy Policy
                                </Link>
                                <Link href='/legal/cookies' className='text-xs text-[#999]'>
                                    Cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-8'>
                        <a
                            aria-label='Follow Pyro on X (Formerly Twitter)'
                            rel='noopener noreferrer'
                            target='_blank'
                            href='https://x.com/withPyro'
                        >
                            <svg height='16' strokeLinejoin='round' viewBox='0 0 16 16' width='16'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z'
                                    fill='currentColor'
                                ></path>
                            </svg>
                        </a>

                        <a
                            aria-label='Follow Pyro on GitHub'
                            rel='noopener noreferrer'
                            target='_blank'
                            href='https://github.com/pyrohost'
                        >
                            <svg height='16' viewBox='0 0 14 14' width='16'>
                                <path
                                    d='M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z'
                                    fill='currentColor'
                                    fillRule='nonzero'
                                ></path>
                            </svg>
                        </a>

                        <a
                            aria-label='Join the Pyro Discord community'
                            rel='noopener noreferrer'
                            target='_blank'
                            href='/discord'
                        >
                            <svg viewBox='0 0 16 16' className='h-4 w-4'>
                                <path
                                    fill='currentColor'
                                    d='M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z'
                                ></path>
                            </svg>
                        </a>
                    </div>
                </footer>
            )}
        </>
    );
};

export default Footer;
