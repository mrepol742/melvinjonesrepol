"use client";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Go to top"
      className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50
      border border-orange-500/60 bg-zinc-900 p-3 text-orange-400 shadow-[3px_3px_0_0_rgb(249_115_22)] hover:bg-orange-500 hover:text-stone-950
      transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
}
