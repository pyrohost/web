'use client';

import { createPortalSession } from '@/actions/stripe';
import { useState } from 'react';

import { PencilIcon } from '@/components/ui/Icons';

const StripePortalButton = ({ customerID }: { customerID: string }) => {
    const [formState, setFormState] = useState<string>('');

    if (!customerID || customerID === '') {
        return <p>No customer ID provided</p>;
    }

    const formAction = async (data: FormData): Promise<void> => {
        data.append('customer', customerID);
        try {
            const { url } = await createPortalSession(data);

            window.location.assign(url as string);
        } catch (error) {
            setFormState('An error occurred connecting to Stripe.');
        }
    };

    return (
        <form className='flex flex-col items-end' action={formAction}>
            <button
                className='flex items-center justify-center gap-2 rounded-full bg-[#ffffff33] px-3 py-1.5 text-sm font-bold text-white transition hover:bg-[#ffffff44]'
                onClick={(e) => {
                    e.stopPropagation();
                }}
                type='submit'
            >
                <PencilIcon /> Edit
            </button>
            {formState ? <p className='mt-2 text-sm font-bold text-red-500'>{formState}</p> : null}
        </form>
    );
};

export default StripePortalButton;
