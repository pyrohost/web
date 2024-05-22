import React, { Suspense } from 'react';

import { redirect } from 'next/navigation';

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
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold'>Account</h1>
            <p className='mb-4'>Welcome back, {user.preferredName ?? user.name}!</p>
        </div>
    );
};

export default Page;