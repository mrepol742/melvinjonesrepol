import type { MetadataRoute } from "next";
import staticSitemap from "./sitemaps/static";
import blogsSitemap from "./sitemaps/blogs";

export const revalidate = 43200; // 12 hours

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [staticUrls, blogUrls] = await Promise.all([
    staticSitemap(),
    blogsSitemap(),
  ]);

  return [...staticUrls, ...blogUrls];
}
