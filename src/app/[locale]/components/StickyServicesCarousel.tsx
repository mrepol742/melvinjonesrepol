"use client";

import { useEffect, useRef, useState } from "react";
import ServicesCarousel from "./Technologies";

export default function StickyServicesCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [past, setPast] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // only show when section has been fully scrolled past (exited top)
        if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
          setPast(true);
        } else {
          setPast(false);
        }
      },
      { threshold: 0 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sectionRef}>
        <ServicesCarousel />
      </div>

      <div
        aria-hidden
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          past
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="group py-3 relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="overflow-hidden" style={{ maxHeight: "2rem" }}>
            <ServicesCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
