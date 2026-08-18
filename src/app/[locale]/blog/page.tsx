import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";
import Header from "@/components/ui/Header";

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

export default async function BlogPage() {
  const posts = getAllPosts("en");
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const paginatedPosts = posts.slice(0, POSTS_PER_PAGE);

  const allTopics = Array.from(
    new Set(posts.flatMap((p) => p.topics ?? []).filter(Boolean)),
  ).slice(0, 6);

  return (
    <>
      <Header
        title={
          <>
            Insights
            <br />
            <span className="opacity-40">&</span>
            <br />
            experiences.
          </>
        }
        intro="Thoughts, insights, and experiences on software development, technology trends, and personal growth in the tech industry."
      />

      <section className="px-6 my-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 md:gap-6">
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <Pagination currentPage={1} totalPages={totalPages} />
      </section>
    </>
  );
}
