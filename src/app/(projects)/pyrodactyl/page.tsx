import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PyroButton } from '@/components/ui/PyroButton';

export const metadata: Metadata = {
    title: 'Pyro - Pyrodactyl',
    description:
        "Pyrodactyl is Pyro's open, secure, and scalable server management platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
    openGraph: {
        title: 'Pyro - Pyrodactyl',
        description:
            "Pyrodactyl is Pyro's open, secure, and scalable server management platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
        images: [
            {
                url: './og_pyrodactyl.png',
            },
        ],
    },
};

const Page = () => {
    return (
        <>
            <div className='z-10 mx-auto mt-12 flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0'>
                <h1 className='w-full text-[max(30px,min(5vw,42px))] font-extrabold leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2'>
                    Pyrodactyl is Pyro&apos;s open, secure, and scalable server management platform
                </h1>
                <div className='flex w-full flex-col gap-8 lg:w-1/4 lg:gap-4'>
                    <p className='text-[20px] leading-[155%] text-[#ffffffbb]'>
                        It&apos;s the world&apos;s best Pterodacyl panel. You&apos;ve never seen anything like it
                        before.
                    </p>
                    <PyroButton color='white' href='https://github.com/pyrohost/panel'>
                        Star on GitHub
                    </PyroButton>
                </div>
            </div>
            <div className='relative mt-8 min-h-[750px] w-full scale-[1.08]'>
                <Image src='/img/panelhero_2x.png' width={4144} height={2464} className='w-full' alt='' quality={100} />
            </div>
        </>
    );
};

export default Page;
