import projects from "@/lib/projectList";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      {projects
        .filter((project) => project.featured)
        .map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              data-aos="fade-up"
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div
                className={`
                  md:w-1/6 flex-1
                  ${isEven ? "md:order-1" : "md:order-2"}
                `}
              >
                <span className="text-6xl font-bold text-gray-400 block">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-bold text-gray-400 block">
                  {project.title}
                </span>
                {project.languages &&
                  project.languages.map((lang, index) => (
                    <div key={index} className="inline-block mr-2 mb-2">
                      <div className="text-white text-xs px-2 py-1 bg-gray-900/30">
                        <FontAwesomeIcon
                          icon={faCircleNotch}
                          className="mr-1"
                        />
                        {lang}
                      </div>
                    </div>
                  ))}
              </div>

              <div className={`flex-1 ${isEven ? "order-2" : "order-1"}`}>
                <div data-aos="fade-up">
                  <div
                    className={`bg-black/10 backdrop-blur rounded p-6 hover:scale-98 transition-transform duration-300`}
                  >
                    {project.cover && (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-auto mb-4 rounded"
                      />
                    )}
                    <p className="mb-2">{project.description}</p>
                    <div className="flex items-end justify-end gap-2">
                      {project.repo && (
                        <Link href={project.repo}>
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link}>
                          <FontAwesomeIcon icon={faArrowRight} size="lg" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
