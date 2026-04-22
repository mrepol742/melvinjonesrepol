"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

export default function Gallery({
  images,
  videos,
}: {
  images: string[];
  videos: string[];
}) {
  const media: MediaItem[] = [
    ...images.map((src) => ({ type: "image" as const, src })),
    ...videos.map((src) => ({ type: "video" as const, src })),
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeViewer = () => setSelectedIndex(null);

  const nextMedia = () =>
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % media.length));

  const prevMedia = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + media.length) % media.length,
    );

  return (
    <>
      <Masonry
        breakpointCols={{ 2560: 5, 1440: 4, 1025: 3, 768: 2, 640: 1 }}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {media.map((item, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => setSelectedIndex(idx)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery image ${idx + 1}`}
                width={400}
                height={300}
                loading="lazy"
                className="rounded-lg w-full h-auto object-cover hover:scale-105 transition"
              />
            ) : (
              <video
                src={item.src}
                className="rounded-lg w-full h-auto object-cover"
                muted
                preload="metadata"
              />
            )}
          </div>
        ))}
      </Masonry>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeViewer}
          >
            ✕
          </button>

          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevMedia}
          >
            ‹
          </button>

          {media[selectedIndex].type === "image" ? (
            <Image
              src={media[selectedIndex].src}
              alt="Preview"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto rounded-lg"
            />
          ) : (
            <video
              src={media[selectedIndex].src}
              controls
              autoPlay
              className="max-h-[90vh] w-auto rounded-lg"
            />
          )}

          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextMedia}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
