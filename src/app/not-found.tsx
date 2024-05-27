/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { Logomark } from '@/components/icons/Logomark';

const NotFound = () => {
    return (
        <div className='flex h-full w-full flex-1 items-center justify-center gap-12 p-8'>
            <div className='flex flex-col md:flex-row gap-12 rounded-3xl border-[1px] border-[#ffffff18] bg-[#ffffff18] p-8'>
                <div className='flex max-w-sm flex-col gap-8 text-left'>
                    <h1 className='text-[32px] font-extrabold leading-[98%] tracking-[-0.07rem]'>404</h1>
                    <p>
                        This page does not exist. Let&apos;s get you back to somewhere that does. And maybe play some
                        Minecraft while you&apos;re at it.
                    </p>
                    <div className='flex flex-col gap-2'>
                        <Link
                            className='flex w-fit items-center gap-2 fill-brand text-brand'
                            rel='noopener noreferrer'
                            target='_blank'
                            href='/account'
                        >
                            <div className='flex h-4 w-4 shrink-0'>
                                <Logomark />
                            </div>
                            Pyro Account
                        </Link>
                        <Link
                            className='flex w-fit items-center gap-2 fill-brand text-brand'
                            rel='noopener noreferrer'
                            target='_blank'
                            href='https://status.pyro.host'
                        >
                            <div className='flex h-4 w-4 shrink-0'>
                                <Logomark />
                            </div>
                            Status Page
                        </Link>

                        <Link
                            className='flex w-fit items-center gap-2 fill-brand text-brand'
                            rel='noopener noreferrer'
                            target='_blank'
                            href='https://discord.gg/fxeRFRbhQh'
                        >
                            <svg viewBox='0 0 16 16' aria-hidden='true' className='h-4 w-4'>
                                <path
                                    fill='currentColor'
                                    d='M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z'
                                ></path>
                            </svg>
                            Pyro Discord
                        </Link>
                    </div>
                </div>
                <img
                    alt=''
                    className='flex aspect-square w-full md:w-64 shrink-0 rounded-2xl object-cover'
                    height='256'
                    src='https://media.tenor.com/scX-kVPwUn8AAAAC/this-is-fine.gif'
                    width='256'
                    loading='lazy'
                    decoding='async'
                />
            </div>
        </div>
    );
};

export default NotFound;
