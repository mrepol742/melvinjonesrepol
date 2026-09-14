import Image from "next/image";
import HorizontalAdDisplayUnit from "./HorizontalAdDisplay";
import Link from "next/link";
import Header from "./Header";

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
  const images = project?.images ?? [];

  return (
    <>
      <Header
        title={(() => {
          const words = project.title.split(" ");
          const chunkSize = Math.ceil(words.length / 3);
          const line1 = words.slice(0, chunkSize).join(" ");
          const line2 = words.slice(chunkSize, chunkSize * 2).join(" ");
          const line3 = words.slice(chunkSize * 2).join(" ");

          return (
            <h1 className="font-mono text-[10vw] md:text-[7vw] lg:text-[5vw] font-black tracking-tighter leading-[0.85] mb-8">
              {line1}
              {line2 && (
                <>
                  <br />
                  <span className="text-orange-600 dark:text-orange-400">{line2}</span>
                </>
              )}
              {line3 && (
                <>
                  <br />
                  {line3}
                </>
              )}
            </h1>
          );
        })()}
        intro={project.description}
      />

      <section id="about" className="px-6 py-28 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6">
            Overview
          </p>
          <p
            className="text-2xl md:text-3xl leading-relaxed"
            data-aos="fade-up"
          >
            {project.description_long}
          </p>

          {(project.view_source_url || project.download_url) && (
            <div className="mt-12 flex flex-wrap gap-4">
              {project.view_source_url && (
                <a
                  href={project.view_source_url}
                  target="_blank"
                  className="group inline-flex items-center gap-2 border border-stone-400 bg-stone-50 px-6 py-3 text-sm font-medium transition hover:border-orange-500 dark:border-orange-500/40 dark:bg-zinc-900"
                >
                  View Source
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              )}
              {project.download_url && (
                <a
                  href={project.download_url}
                  target="_blank"
                  className="group inline-flex items-center gap-2 border border-orange-600 bg-orange-500 px-6 py-3 text-sm font-semibold text-stone-950 shadow-[3px_3px_0_0_rgb(67_20_7)] transition hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  Download
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {images.length > 0 && (
        <section className="border-y border-stone-300 bg-orange-50/50 py-20 dark:border-orange-500/25 dark:bg-zinc-900">
          <div className="px-6 md:px-10 mb-8 flex items-end justify-between max-w-6xl mx-auto">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em]">
              Gallery / {String(images.length).padStart(2, "0")} frames
            </h2>
            <p className="hidden font-mono text-xs text-stone-500 dark:text-stone-400 sm:block">
              scroll →
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative h-[280px] w-[80vw] shrink-0 snap-start overflow-hidden border border-stone-300 sm:w-[420px] dark:border-orange-500/25"
              >
                <Image
                  src={img}
                  alt="project image"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-zinc-950 px-2 py-1 font-mono text-xs text-orange-200">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section id="features" className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] mb-12">
            Feature Set
          </h2>

          <div className="divide-y divide-stone-300 border-t border-stone-300 dark:divide-orange-500/25 dark:border-orange-500/25">
            {project.features?.map((f, i) => (
              <div
                key={i}
                className="group -mx-4 grid grid-cols-[3rem_1fr] gap-x-6 gap-y-2 px-4 py-8 transition-colors hover:bg-orange-50 dark:hover:bg-orange-500/5 md:grid-cols-[4rem_1fr_1fr]"
                data-aos="fade-up"
                data-aos-delay={Math.min(i * 40, 240)}
              >
                <span className="font-mono text-sm text-stone-500 transition-colors group-hover:text-orange-600 dark:text-stone-400 dark:group-hover:text-orange-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed col-span-2 md:col-span-1">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-300 bg-orange-50/50 py-10 dark:border-orange-500/25 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
            Advertisements
          </p>
          <HorizontalAdDisplayUnit />
        </div>
      </section>

      <section id="resources" className="py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] mb-10">
            Resources
          </h2>

          <div className="overflow-hidden border border-stone-300 bg-stone-50 dark:border-orange-500/25 dark:bg-zinc-900">
            {project.resources?.map((r, i) => (
              <Link
                key={i}
                href={r.url}
                target="_blank"
                className="group flex items-center justify-between gap-4 border-b border-stone-300 px-6 py-4 transition-colors last:border-b-0 hover:bg-orange-50 dark:border-orange-500/25 dark:hover:bg-orange-500/5"
              >
                <span className="flex items-center gap-3 font-mono text-sm">
                  <span className="text-orange-600 dark:text-orange-400">$</span>
                  <span className="text-stone-700 transition-colors group-hover:text-stone-950 dark:text-stone-300 dark:group-hover:text-white">
                    open {r.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </span>
                <span className="text-sm text-stone-500 transition-colors group-hover:text-orange-600 dark:text-stone-400 dark:group-hover:text-orange-400">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {project.is_open_source && (
        <section className="border-t border-stone-300 py-28 text-center dark:border-orange-500/25">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400">
            Contribute
          </p>
          <h3 className="text-3xl font-bold mb-8">Clone it. Build on it.</h3>

          <a
            href={project.view_source_url}
            target="_blank"
            className="inline-flex items-center gap-2 border border-orange-600 bg-orange-500 px-8 py-4 font-semibold text-stone-950 shadow-[3px_3px_0_0_rgb(67_20_7)] transition hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Get Started →
          </a>
        </section>
      )}

      <section className="mb-5 border-y border-stone-300 bg-orange-50/50 py-10 dark:border-orange-500/25 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
            Advertisements
          </p>
          <HorizontalAdDisplayUnit />
        </div>
      </section>
    </>
  );
}
