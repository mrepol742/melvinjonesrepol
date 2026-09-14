import Card from "@/components/ui/Card";
import { Experience } from "../page";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function WorkExperienceCard({
  exp,
  viewLabel,
}: {
  exp: Experience;
  viewLabel: string;
}) {
  return (
    <Link href={exp.cert || "#"}>
      <Card className="group">
        <div className="flex justify-end mb-5">
          <span className="border-l-2 border-orange-500 pl-2 text-xs font-mono text-stone-600 dark:text-stone-400">{exp.date}</span>
        </div>

        <p className="mb-2 text-xl font-bold line-clamp-2">{exp.title}</p>

        <span className="mb-3 inline-flex border-b border-orange-400 pb-1 text-xs capitalize text-stone-600 dark:text-stone-400">
          {exp.company}
        </span>

        <p className="mb-4" title={exp.description}>
          {exp.description}
        </p>

        <div className="flex justify-end items-center gap-4">
          <button
            title="View certificate"
            className="inline-flex items-center rounded-sm bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </Card>
    </Link>
  );
}
