import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pyro - About Us',
};

const Page = () => {
    return (
        <div className='relative mx-auto flex flex-col items-center gap-8 px-4 py-32 text-center xl:px-24'>
            <div className='-mb-8'>
                <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-neutral-900/30 px-[11px] py-[4px]'>
                    <div className='text-15 font-medium'>About Us</div>
                </div>
            </div>
            <div className='relative'>
                <div
                    className='pointer-events-none absolute left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                    style={
                        {
                            '--circle-background': 'rgba(113 64 253 / 100%)',
                        } as React.CSSProperties
                    }
                ></div>
                <div
                    className='pointer-events-none absolute left-0 top-[-80px] z-[0] hidden h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:block'
                    style={
                        {
                            '--circle-background': 'rgba(246 111 143 / 100%)',
                        } as React.CSSProperties
                    }
                ></div>
                <div
                    className='pointer-events-none absolute right-0 top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                    style={
                        {
                            '--circle-background': 'rgba(25 146 215 / 100%)',
                        } as React.CSSProperties
                    }
                ></div>
                <div
                    className='pointer-events-none absolute left-[220px] top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                    style={
                        {
                            '--circle-background': 'rgba(255 125 70 / 100%)',
                        } as React.CSSProperties
                    }
                ></div>
                <div
                    className='pointer-events-none absolute right-[200px] top-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                    style={
                        {
                            '--circle-background': 'rgba(255 125 70 / 100%)',
                        } as React.CSSProperties
                    }
                ></div>
            </div>
            <h1 className='max-w-4xl py-4 pb-3 pt-5 text-[max(40px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter lg:pb-5'>
                <div className='flex flex-row items-center gap-4'>Pioneers of open hosting infrastructure</div>
            </h1>
            <div className='relative w-full max-w-[80ch]'>
                <div className='flex w-full flex-col gap-8'>
                    <p className='text-xl leading-[190%]'>
                        Pyro is an atypically talented, globally distributed team of engineers, designers, and
                        strategists building open-source hosting infrastructure. We are on a mission to make hosting
                        accessible to everyone, and we&apos;re building the ecosystem of tools and services to make that
                        possible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
