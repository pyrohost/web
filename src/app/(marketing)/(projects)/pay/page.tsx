import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@radix-ui/react-icons';

import { PyroButton } from '@/components/ui/PyroButton';

export const metadata: Metadata = {
    title: 'Pyro - Pay',
    description:
        "Pay is Pyro's dead-simple billing platform that integrates with Stripe. It's the hosting industry's easiest billing management system.",
    openGraph: {
        title: 'Pyro - Pay',
        description:
            "Pay is Pyro's dead-simple billing platform that integrates with Stripe. It's the hosting industry's easiest billing management system.",
    },
};

const Page = () => {
    return (
        <>
            <div className='z-10 mx-auto mt-12 flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0'>
                <h1 className='w-full text-[max(30px,min(5vw,42px))] font-extrabold leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2'>
                    Pay is Pyro&apos;s dead-simple billing platform that integrates with Stripe
                </h1>
                <div className='flex w-full flex-col gap-8 lg:w-1/4 lg:gap-4'>
                    <p className='text-[20px] leading-[155%] text-[#ffffffbb]'>
                        It&apos;s the hosting industry&apos;s easiest billing management system.
                    </p>
                    <PyroButton variant='secondary' href='https://pay.pyro.host'>
                        Try it out
                    </PyroButton>
                </div>
            </div>
            <div className='relative mt-8 min-h-[750px] w-full scale-[1.08]'>
                <Image src='/img/payhero.png' width={1172} height={696} className='w-full' alt='' quality={100} />
            </div>
        </>
    );
};

export default Page;
