import Card from "@/components/ui/Card";
import { BlogPost } from "@/lib/posts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BlogCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group h-full" index={index}>
        <p className="mb-3 text-xl font-bold tracking-tight line-clamp-2">{post.title}</p>

        <span className="inline-flex border border-orange-600/30 bg-orange-500/10 px-2 py-1 capitalize text-xs font-semibold text-orange-700 dark:text-orange-300 mb-4">
          {post.topics?.[0] ?? "general"}
        </span>

        <p className="mb-6 line-clamp-4 leading-7 text-stone-700 dark:text-stone-300" title={post.excerpt}>
          {post.excerpt}
        </p>

        <div className="flex justify-end items-center gap-4">
          <button
            title="Read article"
            className="inline-flex items-center border border-orange-600 bg-orange-600 px-4 py-2 text-sm font-bold text-orange-50 transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-orange-700"
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
}
