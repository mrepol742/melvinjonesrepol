import certificates from "@/lib/certificates";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import CertificateCard from "./components/CertificateCard";

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
          width: 1200,
          height: 630,
          alt: "Certificates Cover",
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

  const filteredCertificates = certificates.filter(
    (certificate) =>
      certificate.title.toLowerCase().includes(query.toLowerCase()) ||
      certificate.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              {t("title_line1")}
              <br />
              <span className="opacity-40">{t("title_line2")}</span>
              <br />
              {t("title_line3")}
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("description")}
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{certificates.length}+</p>
              <p className="mt-1 text-sm text-zinc-400">{t("count_label")}</p>
            </div>
            <div>
              <p className="text-4xl font-black">5+</p>
              <p className="mt-1 text-sm text-zinc-400">
                {t("platforms_label")}
              </p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Coursera", "Google", "IBM", "Sololearn", "Board Infinity"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 my-6 md:px-10">
        {filteredCertificates.length === 0 ? (
          <div className="py-20 text-center text-zinc-500">
            <p className="text-lg font-medium">{t("no_results_found")}</p>
          </div>
        ) : (
          <div className="relative">
            {/* Spine */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2" />

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
                            <div className="absolute top-7 -right-8 w-8 h-px bg-zinc-700" />
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
                          className={`w-4 h-4 rounded-full ring-4 ring-black ${
                            certificate.featured
                              ? "bg-orange-400"
                              : "bg-zinc-600"
                          }`}
                        />
                      </div>

                      {/* Right half */}
                      <div className="w-1/2 pl-8">
                        {!isLeft && (
                          <div className="relative w-full max-w-lg">
                            <div className="absolute top-7 -left-8 w-8 h-px bg-zinc-700" />
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
                          className={`w-3 h-3 rounded-full ring-4 ring-black ${
                            certificate.featured
                              ? "bg-orange-400"
                              : "bg-zinc-600"
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
    </main>
  );
}
