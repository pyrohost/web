import currency from 'currency.js';

import { Category, Price, Product } from '@prisma/client';

import prisma from '@/lib/api/prisma';
import stripe from '@/lib/api/stripe';
import slugify from '@/lib/utils/slugify';

class ProductAPI {
    private async getOrCreateCategory(rawCategoryName: string): Promise<Category> {
        const categoryName = slugify(rawCategoryName);
        const existingCategory = await prisma.category.findFirst({ where: { name: categoryName } });
        return existingCategory || (await prisma.category.create({ data: { name: categoryName } }));
    }

    calcPrice(basePrice: string, months: number): number {
        let price = currency(basePrice).multiply(months).intValue;
        let discount = Math.min(0.01 * months, 0.12);
        if (months > 1) {
            price = price - price * discount;
        }

        return Math.ceil(price);
    }

    private async createPrices(dbProductId: string, baseMonthlyPrice: string): Promise<Price[]> {
        const dbProduct = await prisma.product.findUniqueOrThrow({ where: { id: dbProductId } });

        const intervals = [1, 3, 6, 12, 24];
        let prices: Price[] = [];

        for (const months of intervals) {
            const amount = this.calcPrice(baseMonthlyPrice, months);

            const stripePrice = await stripe.prices.create({
                product: dbProduct.stripeId,
                currency: 'usd',
                unit_amount: amount,
                recurring: { interval: 'month', interval_count: months },
            });

            let price = await prisma.price.create({
                data: {
                    productId: dbProductId,
                    stripeId: stripePrice.id,
                    amount,
                    recurring: true,
                    every_months: months,
                    currency: 'usd',
                },
            });

            prices.push(price);
        }

        return prices;
    }

    async getPricesByProductId(productId: string): Promise<Price[]> {
        return prisma.price.findMany({ where: { productId } });
    }

    async getPricesByProductIdAndMonths(productId: string, every_months: number): Promise<Price[]> {
        return prisma.price.findMany({ where: { productId, every_months } });
    }

    async getProducts(): Promise<Product[]> {
        return prisma.product.findMany();
    }

    async createRecurringProduct({
        name,
        description,
        category,
        monthlyPrice,
    }: {
        name: string;
        description: string;
        category: string;
        monthlyPrice: string;
    }): Promise<Product> {
        const dbCategory = await this.getOrCreateCategory(category);
        const stripeProduct = await stripe.products.create({ name, description });

        const dbProduct = await prisma.product.create({
            data: {
                categoryId: dbCategory.id,
                stripeId: stripeProduct.id,
                name,
                description,
            },
        });

        await this.createPrices(dbProduct.id, monthlyPrice);
        return dbProduct;
    }
}

const productAPI = new ProductAPI();
export default productAPI;
