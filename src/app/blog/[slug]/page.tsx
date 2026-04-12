import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";

function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);
  return { content, data };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = getPostBySlug(slug);

  const title = data.title ?? "Blog Post";
  const description = data.excerpt ?? "Read this blog post.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, data } = getPostBySlug(slug);

  const components = {
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre {...props} />,
    code: (props: React.HTMLAttributes<HTMLModElement>) => (
      <CodeBlock {...props} />
    ),
  };

  return (
    <article className="prose max-w-none my-18 p-3 md:p-8">
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
    </article>
  );
}
