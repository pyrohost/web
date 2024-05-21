import clsx from 'clsx';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PyroButton } from '@/components/ui/PyroButton';
import PyroPill from '@/components/ui/PyroPill';

import { getGameBySlug, plans } from '@/lib/static';

const Checkmark = ({ brand }: { brand?: boolean }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        fill='none'
        viewBox='0 0 18 18'
        className='absolute left-0 top-[2px] h-4 w-4'
        aria-hidden='true'
    >
        <path
            fill={brand ? '#FF4438' : 'currentColor'}
            fillRule='evenodd'
            d='M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18m3.626-11.687a.7.7 0 0 0-1.252-.626l-3.066 6.131-1.813-1.813a.7.7 0 0 0-.99.99l2.5 2.5a.7.7 0 0 0 1.121-.182z'
            clipRule='evenodd'
        ></path>
    </svg>
);

const getPlanDescription = (slug: string) => {
    switch (slug) {
        case 'solo':
            return 'Perfect for you and a few friends to play together.';
        case 'friends':
            return 'Great for small communities running modpacks.';
        case 'community':
            return 'Ideal for larger communities and groups.';
        case 'network':
            return 'For extraordinarily large networks and communities.';
    }
};

const Page = ({ params }: { params: { game: string } }) => {
    const game = getGameBySlug(params.game);
    if (!game) {
        return notFound();
    }

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                aria-hidden='true'
                style={{
                    maskImage: 'radial-gradient(585% 120% at 50% 100%, transparent 11.5%, white)',
                }}
                className='pointer-events-none absolute inset-0 z-0 h-[350px] w-full select-none object-cover opacity-50'
                src={game.images.banner}
                alt={``}
                decoding='async'
                loading='lazy'
            ></img>

            <section className='container relative flex flex-col items-center py-32 pt-24'>
                <div className='flex flex-col items-center gap-8 text-center'>
                    <h1 className='text-[max(48px,min(5vw,72px))] font-extrabold leading-[1.09] tracking-tighter'>
                        {game.name} Hosting
                    </h1>
                    <p className='max-w-3xl text-xl leading-[190%] font-medium text-[#ffffff99]'>
                        With Pyro, you can host your own {game.name} server with ease. Whether you&apos;re playing with
                        friends or running a public server, we&apos;ve got a plan for you.
                    </p>
                </div>
                <div className='relative mx-auto w-full mt-20 xl:mt-12 lg:w-full md:mt-9'>
                    <h2 className='sr-only'>Pyro pricing plans</h2>
                    <ul className='grid-gap relative z-10 grid grid-cols-1 gap-x-6 gap-y-4 lg:gap-y-4 lg:grid-cols-2 md:gap-y-6 xl:grid-cols-4'>
                        {plans.map((plan) => (
                            <li
                                className={clsx(
                                    'group relative flex min-h-full flex-col rounded-xl px-8 pb-10 pt-5 xl:px-6 xl:py-5 sm:p-5 bg-[#ffffff15]',
                                    {
                                        'border-brand border-[1px]': plan.slug === 'friends',
                                        'border border-transparent': plan.slug !== 'friends',
                                    },
                                )}
                                key={plan.slug}
                            >
                                <div className='mb-6 flex flex-col border-b border-dashed border-white/20 pb-5 xl:mb-5'>
                                    <h3
                                        className={clsx('text-xl font-medium leading-none tracking-tight xl:text-lg', {
                                            'text-brand': plan.slug === 'friends',
                                        })}
                                    >
                                        {plan.name}

                                        {plan.slug === 'friends' && (
                                            <span className='ml-2 text-xs font-bold text-white bg-brand rounded-full px-2 py-1'>
                                                Recommended
                                            </span>
                                        )}
                                    </h3>

                                    <p className='font-bold relative mt-14 text-[36px] leading-none tracking-tighter xl:mt-9 xl:text-[32px] md:mt-4'>
                                        ${plan.price}{' '}
                                        <span className='font-normal text-[20px] tracking-normal text-[#ffffff99]'>
                                            /month
                                        </span>
                                    </p>
                                    <a
                                        className={clsx(
                                            'inline-flex justify-center items-center outline-none rounded-full whitespace-nowrap text-center transition-colors font-bold shadow-md duration-200 px-12 py-4 mt-9',
                                            {
                                                'bg-brand hover:bg-brand/70': plan.slug === 'friends',
                                                'bg-[#ffffff22] hover:bg-[#ffffff33]': plan.slug !== 'friends',
                                            },
                                        )}
                                        href='https://pay.pyro.host'
                                    >
                                        Get started
                                    </a>
                                    <p className='mt-9 font-light leading-snug xl:mt-8 lg:min-h-max'>
                                        {getPlanDescription(plan.slug)}
                                    </p>
                                </div>
                                <div className='mt-auto flex grow flex-col'>
                                    <ul className='flex flex-col flex-wrap gap-y-4'>
                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>{plan.cpu} CPU cores</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>
                                                {plan.ram} GB of RAM with {plan.overflow} GB overflow
                                            </span>
                                        </li>
                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>Unlimited players</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>Unlimited storage</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>15 free backups included</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>Support over Discord</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className='text-center mx-auto mt-12 max-w-3xl text-xl leading-[190%] font-medium text-[#ffffff99]'>
                        Not sure which plan is right for you?{' '}
                        <Link className='text-brand underline' href={`/for/${game.slug}/#recommended`}>
                            Explore detailed plan features
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Page;
