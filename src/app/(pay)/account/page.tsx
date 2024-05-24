import React, { Suspense } from 'react';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Cross1Icon } from '@radix-ui/react-icons';

import AccountConnections from '@/components/pay/AccountConnections';
import DashboardSkeletonSection from '@/components/pay/DashboardSkeletonSection';
import StripeInformation from '@/components/pay/StripeInformation';
import StripeSubscriptions from '@/components/pay/StripeSubscriptions';

import { auth } from '@/lib/api/auth';
import prisma from '@/lib/api/prisma';

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const session = await auth();

    if (!session) {
        return redirect('/auth/login');
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user?.id,
        },
        include: {
            discordTokens: true,
        },
    });

    if (!user || !user.stripeCustomerId) {
        return redirect('/auth/login');
    }

    return (
        <div className='container mx-auto flex flex-col gap-4 lg:py-4'>
            <h1 className='text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter'>Account</h1>
            {searchParams?.error === 'NoActiveSubscriptionsDiscordLinkedRole' && (
                <div className='relative flex rounded-full bg-red-800/20 px-4 py-3 text-red-400' role='alert'>
                    <strong className='font-bold'>Failed to link Discord account! </strong>
                    <span className='ml-0.5 block sm:inline'>
                        You need to purchase something before linking your Discord.
                    </span>
                    <Link aria-label='Close alert' className='ml-auto' href='/account'>
                        <Cross1Icon className=' h-6 w-6' />
                    </Link>
                </div>
            )}
            {searchParams?.success === 'DiscordLinkedRole' && (
                <div className='relative flex rounded-full bg-red-800/20 px-4 py-3 text-red-400' role='alert'>
                    <strong className='font-bold'>Your Discord account is now linked!</strong>
                    <span className='ml-0.5 block sm:inline'>Check your roles on the Pyro Discord server!</span>
                    <Link aria-label='Close alert' className='ml-auto' href='/account'>
                        <Cross1Icon className=' h-6 w-6' />
                    </Link>
                </div>
            )}
            <Suspense fallback={<DashboardSkeletonSection title={'Account Information'} />}>
                <StripeInformation customerId={user.stripeCustomerId ?? ''} />
            </Suspense>
            <Suspense fallback={<DashboardSkeletonSection title={'Account Connections'} />}>
                <AccountConnections user={user} />
            </Suspense>
            <Suspense fallback={<DashboardSkeletonSection title={'Active Subscriptions'} />}>
                <StripeSubscriptions customerId={user.stripeCustomerId ?? ''} />
            </Suspense>
        </div>
    );
};

export default Page;
