"use client";

import WorkExperienceCard from "@/components/features/work-experiences/WorkExperienceCard";
import Masonry from "react-masonry-css";

export default function WorkExperience() {
  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-up">
          Professional Work Experience
        </h1>
        <p className="mt-2 mb-5" data-aos="fade-up" data-aos-delay="100">
          A summary of my professional work experience, including the roles,
          responsibilities, and projects I have contributed to throughout my
          career in development and technology.
        </p>
        <Masonry
          breakpointCols={{ default: 4, 1025: 2, 640: 1 }}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          <WorkExperienceCard
            company="Freelance"
            title="Software Engineer"
            description="I develop, deploy, and maintain efficient and reliable software and websites tailored to meet customer needs, based on system analysis, design, and business models."
            date="2021 - Present"
          />
          <WorkExperienceCard
            company="Apptrade Inc."
            title="IT Staff Intern"
            description="Incharge of maintaining the IT infrastructure, including hardware, software, and network. Responsible for troubleshooting technical issues, providing support to end-users, and ensuring the efficiency and reliability of the organization's IT system."
            date="April 2025 - June 2025 (250hrs)"
            cert="/certificates/internship-apptrade-inc.jpg"
          />
        </Masonry>
      </section>
    </main>
  );
}
