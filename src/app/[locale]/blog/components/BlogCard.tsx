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
      <Card className="group" index={index}>
        <p className="mb-2 text-xl font-bold line-clamp-2">{post.title}</p>

        <span className="inline-flex capitalize text-xs mb-3">
          {post.topics?.[0] ?? "general"}
        </span>

        <p className="mb-4 line-clamp-4" title={post.excerpt}>
          {post.excerpt}
        </p>

        <div className="flex justify-end items-center gap-4">
          <button
            title="Read article"
            className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
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
