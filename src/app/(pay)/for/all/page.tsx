import type { Metadata } from "next";
import { redirect } from "next/navigation";

import ProductListing from "@/components/pay/ProductListing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/primitives/Tabs";

import prisma from "@/lib/api/prisma";
import productAPI from "@/lib/api/product";
import userAPI, { getUserBySession } from "@/lib/api/user";
import { isUserAbleToSubscribe } from '@/lib/utils/isUserAbleToSubscribe';
import { User } from "@prisma/client";

export const metadata: Metadata = {
	title: "Pyro - All Plans",
	description: "Pyro offers a variety of plans to suit your needs. Whether you want to play games with friends or host your own server, we have you covered.",
};

const Page = async () => {
	let dbUser: any;
	let userAddress: any;
	let isAbleToSubscribe = false;

	const sessionUser = await getUserBySession();

	if (sessionUser) {
		dbUser = await userAPI.getUserById(sessionUser?.id);
	}

	if (dbUser) {
		 isAbleToSubscribe = await isUserAbleToSubscribe(dbUser)
	}
	
	const products = await productAPI.getProducts();

	const renderProductList = async (everyMonths: number) => (
		<>
			<ul className="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2">
				{products.map(async (product) => (
					<ProductListing
						key={product?.id}
						product={product}
						prices={await productAPI.getPricesByProductIdAndMonths(product.id, everyMonths)}
						everyMonths={everyMonths}
						user={dbUser}
						displaySubscribe={isAbleToSubscribe}
					/>
				))}
			</ul>
		</>
	);

	return (
		<>
			<section className="relative flex flex-col md:flex-row">
				<div className="container mx-auto px-4 py-4">
					<h1 className="text-center font-bold text-4xl md:text-left md:text-5xl">All Plans</h1>
					<p className="mt-4 text-center text-white md:text-left">
						Pyro offers a variety of plans to suit your needs. Whether you want to play games with friends or host your own server, we have you covered.
					</p>
				</div>
			</section>

			<div className="container mx-auto px-4 py-8">
				<Tabs defaultValue="monthly">
					<div className="mb-6 flex flex-row items-center gap-2">
						<TabsList className="flex w-full flex-col md:flex-row">
							<TabsTrigger className="w-full" value="monthly">
								Monthly
							</TabsTrigger>
							<TabsTrigger className="w-full" value="quarterly">
								Quarterly (3% off!)
							</TabsTrigger>
							<TabsTrigger className="w-full" value="semiannually">
								Semiannually (6% off!)
							</TabsTrigger>
							<TabsTrigger className="w-full" value="yearly">
								Yearly (12% off!)
							</TabsTrigger>
						</TabsList>
					</div>
					<TabsContent value="monthly">{renderProductList(1)}</TabsContent>
					<TabsContent value="quarterly">{renderProductList(3)}</TabsContent>
					<TabsContent value="semiannually">{renderProductList(6)}</TabsContent>
					<TabsContent value="yearly">{renderProductList(12)}</TabsContent>
				</Tabs>
			</div>
		</>
	);
};

export default Page;
