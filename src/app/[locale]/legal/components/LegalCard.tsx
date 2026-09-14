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
            <span className="border border-orange-600/30 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 dark:text-orange-300">
              ● Active
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-2xl font-bold tracking-tight group-hover:text-orange-700 dark:group-hover:text-orange-300">
          {link.title}
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl leading-8 text-stone-700 dark:text-stone-300">
          {link.description}
        </p>

        {/* Bottom */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-stone-300 pt-6 dark:border-white/15">
          <div className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400">
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-500">
                Category
              </div>
              <div className="mt-1 text-stone-800 dark:text-stone-200">{link.category}</div>
            </div>

            <div className="h-10 w-px bg-stone-300 dark:bg-white/15" />

            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-500">
                Version
              </div>
              <div className="mt-1 text-stone-800 dark:text-stone-200">{link.version}</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 dark:text-orange-300">
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
