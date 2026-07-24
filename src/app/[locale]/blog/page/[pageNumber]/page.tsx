import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogCard from "../../components/BlogCard";
import Pagination from "../../components/Pagination";

const POSTS_PER_PAGE = 12;
const SITE_URL = "https://www.melvinjonesrepol.com";
const SITE_NAME = "Melvin Jones Repol";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/blog.png`;

export async function generateStaticParams() {
  const posts = getAllPosts("en");
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    pageNumber: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; pageNumber: string }>;
}): Promise<Metadata> {
  const { pageNumber } = await params;
  const page = Number(pageNumber);

  const title = `Blog - Page ${page} - ${SITE_NAME}`;
  const description = `Page ${page} of blog posts covering software development, technology trends, and personal growth in the tech industry.`;
  const canonicalUrl = `${SITE_URL}/blog/page/${page}`;

  return {
    title,
    description,
    keywords: [
      "blog",
      "software development",
      "technology",
      "personal growth",
      "web development",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@mrepol742",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function BlogPageN({
  params,
}: {
  params: Promise<{ locale: string; pageNumber: string }>;
}) {
  const { pageNumber } = await params;
  const page = Number(pageNumber);

  const posts = getAllPosts("en");
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  if (!Number.isInteger(page) || page < 2 || page > totalPages) {
    if (page === 1) redirect("/blog");
    notFound();
  }

  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <main>
      <section className="px-6 pt-24 pb-6 md:px-10 border-b border-zinc-800">
        <div className="flex items-baseline gap-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
            Blog
          </h1>
          <span className="text-2xl sm:text-3xl font-black text-zinc-600 tracking-tighter">
            / page {page}
          </span>
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          Showing posts {start + 1}–
          {Math.min(start + POSTS_PER_PAGE, posts.length)} of {posts.length}
        </p>
      </section>

      <section className="px-6 my-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 md:gap-6">
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={start + index} />
          ))}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} />
      </section>
    </main>
  );
}
