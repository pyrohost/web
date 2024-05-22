'use client';

import { createCheckoutSession } from '@/actions/stripe';
import { type User } from '@prisma/client';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

import { Session } from 'next-auth';

import * as Dialog from '@radix-ui/react-dialog';

import { CloseIcon } from '@/components/ui/Icons';

import { PricingPeriod } from '@/lib/interfaces/PricingPeriod';
import { ExtendedProduct, Product } from '@/lib/interfaces/Product';
import getStripe from '@/lib/utils/getStripe';
import { formatAmountForDisplay } from '@/lib/utils/stripeHelpers';

const ProductListing = ({
    product,
    session,
    user,
    customer,
    pricingPeriod,
}: {
    product: ExtendedProduct;
    session: Session | null;
    user: User | null;
    customer: any;
    pricingPeriod?: PricingPeriod;
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    let priceId, price, period;
    switch (pricingPeriod) {
        case 'quarterly':
            priceId = product.quarterly_price_id;
            price = product.quarterly_price;
            period = 'quarter';
            break;
        case 'biannually':
            priceId = product.biannual_price_id;
            price = product.biannual_price;
            period = 'bianually';
            break;
        case 'yearly':
            priceId = product.yearly_price_id;
            price = product.yearly_price;
            period = 'year';
            break;
        default: // monthly
            priceId = product.monthly_price_id;
            price = product.monthly_price;
            period = 'month';
            break;
    }

    const formAction = async (data: FormData): Promise<void> => {
        window.scrollTo(0, 0);
        setOpen(true);

        if (user?.stripeCustomerId === null) {
            return setOpen(false);
        }

        data.append('price_id', priceId?.toString() ?? '');
        data.append('customer_id', user?.stripeCustomerId.toString() ?? '');

        const { client_secret } = await createCheckoutSession(data);

        return setClientSecret(client_secret);
    };

    const closeStripe = (): void => {
        setOpen(false);
        setClientSecret(null);
    };

    // needed because we cannot pass promises/objects from server to client
    const customerObject = JSON.parse(customer);

    if (
        !session ||
        !user ||
        !user.stripeCustomerId ||
        !customerObject ||
        !customerObject.phone ||
        !customerObject.address ||
        Object.keys(customerObject.address || {}).length === 0
    )
        return (
            <li className='flex h-fit w-full'>
                <div
                    className='relative flex w-full flex-col gap-4 rounded-xl border-[1px] border-[#ffffff11] bg-[#ffffff09] p-6 shadow-sm'
                    key={product.price_id}
                >
                    <h1 className='flex items-center text-2xl font-extrabold'>
                        {product.name}
                        <span className='ml-4 mt-2 font-mono text-sm tracking-tighter opacity-50'>
                            {formatAmountForDisplay((price ?? 0) / 100, 'usd')} / {period}
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
                            data-price-id={product.price_id}
                            key={product.price_id}
                        >
                            {/* <img src={product.icon} alt={product.name} className='w-full h-48 object-cover rounded-lg' /> */}
                            <h1 className='flex items-center text-2xl font-extrabold'>
                                {product.name}
                                <span className='ml-4 mt-2 font-mono text-sm tracking-tighter opacity-50'>
                                    {formatAmountForDisplay((price ?? 0) / 100, 'usd')} / {period}
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
