import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCircleNotch,
  faDownload,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  delay?: number;
  repo?: string;
  link?: string;
  download?: string;
  technology?: string[];
  cover?: string;
  archived?: boolean;
};

export default function ProjectCard({
  title,
  description,
  repo,
  link,
  download,
  technology,
  cover,
  archived,
}: ProjectCardProps) {
  return (
    <div data-aos="fade-up" className="h-full flex">
      <div className="group border rounded-2xl shadow-sm w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
        {cover && (
          <Link href={link || "#"}>
            <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
              <Image
                src={cover}
                alt={title}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        )}
        <div className="p-6 flex flex-col flex-1">
          <Link href={link || "#"}>
            <h5 className="mt-2 mb-4 text-xl font-semibold tracking-tight">
              {title}
            </h5>
          </Link>

          <p className="mb-6 line-clamp-3 flex-1">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {archived && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-gray-500/20">
                Archived
              </span>
            )}

            {technology &&
              technology.length > 0 &&
              technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-gray-500/20"
                >
                  {tech}
                </span>
              ))}
          </div>

          <div className="flex justify-end items-center gap-3 mt-auto">
            {repo && (
              <Link href={repo}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
            )}

            {download && (
              <Link href={download}>
                <FontAwesomeIcon icon={faDownload} size="lg" />
              </Link>
            )}

            {link && (
              <Link
                href={link}
                className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
              >
                Read more
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
