import Image from "next/image";
import Link from "next/link";

type TeamCardProps = {
  title: string;
  description: string;
  backgroundColor: string;
};

export default function TeamCard({
  title,
  description,
  backgroundColor,
}: TeamCardProps) {
  return (
    <div className="text-center rounded-2xl p-6 shadow hover:shadow-lg transition">
      <div className="flex justify-center mb-6">
        <div
          className={`rounded-full ${backgroundColor} transition-colors duration-300 overflow-hidden w-32 h-32 flex items-center justify-center hover:bg-transparent`}
        >
          <Image
            src="/images/melvinjonesrepol.transparent.png"
            alt="Team Member Image"
            className="object-cover w-32 h-32"
            width={100}
            height={100}
          />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
}
