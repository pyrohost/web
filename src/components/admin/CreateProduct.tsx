const CreateProduct = () => {
	return (
		<div className="relative flex w-full max-w-[400px] flex-col gap-4 rounded-xl border-[1px] border-[#ffffff15] bg-[#ffffff14] p-8 shadow-sm">
			<form className="contents" action={"/api/admin/products"} method="post">
				<input
					className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none"
					type="text"
					name="name"
					placeholder="name"
				/>
				<input
					className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none"
					type="text"
					name="description"
					placeholder="description"
				/>
				<input
					className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none"
					type="text"
					name="category"
					placeholder="category"
				/>
				<input
					className="rounded-lg bg-[#ffffff17] px-4 py-2 text-sm outline-none"
					type="text"
					name="monthlyPrice"
					placeholder="price"
				/>
				<button
					className="relative mt-4 w-full rounded-full border-0 bg-brand py-2 text-sm font-bold capitalize outline-none ring-0"
					type="submit"
				>
					Create
				</button>
			</form>
		</div>
	);
};

export default CreateProduct;
