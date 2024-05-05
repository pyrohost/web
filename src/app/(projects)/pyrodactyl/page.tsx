import { Metadata } from 'next';
import Image from 'next/image';

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
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-brand text-white'>
                <div className='relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center px-6'>
                    <div className='z-10 mx-auto mt-32 flex h-full w-full flex-col items-start justify-between gap-8 lg:flex-row lg:gap-0'>
                        <h1 className='w-full text-[max(30px,min(5vw,42px))] font-extrabold leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2'>
                            Pyrodactyl is Pyro&apos;s open, secure, and scalable server management platform
                        </h1>
                        <div className='flex w-full flex-col gap-8 lg:w-1/4 lg:gap-4'>
                            <p className='text-[20px] leading-[155%] text-[#ffffffbb]'>
                                It&apos;s the world&apos;s best Pterodacyl panel. You&apos;ve never seen anything like
                                it before.
                            </p>
                            <a className='flex items-center justify-center gap-4 rounded-full bg-white py-3 pl-8 pr-6 text-sm font-bold text-black'>
                                <p>Star on GitHub</p>
                            </a>
                        </div>
                    </div>
                    <div className='relative mt-8 min-h-[750px] w-full scale-[1.08]'>
                        <Image
                            src='/img/panelhero_2x.png'
                            width={4144}
                            height={2464}
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
