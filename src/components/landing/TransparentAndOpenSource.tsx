import Image from 'next/image';

import { PyroButton } from '@/components/ui/PyroButton';

const TransparentAndOpenSource = () => {
    return (
        <section className='relative z-10 flex flex-col items-center gap-8 px-4 py-32 text-center  xl:px-24'>
            <h1 className='relative z-10 mb-6 max-w-3xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                <div className=''>
                    Transparent and <span className='text-brand'>open-source</span>
                </div>
            </h1>
            <div className='lg relative z-10 max-w-[600px] text-[16px] leading-[190%]'>
                Pyro is the only hosting company that publicly shares its core source code. We&apos;re transparent about
                how we operate, we iterate in coordination with our community, and we&apos;re always open to
                contributions.
            </div>
            <PyroButton
                leftChild={
                    <svg height='16' viewBox='0 0 14 14' width='16'>
                        <path
                            d='M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z'
                            fill='currentColor'
                            fillRule='nonzero'
                        ></path>
                    </svg>
                }
                color={'black'}
                type={'outlineLight'}
                external
                href='https://github.com/pyrohost'
            >
                Star our work on GitHub
            </PyroButton>
            <Image
                src='/img/transparency-img2x.png'
                alt=''
                quality={100}
                width={239}
                height={800}
                className='absolute right-0 top-0 z-0 hidden lg:block'
            />
        </section>
    );
};

export default TransparentAndOpenSource;
