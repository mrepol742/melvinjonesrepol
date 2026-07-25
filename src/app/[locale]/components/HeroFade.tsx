"use client";

import { useEffect, useRef } from "react";

export default function HeroFade({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = el.offsetHeight;
      // fully faded out at 45% of the section height
      const opacity = Math.max(0, 1 - scrolled / (height * 0.45));
      el.style.opacity = String(opacity);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
