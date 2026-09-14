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
                   border border-orange-500/50 bg-zinc-900 text-orange-400
                   transition hover:bg-orange-500 hover:text-stone-950"
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
        className="flex cursor-grab gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 scrollbar-hide"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10
                   -translate-y-1/2 items-center justify-center
                   border border-orange-500/50 bg-zinc-900 text-orange-400
                   transition hover:bg-orange-500 hover:text-stone-950"
        aria-label="Scroll right"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
