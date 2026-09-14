import Link from "next/link";

export default function LegalFooter({ date }: { date: string }) {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-3">
      <div className="border border-stone-300 bg-stone-50 p-7 shadow-[2px_2px_0_0_rgba(120,113,108,0.14)] dark:border-white/15 dark:bg-white/[0.03] dark:shadow-none">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
          Last reviewed
        </div>

        <div className="mt-3 text-lg font-semibold">{date}</div>
      </div>

      <div className="border border-stone-300 bg-stone-50 p-7 shadow-[2px_2px_0_0_rgba(120,113,108,0.14)] dark:border-white/15 dark:bg-white/[0.03] dark:shadow-none">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
          Jurisdiction
        </div>

        <div className="mt-3 text-lg font-semibold">Philippines</div>
      </div>

      <div className="border border-stone-300 bg-stone-50 p-7 shadow-[2px_2px_0_0_rgba(120,113,108,0.14)] dark:border-white/15 dark:bg-white/[0.03] dark:shadow-none">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
          Questions?
        </div>

        <Link
          href="/contact-me"
          className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-orange-700 transition-opacity hover:opacity-70 dark:text-orange-300"
        >
          Contact us
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
