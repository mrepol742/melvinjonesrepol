import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div
        className={`bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:scale-98 transition-transform duration-300`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <span>{type}</span>
        <p>{description}</p>
        <p className="mb-4">{date}</p>

        <span
          onClick={() => router.push(link)}
          className="text-blue-600 font-medium text-sm hover:underline mr-4"
          aria-label={`Open ${title} certificate link`}
        >
          View Certificate →
        </span>
      </div>
    </div>
  );
}
