"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";

interface ProjectSearchProps {
  initialQuery?: string;
}

export default function SearchForm({ initialQuery = "" }: ProjectSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 400);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) {
      params.set("q", debouncedQuery);
    }
    router.replace(`?${params.toString()}`);
  }, [debouncedQuery, router]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const clearSearch = () => setQuery("");

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="group relative w-full max-w-sm mt-2 mb-5"
    >
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-xl border
                   transition-all duration-300
                   focus-within:shadow-md focus-within:-translate-y-[1px]"
      >
        <span className="flex items-center justify-center shrink-0 opacity-70">
          <FontAwesomeIcon icon={faSearch} size="sm" />
        </span>

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full outline-none bg-transparent text-sm placeholder:opacity-60"
        />

        <button
          type="button"
          onClick={clearSearch}
          aria-label="Clear search"
          className={`flex items-center justify-center transition-all duration-200
                     ${query ? "opacity-70 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
        >
          <FontAwesomeIcon icon={faX} size="xs" />
        </button>
      </div>

      <div
        className="absolute left-0 bottom-0 h-[2px] w-0
                   transition-all duration-300
                   group-focus-within:w-full"
      />
    </div>
  );
}
