import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import BlogCard from "../components/BlogCard";

export const dynamic = "force-static";
export const revalidate = false;

type Heading = {
  level: number;
  text: string;
  id: string;
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

export function generateStaticParams() {
  return getAllPosts("en").map(({ slug }) => ({ locale: "en", slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");

  if (!post) return notFound();

  return {
    title: (post.data.title ?? "Blog Post") + " - Melvin Jones Repol",
    description: post.data.excerpt ?? "Read this blog post.",
    keywords: post.data.topics,
    openGraph: {
      title: (post.data.title ?? "Blog Post") + " - Melvin Jones Repol",
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
      title: (post.data.title ?? "Blog Post") + " - Melvin Jones Repol",
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
    <aside className="hidden xl:block w-64 sticky top-24 self-start">
      <div className="flex items-center gap-4 text-sm font-semibold mb-3">
        <h3 className="text-lg font-semibold whitespace-nowrap">
          On this page
        </h3>
        <div className="h-px flex-1 bg-gray-400" />
      </div>

      <ul className="space-y-1 text-sm">
        {headings.map((h, i) => (
          <li
            key={i}
            style={{
              paddingLeft: `${(h.level - 1) * 12}px`,
            }}
          >
            <Link
              href={`#${h.id}`}
              title={h.text}
              className=" hover:text-orange-500 transition-colors line-clamp-1 truncate"
            >
              • {h.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug, "en");
  const posts = getAllPosts("en");
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
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8">
              {data.title}
            </h1>

            {data.excerpt && (
              <p
                className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {data.excerpt}
              </p>
            )}

            <p
              className="mt-3 text-sm text-zinc-500 flex items-center gap-1.5"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <span>🌐</span>
              Blog posts are available in English only.
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{new Date(data.date).toLocaleDateString()}</p>
              <p className="mt-1 text-sm text-zinc-400">Date</p>
            </div>
            <div>
              <p className="text-4xl font-black">
                {estimatedReadingTime} min read
              </p>
              <p className="mt-1 text-sm text-zinc-400">Reading Time</p>
            </div>
            {data.topics && data.topics.length > 0 && (
              <div className="col-span-2 flex flex-wrap items-center gap-2">
                {data.topics.map((topic: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs capitalize"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 my-6 md:px-10">
        <div className="flex justify-center mb-4">
          <div className="flex gap-10 w-full max-w-6xl">
            <article className="prose max-w-none flex-1 min-w-0">
              <MDXRemote
                source={content}
                components={components}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </article>

            <TableOfContents headings={headings} />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-lg font-semibold whitespace-nowrap">
                Articles you might like
              </h3>
              <div className="h-px flex-1 bg-gray-400" />
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {posts
                .filter((p) => p.slug !== slug)
                .slice(0, 8)
                .map((post, index) => (
                  <BlogCard key={post.slug} post={post} index={index} />
                ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
