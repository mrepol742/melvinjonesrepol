import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Axleshift Core 1 - Melvin Jones Repol",
  description:
    "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
};

const Images = [
  "/images/axleshift-1.png",
  "/images/axleshift-2.png",
  "/images/axleshift-3.png",
  "/images/axleshift-4.png",
  "/images/axleshift-5.png",
  "/images/axleshift-6.png",
  "/images/axleshift-7.png",
];

export default function UlishaStore() {
  return (
    <main className="p-8">
      <section>
        <Link className="flex items-center mb-4" href="/projects">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <h3 className="text-2xl font-semibold">Projects</h3>
        </Link>

        <div className="flex items-center mb-4">
          <Image
            src="/images/axleshift-transparent-icon.png"
            alt="Axleshift Icon"
            width={70}
            height={70}
            className="bg-blue-500 rounded-full mr-7 p-4"
          />
          <div>
            <h1 className="text-4xl font-bold">Axleshift Core 1</h1>
            <p className="text-gray-300 mb-4">
              A freight management services. Providing Businesses with
              cutting-edge platform, security, and reliability.
            </p>
          </div>
        </div>

        <div className="w-full mb-8">
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-2">
            {Images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Screenshot ${index + 1}`}
                width={400}
                height={120}
                sizes="(max-width: 640px) 90vw, 400px"
                className="object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
