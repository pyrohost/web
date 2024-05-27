import { notFound, redirect } from "next/navigation";

import CreateProduct from "@/components/admin/CreateProduct";

import ProductsAPI from "@/lib/api/product";
import UserAPI, { getUserBySession } from "@/lib/api/user";

const Page = async () => {
	const user = await getUserBySession();
	if (!user || !user.admin) {
		return notFound();
	}

	const products = await ProductsAPI.getProducts();

	return (
		<div className="container mx-auto flex flex-col gap-4 lg:py-4">
			<h1 className="text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter">
				Products
			</h1>
			<ul>
				{products.length > 0 ? (
					products.map((product) => <li key={product.id}>{product.name}</li>)
				) : (
					<li>No products found. Make one dingus</li>
				)}
			</ul>
			<h1 className="text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter">
				Make a Product
			</h1>
			<CreateProduct />
		</div>
	);
};

export default Page;
