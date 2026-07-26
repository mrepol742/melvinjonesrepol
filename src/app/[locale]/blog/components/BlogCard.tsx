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
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
    >
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-70" />

      {/* Large Number */}
      <div className="absolute right-8 top-6 text-7xl font-black text-white/[0.03] transition-opacity duration-300 group-hover:text-white/[0.05]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative p-8 md:p-10">
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
      </div>
    </Link>
  );
}
