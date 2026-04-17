import certificates from "@/lib/certificates";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CertificateSection() {
  return (
    <>
      <div
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6 scrollbar-hide"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      >
        {certificates
          .filter((certificate) => certificate.featured)
          .map((certificate, idx) => (
            <article
              key={idx}
              className="snap-start flex-shrink-0 w-60 md:w-76"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 hover:backdrop-blur-xl transition-transform duration-300 shadow-lg/10">
                <h2 className="text-xl font-bold">{certificate.title}</h2>

                <p className="mb-4 line-clamp-3">{certificate.description}</p>

                <div className="flex justify-end items-center gap-4">
                  {certificate.link && (
                    <Link
                      href={certificate.link}
                      className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
                    >
                      Read more
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>
    </>
  );
}
