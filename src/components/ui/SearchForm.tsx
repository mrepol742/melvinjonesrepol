"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";

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
      <Input
        icon={faSearch}
        handleChange={handleSearch}
        form={{ name: "search", value: query, placeholder: "Search..." }}
        clearSearch={clearSearch}
      />

      <div
        className="absolute left-0 bottom-0 h-[2px] w-0
                   transition-all duration-300
                   group-focus-within:w-full"
      />
    </div>
  );
}
