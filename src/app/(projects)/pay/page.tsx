import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pyro - Alerion',
};

const Page = () => {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 max-h-[800px] min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-brand text-white'>
                <div className='relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center px-6'>
                    <div className='z-10 mx-auto mt-12 flex h-full w-full flex-col items-start justify-between gap-8 lg:flex-row lg:gap-0'>
                        <h1 className='w-full text-[max(30px,min(5vw,42px))] font-extrabold leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2'>
                            Pay is Pyro&apos;s dead-simple billing platform that integrates with Stripe
                        </h1>
                        <div className='flex w-full flex-col gap-8 lg:w-1/4 lg:gap-4'>
                            <p className='text-[20px] leading-[155%] text-[#ffffffbb]'>
                                It&apos;s the hosting industry&apos;s easiest billing management system.
                            </p>
                            <Link
                                href={'https://pay.pyro.host'}
                                rel='noopener noreferrer'
                                target='_blank'
                                className='flex items-center justify-center gap-4 rounded-full bg-white py-3 pl-8 pr-6 text-sm font-bold text-black'
                            >
                                <p>Try it out</p>
                                <ArrowRightIcon className='h-4 w-4' />
                            </Link>
                        </div>
                    </div>
                    <div className='relative mt-8 min-h-[750px] w-full scale-[1.08]'>
                        <Image
                            src='/img/payhero.png'
                            width={1172}
                            height={696}
                            className='w-full'
                            alt=''
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
