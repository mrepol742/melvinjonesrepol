import certificates from "@/lib/certificates";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CertificateSection() {
  return (
    <>
      <div
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex items-stretch gap-6 py-6 scrollbar-hide"
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
              className="group snap-start flex-shrink-0 w-80 md:w-96 flex"
            >
              <div className="p-6 border rounded-2xl shadow-sm max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
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
