import React, { Suspense } from 'react';

import { redirect } from 'next/navigation';

import DashboardSkeletonSection from '@/components/DashboardSkeletonSection';
import StripeInformation from '@/components/stripe/StripeInformation';
import StripeSubscriptions from '@/components/stripe/StripeSubscriptions';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

const Page = async () => {
    const session = await auth();

    if (!session) {
        return redirect('/category');
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session?.user?.id,
        },
        include: {
            address: true,
        },
    });

    if (!user) {
        return redirect('/auth/logout');
    }

    if (!user.stripeCustomerId) {
        return redirect('/auth/logout');
    }

    return (
        <div className='container mx-auto flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Account</h1>
            <Suspense fallback={<DashboardSkeletonSection title={'Account Information'} />}>
                <StripeInformation customerId={user.stripeCustomerId ?? ''} />
            </Suspense>
            <Suspense fallback={<DashboardSkeletonSection title={'Active Subscriptions'} />}>
                <StripeSubscriptions customerId={user.stripeCustomerId ?? ''} />
            </Suspense>
        </div>
    );
};

export default Page;
