"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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
          <span
            onClick={() => router.push(cert)}
            className="text-blue-600 font-medium text-sm hover:underline mr-4"
            aria-label={`Open ${title} link`}
          >
            View Certificate →
          </span>
        )}
      </div>
    </Link>
  );
}
