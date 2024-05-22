import { Metadata } from 'next';

import { ExtendedProduct } from '@/lib/interfaces/Product';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

import { products } from '@/lib/products';

import BackgroundAccent from '@/components/ui/BackgroundAccent';

export const metadata: Metadata = {
    title: 'Pyro - All Plans',
    description:
        'Pyro offers a variety of plans to suit your needs. Whether you want to play games with friends or host your own server, we have you covered.',
};

export type PricingPeriod = 'monthly' | 'quarterly' | 'biannually' | 'yearly';

const Page = () => {
    const getDiscountMessage = (pricingPeriod: PricingPeriod) => {
        const discounts = {
            monthly: { nextPeriod: 'quarterly', discount: '3%' },
            quarterly: { nextPeriod: 'biannually', discount: '6%' },
            biannually: { nextPeriod: 'yearly', discount: '12%' },
            yearly: null,
        };

        const discountInfo = discounts[pricingPeriod];
        if (discountInfo === null) {
            return null;
        }

        return `Switch to the ${discountInfo.nextPeriod} price for ${discountInfo.discount} off!`;
    };

    const renderProductList = (pricingPeriod: PricingPeriod) => (
        <>
            <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {products.length > 0 ? (
                    products.map((product: ExtendedProduct) => (
                        <div key={product.id} className='bg-[#ffffff14] overflow-hidden rounded-2xl shadow-md'>
                            <div className='p-6'>
                                <h2 className='mb-2 text-xl font-bold'>{product.name}</h2>
                                <p className='mb-4'>{product.description}</p>
                                <div className='flex flex-col space-y-2'>
                                    <div className='flex justify-between'>
                                        <p>
                                            {pricingPeriod === 'monthly' && 'Monthly'}
                                            {pricingPeriod === 'quarterly' && 'Quarterly'}
                                            {pricingPeriod === 'biannually' && 'Biannually'}
                                            {pricingPeriod === 'yearly' && 'Yearly'}
                                        </p>
                                        <p>$
                                            {pricingPeriod === 'monthly' && (product.monthly_price / 100).toFixed(2)}
                                            {pricingPeriod === 'quarterly' && (product.quarterly_price / 100).toFixed(2)}
                                            {pricingPeriod === 'biannually' && (product.biannual_price / 100).toFixed(2)}
                                            {pricingPeriod === 'yearly' && (product.yearly_price / 100).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    role='button'
                                    className='hover:bg-brand-dark focus:ring-brand-light mt-4 w-full rounded-full border border-transparent bg-brand px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2'
                                >
                                    Select Plan
                                </button>
                            </div>
                        </div>

                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </ul>
        </>
    );

    return (
        <>
            <section className='relative flex flex-col md:flex-row'>
                <div className='container mx-auto px-4 py-4'>
                    <h1 className='text-center text-4xl font-bold md:text-left md:text-5xl'>All Plans</h1>
                    <p className='mt-4 text-center text-white md:text-left'>
                        Pyro offers a variety of plans to suit your needs. Whether you want to play games with friends
                        or host your own server, we have you covered.
                    </p>
                </div>
                <div className='absolute inset-0 opacity-25 pointer-events-none'>
                <BackgroundAccent />
                </div>
            </section>

            <div className='container mx-auto px-4 py-8'>
                <Tabs defaultValue='monthly'>
                    <div className='mb-6 flex flex-row items-center gap-2'>
                        <TabsList className='w-full flex flex-col md:flex-row'>
                            <TabsTrigger className='w-full' value='monthly'>Monthly</TabsTrigger>
                            <TabsTrigger className='w-full' value='quarterly'>Quarterly (3% off!)</TabsTrigger>
                            <TabsTrigger className='w-full' value='biannually'>Biannually (6% off!)</TabsTrigger>
                            <TabsTrigger className='w-full' value='yearly'>Yearly (12% off!)</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value='monthly'>{renderProductList('monthly')}</TabsContent>
                    <TabsContent value='quarterly'>{renderProductList('quarterly')}</TabsContent>
                    <TabsContent value='biannually'>{renderProductList('biannually')}</TabsContent>
                    <TabsContent value='yearly'>{renderProductList('yearly')}</TabsContent>
                </Tabs>
            </div>
        </>
    );
};

export default Page;
