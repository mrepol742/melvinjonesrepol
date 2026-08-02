import Card from "@/components/ui/Card";
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
    <Link href={link.href}>
      <Card className="group" index={index}>
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
      </Card>
    </Link>
  );
}
