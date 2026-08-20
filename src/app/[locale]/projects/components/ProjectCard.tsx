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
    <div data-aos="fade-up" className="h-full flex">
      <Link href={link || "#"}>
        <Card className="group">
          {showSummary && (
            <div className="absolute inset-0 z-50 p-6 flex flex-col backdrop-blur-xl bg-gray-900/95 text-white">
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

          <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
            <Image
              src={cover ?? "/images/melvinjonesrepol.cover.png"}
              alt={title}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="mb-2 text-xl font-bold line-clamp-2">{title}</p>

          <p className="mb-4 line-clamp-4" title={description}>
            {description}
          </p>

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
            <button
              onClick={() => setShowSummary(true)}
              title="Summarize with AI"
              className="mr-auto text-purple-500 hover:text-purple-600 transition-colors"
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
              <button
                title="View Project"
                className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            )}
          </div>
        </Card>
      </Link>
    </div>
  );
}
