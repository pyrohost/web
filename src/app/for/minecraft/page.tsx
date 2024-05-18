import {
    CloudIcon,
    DatabaseIcon,
    HardDriveIcon,
    CpuIcon,
    BlockchainIcon,
    UserHeart,
} from '@/components/icons/HugeIcons';
import { PyroButton } from '@/components/ui/PyroButton';
import { getGameBySlug, plans } from '@/lib/static';

const Page = () => {
    const game = getGameBySlug('minecraft')!;

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

            <div className='container relative flex pb-24 pt-24'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[max(48px,min(5vw,72px))] font-extrabold leading-[1.09] tracking-tighter'>
                        Minecraft Hosting
                    </h1>
                    <p className='max-w-2xl text-lg leading-[190%] text-[#ffffff99]'>
                        Minecraft is a sandbox video game developed and published by Mojang Studios. With Pyro, you can
                        host your own Minecraft server with ease. Whether you&apos;re playing with friends or running a
                        public server, we&apos;ve got a plan for you.
                    </p>

                    <div className='flex flex-row gap-2'>
                        <PyroButton color='brand' href={`/for/${game.slug}/#recommended`}>
                            Get started
                        </PyroButton>
                    </div>
                </div>
            </div>

            {/* TODO: Add a section for features with all our branding pop */}

            <div className='container relative flex flex-col gap-4'>
                <h2 className='text-3xl font-extrabold' id='recommended'>
                    Recommended Plans
                </h2>
                {/* TODO: Better pricing cards */}
                {/* TODO: Add a most popular badge and a recommended badge */}
                <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className='group relative flex min-h-[124px] flex-col gap-4 rounded-xl bg-[#ffffff14] p-6 transition hover:-translate-y-0.5'
                        >
                            <p className='relative z-10 text-2xl font-extrabold'>
                                {plan.name} - ${plan.price}
                            </p>
                            <div className='border-t border-gray-700'></div>
                            <div className='flex flex-row gap-2'>
                                <BlockchainIcon fill='brand' />
                                <div>
                                    <p>{plan.ram} GB RAM</p> + <code>{plan.overflow} GB Overflow</code>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <CpuIcon fill='brand' />
                                <p>{plan.cpu} vCores</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <HardDriveIcon fill='brand' />
                                <p>Uncapped NVMe Storage</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <UserHeart fill='brand' />
                                <p>Unlimited Players</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <DatabaseIcon fill='brand' />
                                <p>15 Database Slots</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <CloudIcon fill='brand' />
                                <p>15 Backup Slots</p>
                            </div>
                            <div className='border-t border-gray-700'></div>
                            {/* Button should probably be styled differently per plan */}
                            <PyroButton color='brand' href='https://pay.pyro.host/'>
                                Select Plan
                            </PyroButton>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Page;
