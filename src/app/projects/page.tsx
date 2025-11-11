import { Metadata } from "next";
import projects from "@/lib/projectList";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SearchForm from "@/components/form/SearchForm";

export const metadata: Metadata = {
  title: "Projects - Melvin Jones Repol",
  description: "Here are some of my projects that I have worked on.",
  keywords: [
    "Projects",
    "Axleshift Core 1",
    "Ulisha Store",
    "Webvium Browser",
    "Webvium VPN",
    "Point of Sale",
    "Orion Chatbot",
    "Melvin Jones Repol",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects",
  },
  openGraph: {
    title: "Projects - Melvin Jones Repol",
    description: "Here are some of my projects that I have worked on.",
    url: "https://www.melvinjonesrepol.com/projects",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Projects Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Melvin Jones Repol",
    description: "Here are some of my projects that I have worked on.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default async function Projects({
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
    <main className="p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold">My Projects</h1>
        <p>Here are some of my projects that I have worked on.</p>

        <SearchForm initialQuery={query} />

        {filteredProjects.length === 0 ? (
          <div>
            <h2>No results found.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
            {filteredProjects.map((project, idx) => (
              <div key={idx}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        )}

        <div className="my-6">
          <p data-aos="fade-up" data-aos-delay="200">
            You can find more projects and cool stuff on my github account.
          </p>
          <Link
            href="https://github.com/mrepol742"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              className="text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                          before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
                          after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
              style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
            >
              Github
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
