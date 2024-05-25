import { notFound, redirect } from 'next/navigation';


import ProductsAPI from '@/lib/api/product';
import UserAPI from '@/lib/api/user';
import CreateProduct from '@/components/admin/CreateProduct';

const Page = async () => {
    // const user = await UserAPI.getUserFromSession(await auth());
    // if (!user || !user.admin) {
    //     return notFound();
    // }

    const products = await ProductsAPI.getProducts();

    return (
      <div className='container mx-auto flex flex-col gap-4 lg:py-4'>
      <h1 className='text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter'>Admin</h1>
      <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <h1 className='text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter'>Make a Product</h1>
            <CreateProduct />
        </div>
    );
};

export default Page;
