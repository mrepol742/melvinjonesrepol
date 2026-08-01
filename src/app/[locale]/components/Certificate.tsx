import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import certificates from "@/lib/certificates";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CertificateSection() {
  return (
    <>
      <Slider>
        {certificates
          .filter((certificate) => certificate.featured)
          .map((certificate, idx) => (
            <Link key={idx} href={certificate.link || "#"}>
              <Card
                subtitle={certificate.instructor}
                className="group snap-start flex-shrink-0 w-80 md:w-96 flex"
              >
                <h2 className="font-bold line-clamp-2">{certificate.title}</h2>
                <p className="mb-2 text-sm">{certificate.instructor}</p>

                <p className="mb-4 line-clamp-4">{certificate.description}</p>

                <div className="flex justify-end items-center gap-4">
                  {certificate.link && (
                    <button
                      title="View Certificate"
                      className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 font-medium text-sm px-4 py-2 rounded-lg transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  )}
                </div>
              </Card>
            </Link>
          ))}
      </Slider>
    </>
  );
}
