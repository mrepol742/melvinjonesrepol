"use client";

import projects, { Templates } from "@/lib/project-list";
import SearchForm from "@/components/ui/SearchForm";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/features/projects/ProjectCard";
import Masonry from "react-masonry-css";
import Link from "next/link";

export default async function ProjectSection({ query }: { query: string }) {
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(query) ||
      project.technology.some((tech) =>
        tech.toLowerCase().includes(query.toLowerCase()),
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
            breakpointCols={{ 2560: 5, 1440: 4, 1025: 3, 768: 2, 640: 1 }}
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
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl">
            Client's projects are confidential, but I’m always open to sharing
            more about my personal projects and code. If you’re interested in
            seeing more of my work, feel free to check out my GitHub profile
            where I regularly share updates on my projects and experiments.
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

        <h2
          className="text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Templates
        </h2>
        <p className="my-2" data-aos="fade-up" data-aos-delay="100">
          I also maintain a collection of open-source templates and starter kits
          for various frameworks and use cases. These templates are designed to
          help other developers get up and running quickly with best practices
          and modern tooling.
        </p>

        <Masonry
          breakpointCols={{ 2560: 5, 1440: 4, 1025: 3, 768: 2, 640: 1 }}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {Templates.map((template, idx) => (
            <div key={idx}>
              <ProjectCard {...template} />
            </div>
          ))}
        </Masonry>
      </section>
    </main>
  );
}
