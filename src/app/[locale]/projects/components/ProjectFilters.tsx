"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "@/components/ui/Input";

type ProjectFiltersProps = {
  initialQuery: string;
  initialType: string;
  initialFeatured: string;
  initialTechnology: string;
  types: string[];
  technologies: string[];
};

export default function ProjectFilters({
  initialQuery,
  initialType,
  initialFeatured,
  initialTechnology,
  types,
  technologies,
}: ProjectFiltersProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState(initialType);
  const [featured, setFeatured] = useState(initialFeatured);
  const [technology, setTechnology] = useState(initialTechnology);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (type) params.set("type", type);
      if (featured) params.set("featured", featured);
      if (technology) params.set("tech", technology);

      router.replace(params.size ? `?${params}` : "?", { scroll: false });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [featured, query, router, technology, type]);

  const resetFilters = () => {
    setQuery("");
    setType("");
    setFeatured("");
    setTechnology("");
  };

  const selectClass =
    "min-h-12 w-full rounded-md border border-stone-300 bg-stone-50 px-3 text-sm font-medium text-stone-800 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100";

  return (
    <div className="border-y border-stone-300 py-5 dark:border-stone-700" data-aos="fade-up">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="homepage-kicker">Find the right work</p>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            Search the archive or narrow it by type, status, and stack.
          </p>
        </div>
        <button
          type="button"
          onClick={resetFilters}
          className="border-b-2 border-orange-600 pb-1 text-xs font-bold uppercase tracking-widest transition-colors hover:text-orange-700 dark:hover:text-orange-300"
        >
          Reset filters
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(16rem,1.5fr)_repeat(3,minmax(0,1fr))]">
        <Input
          icon={faSearch}
          handleChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
          clearSearch={() => setQuery("")}
          form={{ name: "project-search", value: query, placeholder: "Search projects" }}
          className="min-h-12"
        />

        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className={selectClass}
          aria-label="Filter projects by type"
        >
          <option value="">All project types</option>
          {types.map((item) => (
            <option key={item} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={featured}
          onChange={(event) => setFeatured(event.target.value)}
          className={selectClass}
          aria-label="Filter projects by status"
        >
          <option value="">All statuses</option>
          <option value="true">Featured</option>
          <option value="false">Not featured</option>
        </select>

        <select
          value={technology}
          onChange={(event) => setTechnology(event.target.value)}
          className={selectClass}
          aria-label="Filter projects by technology"
        >
          <option value="">All technologies</option>
          {technologies.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
