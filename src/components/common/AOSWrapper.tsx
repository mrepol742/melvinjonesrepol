"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSWrapper() {
  useEffect(() => {
    let cancelled = false;
    const timeout = window.setTimeout(() => {
      void import("aos").then(({ default: AOS }) => {
        if (cancelled) return;
        AOS.init({
          once: true,
          throttleDelay: 100,
          duration: 600,
        });
      });
    }, 800);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, []);

  return null;
}
