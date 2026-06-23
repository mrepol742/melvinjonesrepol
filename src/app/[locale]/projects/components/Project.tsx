import projects, { Templates } from "@/lib/projects";
import SearchForm from "@/components/ui/SearchForm";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/ui/Button";
import ProjectCard from "@/app/[locale]/projects/components/ProjectCard";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Project({ query }: { query: string }) {
  const t = await getTranslations("projects");
  const tc = await getTranslations("projects_content");
  const q = query.toLowerCase();

  const translatedProjects = projects.map((project) => ({
    ...project,
    description: project.key
      ? tc(`${project.key}_description` as any)
      : project.description,
  }));

  const translatedTemplates = Templates.map((template) => ({
    ...template,
    description: template.key
      ? tc(`${template.key}_description` as any)
      : template.description,
  }));

  const filteredProjects = translatedProjects
    .filter(
      (project) =>
        project.title.toLowerCase().includes(q) ||
        project.technology.some((tech) => tech.toLowerCase().includes(q)) ||
        project.description.toLowerCase().includes(q),
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
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              {t("title_line1")}
              <br />
              <span className="opacity-40">{t("title_line2")}</span>
              <br />
              {t("title_line3")}
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("hero_description")}
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">100+</p>
              <p className="mt-1 text-sm text-zinc-400">{t("projects_label")}</p>
            </div>
            <div>
              <p className="text-4xl font-black">9+</p>
              <p className="mt-1 text-sm text-zinc-400">{t("years_building_label")}</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {[
                "Full Stack",
                "Next.js",
                "AI Apps",
                "Automation",
                "SaaS",
                "TypeScript",
                "Laravel",
                "Cloud",
                "UI/UX",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24 md:px-10">
        <div className="mb-8 max-w-xl">
          <SearchForm initialQuery={query} />
        </div>

        {filteredProjects.length === 0 ? (
          <div>
            <h2>{t("no_results_found")}</h2>
          </div>
        ) : (
          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
              className="bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600"
            >
              {t("github_button")}
            </Button>
          </Link>
        </div>

        <h2
          className="text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("templates_title")}
        </h2>
        <p className="my-2" data-aos="fade-up" data-aos-delay="100">
          {t("templates_description")}
        </p>

        <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {translatedTemplates.map((template, idx) => (
            <div key={idx}>
              <ProjectCard {...template} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
