"use client";

import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCircleNotch,
  faDownload,
  faLink,
  faWandMagicSparkles,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";

type ProjectCardProps = {
  title: string;
  description: string;
  ai_description: string;
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
  ai_description,
  repo,
  link,
  download,
  technology,
  cover,
  archived,
}: ProjectCardProps) {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div data-aos="fade-up" className="h-full">
      <Card className="group h-full">
          {showSummary && (
            <div className="absolute inset-0 z-50 flex flex-col bg-stone-950 p-6 text-stone-100">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-lg font-semibold flex items-center gap-2">
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                  AI Summary
                </h5>
                <button onClick={() => setShowSummary(false)}>
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto text-md leading-relaxed scrollbar-hide">
                {ai_description}
              </div>
            </div>
          )}

          {link ? (
            <Link
              href={link}
              className="relative mb-4 block h-48 w-full overflow-hidden rounded-md"
              aria-label={`View ${title}`}
            >
              <Image
                src={cover ?? "/images/melvinjonesrepol.cover.png"}
                alt={title}
                fill
                className="h-full w-full object-cover grayscale sepia-[.28] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ) : (
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
              <Image
                src={cover ?? "/images/melvinjonesrepol.cover.png"}
                alt={title}
                fill
                className="h-full w-full object-cover grayscale sepia-[.28] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

          <p className="mb-2 text-xl font-bold line-clamp-2">{title}</p>

          <p className="mb-4 line-clamp-4" title={description}>
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {archived && (
              <span className="rounded-sm border border-orange-300 bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-950 dark:border-orange-900 dark:bg-orange-950/50 dark:text-orange-200">
                Archived
              </span>
            )}

            {technology &&
              technology.length > 0 &&
              technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-sm border border-stone-300 bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
                >
                  {tech}
                </span>
              ))}
          </div>

          <div className="flex justify-end items-center gap-3 mt-auto">
            <button
              onClick={() => setShowSummary(true)}
              title="Summarize with AI"
              className="mr-auto text-orange-600 transition-colors hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="transition-all group-hover:text-2xl"
              />
            </button>

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
                title={`View ${title}`}
                className="inline-flex items-center rounded-sm bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}
          </div>
      </Card>
    </div>
  );
}
