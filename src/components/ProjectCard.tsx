import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleNotch,
  faDownload,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  title: string;
  description: string;
  delay?: number;
  repo?: string;
  link?: string;
  download?: string;
  languages: string[];
};

export default function ProjectCard({
  title,
  description,
  delay = 100,
  repo,
  link,
  download,
  languages,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div
        className={`bg-black/10 backdrop-blur rounded-xl p-6 hover:scale-98 transition-transform duration-300`}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mb-2">{description}</p>
        <div className="mb-4">
          {languages.map((lang, index) => (
            <div key={index} className="inline-block mr-2 mb-2">
              <div className="text-white text-xs px-2 py-0.5 rounded-full border border-gray-600 bg-gray-700/40">
                <FontAwesomeIcon icon={faCircleNotch} className="mr-1" />
                {lang}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-end justify-end gap-2">
          {link && (
            <span
              onClick={() => router.push(link)}
              aria-label={`Open ${title} link`}
            >
              <FontAwesomeIcon icon={faLink} size="lg" />
            </span>
          )}
          {repo && (
            <span
              onClick={() => router.push(repo)}
              aria-label={`Open ${title} link`}
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </span>
          )}
          {download && (
            <span
              onClick={() => router.push(download)}
              aria-label={`Open ${title} link`}
            >
              <FontAwesomeIcon icon={faDownload} size="lg" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
