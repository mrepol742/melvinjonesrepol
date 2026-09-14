"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "@/components/ui/Input";

type FilterOption = { label: string; value: string };

export default function CollectionFilters({
  label,
  description,
  initialQuery,
  initialFilter = "",
  filterParam,
  filterLabel,
  allFilterLabel,
  options,
}: {
  label: string;
  description: string;
  initialQuery: string;
  initialFilter?: string;
  filterParam: string;
  filterLabel: string;
  allFilterLabel: string;
  options: FilterOption[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (filter) params.set(filterParam, filter);
      router.replace(params.size ? `?${params}` : "?", { scroll: false });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [filter, filterParam, query, router]);

  return (
    <div className="border-y border-stone-300 py-5 dark:border-stone-700" data-aos="fade-up">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="homepage-kicker">{label}</p>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setFilter("");
          }}
          className="border-b-2 border-orange-600 pb-1 text-xs font-bold uppercase tracking-widest transition-colors hover:text-orange-700 dark:hover:text-orange-300"
        >
          Reset filters
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(16rem,1.5fr)_minmax(12rem,1fr)]">
        <Input
          icon={faSearch}
          handleChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
          clearSearch={() => setQuery("")}
          form={{ name: "collection-search", value: query, placeholder: "Search" }}
          className="min-h-12"
        />
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="min-h-12 w-full rounded-md border border-stone-300 bg-stone-50 px-3 text-sm font-medium text-stone-800 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100"
          aria-label={filterLabel}
        >
          <option value="">{allFilterLabel}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
