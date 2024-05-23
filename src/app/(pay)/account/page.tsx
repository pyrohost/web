import React, { Suspense } from 'react';

import { redirect } from 'next/navigation';

import AccountConnections from '@/components/AccountConnections';
import DashboardSkeletonSection from '@/components/DashboardSkeletonSection';
import StripeInformation from '@/components/stripe/StripeInformation';
import StripeSubscriptions from '@/components/stripe/StripeSubscriptions';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const session = await auth();

    if (!session) {
        return redirect('/auth/login');
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session?.user?.id,
        },
        include: {
            discordLinkedRole: true,
        },
    });

    if (!user) {
        return redirect('/auth/login');
    }

    if (!user.stripeCustomerId) {
        return redirect('/auth/login');
    }

    return (
        <div className='container mx-auto flex flex-col gap-4 lg:py-4'>
            <h1 className='text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter'>Account</h1>
            {searchParams?.error === 'NoActiveSubscriptionsDiscordLinkedRole' && (
                <div className='relative rounded-full bg-red-800/20 px-4 py-3 text-red-400' role='alert'>
                    <strong className='font-bold'>Failed to link Discord account!</strong>
                    <span className='block sm:inline'>
                        {''} You need to purchase something before linking your Discord.
                    </span>
                </div>
            )}
            {searchParams?.success === 'DiscordLinkedRole' && (
                <div className='relative rounded-full bg-brand px-4 py-3 text-white' role='alert'>
                    <strong className='font-bold'>Your Discord account was linked!</strong>
                    <span className='block sm:inline'>{''} Check your roles on the Pyro Discord server!</span>
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
