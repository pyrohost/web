import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/internal/", "/coming-soon", "/account", "/admin", "/api", "/login", "/register", "/reset-password", "/verify-email", "/oauth"],
		},
		sitemap: "https://pyro.host/sitemap.xml",
	};
}
