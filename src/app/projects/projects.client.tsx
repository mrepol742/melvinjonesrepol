"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "My Portfolio",
    description: "A portfolio built with Next.js and Tailwind.",
    link: "https://melvinjonesrepol.vercel.app",
    repo: "https://github.com/mrepol742/melvinjonesrepol.vercel.app",
  },
  {
    title: "Project Canis TG",
    description: "Canis but for Telegram.",
    repo: "https://github.com/mrepol742/project-canis-tg",
  },
  {
    title: "Project Canis",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
    repo: "https://github.com/mrepol742/project-canis",
  },
  {
    title: "Ulisha Store",
    description:
      "A premier destination for quality fashion, accessories, and electronics. Bringing you the best products at competitive prices.",
    link: "/projects/ulisha-store",
  },
  {
    title: "Devops Capstone Project",
    description:
      "Completed as part of the IBM Devops Capstone Project on Coursera.",
    link: "https://github.com/mrepol742/devops-capstone-project",
  },
  {
    title: "Project POS",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    repo: "https://github.com/mrepol742/project-pos",
  },
  {
    title: "Axleshift Core 1 - Capstone Project",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    repo: "/projects/axleshift-core-1",
  },
  {
    title: "Second Chance Backend Nodejs Capstone",
    description:
      "Completed as part of the IBM JavaScript Back-End Capstone Project on Coursera.",
    repo: "https://github.com/mrepol742/secondchance-backend-nodejs-capstone",
  },
  {
    title: "LGU Management System",
    description: "A Project for Project Management class.",
    repo: "https://github.com/lgu-ms/lgu-ms",
  },
  {
    title: "Project Deep",
    description:
      "A open-source collaboration! If you're eager to share your insights, tips, or experiences with a broader audience, contributing to Deep Repository is a fantastic opportunity.",
    repo: "https://github.com/mrepol742/project-deep",
    link: "https://projectdeep.vercel.app",
  },
  {
    title: "Project Orion",
    description:
      "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
    link: "/projects/orion-chatbot",
  },
  {
    title: "Online Catering System",
    description: "A Project for HCI Subject.",
    repo: "https://github.com/mrepol742/Online-Catering-System",
  },
  {
    title: "Room Rental System",
    description: "A Project for Web Dev Subject.",
    repo: "https://github.com/mrepol742/Room-Rental-System",
  },
  {
    title: "Webvium VPN",
    description:
      "Inspired from Webvium, Webvium VPN is a lightweight android VPN app focuses in speed, simplicity, security and privacy.",
    link: "/projects/webvium-vpn",
  },
  {
    title: "mrepol742.github.io",
    description:
      "This is where i showcase my projects, landing pages, tools and other awesome things.",
    link: "https://github.com/mrepol742/mrepol742.github.io",
  },
  {
    title: "Project Webvium",
    description:
      "A Project that aims to be the lightest, fastest, secured, private and full-featured android web browser. Programmed and design from Scratch.",
    link: "/projects/webvium-browser",
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");

  return (
    <>
      <main className="p-8">
        <section>
          <h1 className="text-2xl font-semibold" data-aos="fade-right">
            Projects
          </h1>
          <p
            className="text-gray-500"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Here are some of my projects that I have worked on.
          </p>
          <div data-aos="fade-right" data-aos-delay="200">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="border rounded my-4 flex items-center gap-2 relative px-2 py-1 w-full max-w-xs"
              style={{ borderColor: "#e5e7eb" }}
            >
              <span className="absolute left-3 text-gray-400 pointer-events-none">
                <Search size={18} />
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
                  <X size={18} />
                </button>
              )}
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects
              .filter(
                (project) =>
                  project.title.toLowerCase().includes(query.toLowerCase()) ||
                  project.description
                    .toLowerCase()
                    .includes(query.toLowerCase())
              )
              .map((project, idx) => (
                <ProjectCard
                  key={project.title + idx}
                  {...project}
                  delay={idx * 100}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
