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
  return (
    <main className="bg-white text-zinc-900">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={project.preview_image}
            alt={project.preview_image_alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {project.title}
            </h1>

            <p className="mt-6 text-lg text-zinc-200 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#features"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
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

          <div className="hidden lg:block relative">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={project.preview_image}
                alt={project.preview_image_alt}
                fill
                className="object-cover"
              />
            </div>

            {project.images?.[1] && (
              <div className="absolute -bottom-10 -right-10 w-56 h-40 rounded-xl overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src={project.images[1]}
                  alt="preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">About the Product</h2>
          <p className="text-zinc-600 leading-relaxed">
            {project.description_long}
          </p>
        </div>

        <aside className="space-y-4">
          <div className="p-5 rounded-xl border bg-zinc-50">
            <h3 className="font-semibold mb-3">Project Details</h3>

            <div className="space-y-2 text-sm text-zinc-600">
              <p>License: {project.license}</p>
              <p>
                Status:{" "}
                {project.is_no_longer_maintained ? "Deprecated" : "Active"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.is_open_source && (
                <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  Open Source
                </span>
              )}
              {project.is_freeware && (
                <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  Freeware
                </span>
              )}
            </div>
          </div>
        </aside>
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

      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features?.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border bg-white shadow-sm hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-zinc-600">{f.description}</p>
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

      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Resources</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {project.resources?.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                className="px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
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
