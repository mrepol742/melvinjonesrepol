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
  languages?: string[];
  cover?: string;
};

export default function ProjectCard({
  title,
  description,
  repo,
  link,
  download,
  languages,
  cover,
}: ProjectCardProps) {
  return (
    <div data-aos="fade-up">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg max-w-sm mx-auto hover:scale-95 hover:backdrop-blur-xl transition-transform duration-300">
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

        <div className="p-6 text-center">
          <Link href={link || "#"}>
            <h5 className="mt-2 mb-4 text-xl font-semibold tracking-tight">
              {title}
            </h5>
          </Link>

          <p className="mb-6 line-clamp-3">{description}</p>

          <div className="flex justify-center items-center gap-3">
            {repo && (
              <Link href={repo} className="">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
            )}
            {download && (
              <Link href={download} className="">
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
