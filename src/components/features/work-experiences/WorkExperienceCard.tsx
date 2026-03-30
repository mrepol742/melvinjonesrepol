"use client";

import Link from "next/link";

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
  return (
    <Link
      href={cert || "#"}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      className="group block"
    >
      <div
        className="p-6 border rounded-2xl shadow-sm
                   transition-all duration-300
                   hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{company}</h3>
            <p className="text-sm opacity-80">{title}</p>
          </div>

          {date && (
            <span className="text-xs italic opacity-70 whitespace-nowrap">
              {date}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed line-clamp-3">{description}</p>

        {/* Footer */}
        {cert && (
          <div className="mt-6 flex justify-end">
            <span
              className="text-sm font-medium flex items-center gap-1
                         transition-all duration-200
                         group-hover:gap-2"
            >
              View
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
