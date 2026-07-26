import certificates from "@/lib/certificates";

type Certificate = (typeof certificates)[number];

export default function CertificateCard({
  certificate,
  viewLabel,
}: {
  certificate: Certificate;
  viewLabel: string;
}) {
  return (
    <div
      className={`group rounded-3xl border backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] ${
        certificate.featured
          ? "border-orange-500/20 bg-orange-500/[0.03] hover:border-orange-500/30"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
      }`}
    >
      <div className="relative p-8 md:p-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
            {certificate.description}
          </span>
          {certificate.featured && (
            <span className="text-xs text-orange-400 font-medium">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-base font-bold leading-snug mb-1">
          {certificate.title}
        </h3>

        <p className="text-xs font-mono text-zinc-500 mb-4">
          {certificate.date}
        </p>

        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
          >
            {viewLabel}
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
