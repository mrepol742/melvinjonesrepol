import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/posts";

type Heading = {
  level: number;
  text: string;
  id: string;
};

type Post = {
  content: string;
  data: {
    title: string;
    excerpt?: string;
    date?: string;
    topics?: string[];
  };
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractHeadings(content: string): Heading[] {
  const regex = /^(#{1,3})\s+(.*)$/gm;
  const headings: Heading[] = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();

    headings.push({
      level,
      text,
      id: slugify(text),
    });
  }

  return headings;
}

function getPostBySlug(slug: string): Post | null {
  try {
    if (!slug || slug.includes("/") || slug.includes("\\")) return null;

    const filePath = path.join(
      process.cwd(),
      "src/content/blog",
      `${slug}.mdx`,
    );

    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);

    return { content, data: data as Post["data"] };
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.data.title ?? "Blog Post",
    description: post.data.excerpt ?? "Read this blog post.",
    keywords: post.data.topics,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      type: "article",
      siteName: "Melvin Jones Repol",
      locale: "en_US",
    },
    alternates: {
      canonical: `https://www.melvinjonesrepol.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.excerpt,
      creator: "@mrepol742",
    },
  };
}

/**
 * Table of Contents component that generates a list of links based on the headings in the blog post.
 *
 * @param headings - An array of Heading objects containing the level, text, and id for each heading in the blog post.
 * @returns A React component that renders the table of contents, or null if there are no headings.
 */
function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null;

  return (
    <aside className="hidden lg:block w-64 sticky top-24 self-start">
      <div className="text-sm font-semibold mb-3">On this page</div>

      <ul className="space-y-1 text-sm">
        {headings.map((h, i) => (
          <li
            key={i}
            style={{
              paddingLeft: `${(h.level - 1) * 12}px`,
            }}
          >
            <a
              href={`#${h.id}`}
              className=" hover:text-orange-500 transition-colors"
            >
              • {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  const posts = getAllPosts();
  if (!post) notFound();

  const { content, data } = post;

  const headings = extractHeadings(content);
  const estimatedReadingTime = Math.ceil(content.split(" ").length / 200);

  const components = {
    h1: (props: any) => {
      const id = slugify(props.children?.toString() || "");
      return <h1 id={id} {...props} />;
    },
    h2: (props: any) => {
      const id = slugify(props.children?.toString() || "");
      return <h2 id={id} {...props} />;
    },
    h3: (props: any) => {
      const id = slugify(props.children?.toString() || "");
      return <h3 id={id} {...props} />;
    },
    pre: (props: any) => <pre {...props} />,
    code: (props: any) => <CodeBlock {...props} />,
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-10 w-full max-w-6xl">
          <article className="prose bg-white max-w-none p-3 md:p-8 flex-1">
            <div className="py-18">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-orange-500 transition-colors mb-4 no-underline"
              >
                <span>←</span> Back to blogs
              </Link>

              <h1>{data.title}</h1>

              {data.excerpt && <p>{data.excerpt}</p>}

              <p className="text-sm text-muted-foreground">
                {data.date} • {estimatedReadingTime} min read
              </p>

              {data.topics && data.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 my-4">
                  {data.topics.map((topic: string, i: number) => (
                    <span
                      key={i}
                      className="inline-flex capitalize rounded-full border px-2.5 py-1 text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <MDXRemote source={content} components={components} />
            </div>
          </article>

          <TableOfContents headings={headings} />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-white p-10 gap-10 w-full max-w-6xl">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Related Articles
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {posts
              .filter((p) => p.slug !== slug)
              .slice(0, 4)
              .map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full rounded-2xl text-gray-800 border p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex capitalize rounded-full border px-2.5 py-1 text-xs">
                        {post.topics?.[0] ?? "general"}
                      </span>
                      <p className="text-xs md:text-sm">{post.date}</p>
                    </div>

                    <h2 className="text-lg md:text-xl font-semibold leading-snug mb-2 hover:text-orange-500 transition-colors">
                      {post.title}
                    </h2>

                    <p
                      className="text-sm md:text-base line-clamp-3"
                      title={post.excerpt}
                    >
                      {post.excerpt}
                    </p>

                    <div className="mt-5 inline-flex items-center text-sm font-medium text-orange-600 dark:text-orange-400">
                      Read article
                      <span className="ml-1 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
