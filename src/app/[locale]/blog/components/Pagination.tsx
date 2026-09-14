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
        className={`flex items-center gap-1.5 border px-4 py-2 text-sm font-bold transition-all duration-200 ${
          currentPage === 1
            ? "pointer-events-none border-stone-200 text-stone-400 dark:border-white/10 dark:text-stone-600"
            : "border-stone-300 bg-stone-50 text-stone-700 hover:border-orange-600 hover:text-orange-700 dark:border-white/15 dark:bg-white/[0.03] dark:text-stone-300 dark:hover:border-orange-400 dark:hover:text-orange-300"
        }`}
      >
        ← Prev
      </Link>

      {pages.map((p, i) =>
        p === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-10 w-10 items-center justify-center text-sm text-stone-400 dark:text-stone-600 select-none"
          >
            …
          </span>
        ) : (
          <Link
            key={p}
            href={pageHref(p)}
            aria-current={p === currentPage ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center border text-sm font-bold transition-all duration-200 ${
              p === currentPage
                ? "border-orange-600 bg-orange-600 text-orange-50"
                : "border-stone-300 bg-stone-50 text-stone-700 hover:border-orange-600 hover:text-orange-700 dark:border-white/15 dark:bg-white/[0.03] dark:text-stone-300 dark:hover:border-orange-400 dark:hover:text-orange-300"
            }`}
          >
            {p}
          </Link>
        ),
      )}

      <Link
        href={pageHref(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        className={`flex items-center gap-1.5 border px-4 py-2 text-sm font-bold transition-all duration-200 ${
          currentPage === totalPages
            ? "pointer-events-none border-stone-200 text-stone-400 dark:border-white/10 dark:text-stone-600"
            : "border-stone-300 bg-stone-50 text-stone-700 hover:border-orange-600 hover:text-orange-700 dark:border-white/15 dark:bg-white/[0.03] dark:text-stone-300 dark:hover:border-orange-400 dark:hover:text-orange-300"
        }`}
      >
        Next →
      </Link>
    </nav>
  );
}
