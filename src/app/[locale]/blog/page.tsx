import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";
import Header from "@/components/ui/Header";
import CollectionFilters from "@/components/ui/CollectionFilters";

const POSTS_PER_PAGE = 12;
const SITE_URL = "https://www.melvinjonesrepol.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blog - Melvin Jones Repol`,
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
      title: `Blog - Melvin Jones Repol`,
      description:
        "Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry.",
      url: `${SITE_URL}/blog`,
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 800,
          height: 600,
          alt: "Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog - Melvin Jones Repol`,
      description:
        "Browse my blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sParams = await searchParams;
  const query = Array.isArray(sParams.q) ? sParams.q.join(", ") : sParams.q || "";
  const topic = Array.isArray(sParams.topic) ? sParams.topic[0] : sParams.topic || "";
  const posts = getAllPosts("en");
  const topics = Array.from(new Set(posts.flatMap((post) => post.topics ?? []).filter(Boolean))).sort();
  const filteredPosts = posts.filter((post) => {
    const haystack = `${post.title} ${post.excerpt ?? ""} ${(post.topics ?? []).join(" ")}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (!topic || post.topics?.includes(topic));
  });
  const isFiltered = Boolean(query || topic);
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const visiblePosts = isFiltered ? filteredPosts : posts.slice(0, POSTS_PER_PAGE);

  return (
    <>
      <Header
        title={
          <>
            Insights
            <br />
            <span className="homepage-accent">&</span>
            <br />
            experiences.
          </>
        }
        intro="Thoughts, insights, and experiences on software development, technology trends, and personal growth in the tech industry."
      />

      <section className="px-6 my-6 md:px-10">
        <CollectionFilters
          label="Search the notes"
          description="Search articles by subject or narrow the archive to a topic."
          initialQuery={query}
          initialFilter={topic}
          filterParam="topic"
          filterLabel="Filter articles by topic"
          allFilterLabel="All topics"
          options={topics.map((item) => ({ value: item, label: item }))}
        />

        <p className="mt-6 text-sm text-stone-600 dark:text-stone-400">
          Showing <span className="font-bold text-orange-700 dark:text-orange-300">{visiblePosts.length}</span>{" "}
          {visiblePosts.length === 1 ? "article" : "articles"}
        </p>

        {visiblePosts.length === 0 ? (
          <div className="py-20 text-center text-stone-500 dark:text-stone-400">
            <p className="text-lg font-medium">No articles match these filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 md:gap-6">
            {visiblePosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}

        {!isFiltered && <Pagination currentPage={1} totalPages={totalPages} />}
      </section>
    </>
  );
}
