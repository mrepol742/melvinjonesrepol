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
  type,
  link,
}: CertificateCardProps) {
  const router = useRouter();

  return (
    <div data-aos="fade-up">
      <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg max-w-sm mx-auto hover:scale-95 hover:backdrop-blur-xl transition-transform duration-300">
        {type && (
          <span className="px-2 py-1 rounded-full text-xs font-medium">
            {type}
          </span>
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="flex-1 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm italic">{date}</span>
          <button
            onClick={() => router.push(link)}
            className="text-sm font-medium underline-offset-2 group-hover:underline"
            aria-label={`Open ${title} certificate link`}
          >
            View Certificate →
          </button>
        </div>
      </div>
    </div>
  );
}
