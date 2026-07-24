import Link from "next/link";

export default function LegalCard({
  link,
  index,
}: {
  link: {
    href: string;
    title: string;
    description: string;
    version: string;
    category: string;
  };
  index: number;
}) {
  return (
    <Link
      href={link.href}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
    >
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-70" />

      {/* Large Number */}
      <div className="absolute right-8 top-6 text-7xl font-black text-white/[0.03] transition-opacity duration-300 group-hover:text-white/[0.05]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative p-8 md:p-10">
        {/* Top */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-green-400">
              ● Active
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">
          {link.title}
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
          {link.description}
        </p>

        {/* Bottom */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-600">
                Category
              </div>
              <div className="mt-1 text-zinc-300">{link.category}</div>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-600">
                Version
              </div>
              <div className="mt-1 text-zinc-300">{link.version}</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-medium">
            <span>Read Document</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
