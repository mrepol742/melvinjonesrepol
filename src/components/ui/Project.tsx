import Image from "next/image";
import HorizontalAdDisplayUnit from "./HorizontalAdDisplay";

type ProjectFeature = {
  title: string;
  description: string;
};

type ProjectResource = {
  title: string;
  url: string;
};

export default function Project({
  project,
}: {
  project: {
    title: string;
    description: string;
    view_source_url?: string;
    download_url?: string;
    description_long: string;
    is_open_source: boolean;
    is_freeware: boolean;
    is_no_longer_maintained?: boolean;
    license: string;
    preview_image: string;
    preview_image_alt: string;
    images?: string[];
    features: ProjectFeature[];
    resources: ProjectResource[];
  };
}) {
  const status = project.is_no_longer_maintained ? "Deprecated" : "Active";
  const chips = [
    project.is_open_source ? "Open Source" : null,
    project.is_freeware ? "Freeware" : null,
    project.license,
  ].filter(Boolean) as string[];

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={project.preview_image}
            alt={project.preview_image_alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/90" />

        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10 text-white">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              {project.title}
              <br />
              <span className="opacity-40">project</span>
              <br />
              overview.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {project.description}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-3"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <a
                href="#about"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:opacity-80 transition"
              >
                Explore
              </a>

              {project.view_source_url && (
                <a
                  href={project.view_source_url}
                  target="_blank"
                  className="px-6 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition"
                >
                  Source
                </a>
              )}

              {project.download_url && (
                <a
                  href={project.download_url}
                  target="_blank"
                  className="px-6 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition"
                >
                  Download
                </a>
              )}
            </div>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{project.features.length}</p>
              <p className="mt-1 text-sm text-zinc-400">Features</p>
            </div>
            <div>
              <p className="text-4xl font-black">{project.resources.length}</p>
              <p className="mt-1 text-sm text-zinc-400">Resources</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {chips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:grid grid-cols-[3rem_1fr_auto] gap-x-8 px-6 pb-3 border-b border-zinc-800 mb-2">
            <span className="text-xs uppercase tracking-widest opacity-40">
              #
            </span>
            <span className="text-xs uppercase tracking-widest opacity-40">
              Section
            </span>
            <span className="text-xs uppercase tracking-widest opacity-40">
              Status
            </span>
          </div>

          <div className="divide-y divide-zinc-800/60">
            {[
              {
                title: "About the Product",
                description: project.description_long,
                tag: "Overview",
              },
              {
                title: "Features",
                description: `${project.features.length} feature${
                  project.features.length !== 1 ? "s" : ""
                } included.`,
                tag: "Capabilities",
                href: "#features",
              },
              {
                title: "Resources",
                description: `${project.resources.length} resource${
                  project.resources.length !== 1 ? "s" : ""
                } available.`,
                tag: "Links",
                href: "#resources",
              },
            ].map((item, index) => (
              <a
                key={item.title}
                href={item.href ?? "#about"}
                className="group grid grid-cols-1 md:grid-cols-[3rem_1fr_auto] gap-4 md:gap-x-8 items-start md:items-center px-6 py-7 transition-colors hover:bg-zinc-900/40 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <span className="hidden md:block text-xs font-mono opacity-30 group-hover:opacity-60 transition-opacity pt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h2 className="text-base md:text-lg font-semibold leading-tight">
                      {item.title}
                    </h2>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {status}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2">
                  <span className="text-xs border border-zinc-700 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <span className="text-xs font-medium flex items-center gap-1">
                    Read
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                License
              </p>
              <p className="text-sm font-medium">{project.license}</p>
            </div>
            <div className="h-px sm:h-8 sm:w-px border-b sm:border-b-0 sm:border-r border-zinc-800 w-full sm:w-auto" />
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Status
              </p>
              <p className="text-sm font-medium">{status}</p>
            </div>
            <div className="h-px sm:h-8 sm:w-px border-b sm:border-b-0 sm:border-r border-zinc-800 w-full sm:w-auto" />
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Actions
              </p>
              <div className="flex gap-3">
                {project.view_source_url && (
                  <a
                    href={project.view_source_url}
                    target="_blank"
                    className="text-sm font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    Source
                  </a>
                )}
                {project.download_url && (
                  <a
                    href={project.download_url}
                    target="_blank"
                    className="text-sm font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.images?.length ? (
        <section className="bg-zinc-950 py-24 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">Gallery</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative h-64 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt="project image"
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features?.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-zinc-800 shadow-sm hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-zinc-100 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <HorizontalAdDisplayUnit />
        </div>
      </section>

      <section id="resources" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Resources</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {project.resources?.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                className="px-6 py-3 rounded-full border border-zinc-800 hover:bg-zinc-800 hover:text-white transition"
              >
                {r.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {project.is_open_source && (
        <section className="py-24 text-center bg-white">
          <h3 className="text-2xl font-semibold mb-4">Start Building</h3>
          <p className="text-zinc-600 mb-8">
            Clone the repository and contribute.
          </p>

          <a
            href={project.view_source_url}
            target="_blank"
            className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition"
          >
            Get Started
          </a>
        </section>
      )}
    </main>
  );
}
