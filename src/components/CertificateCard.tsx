import Link from "next/link";

type CertificateCardProps = {
  title: string;
  description: string;
  date: string;
  type?: string;
  link: string;
};

export default function CertificateCard({
  title,
  description,
  date,
  type,
  link,
}: CertificateCardProps) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition mb-3">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <span>{type}</span>
      <p className="text-white-800 mb-4">
        <span className="text-gray-500">{date}</span> {description}
      </p>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium text-sm hover:underline mr-4"
      >
        View Certificate →
      </Link>
    </div>
  );
}
