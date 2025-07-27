import Image from "next/image";
import Link from "next/link";
import { Code, GithubIcon, LinkedinIcon } from "lucide-react";

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
    <div className="text-center rounded-2xl p-6 transition">
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
      <Link
        href="/"
        className="text-blue-500 hover:underline transition-colors duration-300"
      >
        <Code className="inline-block mx-2" />
      </Link>
      <Link
        href="https://github.com/mrepol742/"
        className="text-blue-500 hover:underline transition-colors duration-300"
      >
        <GithubIcon className="inline-block mx-2" />
      </Link>
      <Link
        href="https://linkedin.com/in/mrepol742"
        className="text-blue-500 hover:underline transition-colors duration-300"
      >
        <LinkedinIcon className="inline-block mx-2" />
      </Link>
    </div>
  );
}
