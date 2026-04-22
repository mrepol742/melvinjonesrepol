"use client";

import { useState } from "react";
import CertificateCard from "@/components/features/certificates/CertificateCard";
import Link from "next/link";
import Masonry from "react-masonry-css";
import SearchForm from "@/components/ui/SearchForm";
import certificates from "@/lib/certificates";

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
            breakpointCols={{ 2560: 5, 1440: 4, 1025: 3, 768: 2, 640: 1 }}
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
