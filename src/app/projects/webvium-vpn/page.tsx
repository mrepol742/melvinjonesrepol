import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webvium VPN - Melvin Jones Repol",
  description:
    "Anonymous, Secured, Private and the fastest Virtual Private Network.",
};

const Images = [
  "/images/webviumvpn-1.jpg",
  "/images/webviumvpn-2.jpg",
  "/images/webviumvpn-3.jpg",
  "/images/webviumvpn-4.jpg",
];

export default function WebviumVPN() {
  return (
    <main className="p-8">
      <section>
        <Link className="flex items-center mb-4" href="/projects">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <h3 className="text-2xl font-semibold">Projects</h3>
        </Link>

        <div className="flex items-center mb-4">
          <Image
            src="/images/webviumvpn-transparent-icon.png"
            alt="Webvium VPN Icon"
            width={70}
            height={70}
            className="bg-white rounded-full mr-7"
          />
          <div>
            <h1 className="text-4xl font-bold">Webvium VPN</h1>
            <p className="text-gray-700 mb-4">
              Anonymous, Secured, Private and the fastest Virtual Private
              Network.
            </p>
          </div>
        </div>

        <div className="w-full mb-8">
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-2">
            {Images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Screenshot ${index + 4}`}
                width={250}
                height={445}
                className="object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
