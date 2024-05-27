import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import React, { Suspense } from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';

import AccountInformation from '@/components/account/AccountInformation';
import AccountConnections from '@/components/pay/AccountConnections';
import DashboardSkeletonSection from '@/components/pay/DashboardSkeletonSection';
import StripeSubscriptions from '@/components/pay/StripeSubscriptions';

import userAPI, { getUserBySession } from '@/lib/api/user';

export const metadata: Metadata = {
    title: 'Pyro - Account',
};

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const sessionUser = await getUserBySession();
    if (!sessionUser) {
        return redirect('/login');
    }

    const dbUser = await userAPI.getUserBySessionUser(sessionUser);

    if (!dbUser) {
        return redirect('/login');
    }

    return (
        <div className='container mx-auto flex flex-col gap-4 py-8'>
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
                <AccountInformation user={dbUser} />
            </Suspense>

            {/* <AccountInformation sessionUser={user} /> */}
            {/* <Suspense fallback={<DashboardSkeletonSection title={'Account Connections'} />}>
                <AccountConnections user={user} />
            </Suspense> */}
            <Suspense fallback={<DashboardSkeletonSection title={'Active Subscriptions'} />}>
                <StripeSubscriptions customerId={dbUser.stripeCustomerId ?? ''} />
            </Suspense>
        </div>
    );
};

export default Page;
