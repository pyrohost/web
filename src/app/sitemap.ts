import type { MetadataRoute } from "next";

import { games } from "@/lib/static/games";

function generateGameMap(games: { name: string; slug: string; images: { banner: string } }[]): MetadataRoute.Sitemap {
	return games.map((game) => {
		return {
			url: `https://pyro.host/for/${game.slug}`,
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 1,
		};
	});
}

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://pyro.host",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 1,
		},
		{
			url: "https://pyro.host/for",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: "https://pyro.host/legal/privacy",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://pyro.host/legal/terms",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://pyro.host/legal/cookies",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://pyro.host/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		...generateGameMap(games),
	];
}
