export default function Card({
  children,
  className,
  index,
  subtitle,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  subtitle?: string;
}) {
  return (
    <div
      className={`w-full hover:-translate-y-1 active:scale-[0.98] relative overflow-hidden rounded-md border border-stone-300 bg-stone-50 shadow-[2px_2px_0_0_rgba(120,113,108,0.14)] dark:border-white/15 dark:bg-white/[0.03] dark:shadow-none transition-all duration-300 ${className ?? ""}`}
    >
      {index !== undefined && (
        <div className="absolute right-8 top-6 text-7xl font-black text-white/[0.03] transition-opacity duration-300 group-hover:text-white/[0.05]">
          {String(index + 1).padStart(2, "0")}
        </div>
      )}

      {index === undefined && subtitle !== undefined && (
        <div className="absolute right-8 top-6 text-3xl font-black text-white/[0.03] transition-opacity duration-300 group-hover:text-white/[0.05]">
          {subtitle}
        </div>
      )}

      <div className="relative p-8 md:p-10">{children}</div>
    </div>
  );
}
