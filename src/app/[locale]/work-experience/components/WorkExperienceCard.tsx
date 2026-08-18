import Card from "@/components/ui/Card";
import { Experience } from "../page";
import Link from "next/link";

export default function WorkExperienceCard({
  exp,
  viewLabel,
}: {
  exp: Experience;
  viewLabel: string;
}) {
  return (
    <Card className="group">
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="inline-flex capitalize rounded-full border border-zinc-800 px-2.5 py-1 text-xs">
          {exp.company}
        </span>
        <span className="text-xs font-mono">{exp.date}</span>
      </div>

      <h3 className="text-base font-bold leading-snug mb-3">{exp.title}</h3>

      <p className="text-sm leading-relaxed">{exp.description}</p>

      {exp.cert && (
        <Link
          href={exp.cert}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
        >
          {viewLabel}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      )}
    </Card>
  );
}
