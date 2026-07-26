import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

const POSTS_PER_PAGE = 12;
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.melvinjonesrepol.com"
    : "http://localhost:3000";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts("en");
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const paginationUrls: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/blog`, changeFrequency: "daily", priority: 0.9 },
    ...Array.from({ length: totalPages - 1 }, (_, i) => ({
      url: `${BASE_URL}/blog/page/${i + 2}`,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
  ];

  return [...paginationUrls, ...postUrls];
}
