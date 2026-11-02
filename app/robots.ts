import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://cardboardbalerecycling.com/sitemap.xml",
    host: "https://cardboardbalerecycling.com",
  };
}
