"use client";

import { useState } from "react";
import projects from "@/lib/projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";

export default function ProjectCarousel() {
  const tc = useTranslations("projects_content");
  const [aiOpen, setAiOpen] = useState<Record<number, boolean>>({});

  function toggleSummary(index: number) {
    setAiOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <>
      <Slider>
        {projects
          .filter(
            (project) =>
              project.type === "client" ||
              project.type === "community" ||
              project.featured,
          )
          .map((project, idx) => {
            const isAi = !!aiOpen[idx];
            const hasAi = Boolean(project.ai_description);
            const description = project.key
              ? tc(`${project.key}_description` as any)
              : project.description;

            return (
              <Card
                key={project.title}
                className="group snap-start flex-shrink-0 w-80 md:w-96 flex"
              >
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={project.cover || "/images/melvinjonesrepol.cover.png"}
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
                      className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
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
                  title={isAi ? project.ai_description : description}
                >
                  {isAi ? project.ai_description : description}
                </p>

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
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
      </Slider>
    </>
  );
}
