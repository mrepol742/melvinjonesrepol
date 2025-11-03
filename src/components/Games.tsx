"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import GameCard from "@/components/GameCard";
import { useRouter, useSearchParams } from "next/navigation";

interface GameType {
  appid: number;
  name: string;
  playtime_hours: number;
  cover_url: string;
}

export default function ClientGames({
  steamActivities,
}: {
  steamActivities: GameType[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredGames = steamActivities.filter(
    (game) =>
      game.name.toLowerCase().includes(query) ||
      game.playtime_hours.toString().includes(query),
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(`?${params.toString()}`);
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    router.replace(`?${params.toString()}`);
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="border rounded my-4 flex items-center gap-2 relative px-2 py-1 w-full max-w-xs"
        style={{ borderColor: "#e5e7eb" }}
      >
        <span className="absolute left-3 text-gray-400 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </span>
        <input
          type="text"
          placeholder="Search projects..."
          value={query}
          onChange={handleSearch}
          className="outline-none px-9 py-2 w-full bg-transparent"
          style={{
            border: "none",
            boxShadow: "none",
            paddingRight: query ? "2.5rem" : undefined,
          }}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="right-3 text-gray-400 hover:text-gray-600 absolute"
            aria-label="Clear search"
            tabIndex={0}
            style={{ right: "0.75rem" }}
          >
            <FontAwesomeIcon icon={faX} size="2xs" />
          </button>
        )}
      </form>

      {filteredGames.length === 0 && (
        <div>
          <h2>No results found.</h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
        {filteredGames.map((game, idx) => (
          <GameCard
            key={idx}
            name={game.name}
            playtime_hours={game.playtime_hours}
            cover_url={game.cover_url}
          />
        ))}
      </div>
    </>
  );
}
