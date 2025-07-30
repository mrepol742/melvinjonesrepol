"use client";

import { useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import { Search, X } from "lucide-react";

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
    link: "https://drive.google.com/file/d/1fnhQ8kud8dCXdFtUGDDDUZ3MCdlKBfYE/view?usp=sharing",
  },
  {
    title: "Introduction to RAN, 5G, and Open RAN",
    type: "Certificate of Particiption",
    description: "Asia Open RAN Academy",
    date: "11-2024",
    link: "https://drive.google.com/file/d/139AF3kBrgM3Z12dTCxnpv97aOXaOBqBO/view?usp=sharing",
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
    title: "Sololearn Course Completion Certificates",
    description: "Sololearn",
    date: "1-2019 2-2022",
    link: "https://www.sololearn.com/profile/11349142",
  },
];

export default function Certificates() {
  const [query, setQuery] = useState("");

  return (
    <main className="p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-up">
          Certificates
        </h1>
        <p className="text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Here are some of the certificates I have earned through various
          courses and programs.
        </p>
        <div data-aos="fade-right" data-aos-delay="200">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border rounded my-4 flex items-center gap-2 relative px-2 py-1 w-full max-w-xs"
            style={{ borderColor: "#e5e7eb" }}
          >
            <span className="absolute left-3 text-gray-400 pointer-events-none">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search certificates..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none px-9 py-2 w-full bg-transparent"
              style={{
                border: "none",
                boxShadow: "none",
                paddingRight: query ? "2.5rem" : undefined,
              }}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="right-3 text-gray-400 hover:text-gray-600 absolute"
                aria-label="Clear search"
                tabIndex={0}
                style={{ right: "0.75rem" }}
              >
                <X size={18} />
              </button>
            )}
          </form>
        </div>
        <div className="mt-4">
          {certificates
            .filter(
              (certificate) =>
                certificate.title.toLowerCase().includes(query.toLowerCase()) ||
                certificate.description
                  .toLowerCase()
                  .includes(query.toLowerCase())
            )
            .map((certificate, idx) => (
              <CertificateCard
                key={certificate.title + idx}
                {...certificate}
                delay={idx * 100}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
