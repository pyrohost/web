'use client';

import { createCheckoutSession } from '@/actions/stripe';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import currency from 'currency.js';
import React, { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { CloseIcon } from '@/components/ui/Icons';

import productAPI from '@/lib/api/product';
import { PricingPeriod } from '@/lib/interfaces/PricingPeriod';
import getStripe from '@/lib/utils/getStripe';
import { formatAmountForDisplay } from '@/lib/utils/stripeHelpers';
import { User } from 'lucia';
import { Price, Product } from '@prisma/client';
import { TIME_TABLE } from '@/lib/static/time';

const ProductListing = ({
    product,
    prices,
    user,
    everyMonths,
}: {
    product: Product;
    prices: Price[];
    user: User | null;
    everyMonths: number;
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const price = prices.find((price) => price.every_months === everyMonths);
    
    if (!price) return null;
    const formAction = async (data: FormData): Promise<void> => {
        window.scrollTo(0, 0);
        setOpen(true);

        if (user?.stripeCustomerId === null) {
            return setOpen(false);
        }

        // no fucking idea how we're handling this but FUCK IT
        data.append('price_id', price?.stripeId);
        data.append('customer_id', user?.stripeCustomerId.toString() ?? '');

        const { client_secret } = await createCheckoutSession(data);

        return setClientSecret(client_secret);
    };

    const closeStripe = (): void => {
        setOpen(false);
        setClientSecret(null);
    };

    if (
        !user ||
        !user.stripeCustomerId
        // !customer ||
        // !customer.phone ||
        // !customer.address ||
        // Object.keys(customer.address || {}).length === 0
    )
        return (
            <li className='flex h-fit w-full'>
                <div
                    className='relative flex w-full flex-col gap-4 rounded-xl border-[1px] border-[#ffffff11] bg-[#ffffff09] p-6 shadow-sm'
                    key={product.id}
                >
                    <h1 className='flex items-center text-2xl font-extrabold'>
                        {product.name}
                        <span className='ml-4 mt-2 font-mono text-sm tracking-tighter opacity-50'>
                            {currency(price?.amount ?? 0)
                                .divide(100)
                                .format()}{' '}
                            / {everyMonths}
                        </span>
                    </h1>
                    {product.description ? (
                        <p className='w-full break-words text-sm opacity-50'>{product.description}</p>
                    ) : null}
                </div>
            </li>
        );

    return (
        <>
            <Dialog.Root open={open}>
                <li className='flex h-fit w-full'>
                    {/* Don't mind the error in the DOM. That's default react behavior and is intended */}
                    <form action={formAction} className='contents'>
                        <div
                            className='relative flex w-full flex-col gap-4 break-words rounded-xl border-[1px] border-[#ffffff11] bg-[#ffffff09] p-6 shadow-sm'
                            data-price-id={product.stripeId}
                            key={product.id}
                        >
                            {/* <img src={product.icon} alt={product.name} className='w-full h-48 object-cover rounded-lg' /> */}
                            <h1 className='flex items-center text-2xl font-extrabold'>
                                {product.name}
                                <span className='ml-4 mt-2 font-mono text-sm tracking-tighter opacity-50'>
                                    {currency(price?.amount ?? 0)
                                        .divide(100)
                                        .format()}{' '}
                                    / {TIME_TABLE[everyMonths as keyof typeof TIME_TABLE]}
                                </span>
                            </h1>
                            {product.description ? (
                                <p className='w-full break-words text-sm opacity-50'>{product.description}</p>
                            ) : null}
                            <Dialog.Trigger asChild>
                                <button
                                    className='rounded-full border-[1px] border-[#ffffff12] bg-[#ffffff11] px-8 py-3 text-sm font-bold shadow-md transition-all hover:bg-[#ffffff22]'
                                    type='submit'
                                >
                                    Subscribe
                                </button>
                            </Dialog.Trigger>
                        </div>
                    </form>
                    {clientSecret ? (
                        <EmbeddedCheckoutProvider stripe={getStripe()} options={{ clientSecret }}>
                            <Dialog.Portal>
                                <Dialog.Overlay className='stripe-bg-animate-in fixed inset-0 z-[9997] h-screen w-screen bg-[#ffffff11] backdrop-blur-xl' />
                                <div className='absolute inset-0 z-[9998] flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden md:py-8'>
                                    <Dialog.Content className='stripe-animate-in relative inset-0 my-auto max-h-fit min-h-fit w-full overflow-hidden rounded-2xl md:max-w-[400px]'>
                                        <Dialog.Close
                                            onClick={() => closeStripe()}
                                            className='fixed right-4 top-4 z-[9999] rounded-full bg-black p-2'
                                        >
                                            <CloseIcon />
                                        </Dialog.Close>
                                        <div className='h-fit w-full select-none overflow-hidden rounded-xl'>
                                            <EmbeddedCheckout />
                                        </div>
                                    </Dialog.Content>
                                </div>
                            </Dialog.Portal>
                        </EmbeddedCheckoutProvider>
                    ) : null}
                </li>
            </Dialog.Root>
        </>
    );
};

export default ProductListing;
