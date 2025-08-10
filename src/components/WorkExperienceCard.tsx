import Link from "next/link";

type WorkExperienceProps = {
  id: number;
  company: string;
  title: string;
  description: string;
  date: string;
  cert?: string;
};

export default function WorkExperienceCard({
  id,
  company,
  title,
  description,
  date,
  cert,
}: WorkExperienceProps) {
  return (
    <Link href={cert || "#"}>
      <div
        className={`bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition`}
        data-aos="fade-up"
        data-aos-delay={`${id * 100}`}
      >
        <h3 className="text-xl font-bold">{company}</h3>
        <p>{title}</p>
        <p className="mb-2 text-gray-500">{date}</p>
        <p className="mb-3">{description}</p>
        {cert && (
          <a
            href={cert}
            target="_blank"
            className="text-blue-600 font-medium text-sm hover:underline mr-4"
          >
            View Certificate →
          </a>
        )}
      </div>
    </Link>
  );
}
