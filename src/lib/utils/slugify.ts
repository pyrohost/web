export default function slugify(name: string) {
	return name
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^a-z0-9-]/g, "");
}
