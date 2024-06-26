import { notFound, redirect } from "next/navigation";

import CreateProduct from "@/components/admin/CreateProduct";
import ImportProductsForm from "@/components/admin/ImportProductsForm";

import productAPI from "@/lib/api/product";
import UserAPI, { getUserBySession } from "@/lib/api/user";

const Page = async () => {
	const user = await getUserBySession();
	if (!user || !user.admin) {
		return notFound();
	}

	const products = await productAPI.getProducts();

	return (
		<div className="container mx-auto flex flex-col gap-4 lg:py-4">
			<h1 className="font-extrabold text-[max(24px,min(5vw,48px))] leading-[1.09] tracking-tighter">Products</h1>
			<ul>{products.length > 0 ? products.map((product) => <li key={product.id}>{product.name}</li>) : <li>No products found. Make one dingus</li>}</ul>
			<CreateProduct />
			<ImportProductsForm />
		</div>
	);
};

export default Page;
