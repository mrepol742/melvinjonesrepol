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
    <div
      className={`bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      {link && (
        <Link
          href={link}
          className="font-medium text-sm hover:underline mr-2"
          aria-label="View Project"
        >
          <FontAwesomeIcon icon={faExpand} size="xl" />
        </Link>
      )}
      {repo && (
        <Link
          href={repo}
          target="_blank"
          className="font-medium text-sm hover:underline mr-2"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </Link>
      )}
      {download && (
        <Link
          href={download}
          className="font-medium text-sm hover:underline mr-2"
        >
          <FontAwesomeIcon icon={faDownload} size="xl" />
        </Link>
      )}
    </div>
  );
}
