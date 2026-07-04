import RSS from "rss";
import { getAllPosts } from "@/lib/posts";

export async function generateRssFeed() {
  const site_url = "https://www.melvinjonesrepol.com";

  const feed = new RSS({
    title: "My Blog",
    description: "Latest updates and blog posts",
    site_url,
    feed_url: `${site_url}/rss.xml`,
  });

  const posts = await getAllPosts();

  // sort newest first
  const latestPosts = posts
    .sort(
      (a, b) =>
        new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
    )
    .slice(0, 20); // TOP 10 NEW CHANGES

  latestPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt ?? "",
      url: `${site_url}/blog/${post.slug}`,
      date: post.date ?? new Date().toISOString(),
    });
  });

  return feed.xml({ indent: true });
}
