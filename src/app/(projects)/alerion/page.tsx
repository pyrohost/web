import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Pyro - Alerion',
    description:
        "Alerion is Pyro's Rust-powered, cross-platform Wings successor. Reliably manage and run Dockerized game servers with Alerion.",
    openGraph: {
        title: 'Pyro - Alerion',
        description:
            "Alerion is Pyro's Rust-powered, cross-platform Wings successor. Reliably manage and run Dockerized game servers with Alerion.",
        images: [
            {
                url: './og_alerion.png',
            },
        ],
    },
};

const Page = () => {
    return (
        <main className='relative h-full w-full'>
            <section className='relative max-h-[950px] w-full overflow-hidden rounded-b-[2rem] bg-brand px-4 lg:px-16'>
                <div className='relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center px-6'>
                    <div className='z-10 mx-auto mt-32 flex h-full w-full flex-col items-start justify-between gap-8 lg:flex-row lg:gap-0'>
                        <h1 className='w-full text-[max(30px,min(5vw,42px))] font-extrabold leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2'>
                            Alerion is Pyro&apos;s Rust-powered, cross-platform Wings successor
                        </h1>
                        <div className='flex w-full flex-col gap-8 lg:w-1/4 lg:gap-4'>
                            <p className='text-[20px] leading-[155%] text-[#ffffffbb]'>
                                Manage and run Dockerized game servers with Alerion. Super fast, super reliable.
                            </p>
                            <a className='flex items-center justify-center gap-4 rounded-full bg-white py-3 pl-8 pr-6 text-sm font-bold text-black'>
                                <p>Star on GitHub</p>
                            </a>
                        </div>
                    </div>
                    <div className='relative mt-8 min-h-[750px] w-full scale-[1.1]'>
                        <Image
                            src='/img/alerionhero.png'
                            width={1172}
                            height={696}
                            className='w-full'
                            alt=''
                            quality={100}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
