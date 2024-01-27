import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/__internal/",
    },
    sitemap: "https://pyro.host/sitemap.xml",
  };
}
