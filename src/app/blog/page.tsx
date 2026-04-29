import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

const POSTS_PER_PAGE = 12;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const rawPage = Number(sp?.page ?? "1");
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  return {
    title: `Blog - Page ${page}`,
    description: `Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry. Page ${page}.`,
    keywords: ["blog", "software development", "technology", "personal growth"],
    openGraph: {
      title: `Blog - Page ${page}`,
      description: `Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry. Page ${page}.`,
      type: "website",
      siteName: "Melvin Jones Repol",
      locale: "en_US",
    },
    alternates: {
      canonical: `https://www.melvinjonesrepol.com/blog?page=${page}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog - Page ${page}`,
      description: `Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry. Page ${page}.`,
      creator: "@mrepol742",
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const rawPage = Number(sp?.page ?? "1");
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, end);

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-up">
          Blog Posts
        </h1>
        <p className="mt-2 mb-5" data-aos="fade-up" data-aos-delay="100">
          A collection of my thoughts, insights, and experiences on software
          development, technology trends, and personal growth in the tech
          industry.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {paginatedPosts.map((post, index) => (
            <li
              key={post.slug}
              className="group"
              data-aos="fade-up"
              data-aos-delay={120 + index * 80}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full rounded-2xl border p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex capitalize rounded-full border px-2.5 py-1 text-xs">
                    {post.topics?.[0] ?? "general"}
                  </span>
                  <p className="text-xs md:text-sm">{post.date}</p>
                </div>

                <h2 className="text-lg md:text-xl font-semibold leading-snug mb-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm md:text-base line-clamp-3">
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

        <div className="flex gap-4 mt-6">
          {safePage > 1 && (
            <Link href={`/blog?page=${safePage - 1}`}>← Prev</Link>
          )}
          {safePage < totalPages && (
            <Link href={`/blog?page=${safePage + 1}`}>Next →</Link>
          )}
        </div>
      </section>
    </main>
  );
}
