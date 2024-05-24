import prisma from '@/lib/api/prisma';
import { Product } from '@/lib/interfaces/Product';

interface PyroProduct extends Product {
    stripeProductId: string;
}

class ProductAPI {
    private async getProducts(): Promise<PyroProduct[]> {
        return prisma.product.findMany();
    }
}

const productAPI = new ProductAPI();
export default productAPI;
