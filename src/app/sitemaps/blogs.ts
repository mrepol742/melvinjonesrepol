import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ["en", "fil", "hi", "es", "cmn", "nl", "fr", "ru", "ar"];

  return locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      url:
        locale === "en"
          ? `https://www.melvinjonesrepol.com/blog/${post.slug}`
          : `https://www.melvinjonesrepol.com/${locale}/blog/${post.slug}`,
    })),
  );
}
