"use client";

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
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const search = async (q: string) => {
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
    const timeout = setTimeout(() => {
      search(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
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
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => hits.length && setShowDropdown(true)}
        placeholder="Search anything..."
        className="w-full pl-10 pr-10 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
      />

      {query && (
        <FontAwesomeIcon
          icon={faX}
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      )}

      {showDropdown && hits.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-gray-800 border rounded shadow-lg z-50 max-h-80 overflow-y-auto">
          {hits.map((hit) => (
            <a
              key={hit.objectID}
              href={hit.url || "#"}
              className="block px-4 py-2 hover:bg-gray-700 transition-all cursor-pointer"
            >
              <div
                className="font-semibold text-white"
                dangerouslySetInnerHTML={{
                  __html: hit._highlightResult?.title?.value || hit.title,
                }}
              />
              <div
                className="text-sm text-gray-300"
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
