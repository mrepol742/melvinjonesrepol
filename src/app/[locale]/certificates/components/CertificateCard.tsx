import Card from "@/components/ui/Card";
import certificates from "@/lib/certificates";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Certificate = (typeof certificates)[number];

export default function CertificateCard({
  certificate,
  viewLabel,
}: {
  certificate: Certificate;
  viewLabel: string;
}) {
  return (
    <Link href={certificate.link}>
      <Card className="group">
        <p className="mb-2 text-xl font-bold line-clamp-2">
          {certificate.title}
        </p>

        <div className="mb-3 flex flex-wrap gap-3 text-stone-600 dark:text-stone-400">
          <span className="text-nowrap border-l-2 border-orange-500 pl-2 text-xs capitalize">
            {certificate.instructor}
          </span>
          <span className="text-nowrap text-xs capitalize">
            {certificate.date}
          </span>
        </div>

        <p className="mb-4" title={certificate.description}>
          {certificate.description}
        </p>

        {certificate.link && (
          <div className="flex justify-end items-center gap-4">
            <button
              title="Read article"
              className="inline-flex items-center rounded-sm bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        )}
      </Card>
    </Link>
  );
}
