import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");
const localePostsDirectory = (locale: string) =>
  path.join(postsDirectory, locale);

export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  topics?: string[];
};

export type BlogPostContent = {
  content: string;
  data: BlogPost;
};

function isMdxFile(filename: string) {
  return filename.endsWith(".mdx");
}

function readPostsFromDirectory(directory: string): BlogPost[] {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter(isMdxFile)
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(directory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        topics: data.topics,
      } satisfies BlogPost;
    });
}

export function getAllPosts(locale = "en") {
  try {
    const localizedPosts = readPostsFromDirectory(localePostsDirectory(locale));
    const posts =
      localizedPosts.length > 0 ? localizedPosts : readPostsFromDirectory(postsDirectory);

    return posts.sort(
      (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
    );
  } catch (err) {
    console.error("Failed to get all posts", err);
    return [];
  }
}

export function getPostBySlug(
  slug: string,
  locale = "en",
): BlogPostContent | null {
  try {
    if (!slug || slug.includes("/") || slug.includes("\\")) return null;

    const localizedFile = path.join(localePostsDirectory(locale), `${slug}.mdx`);
    const fallbackFile = path.join(postsDirectory, `${slug}.mdx`);
    const filePath = fs.existsSync(localizedFile) ? localizedFile : fallbackFile;

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    return {
      content,
      data: {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        topics: data.topics,
      },
    };
  } catch (err) {
    console.error("Failed to get post by slug", err);
    return null;
  }
}

export function getRecentPosts(limit = 5, locale = "en") {
  return getAllPosts(locale).slice(0, limit);
}
