"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { collection, rarityMeta, type Rarity } from "@/lib/hotwheels";
import Image from "next/image";
import { notFound } from "next/navigation";

const filters: ("all" | Rarity)[] = ["all", "golden", "grey", "normal"];

function CarPlaceholder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M10 56c0-8 4-12 12-14l28-8c10-10 22-16 40-16h22c14 0 26 6 36 18l18 6c10 3 14 8 14 14v6H10z"
        opacity=".9"
      />
      <circle cx="54" cy="60" r="14" className="fill-black" />
      <circle cx="54" cy="60" r="6" className="fill-zinc-400" />
      <circle cx="150" cy="60" r="14" className="fill-black" />
      <circle cx="150" cy="60" r="6" className="fill-zinc-400" />
    </svg>
  );
}

export default function Showroom() {
  const [filter, setFilter] = useState<"all" | Rarity>("all");
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? collection
        : collection.filter((c) => c.rarity === filter),
    [filter],
  );

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + items.length) % items.length),
    [items.length],
  );

  useEffect(() => setActive(0), [filter]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const current = items[active];

  return (
    <section
      className="relative pb-14 pt-32 flex h-[calc(100svh-4rem)] min-h-[640px] select-none flex-col overflow-hidden"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 pt-6 md:px-10">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] transition ${
                filter === f
                  ? "border-orange-600 bg-orange-600 text-orange-50 shadow-[3px_3px_0_0_rgba(0,0,0,0.8)]"
                  : "border-stone-300 hover:border-orange-600 dark:border-white/15"
              }`}
            >
              {f === "all" ? "All" : rarityMeta[f].label}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </p>
      </div>

      {!current ? (
        <>
          <section className="relative flex h-[calc(100svh-4rem)] min-h-[640px] flex-col overflow-hidden">
            <p
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] text-[40vw] font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_rgba(234,88,12,0.25)] lg:text-[28rem]"
            >
              00
            </p>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
              <h2 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                This garage is <span className="homepage-accent">empty.</span>
              </h2>
              <p className="mt-4 max-w-md font-mono text-sm text-stone-500">
                No cars collected yet on this category. The first pegs are
                waiting.
              </p>
            </div>

            <div className="relative z-10 h-44 shrink-0">
              <div className="absolute inset-x-0 bottom-10 h-3 bg-orange-600" />
              <div className="absolute inset-x-0 bottom-[2.9rem] h-px border-t-2 border-dashed border-orange-100/80" />
              {[-2, -1, 0, 1, 2].map((offset) => (
                <div
                  key={offset}
                  aria-hidden="true"
                  className="absolute bottom-10 left-1/2 flex h-20 w-24 origin-bottom items-center justify-center border-2 border-dashed border-stone-300 font-mono text-xs text-stone-400 dark:border-white/20"
                  style={{
                    transform: `translateX(calc(-50% + ${offset * 110}px)) translateY(${Math.abs(offset) * 6}px) rotate(${offset * 5}deg) scale(${offset === 0 ? 1.1 : 0.85})`,
                    opacity: 0.8 - Math.abs(offset) * 0.2,
                  }}
                >
                  ?
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        (() => {
          const meta = rarityMeta[current.rarity];

          return (
            <>
              <p
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] text-[40vw] font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_rgba(234,88,12,0.25)] lg:text-[28rem]"
              >
                {String(active + 1).padStart(2, "0")}
              </p>

              <div className="relative z-10 grid flex-1 items-center gap-6 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr]">
                <div
                  key={current.name}
                  className="animate-[fadeUp_.4s_ease-out]"
                >
                  <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                    {current.name}
                  </h2>
                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={() => go(-1)}
                      className="homepage-button homepage-button-secondary"
                      aria-label="Previous car"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => go(1)}
                      className="homepage-button homepage-button-primary"
                      aria-label="Next car"
                    >
                      Next car →
                    </button>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-xl">
                  <div
                    key={current.name + "-car"}
                    className={`relative -rotate-3 border-2 border-black bg-[var(--background)] p-6 transition-all duration-500 ${meta.glow} animate-[fadeUp_.5s_ease-out]`}
                  >
                    <div className="absolute -top-3 left-6 bg-black px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                      Hot Wheels
                    </div>
                    <Image
                      src={`/images/${current.name}.jpeg`}
                      alt={current.name}
                      className="mx-auto h-56 w-full object-contain drop-shadow-2xl sm:h-72"
                      width="14"
                      height="56"
                    />
                  </div>
                </div>
              </div>

              <div className="relative z-10 h-44 shrink-0">
                <div className="absolute inset-x-0 bottom-10 h-3 bg-orange-600" />
                <div className="absolute inset-x-0 bottom-[2.9rem] h-px border-t-2 border-dashed border-orange-100/80" />

                {items.map((item, i) => {
                  const offset = i - active;
                  if (Math.abs(offset) > 4) return null;
                  const m = rarityMeta[item.rarity];
                  const isActive = offset === 0;

                  return (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`${item.name} (${m.label})`}
                      className="absolute bottom-10 left-1/2 origin-bottom transition-all duration-500 ease-out"
                      style={{
                        transform: `translateX(calc(-50% + ${offset * 110}px)) translateY(${isActive ? -18 : Math.abs(offset) * 6}px) rotate(${offset * 5}deg) scale(${isActive ? 1.15 : 0.85})`,
                        opacity: isActive ? 1 : 0.75 - Math.abs(offset) * 0.12,
                        zIndex: 10 - Math.abs(offset),
                      }}
                    >
                      <div
                        className={`flex h-20 w-24 items-center justify-center border-2 bg-[var(--background)] ${isActive ? "border-orange-600" : "border-stone-300 dark:border-white/20"}`}
                      >
                        <Image
                          src={`/images/${item.name}.jpeg`}
                          alt={item.name}
                          className="h-14 w-20 object-contain"
                          width="14"
                          height="20"
                        />
                      </div>
                      <span
                        className={`mx-auto mt-1 block h-1.5 w-10 ${item.rarity === "golden" ? "bg-amber-400" : item.rarity === "grey" ? "bg-zinc-400" : "bg-orange-600"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </>
          );
        })()
      )}

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
