import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";

const POSTS_PER_PAGE = 12;
const SITE_URL = "https://www.melvinjonesrepol.com";
const SITE_NAME = "Melvin Jones Repol";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/blog.png`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blog - ${SITE_NAME}`,
    description:
      "Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry.",
    keywords: [
      "blog",
      "software development",
      "technology",
      "personal growth",
      "web development",
    ],
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
      title: `Blog - ${SITE_NAME}`,
      description:
        "Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry.",
      type: "website",
      url: `${SITE_URL}/blog`,
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
      title: `Blog - ${SITE_NAME}`,
      description:
        "Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry.",
      creator: "@mrepol742",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function BlogPage() {
  const posts = getAllPosts("en");
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const paginatedPosts = posts.slice(0, POSTS_PER_PAGE);

  const allTopics = Array.from(
    new Set(posts.flatMap((p) => p.topics ?? []).filter(Boolean)),
  ).slice(0, 6);

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Insights
              <br />
              <span className="opacity-40">&</span>
              <br />
              experiences.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Thoughts, insights, and experiences on software development,
              technology trends, and personal growth in the tech industry.
            </p>

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
              <p className="text-4xl font-black">{posts.length}</p>
              <p className="mt-1 text-sm text-zinc-400">Posts</p>
            </div>
            <div>
              <p className="text-4xl font-black">{totalPages}</p>
              <p className="mt-1 text-sm text-zinc-400">Pages</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {allTopics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs capitalize"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 my-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 md:gap-6">
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <Pagination currentPage={1} totalPages={totalPages} />
      </section>
    </main>
  );
}
