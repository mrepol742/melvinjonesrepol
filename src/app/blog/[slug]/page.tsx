import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { notFound } from "next/navigation";

function getPostBySlug(slug: string) {
  try {
    if (!slug || slug.includes("/") || slug.includes("\\")) {
      return null;
    }

    const filePath = path.join(
      process.cwd(),
      "src/content/blog",
      `${slug}.mdx`,
    );

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);

    return { content, data };
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

  if (!post)
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };

  const title = post.data.title ?? "Blog Post";
  const description = post.data.excerpt ?? "Read this blog post.";

  return {
    title,
    description,
    keywords: post.data.topics,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Melvin Jones Repol",
      locale: "en_US",
    },
    alternates: {
      canonical: `https://www.melvinjonesrepol.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@mrepol742",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content, data } = post;
  const components = {
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre {...props} />,
    code: (props: React.HTMLAttributes<HTMLModElement>) => (
      <CodeBlock {...props} />
    ),
  };

  return (
    <article className="prose bg-white max-w-none p-3 md:p-8">
      <div className="py-18">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 no-underline text-sm text-zinc-500 hover:text-orange-500 transition-colors mb-4"
        >
          <span aria-hidden>←</span>
          Back to blogs
        </Link>

        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <p>{data.excerpt}</p>
        <p className="text-sm text-muted-foreground">{data.date}</p>
        <div className="flex gap-2 my-4">
          {data.topics.map((topic: string, index: number) => (
            <span
              key={index}
              className="inline-flex capitalize rounded-full border px-2.5 py-1 text-xs"
            >
              {topic}
            </span>
          ))}
        </div>

        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}
