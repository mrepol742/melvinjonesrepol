import projects from "@/lib/projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCarousel() {
  return (
    <>
      <div
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex items-stretch gap-6 py-6 scrollbar-hide"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      >
        {projects
          .filter((project) => project.featured)
          .map((project, idx) => (
            <article
              key={idx}
              className="group snap-start flex-shrink-0 w-80 md:w-96 flex"
            >
              <div className="p-6 border rounded-2xl shadow-sm max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
                {project.cover && (
                  <Link href={project.link || "#"}>
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-gray-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-bold">{project.title}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technology?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-gray-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mb-4 line-clamp-3">{project.description}</p>

                <div className="flex justify-end items-center gap-4">
                  {project.repo && (
                    <Link href={project.repo}>
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
                    >
                      Read more
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>
    </>
  );
}
