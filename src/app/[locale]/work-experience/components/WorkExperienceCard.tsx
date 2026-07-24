import { Experience } from "../page";

export default function WorkExperienceCard({
  exp,
  viewLabel,
}: {
  exp: Experience;
  viewLabel: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="relative p-8 md:p-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
            {exp.company}
          </span>
          <span className="text-xs font-mono text-zinc-500">{exp.date}</span>
        </div>

        <h3 className="text-base font-bold leading-snug mb-3">{exp.title}</h3>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {exp.description}
        </p>

        {exp.cert && (
          <a
            href={exp.cert}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
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
