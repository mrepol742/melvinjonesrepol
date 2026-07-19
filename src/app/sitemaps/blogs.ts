import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getAllPosts("en").map((post) => ({
    url: `https://www.melvinjonesrepol.com/blog/${post.slug}`,
  }));
}
