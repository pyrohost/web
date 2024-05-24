import stripe from '@/lib/api/stripe';

import { ExtendedProduct } from '@/lib/interfaces/Product';

const productList = await stripe.products.list();
const priceList = await stripe.prices.list({
    limit: 100,
});

const priceMap = new Map();
priceList.data.forEach((price) => {
    const key = `${price.product}-${price.recurring?.interval}-${price.recurring?.interval_count || 1}`;
    priceMap.set(key, price);
});

let products = productList.data.map((product) => {
    const monthlyPriceKey = `${product.id}-month-1`;
    const yearlyPriceKey = `${product.id}-year-1`;
    const biannualPriceKey = `${product.id}-month-6`;
    const quarterlyPriceKey = `${product.id}-month-3`;

    const monthlyPrice = priceMap.get(monthlyPriceKey);
    let yearlyPrice = priceMap.get(yearlyPriceKey);
    const biannualPrice = priceMap.get(biannualPriceKey);
    const quarterlyPrice = priceMap.get(quarterlyPriceKey);

    if (!yearlyPrice) {
        const yearlyPriceKeyAlternative = `${product.id}-month-12`;
        yearlyPrice = priceMap.get(yearlyPriceKeyAlternative);
    }

    return {
        id: product.id,
        name: product.name,
        icon: product.images[0] ?? '',
        category: product.metadata.category ?? 'Miscellaneous',
        description: product.description,
        monthly_price_id: monthlyPrice?.id,
        monthly_price: monthlyPrice?.unit_amount,
        yearly_price_id: yearlyPrice?.id,
        yearly_price: yearlyPrice?.unit_amount,
        biannual_price_id: biannualPrice?.id,
        biannual_price: biannualPrice?.unit_amount,
        quarterly_price_id: quarterlyPrice?.id,
        quarterly_price: quarterlyPrice?.unit_amount,
    } as ExtendedProduct;
});

let categories = products.map((product) => product?.category);
categories = [...new Set(categories)];

export { products, categories };
