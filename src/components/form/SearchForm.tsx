'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';

interface ProjectSearchProps {
  initialQuery?: string;
}

export default function SearchForm({ initialQuery = '' }: ProjectSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) {
      params.set('q', debouncedQuery);
    }
    router.replace(`?${params.toString()}`);
  }, [debouncedQuery, router]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const clearSearch = () => setQuery('');

  return (
    <div
      className="border rounded my-4 flex items-center gap-2 relative px-2 py-1 w-full max-w-xs"
      style={{ borderColor: '#e5e7eb' }}
    >
      <span className="absolute left-3 text-gray-400 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </span>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="outline-none px-9 py-2 w-full bg-transparent"
        style={{
          border: 'none',
          boxShadow: 'none',
          paddingRight: query ? '2.5rem' : undefined,
        }}
      />
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className="right-3 text-gray-400 hover:text-gray-600 absolute"
          aria-label="Clear search"
          tabIndex={0}
          style={{ right: '0.75rem' }}
        >
          <FontAwesomeIcon icon={faX} size="2xs" />
        </button>
      )}
    </div>
  );
}
