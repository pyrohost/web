import { Metadata } from 'next';

import BackgroundAccent from '@/components/ui/BackgroundAccent';
import ProductListing from '@/components/ui/ProductListing';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

import { auth } from '@/lib/auth';
import { ExtendedProduct } from '@/lib/interfaces/Product';
import prisma from '@/lib/prisma';
import { products } from '@/lib/products';
import { stripe } from '@/lib/stripe';

export const metadata: Metadata = {
    title: 'Pyro - All Plans',
    description:
        'Pyro offers a variety of plans to suit your needs. Whether you want to play games with friends or host your own server, we have you covered.',
};

export type PricingPeriod = 'monthly' | 'quarterly' | 'biannually' | 'yearly';

const Page = async () => {
    const session = await auth();
    let user;
    let customer;

    if (session) {
        user = await prisma.user.findUnique({
            where: {
                id: session?.user?.id,
            },
            include: {
                address: true,
            },
        });

        try {
            customer = await stripe.customers.retrieve(user?.stripeCustomerId ?? '');
        } catch (error) {
            customer = null;
        }
    } else {
        user = null;
        customer = null;
    }

    const renderProductList = (pricingPeriod: PricingPeriod) => (
        <>
            <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {products.length > 0 ? (
                    products.map((product: ExtendedProduct) => (
                        <ProductListing
                            key={product?.id}
                            product={product}
                            session={session}
                            user={user}
                            customer={JSON.stringify(customer)}
                            pricingPeriod={pricingPeriod}
                        />
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
                <div className='pointer-events-none absolute inset-0 opacity-25'>
                    <BackgroundAccent />
                </div>
            </section>

            <div className='container mx-auto px-4 py-8'>
                <Tabs defaultValue='monthly'>
                    <div className='mb-6 flex flex-row items-center gap-2'>
                        <TabsList className='flex w-full flex-col md:flex-row'>
                            <TabsTrigger className='w-full' value='monthly'>
                                Monthly
                            </TabsTrigger>
                            <TabsTrigger className='w-full' value='quarterly'>
                                Quarterly (3% off!)
                            </TabsTrigger>
                            <TabsTrigger className='w-full' value='biannually'>
                                Biannually (6% off!)
                            </TabsTrigger>
                            <TabsTrigger className='w-full' value='yearly'>
                                Yearly (12% off!)
                            </TabsTrigger>
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
