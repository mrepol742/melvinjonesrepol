"use client";
import { useDoor } from "@/hooks/door";
import { useEffect, useRef, useState } from "react";

export default function DoorEffect() {
  const { openDoor } = useDoor();
  const [stage, setStage] = useState("closed");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/soundreality-whoosh-door-243097.mp3");
    audioRef.current.volume = 0.6;

    const timers = [
      setTimeout(() => setStage("flash"), 400),
      setTimeout(() => {
        setStage("opening");
        audioRef.current?.play().catch(() => {});
      }, 700),
      setTimeout(() => setStage("title"), 2000),
      setTimeout(() => setStage("fading"), 4200),
      setTimeout(() => {
        setStage("done");
        openDoor();
      }, 5000),
    ];
    return () => {
      timers.forEach(clearTimeout);
      audioRef.current?.pause();
    };
  }, []);

  if (stage === "done") return null;

  const name = "MELVIN JONES REPOL";
  const isOpen = ["opening", "title", "fading"].includes(stage);
  const showTitle = stage === "title" || stage === "fading";

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#05060a] pointer-events-none transition-opacity duration-700
        ${stage === "fading" ? "opacity-0" : "opacity-100"}`}
      style={{ perspective: "1600px" }}
    >
      {/* particles */}
      <div className="absolute inset-0 z-[2]">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className={`particle absolute bottom-[-10px] w-[3px] h-[3px] rounded-full bg-[#ffb37a]
              shadow-[0_0_6px_1px_rgba(255,150,80,0.8)] opacity-0
              ${isOpen ? "animate-rise" : ""}`}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>

      {/* light burst */}
      <div
        className={`absolute top-0 left-1/2 h-full -translate-x-1/2 z-[1] blur-[30px]
          bg-gradient-to-b from-transparent via-[#ff7a45] to-transparent
          transition-all duration-700 ease-out
          ${stage === "closed" ? "w-0 opacity-0" : isOpen ? "w-screen opacity-100" : "w-[140px] opacity-100"}`}
      />

      {/* doors */}
      <div
        className={`absolute inset-0 z-[2] ${isOpen ? "door-open" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="door-left absolute top-0 bottom-0 left-0 w-1/2 h-full origin-left
          bg-gradient-to-br from-[#12131a] via-[#1c1e2a] to-[#0b0c11]
          shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] border border-white/5"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-6 border border-white/10" />
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rotate-45
            border-2 border-orange-500/55 bg-orange-500/5 shadow-[0_0_24px_rgba(255,90,60,0.35)]"
          />
          <div
            className="absolute top-1/2 right-6 -translate-y-1/2 w-2.5 h-2.5 rounded-full
            bg-[radial-gradient(circle,#ffd9b0,#ff5a3c)] shadow-[0_0_12px_rgba(255,120,60,0.8)]"
          />
        </div>

        <div
          className="door-right absolute top-0 bottom-0 right-0 w-1/2 h-full origin-right
          bg-gradient-to-br from-[#12131a] via-[#1c1e2a] to-[#0b0c11]
          shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] border border-white/5"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-6 border border-white/10" />
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rotate-45
            border-2 border-orange-500/55 bg-orange-500/5 shadow-[0_0_24px_rgba(255,90,60,0.35)]"
          />
          <div
            className="absolute top-1/2 left-6 -translate-y-1/2 w-2.5 h-2.5 rounded-full
            bg-[radial-gradient(circle,#ffd9b0,#ff5a3c)] shadow-[0_0_12px_rgba(255,120,60,0.8)]"
          />
        </div>
      </div>

      {/* name card */}
      <div
        className={`absolute inset-0 z-[3] flex flex-col items-center justify-center gap-1
        transition-opacity duration-500 ${showTitle ? "opacity-100" : "opacity-0"}`}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center
            font-serif font-bold whitespace-nowrap
            text-[clamp(1.5rem,6vw,4rem)] tracking-[0.3em] uppercase
            select-none pointer-events-none
            transition-all duration-[1400ms] ease-out
            ${showTitle ? "scale-100" : "scale-125"}`}
          style={{
            color: "#fff3e6",
            opacity: showTitle ? 0.06 : 0,
            textShadow: "0 0 40px rgba(255,150,80,0.4)",
            transitionDelay: showTitle ? "0.2s" : "0s",
          }}
        >
          Software Engineer
        </span>

        {/* accent glyph above the name */}
        <span
          className={`text-2xl text-orange-400/80 transition-all duration-700 ease-out
            [text-shadow:0_0_20px_rgba(255,120,60,0.8)]
            ${showTitle ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-50"}`}
          style={{ transitionDelay: showTitle ? "0.1s" : "0s" }}
        >
          ✦
        </span>

        <div
          className={`h-1 mb-2 bg-gradient-to-r from-transparent via-orange-400 to-transparent
          shadow-[0_0_16px_rgba(255,120,60,0.7)] transition-all duration-700 ease-out
          ${showTitle ? "w-[min(70vw,520px)]" : "w-0"}`}
          style={{ transitionDelay: showTitle ? "0.3s" : "0s" }}
        />

        {/* name: blurred+oversized -> sharp+normal, per letter */}
        <h1 className="flex flex-wrap justify-center m-0 font-serif font-semibold text-center">
          {name.split("").map((ch, i) => (
            <span
              key={i}
              className={`inline-block bg-gradient-to-b from-[#fff8ee] via-[#ffd9b0] to-[#ff8a4c]
                bg-clip-text text-transparent
                text-[clamp(1.4rem,5vw,3rem)] tracking-[0.12em]
                transition-all duration-700 ease-out
                [text-shadow:0_0_28px_rgba(255,140,80,0.55)]
                ${
                  showTitle
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-8 scale-[1.4] blur-md"
                }`}
              style={{
                transitionDelay: showTitle ? `${0.5 + i * 0.05}s` : "0s",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>

        <div
          className={`mt-3 h-px bg-orange-100/50 transition-all duration-700 ease-out
          ${showTitle ? "w-[260px]" : "w-0"}`}
          style={{ transitionDelay: showTitle ? "1.5s" : "0s" }}
        />

        {/* welcome: letter-spacing expands in instead of flat fade */}
        <p
          className={`mt-3 text-sm uppercase text-orange-100/70 transition-all duration-[900ms] ease-out
          ${showTitle ? "opacity-100 tracking-[0.5em]" : "opacity-0 tracking-normal"}`}
          style={{ transitionDelay: showTitle ? "1.7s" : "0s" }}
        >
          welcome
        </p>
      </div>
    </div>
  );
}
