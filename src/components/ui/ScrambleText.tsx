"use client";

import { createElement, useEffect, useRef, useState } from "react";

type ScrambleTextProps = {
  text: string;
  durationMs?: number;
  frameMs?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
};

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function ScrambleText({
  text,
  durationMs = 5000,
  frameMs = 45,
  className,
  as = "span",
  once = true,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState(text);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    const run = () => {
      const start = Date.now();

      interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / durationMs, 1);
        const revealCount = Math.floor(progress * text.length);

        const next = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealCount) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplay(next);

        if (progress >= 1) {
          if (interval) clearInterval(interval);
          setDisplay(text);
          setHasPlayed(true);
        }
      }, frameMs);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        if (once && hasPlayed) return;
        run();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [text, durationMs, frameMs, once, hasPlayed]);

  return createElement(
    as,
    {
      ref: (node: HTMLElement | null) => {
        ref.current = node;
      },
      className,
      "aria-label": text,
    },
    display,
  );
}
