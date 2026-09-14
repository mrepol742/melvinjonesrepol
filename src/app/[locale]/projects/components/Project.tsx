import projects from "@/lib/projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/ui/Button";
import ProjectCard from "@/app/[locale]/projects/components/ProjectCard";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Header from "@/components/ui/Header";
import ProjectFilters from "@/app/[locale]/projects/components/ProjectFilters";

export default async function Project({
  query,
  type,
  featured,
  technology,
}: {
  query: string;
  type: string;
  featured: string;
  technology: string;
}) {
  const t = await getTranslations("projects");
  const tc = await getTranslations("projects_content");
  const q = query.toLowerCase();

  const translatedProjects = projects.map((project) => ({
    ...project,
    description: project.key
      ? tc(`${project.key}_description` as any)
      : project.description,
  }));

  const projectTypes = Array.from(
    new Set(translatedProjects.map((project) => project.type)),
  ).sort();
  const technologies = Array.from(
    new Set(translatedProjects.flatMap((project) => project.technology)),
  ).sort();

  const filteredProjects = translatedProjects
    .filter(
      (project) =>
        (project.title.toLowerCase().includes(q) ||
          project.technology.some((tech) => tech.toLowerCase().includes(q)) ||
          project.description.toLowerCase().includes(q)) &&
        (!type || project.type === type) &&
        (!featured || project.featured === (featured === "true")) &&
        (!technology || project.technology.includes(technology)),
    )
    .sort((a, b) => {
      // priority score system
      const score = (p: any) => {
        let s = 0;

        // highest priority: featured
        if (p.featured) s += 3;

        // second priority: client type
        if (p.type === "client") s += 2;

        // third: venture (optional extra logic)
        if (p.type === "venture") s += 1;

        return s;
      };

      return score(b) - score(a);
    });

  return (
    <>
      <Header
        title={
          <>
            {t("title_line1")}
            <br />
            <span className="homepage-accent">{t("title_line2")}</span>
            <br />
            {t("title_line3")}
          </>
        }
        intro={t("hero_description")}
      />

      <section id="projects" className="px-6 py-24 md:px-10">
        <ProjectFilters
          initialQuery={query}
          initialType={type}
          initialFeatured={featured}
          initialTechnology={technology}
          types={projectTypes}
          technologies={technologies}
        />

        <p className="mt-6 text-sm text-stone-600 dark:text-stone-400">
          Showing <span className="font-bold text-orange-700 dark:text-orange-300">{filteredProjects.length}</span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>

        {filteredProjects.length === 0 ? (
          <div>
            <h2>{t("no_results_found")}</h2>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project, idx) => (
              <div key={idx}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        )}

        <div className="my-6">
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl">
            {t("github_cta_text")}
          </p>

          <Link
            href="https://github.com/mrepol742"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              icon={faGithub}
              className="bg-orange-500 text-stone-950 before:bg-orange-700 after:bg-orange-700"
            >
              {t("github_button")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
