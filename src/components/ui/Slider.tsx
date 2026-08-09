"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slider({ children }: { children: React.ReactNode }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    startScrollLeft.current = sliderRef.current.scrollLeft;

    sliderRef.current.style.cursor = "grabbing";
    sliderRef.current.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const stopDragging = () => {
    if (!sliderRef.current) return;

    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
    sliderRef.current.style.userSelect = "";
  };

  const scroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10
                   -translate-y-1/2 items-center justify-center
                   rounded-full bg-black/60 text-white backdrop-blur-sm
                   transition hover:bg-black/80"
        aria-label="Scroll left"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="cursor-grab overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6 scrollbar-hide"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10
                   -translate-y-1/2 items-center justify-center
                   rounded-full bg-black/60 text-white backdrop-blur-sm
                   transition hover:bg-black/80"
        aria-label="Scroll right"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
