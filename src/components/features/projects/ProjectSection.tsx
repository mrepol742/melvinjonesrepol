"use client";

import projects from "@/lib/project-list";
import Link from "next/link";
import Project from "@/components/ui/Project";
import SearchForm from "@/components/ui/SearchForm";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/features/projects/ProjectCard";
import Masonry from "react-masonry-css";

export default async function ProjectSection({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sParams = await searchParams;
  const query = Array.isArray(sParams.q)
    ? sParams.q.join(", ")
    : sParams.q || "";

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(query) ||
      project.languages.some((lang) =>
        lang.toLowerCase().includes(query.toLowerCase()),
      ) ||
      project.description.toLowerCase().includes(query),
  );

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1
          className="text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Personal Projects Portfolio
        </h1>
        <p className="mt-2" data-aos="fade-up" data-aos-delay="100">
          Explore a collection of my personal software development projects,
          experiments, and tools I’ve built using modern technologies. These
          projects showcase my skills in web development, problem solving, and
          building real-world applications.
        </p>

        <SearchForm initialQuery={query} />

        {filteredProjects.length === 0 ? (
          <div>
            <h2>No results found.</h2>
          </div>
        ) : (
          <Masonry
            breakpointCols={{ default: 4, 1025: 3, 768: 2, 640: 1 }}
            className="flex gap-6"
            columnClassName="space-y-6"
          >
            {filteredProjects.map((project, idx) => (
              <div key={idx}>
                <ProjectCard {...project} />
              </div>
            ))}
          </Masonry>
        )}

        <div className="my-6">
          <p data-aos="fade-up" data-aos-delay="200">
            For more of my projects and code, check out my GitHub profile:
          </p>
          <Link
            href="https://github.com/mrepol742"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              icon={faGithub}
              className="bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600"
            >
              Github
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
