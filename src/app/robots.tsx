import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/projects?", "/gaming?"],
    },
    sitemap: "https://www.melvinjonesrepol.com/sitemap.xml",
  };
}
