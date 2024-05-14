import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className='relative z-10 h-full max-h-[800px] min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-brand text-white'>
                <div className='relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center px-6'>
                    <div className='z-10 mx-auto mt-12 flex h-full w-full flex-col items-start justify-between gap-8 lg:flex-row lg:gap-0'>
                        <h1 className='w-full text-[max(30px,min(5vw,42px))] font-extrabold leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2'>
                            Pyrodactyl is Pyro&apos;s open, secure, and scalable server management platform
                        </h1>
                        <div className='flex w-full flex-col gap-8 lg:w-1/4 lg:gap-4'>
                            <p className='text-[20px] leading-[155%] text-[#ffffffbb]'>
                                It&apos;s the world&apos;s best Pterodacyl panel. You&apos;ve never seen anything like
                                it before.
                            </p>
                            <Link
                                href={'https://github.com/pyrohost/panel'}
                                rel='noopener noreferrer'
                                target='_blank'
                                className='flex items-center justify-center gap-4 rounded-full bg-white text-black py-3 pl-8 pr-6 text-sm font-bold'
                            >
                                <svg height='16' viewBox='0 0 14 14' width='16'>
                                    <path
                                        d='M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z'
                                        fill='currentColor'
                                        fillRule='nonzero'
                                    ></path>
                                </svg>{' '}
                                <p>Star on GitHub</p>
                            </Link>
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
