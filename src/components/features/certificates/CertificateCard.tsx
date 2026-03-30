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
      <div className="group p-6 border rounded-2xl shadow-sm max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
        {type && (
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full border">
            {type}
          </span>
        )}

        <h3 className="text-lg font-semibold tracking-tight mb-2">{title}</h3>

        <p className="text-sm leading-relaxed line-clamp-3">{description}</p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xs italic opacity-70">{date}</span>

          <button
            onClick={() => router.push(link)}
            className="text-sm font-medium flex items-center gap-1
                       transition-all duration-200
                       group-hover:gap-2"
            aria-label={`Open ${title} certificate link`}
          >
            View
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
