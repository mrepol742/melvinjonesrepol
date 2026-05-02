"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type Album = {
  id: string;
  title: string;
  description: string;
  cover: string;
  media: string[];
};

export default function Gallery({ albums }: { albums: Album[] }) {
  const normalizedAlbums: (Album & { items: MediaItem[] })[] = albums.map(
    (a) => ({
      ...a,
      items: a.media.map((src) =>
        src.endsWith(".mp4") || src.endsWith(".webm")
          ? { type: "video" as const, src }
          : { type: "image" as const, src },
      ),
    }),
  );

  const [openAlbumIndex, setOpenAlbumIndex] = useState<number | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(
    null,
  );

  const openAlbum = (idx: number) => {
    setOpenAlbumIndex(idx);
    setSelectedMediaIndex(null);
  };

  const closeAlbum = () => {
    setOpenAlbumIndex(null);
    setSelectedMediaIndex(null);
  };

  const openMedia = (idx: number) => setSelectedMediaIndex(idx);
  const closeMedia = () => setSelectedMediaIndex(null);

  const nextInAlbum = () => {
    if (openAlbumIndex === null || selectedMediaIndex === null) return;
    const items = normalizedAlbums[openAlbumIndex].items;
    setSelectedMediaIndex((prev) =>
      prev === null ? 0 : (prev + 1) % items.length,
    );
  };

  const prevInAlbum = () => {
    if (openAlbumIndex === null || selectedMediaIndex === null) return;
    const items = normalizedAlbums[openAlbumIndex].items;
    setSelectedMediaIndex((prev) =>
      prev === null ? 0 : (prev - 1 + items.length) % items.length,
    );
  };

  if (openAlbumIndex === null) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {normalizedAlbums.map((album, idx) => (
          <button
            key={album.id}
            onClick={() => openAlbum(idx)}
            className="group text-left cursor-pointer focus:outline-none"
            aria-label={`Open album ${album.title}`}
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={album.cover}
                alt={`${album.title} cover`}
                width={800}
                height={560}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105 rounded-lg"
                priority={idx === 0} // small perf hint for the first cover
              />
              <div className="absolute left-3 bottom-3">
                <span className="inline-block px-2 py-1 text-sm font-semibold text-muted rounded">
                  {album.items.length} items
                </span>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="font-semibold">{album.title}</h3>
              <p className="text-sm text-muted mt-1">{album.description}</p>
            </div>
          </button>
        ))}
      </div>
    );
  }

  const activeAlbum = normalizedAlbums[openAlbumIndex];

  return (
    <>
      <button
        onClick={closeAlbum}
        className="text-sm text-muted hover:underline"
        aria-label="Back to albums"
      >
        <span>←</span> Back to albums
      </button>

      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-lg font-semibold">{activeAlbum.title}</h2>
        <span className="ml-auto text-sm text-muted">
          {activeAlbum.items.length} items
        </span>
      </div>

      <Masonry
        breakpointCols={{ 2560: 5, 1440: 4, 1025: 3, 768: 2, 640: 1 }}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {activeAlbum.items.map((item, idx) => (
          <div
            key={item.src + idx}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => openMedia(idx)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`${activeAlbum.title} image ${idx + 1}`}
                width={600}
                height={420}
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

      {selectedMediaIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeMedia}
            aria-label="Close viewer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevInAlbum}
            aria-label="Previous media"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {activeAlbum.items[selectedMediaIndex].type === "image" ? (
            <Image
              src={activeAlbum.items[selectedMediaIndex].src}
              alt="Preview"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto rounded-lg"
            />
          ) : (
            <video
              src={activeAlbum.items[selectedMediaIndex].src}
              controls
              autoPlay
              className="max-h-[90vh] w-auto rounded-lg"
            />
          )}

          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextInAlbum}
            aria-label="Next media"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </>
  );
}
