"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";

export const __projects = [
  {
    title: "Web Appp",
    description:
      "A simple yet powerful template that lets you convert any website into a functional Android APK with minimal effort. This project makes it easy to package your web app for mobile distribution without requiring deep Android development knowledge.",
    repo: "https://github.com/mrepol742/web-appp",
    featured: true,
    languages: ["Kotlin"],
  },
  {
    title: "My Portfolio",
    description:
      "A modern, responsive personal portfolio built with Next.js to showcase projects, skills, and achievements. Designed with performance and clean UI in mind, it highlights professional work in a sleek and interactive way.",
    link: "https://www.melvinjonesrepol.com",
    repo: "https://github.com/mrepol742/melvinjonesrepol",
    featured: false,
    languages: ["TypeScript"],
  },
  {
    title: "Project Canis TG",
    description:
      "An extension of the Canis project adapted specifically for Telegram, bringing its features into the chat platform.",
    repo: "https://github.com/mrepol742/project-canis-tg",
    featured: false,
    languages: ["TypeScript"],
  },
  {
    title: "Project Canis",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
    link: "/projects/canis-chatbot",
    featured: true,
    languages: ["TypeScript"],
  },
  {
    title: "Ulisha Store Next",
    description:
      "A modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
    link: "/projects/ulisha-store-next",
    featured: true,
    languages: ["TypeScript"],
  },
  {
    title: "Devops Capstone Project",
    description:
      "Completed as part of the IBM Devops Capstone Project on Coursera.",
    link: "https://github.com/mrepol742/devops-capstone-project",
    featured: false,
    languages: ["JavaScript"],
  },
  {
    title: "Point of Sale",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    link: "/projects/point-of-sale",
    featured: true,
    languages: ["JavaScript"],
  },
  {
    title: "Axleshift Core 1 - Capstone Project",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    link: "/projects/axleshift-core-1",
    featured: true,
    languages: ["JavaScript"],
  },
  {
    title: "Second Chance Backend Nodejs Capstone",
    description:
      "Completed as part of the IBM JavaScript Back-End Capstone Project on Coursera.",
    repo: "https://github.com/mrepol742/secondchance-backend-nodejs-capstone",
    featured: false,
    languages: ["JavaScript"],
  },
  {
    title: "LGU Management System",
    description: "A Project for Project Management class.",
    repo: "https://github.com/lgu-ms/lgu-ms",
    featured: false,
    languages: ["PHP"],
  },
  {
    title: "Project Deep",
    description:
      "A open-source collaboration! If you're eager to share your insights, tips, or experiences with a broader audience, contributing to Deep Repository is a fantastic opportunity.",
    repo: "https://github.com/mrepol742/project-deep",
    link: "https://projectdeep.vercel.app",
    featured: false,
    languages: ["JavaScript"],
  },
  {
    title: "Project Orion",
    description:
      "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
    link: "/projects/orion-chatbot",
    featured: false,
    languages: ["JavaScript"],
  },
  {
    title: "Online Catering System",
    description: "A Project for HCI Subject.",
    repo: "https://github.com/mrepol742/Online-Catering-System",
    featured: false,
    languages: ["PHP"],
  },
  {
    title: "Room Rental System",
    description: "A Project for Web Dev Subject.",
    repo: "https://github.com/mrepol742/Room-Rental-System",
    featured: false,
    languages: ["PHP"],
  },
  {
    title: "Webvium VPN",
    description:
      "Inspired from Webvium, Webvium VPN is a lightweight android VPN app focuses in speed, simplicity, security and privacy.",
    link: "/projects/webvium-vpn",
    featured: false,
    languages: ["Java"],
  },
  {
    title: "mrepol742.github.io",
    description:
      "This is where i showcase my projects, landing pages, tools and other awesome things.",
    link: "https://github.com/mrepol742/mrepol742.github.io",
    featured: false,
    languages: ["PHP"],
  },
  {
    title: "Project Webvium",
    description:
      "A lightweight, fast, and privacy-focused Android web browser built entirely from scratch to deliver a secure and efficient browsing experience. Designed to balance speed, security, and functionality, it aims to provide all the essential features of modern browsers while staying minimal and resource-friendly.",
    link: "/projects/webvium-browser",
    featured: true,
    languages: ["Java"],
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState(__projects);

  return (
    <>
      <main className="p-3 md:p-8">
        <section>
          <h1 className="text-2xl font-semibold" data-aos="fade-right">
            Projects
          </h1>
          <p data-aos="fade-right" data-aos-delay="100">
            Here are some of my projects that I have worked on. <br />
            For more details, you can check out my{" "}
            <Link href="https://github.com/mrepol742?tab=repositories">
              Github Repo
            </Link>
            .
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4"
          >
            <div className="flex items-center gap-2">
              <select
                id="filter"
                className="border-b px-2 py-3 outline-none"
                onChange={(e) => {
                  const value = e.target.value;
                  setProjects(() => {
                    if (value === "default") return __projects;

                    return __projects.filter(
                      (project) => project.languages[0].toLowerCase() === value,
                    );
                  });
                }}
              >
                <option value="default">All</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="php">PHP</option>
              </select>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="border-b flex items-center gap-2 relative px-2 py-1 w-full max-w-xs md:max-w-sm"
            >
              <span className="absolute left-3 text-gray-400 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </span>
              <input
                type="text"
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="outline-none px-9 py-2 w-full bg-transparent"
                style={{
                  border: "none",
                  boxShadow: "none",
                  paddingRight: query ? "2.5rem" : undefined,
                }}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="right-3 text-gray-400 hover:text-gray-600 absolute"
                  aria-label="Clear search"
                  tabIndex={0}
                  style={{ right: "0.75rem" }}
                >
                  <FontAwesomeIcon icon={faX} size="2xs" />
                </button>
              )}
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
            {projects
              .filter(
                (project) =>
                  project.title.toLowerCase().includes(query.toLowerCase()) ||
                  project.description
                    .toLowerCase()
                    .includes(query.toLowerCase()),
              )
              .map((project, idx) => (
                <div key={idx}>
                  <Link
                    href={project.link || project.repo || "#"}
                    className="no-underline"
                  >
                    <ProjectCard {...project} />
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
