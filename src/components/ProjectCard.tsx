import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  delay?: number;
  repo?: string;
  link?: string;
  download?: string;
};

export default function ProjectCard({
  title,
  description,
  delay = 100,
  repo,
  link,
  download,
}: ProjectCardProps) {
  return (
    <div
      className="bg-black/70 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white-700 mb-4">{description}</p>
      {link && (
        <Link
          href={link}
          className="text-blue-600 font-medium text-sm hover:underline mr-4"
        >
          View Project →
        </Link>
      )}
      {repo && (
        <Link
          href={repo}
          target="_blank"
          className="text-blue-600 font-medium text-sm hover:underline"
        >
          View Repo →
        </Link>
      )}
      {download && (
        <Link
          href={download}
          className="text-blue-600 font-medium text-sm hover:underline"
        >
          Download →
        </Link>
      )}
    </div>
  );
}
