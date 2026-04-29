import { getRecentPosts } from "@/lib/posts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BlogSection() {
  return (
    <div
      className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex items-stretch gap-6 py-6 scrollbar-hide"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
    >
      {getRecentPosts(10).map((post: any, index: number) => {
        return (
          <article
            key={index}
            className="snap-start flex-shrink-0 w-80 md:w-96 flex"
          >
            <div className="p-6 border rounded-2xl shadow-sm max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
              <span className="text-3xl font-bold text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-2 text-xl font-bold">{post.title}</p>
              <p className="mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.topics.map((topic: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-gray-500/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-500 mb-4">{post.date}</p>

              <div className="flex justify-end items-center gap-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
                >
                  Read more
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
