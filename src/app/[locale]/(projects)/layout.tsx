import AdBanner from "@/components/common/AdBanner";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = process.env.NEXT_PUBLIC_NODE_ENV || "production";
  const isProduction = env === "production";

  return (
    <div className="project-detail-theme">
      <style>{`
        .project-detail-theme { background: #f5f0e8; color: #1c1917; }
        .dark .project-detail-theme { background: #15130f; color: #f5f5f4; }
        .project-detail-theme section { border-color: #d6c9b8 !important; }
        .dark .project-detail-theme section { border-color: #4a4035 !important; }
        .project-detail-theme section.bg-black\\/40, .project-detail-theme section.bg-black\\/30 { background: #e9dfd2 !important; }
        .dark .project-detail-theme section.bg-black\\/40, .dark .project-detail-theme section.bg-black\\/30 { background: #0f0e0b !important; }
        .project-detail-theme .border-white\\/10 { border-color: #d6c9b8 !important; }
        .dark .project-detail-theme .border-white\\/10 { border-color: #4a4035 !important; }
        .project-detail-theme .divide-white\\/10 > :not([hidden]) ~ :not([hidden]) { border-color: #d6c9b8 !important; }
        .dark .project-detail-theme .divide-white\\/10 > :not([hidden]) ~ :not([hidden]) { border-color: #4a4035 !important; }
        .project-detail-theme .text-zinc-600, .project-detail-theme .text-zinc-500 { color: #78716c !important; }
        .dark .project-detail-theme .text-zinc-600, .dark .project-detail-theme .text-zinc-500 { color: #a8a29e !important; }
        .project-detail-theme .text-\\[\\#7CFFB2\\], .project-detail-theme .group:hover .group-hover\\:text-orange-300 { color: #ea580c !important; }
        .project-detail-theme .text-\\[\\#FFB020\\], .project-detail-theme .group:hover .group-hover\\:text-\\[\\#FFB020\\] { color: #c2410c !important; }
        .project-detail-theme .bg-\\[\\#FFB020\\] { background: #ea580c !important; color: #fff !important; }
      `}</style>
      {isProduction && <AdBanner />}
      {children}
    </div>
  );
}
