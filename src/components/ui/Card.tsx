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
      className={`w-full hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-70" />

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
