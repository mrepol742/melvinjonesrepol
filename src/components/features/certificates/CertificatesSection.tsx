"use client";

import { useState } from "react";
import CertificateCard from "@/components/features/certificates/CertificateCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import Masonry from "react-masonry-css";
import SearchForm from "@/components/ui/SearchForm";

const certificates = [
  {
    title: "Devops Capstone Project",
    description: "IBM",
    date: "6-2025",
    link: "https://www.coursera.org/account/accomplishments/verify/YCGVVL7P1NNG",
  },
  {
    title: "Penetration Testing, Threat Hunting, and Cryptography",
    description: "IBM",
    date: "4-2025",
    link: "https://www.coursera.org/account/accomplishments/verify/5A84IHRBVEW9",
  },
  {
    title: "Artificial Intelligence/Machine Learning",
    type: "Certificate of Particiption",
    description: "Asia Open RAN Academy",
    date: "12-2024",
    link: "/certificates/ai-ml.pdf",
  },
  {
    title: "Introduction to RAN, 5G, and Open RAN",
    type: "Certificate of Particiption",
    description: "Asia Open RAN Academy",
    date: "11-2024",
    link: "/certificates/introduction-to-open-ran-and-5g.pdf",
  },
  {
    title: "Information Management in the Digital Age",
    description: "Trueline",
    date: "11-2024",
    link: "/certificates/information-management-digital-age.jpg",
  },
  {
    title: "Research Forum 2024",
    type: "Certificate of Attendance",
    description: "Bestlink College of the Philippines",
    date: "9-2024",
    link: "/certificates/research-forum-2024.jpg",
  },
  {
    title: "Managing Cybersecurity Incidents and Disasters",
    description: "Kennesaw State University",
    date: "8-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/47WRV357E5DK",
  },
  {
    title: "JavaScript Back-end Capstne Project",
    description: "IBM",
    date: "3-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/N5L8HX4TMRJ6",
  },
  {
    title: "Mastering Laravel Framework and PHP",
    description: "Board Infinity",
    date: "3-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/HTBCP5ZAMB7F",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    description: "IBM",
    date: "3-2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/D376A25E39TK",
  },
  {
    title: "Introduction to Software Engineering",
    description: "IBM",
    date: "2-2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/JN67GSBM4HE5",
  },
  {
    title: "Software Developer Career Guide and Interview Preparation",
    description: "IBM",
    date: "2-2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/EK4LFEGKP4KY",
  },
  {
    title: "Introduction to DevOps",
    description: "IBM",
    date: "10-2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/UH3LKLXAY5WK",
  },
  {
    title: "Student Research Forum for A.Y 2023-2024",
    type: "Certificate of Particiption",
    description: "Bestlink College of the Philippines",
    date: "9-2023",
    link: "/certificates/student-research-forum-2023-2024.jpg",
  },
  {
    title: "Sololearn Course Completion Certificates",
    description: "Sololearn",
    date: "1-2019 2-2022",
    link: "https://www.sololearn.com/profile/11349142",
  },
];

export default async function Certificates({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sParams = await searchParams;
  const query = Array.isArray(sParams.q)
    ? sParams.q.join(", ")
    : sParams.q || "";

  const filteredCertificates = certificates.filter(
    (certificate) =>
      certificate.title.toLowerCase().includes(query.toLowerCase()) ||
      certificate.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1
          className="text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Professional Certificates & Certifications
        </h1>

        <p className="mt-2" data-aos="fade-up" data-aos-delay="100">
          A collection of professional certificates I have earned from various
          online courses, training programs, and technical learning platforms.
          These certifications showcase my continuous learning in web
          development, programming, and modern digital technologies.
        </p>

        <SearchForm initialQuery={query} />

        {filteredCertificates.length === 0 ? (
          <div>
            <h2>No results found.</h2>
          </div>
        ) : (
          <Masonry
            breakpointCols={{ default: 4, 1025: 3, 768: 2, 640: 1 }}
            className="flex gap-6"
            columnClassName="space-y-6"
          >
            {filteredCertificates
              .filter(
                (certificate) =>
                  certificate.title
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                  certificate.description
                    .toLowerCase()
                    .includes(query.toLowerCase()),
              )
              .map((certificate, idx) => (
                <div key={idx}>
                  <Link
                    href={certificate.link || "#"}
                    className="no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CertificateCard {...certificate} />
                  </Link>
                </div>
              ))}
          </Masonry>
        )}
      </section>
    </main>
  );
}
