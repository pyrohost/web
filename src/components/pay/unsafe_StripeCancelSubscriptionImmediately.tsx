'use client';

import { cancelSubscription, cancelSubscriptionAtPeriodEnd } from '@/actions/stripe';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import LoadingIcon from '@/components/ui/LoadingIcon';

const StripeCancelSubscriptionImmediately = ({ subscriptionId }: { subscriptionId: string }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    if (!subscriptionId || subscriptionId === '') {
        return <p>No subscriptionId ID provided</p>;
    }

    const formAction = async (data: FormData): Promise<void> => {
        data.append('subscriptionId', subscriptionId);

        await cancelSubscription(data);
        return router.refresh();
    };

    return (
        <form action={formAction}>
            <button
                onClick={() => setIsLoading(true)}
                className='flex items-center justify-center gap-2 rounded-full bg-[#ffffff33] px-3 py-1.5 text-sm font-bold text-white'
                type='submit'
            >
                {isLoading ? (
                    <>
                        <LoadingIcon /> Cancelling...
                    </>
                ) : (
                    <>Cancel Immediately (Unsafe and Dangerous)</>
                )}
            </button>
        </form>
    );
};

export default StripeCancelSubscriptionImmediately;
