import certificates from "@/lib/certificates";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import CertificateCard from "./components/CertificateCard";
import Header from "@/components/ui/Header";
import CollectionFilters from "@/components/ui/CollectionFilters";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Certificates - Melvin Jones Repol",
    description:
      "A collection of certificates I have earned through various courses and programs, showcasing my commitment to continuous learning and professional development in software engineering and DevOps.",
    keywords: [
      "Certificates",
      "Coursera",
      "Google",
      "IBM",
      "Sololearn",
      "Board Infinity",
      "Software Engineering",
      "DevOps",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Laravel",
      "PHP",
    ],
    alternates: getAlternates("/certificates", locale),
    openGraph: {
      title: "Certificates - Melvin Jones Repol",
      description:
        "A collection of certificates I have earned through various courses and programs, showcasing my commitment to continuous learning and professional development in software engineering and DevOps.",
      url: "https://www.melvinjonesrepol.com/certificates",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 800,
          height: 600,
          alt: "Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Certificates - Melvin Jones Repol",
      description:
        "A collection of certificates I have earned through various courses and programs, showcasing my commitment to continuous learning and professional development in software engineering and DevOps.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default async function CertificatesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const t = await getTranslations("certificates");
  const sParams = await searchParams;

  const query = Array.isArray(sParams.q)
    ? sParams.q.join(", ")
    : sParams.q || "";
  const featured = Array.isArray(sParams.featured)
    ? sParams.featured[0]
    : sParams.featured || "";

  const filteredCertificates = certificates.filter(
    (certificate) =>
      (certificate.title.toLowerCase().includes(query.toLowerCase()) ||
        certificate.description.toLowerCase().includes(query.toLowerCase())) &&
      (!featured || certificate.featured === (featured === "true")),
  );

  return (
    <>
      <Header
        title={
          <>
            {t("title_line1")}
            <br />
            <span className="homepage-accent">{t("title_line2")}</span>
            <br />
            {t("title_line3")}
          </>
        }
        intro={t("description")}
      />

      <section className="px-6 my-6 md:px-10">
        <CollectionFilters
          label="Explore credentials"
          description="Search completed learning and highlight featured certificates."
          initialQuery={query}
          initialFilter={featured}
          filterParam="featured"
          filterLabel="Filter certificates by status"
          allFilterLabel="All certificates"
          options={[{ value: "true", label: "Featured" }]}
        />

        <p className="mt-6 text-sm text-stone-600 dark:text-stone-400">
          Showing <span className="font-bold text-orange-700 dark:text-orange-300">{filteredCertificates.length}</span>{" "}
          {filteredCertificates.length === 1 ? "certificate" : "certificates"}
        </p>

        {filteredCertificates.length === 0 ? (
          <div className="py-20 text-center text-stone-500 dark:text-stone-400">
            <p className="text-lg font-medium">{t("no_results_found")}</p>
          </div>
        ) : (
          <div className="relative">
            {/* Spine */}
            <div className="absolute bottom-0 left-3 top-0 w-px bg-orange-300 dark:bg-orange-900 md:left-1/2 md:-translate-x-1/2" />

            <div className="flex flex-col gap-10">
              {filteredCertificates.map((certificate, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index}>
                    {/* Desktop: two-column switch */}
                    <div className="hidden md:flex items-start">
                      {/* Left half */}
                      <div className="w-1/2 flex justify-end pr-8">
                        {isLeft && (
                          <div className="relative w-full max-w-lg">
                            <div className="absolute -right-8 top-7 h-px w-8 bg-orange-300 dark:bg-orange-900" />
                            <CertificateCard
                              certificate={certificate}
                              viewLabel={t("view_certificate")}
                            />
                          </div>
                        )}
                      </div>

                      {/* Dot */}
                      <div className="flex-shrink-0 z-10 mt-6 -mx-2">
                        <div
                          className={`h-4 w-4 rounded-full ring-4 ring-[#f5f0e8] dark:ring-[#15130f] ${
                            certificate.featured
                              ? "bg-orange-400"
                              : "bg-orange-500"
                          }`}
                        />
                      </div>

                      {/* Right half */}
                      <div className="w-1/2 pl-8">
                        {!isLeft && (
                          <div className="relative w-full max-w-lg">
                            <div className="absolute -left-8 top-7 h-px w-8 bg-orange-300 dark:bg-orange-900" />
                            <CertificateCard
                              certificate={certificate}
                              viewLabel={t("view_certificate")}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile: single column */}
                    <div className="flex md:hidden items-start gap-5">
                      <div className="flex-shrink-0 z-10 mt-7">
                        <div
                          className={`h-3 w-3 rounded-full ring-4 ring-[#f5f0e8] dark:ring-[#15130f] ${
                            certificate.featured
                              ? "bg-orange-400"
                              : "bg-orange-500"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CertificateCard
                          certificate={certificate}
                          viewLabel={t("view_certificate")}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
