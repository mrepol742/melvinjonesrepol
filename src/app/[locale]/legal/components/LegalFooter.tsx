import Link from "next/link";

export default function LegalFooter({ date }: { date: string }) {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Last reviewed
        </div>

        <div className="mt-3 text-lg font-semibold">{date}</div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Jurisdiction
        </div>

        <div className="mt-3 text-lg font-semibold">Philippines</div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Questions?
        </div>

        <Link
          href="/contact-me"
          className="mt-3 inline-flex items-center gap-2 text-lg font-semibold transition-opacity hover:opacity-70"
        >
          Contact us
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
