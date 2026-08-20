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
                  <span className="text-zinc-600">{line2}</span>
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
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:border-white/40"
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
                  className="group inline-flex items-center gap-2 rounded-full bg-[#FFB020] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85"
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
        <section className="border-y border-white/10 bg-black/40 py-20">
          <div className="px-6 md:px-10 mb-8 flex items-end justify-between max-w-6xl mx-auto">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em]">
              Gallery / {String(images.length).padStart(2, "0")} frames
            </h2>
            <p className="hidden sm:block text-xs text-zinc-600 font-mono">
              scroll →
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative shrink-0 w-[80vw] sm:w-[420px] h-[280px] snap-start rounded-lg overflow-hidden border border-white/10 group"
              >
                <Image
                  src={img}
                  alt="project image"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 font-mono text-xs text-white/70 bg-black/50 backdrop-blur px-2 py-1 rounded">
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

          <div className="divide-y divide-white/10 border-t border-white/10">
            {project.features?.map((f, i) => (
              <div
                key={i}
                className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1fr] gap-x-6 gap-y-2 py-8 transition-colors hover:bg-white/[0.03] px-4 -mx-4 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={Math.min(i * 40, 240)}
              >
                <span className="font-mono text-sm text-zinc-600 group-hover:text-green-300 transition-colors">
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

      <section className="border-y border-white/10 bg-black/30 py-10">
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

          <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
            {project.resources?.map((r, i) => (
              <Link
                key={i}
                href={r.url}
                target="_blank"
                className="group flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10 last:border-b-0 transition-colors hover:bg-white/[0.04]"
              >
                <span className="flex items-center gap-3 font-mono text-sm">
                  <span className="text-[#7CFFB2]">$</span>
                  <span className="text-zinc-300 group-hover:text-white transition-colors">
                    open {r.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </span>
                <span className="text-zinc-600 group-hover:text-[#FFB020] transition-colors text-sm">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {project.is_open_source && (
        <section className="py-28 text-center border-t border-white/10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Contribute
          </p>
          <h3 className="text-3xl font-bold mb-8">Clone it. Build on it.</h3>

          <a
            href={project.view_source_url}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFB020] text-black font-semibold hover:scale-105 transition"
          >
            Get Started →
          </a>
        </section>
      )}

      <section className="mb-5 border-y border-white/10 bg-black/30 py-10">
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
