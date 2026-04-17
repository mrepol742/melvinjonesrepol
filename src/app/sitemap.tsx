import type { MetadataRoute } from "next";
import staticSitemap from "./sitemaps/static";
import blogsSitemap from "./sitemaps/blogs";

export const revalidate = 86400; // 24 hours (in seconds)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [staticUrls, blogUrls] = await Promise.all([
    staticSitemap(),
    blogsSitemap(),
  ]);

  return [...staticUrls, ...blogUrls];
}
