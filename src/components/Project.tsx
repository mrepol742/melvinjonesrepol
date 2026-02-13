import Image from "next/image";
import HorizontalAdDisplayUnit from "./ads/HorizontalAdDisplay";

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
    license: string;
    preview_image: string;
    preview_image_alt: string;
    features: ProjectFeature[];
    resources: ProjectResource[];
  };
}) {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-6">
          {project.title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl text-lg md:text-xl text-gray-300"
        >
          {project.description}
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex gap-4 mt-8 flex-wrap justify-center"
        >
          <a
            href="#features"
            className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Explore
          </a>

          {project.view_source_url && (
            <a
              href="https://github.com/"
              target="_blank"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              View Source
            </a>
          )}

          {project.download_url && (
            <a
              href={project.download_url}
              target="_blank"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Download
            </a>
          )}
        </div>
      </section>

      <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-white px-10 gap-12">
        <div data-aos="fade-right" className="max-w-xl">
          <h2 className="text-4xl font-bold mb-6">About The Project</h2>
          <p className="text-gray-600 mb-4">{project.description_long}</p>

          <div className="flex gap-4 flex-wrap">
            {project.is_open_source && (
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Open Source
              </span>
            )}

            {project.is_freeware && (
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                Freeware
              </span>
            )}

            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {project.license}
            </span>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="relative w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={project.preview_image}
            alt={project.preview_image_alt}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="features"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-20"
      >
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {project.features &&
            project.features.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
        </div>

        <HorizontalAdDisplayUnit />
      </section>

      <section className="h-screen flex flex-col justify-center items-center bg-black text-white px-6">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-10 text-center">
          Resources
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {project.resources &&
            project.resources.map((resource, index) => (
              <a
                key={index}
                data-aos="fade-up"
                data-aos-delay="100"
                href={resource.url}
                target="_blank"
                className={`px-8 py-4 hover:scale-105 transition rounded-xl ${index === 0 ? "bg-white text-black font-semibold" : "border border-white hover:bg-white hover:text-black"}`}
              >
                {resource.title}
              </a>
            ))}
        </div>
      </section>

      {project.is_open_source && (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h3 data-aos="fade-up" className="text-2xl font-semibold mb-4">
            Ready to Get Started?
          </h3>

          <p data-aos="fade-up" data-aos-delay="200" className="mb-6">
            Clone the repository and start building today.
          </p>

          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href={project.view_source_url}
            target="_blank"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Get Started
          </a>
        </section>
      )}
    </>
  );
}
