import Link from "next/link";

type CertificateCardProps = {
  title: string;
  description: string;
  date: string;
  delay?: number;
  type?: string;
  link: string;
};

export default function CertificateCard({
  title,
  description,
  date,
  delay = 100,
  type,
  link,
}: CertificateCardProps) {
  return (
    <div
      className={`bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <span>{type}</span>
      <p>{description}</p>
      <p className="mb-4">{date}</p>

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
