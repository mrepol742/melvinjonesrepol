import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      topics: data.topics,
    };
  });

  // Sort newest → oldest
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getRecentPosts(limit = 5) {
  return getAllPosts().slice(0, limit);
}
