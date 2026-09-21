import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import { getRecentPosts } from "@/lib/posts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BlogSection({ locale = "en" }: { locale?: string }) {
  return (
    <Slider>
      {getRecentPosts(10).map((post: any, index: number) => {
        return (
          <Link
            key={index}
            href={
              locale === "en"
                ? `/blog/${post.slug}`
                : `/${locale}/blog/${post.slug}`
            }
            className="block w-[90vw] shrink-0 snap-start md:w-96"
          >
            <Card index={index} className="group h-full">
              <p className="mb-2 text-xl font-bold line-clamp-2">
                {post.title}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.topics.map((topic: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <p className="mb-4 line-clamp-4" title={post.excerpt}>
                {post.excerpt}
              </p>

              <div className="flex justify-end items-center gap-4">
                <button
                  title="Read more"
                  className="inline-flex items-center text-white bg-orange-600 hover:bg-orange-700 font-medium text-sm px-4 py-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </Card>
          </Link>
        );
      })}
    </Slider>
  );
}
