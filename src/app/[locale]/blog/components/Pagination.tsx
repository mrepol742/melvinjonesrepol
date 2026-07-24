import Link from "next/link";

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  if (current <= 4) return [1, 2, 3, 4, 5, "...", total];

  if (current >= total - 3)
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];

  return [1, "...", current - 1, current, current + 1, "...", total];
}

function pageHref(page: number) {
  return page === 1 ? "/blog" : `/blog/page/${page}`;
}

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      aria-label="Blog pagination"
      className="flex items-center justify-center gap-1.5 mt-10 flex-wrap"
    >
      <Link
        href={pageHref(currentPage - 1)}
        aria-disabled={currentPage === 1}
        className={`flex items-center gap-1.5 rounded-2xl border px-4 py-2 text-sm font-medium transition-all duration-200 ${
          currentPage === 1
            ? "pointer-events-none border-white/5 text-zinc-600"
            : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-zinc-200"
        }`}
      >
        ← Prev
      </Link>

      {pages.map((p, i) =>
        p === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-10 w-10 items-center justify-center text-sm text-zinc-600 select-none"
          >
            …
          </span>
        ) : (
          <Link
            key={p}
            href={pageHref(p)}
            aria-current={p === currentPage ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-medium transition-all duration-200 ${
              p === currentPage
                ? "border-orange-500/40 bg-orange-500/10 text-orange-400"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-zinc-200"
            }`}
          >
            {p}
          </Link>
        ),
      )}

      <Link
        href={pageHref(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        className={`flex items-center gap-1.5 rounded-2xl border px-4 py-2 text-sm font-medium transition-all duration-200 ${
          currentPage === totalPages
            ? "pointer-events-none border-white/5 text-zinc-600"
            : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-zinc-200"
        }`}
      >
        Next →
      </Link>
    </nav>
  );
}
