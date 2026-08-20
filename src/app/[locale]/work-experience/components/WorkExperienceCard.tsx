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
          <span className="text-xs font-mono">{exp.date}</span>
        </div>

        <p className="mb-2 text-xl font-bold line-clamp-2">{exp.title}</p>

        <span className="inline-flex capitalize text-xs mb-3">
          {exp.company}
        </span>

        <p className="mb-4" title={exp.description}>
          {exp.description}
        </p>

        <div className="flex justify-end items-center gap-4">
          <button
            title="View certificate"
            className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
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
