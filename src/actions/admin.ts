"use server";

import productAPI from "@/lib/api/product";

interface ActionResult {
	success?: string;
	error?: string;
}

export const importProductsFromStripe = async (): Promise<ActionResult> => {
	await productAPI.importProductsFromStripe("Game Panel");
	return { success: "Products imported successfully" };
};
