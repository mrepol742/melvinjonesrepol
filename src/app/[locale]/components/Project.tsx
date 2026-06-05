"use client";

import { useState } from "react";
import projects from "@/lib/projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCarousel() {
  const [aiOpen, setAiOpen] = useState<Record<number, boolean>>({});

  function toggleSummary(index: number) {
    setAiOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  }

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
          .filter((project) => project.type === "client" || project.featured)
          .map((project, idx) => {
            const isAi = !!aiOpen[idx];
            const hasAi = Boolean(project.ai_description);

            return (
              <article
                key={project.title}
                className="group snap-start flex-shrink-0 w-80 md:w-96 flex"
              >
                <Link href={project.link || project.repo || "#"}>
                  <div className="p-6 border border-zinc-800 rounded-2xl shadow-sm max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={
                          project.cover || "/images/melvinjonesrepol.cover.png"
                        }
                        alt={project.title}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-2 gap-3">
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

                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs uppercase tracking-wider">
                        {isAi ? "AI Summary" : "Overview"}
                      </p>
                      {hasAi && (
                        <button
                          type="button"
                          onClick={() => toggleSummary(idx)}
                          className="text-xs rounded-full border px-2 py-1 hover:shadow-sm transition"
                          aria-pressed={isAi}
                        >
                          {isAi ? "Back to details" : "AI summary"}
                        </button>
                      )}
                    </div>

                    <p
                      className="mb-4 max-h-30 overflow-y-auto leading-6"
                      title={
                        isAi ? project.ai_description : project.description
                      }
                    >
                      {isAi ? project.ai_description : project.description}
                    </p>

                    <div className="flex justify-end items-center gap-4">
                      {project.repo && (
                        <Link href={project.repo}>
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Link>
                      )}

                      {(project.link && project.repo) && (
                        <button className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all">
                          Read more
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2 transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
      </div>
    </>
  );
}
