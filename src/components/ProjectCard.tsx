import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  delay?: number;
  repo?: string;
  link?: string;
  download?: string;
};

export default function ProjectCard({
  title,
  description,
  delay = 100,
  repo,
  link,
  download,
}: ProjectCardProps) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div
        className={`bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:scale-98 transition-transform duration-300`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        {link && (
          <a
            href={link}
            className="font-medium text-sm hover:underline mr-2"
            aria-label="View Project"
          >
            <FontAwesomeIcon icon={faExpand} size="xl" />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            className="font-medium text-sm hover:underline mr-2"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        )}
        {download && (
          <a
            href={download}
            className="font-medium text-sm hover:underline mr-2"
          >
            <FontAwesomeIcon icon={faDownload} size="xl" />
          </a>
        )}
      </div>
    </div>
  );
}
