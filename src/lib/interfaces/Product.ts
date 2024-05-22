export interface Product {
    id: string;
    name: string;
    icon: string;
    category: string;
    description: string | null;
    price_id: string | undefined;
    price: number | null | undefined;
    currency: string | undefined;
}

export interface ExtendedProduct extends Product {
    monthly_price_id: string;
    monthly_price: number;
    yearly_price_id: string;
    yearly_price: number;
    biannual_price_id: string;
    biannual_price: number;
    quarterly_price_id: string;
    quarterly_price: number;
}