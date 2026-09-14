"use client";

import { useConsent } from "@/context/consent";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

type Hit = {
  objectID: string;
  title: string;
  description: string;
  url?: string;
  _highlightResult?: {
    title?: { value: string };
    description?: { value: string };
  };
};

export default function AlgoliaSearch() {
  const { consent } = useConsent();
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const search = async (q: string) => {
    if (!consent?.functional) return;

    if (!q) {
      setHits([]);
      return;
    }

    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setHits(data.success ? data.data : []);
    setShowDropdown(true);
  };

  useEffect(() => {
    if (!consent?.functional) return;

    const timeout = setTimeout(() => {
      search(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    if (!consent?.functional) return;

    const handleClickOutside = (e: MouseEvent) => {
      const container = containerRef.current;

      if (
        container &&
        e.target instanceof Node &&
        !container.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-md mx-auto">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400"
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => hits.length && setShowDropdown(true)}
        disabled={!consent?.functional}
        placeholder="Search anything..."
        className="w-full rounded-md border border-stone-700 bg-stone-950 py-2 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
      />

      {query && (
        <FontAwesomeIcon
          icon={faX}
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-stone-400 hover:text-orange-300"
        />
      )}

      {showDropdown && hits.length > 0 && (
        <div className="absolute left-0 right-0 z-50 mt-1 max-h-80 overflow-y-auto rounded-md border border-orange-500/40 bg-stone-950 shadow-[4px_4px_0_0_rgba(234,88,12,0.5)]">
          {hits.map((hit) => (
            <a
              key={hit.objectID}
              href={hit.url || "#"}
              className="block cursor-pointer px-4 py-2 hover:bg-orange-500/10 transition-colors"
            >
              <div
                className="font-semibold text-white"
                dangerouslySetInnerHTML={{
                  __html: hit._highlightResult?.title?.value || hit.title,
                }}
              />
              <div
                className="text-sm text-stone-300"
                dangerouslySetInnerHTML={{
                  __html:
                    hit._highlightResult?.description?.value || hit.description,
                }}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
