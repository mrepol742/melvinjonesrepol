import certificates from "@/lib/certificates";
import { Metadata } from "next";
import SearchForm from "@/components/ui/SearchForm";
import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/components/common/metadata/Alternatives";

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
              <p className="mt-1 text-sm text-zinc-400">{t("platforms_label")}</p>
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

      <section className="px-6 py-24 md:px-10">
        <div className="mb-8 max-w-xl">
          <SearchForm initialQuery={query} />
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="mt-8">
            <h2>{t("no_results_found")}</h2>
          </div>
        ) : (
          <div className="relative mt-12">
            <div className="absolute top-4 left-1 w-full h-0.5 bg-gray-800 hidden md:block" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:overflow-x-auto pb-8 snap-x scrollbar-hide">
              {filteredCertificates.map((certificate, index) => (
                <div
                  key={index}
                  className="relative md:w-96 flex-shrink-0 snap-start"
                  data-aos="fade-up"
                  data-aos-delay={(index % 10) * 150}
                >
                  <div className="mt-2 ms-1 hidden md:block absolute -top-1 left-0 w-6 h-6 rounded-full bg-[#7873f5] z-10 ring-2 ring-gray-800" />

                  <div className="md:mt-10 border border-gray-800 md:border-none p-5 md:p-0 rounded-2xl md:rounded-none">
                    <span className="text-xs font-mono mb-2 block opacity-70">
                      {certificate.date}
                    </span>
                    <h3 className="text-xl font-bold">{certificate.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      {certificate.description}
                    </p>

                    {certificate.link && (
                      <div className="mt-5">
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium transition-colors flex items-center gap-1 underline underline-offset-2 hover:opacity-80"
                        >
                          {t("view_certificate")}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <span className="text-xs">{t("swipe_hint")}</span>
      </section>
    </main>
  );
}
