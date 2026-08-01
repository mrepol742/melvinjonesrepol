import Card from "@/components/ui/Card";
import { BlogPost } from "@/lib/posts";
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
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="inline-flex capitalize rounded-full border border-zinc-800 px-2.5 py-1 text-xs">
            {post.topics?.[0] ?? "general"}
          </span>
          <p className="text-xs md:text-sm">{post.date}</p>
        </div>

        <h2 className="text-lg md:text-xl font-semibold leading-snug mb-2 group-hover:text-orange-500 transition-colors">
          {post.title}
        </h2>

        <p className="text-sm md:text-base line-clamp-3" title={post.excerpt}>
          {post.excerpt}
        </p>

        <div className="mt-5 inline-flex items-center text-sm font-medium text-orange-600 dark:text-orange-400">
          Read article
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </Card>
    </Link>
  );
}
