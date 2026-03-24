"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type WorkExperienceProps = {
  company: string;
  title: string;
  description: string;
  date?: string;
  cert?: string;
};

export default function WorkExperienceCard({
  company,
  title,
  description,
  date,
  cert,
}: WorkExperienceProps) {
  const router = useRouter();

  return (
    <Link href={cert || "#"} data-aos="fade-up">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-95 hover:backdrop-blur-xl transition-transform duration-300 shadow-lg/10">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{company}</h3>
          {date && <span className="text-sm italic">{date}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-medium">{title}</p>
          <p className="leading-relaxed flex-1">{description}</p>
        </div>

        {cert && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push(cert);
              }}
              className="text-sm font-medium underline-offset-2 hover:underline"
              aria-label={`Open ${title} certificate link`}
            >
              View Certificate →
            </button>
          </div>
        )}
      </div>
    </Link>
  );
}
