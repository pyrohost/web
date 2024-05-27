import productAPI from "@/lib/api/product";

export async function POST(req: Request, res: Response) {
	const formData = await req.formData();

	const data = {
		name: formData.get("name") as string,
		description: formData.get("description") as string,
		category: formData.get("category") as string,
		monthlyPrice: formData.get("monthlyPrice") as string,
	};

	try {
		await productAPI.createRecurringProduct({
			name: data.name,
			description: data.description,
			category: data.category,
			monthlyPrice: data.monthlyPrice,
		});
	} catch (error) {
		return new Response("Error creating product" + error, { status: 500 });
	}

	return new Response("Product created", { status: 200 });
}
