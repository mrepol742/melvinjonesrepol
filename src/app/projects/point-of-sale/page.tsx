import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Point of Sale - Melvin Jones Repol",
  description:
    "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
};

const Images = [
  "/images/pos-1.png",
  "/images/pos-2.png",
  "/images/pos-3.png",
  "/images/pos-4.png",
  "/images/pos-5.png",
];

export default function PointOfSale() {
  return (
    <main className="p-8">
      <section>
        <Link className="flex items-center mb-4" href="/projects">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <h3 className="text-2xl font-semibold">Projects</h3>
        </Link>

        <div className="flex items-center mb-4">
          <Image
            src="/images/pos.gif"
            alt="Point of Sale Icon"
            width={70}
            height={70}
            className="rounded-full mr-7"
          />
          <div>
            <h1 className="text-4xl font-bold">Point of Sale</h1>
            <p className="text-gray-300 mb-4">
              A lightweight, web-based and offline-capable POS system built for
              flawless performance, supporting multi-department roles and full
              functionality.
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
