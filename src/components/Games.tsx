"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import GameCard from "@/components/GameCard";

interface GameType {
  appid: number;
  name: string;
  playtime_hours: number;
  cover_url: string;
}

export default function ClientGames({ steamActivities }: { steamActivities: GameType[] }) {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState<GameType[]>(steamActivities);

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4"
      >
        {/* Sorting */}
        <div className="flex items-center gap-2">
          <select
            id="filter"
            className="border-b px-2 py-3 outline-none"
            onChange={(e) => {
              const value = e.target.value;
              const sorted = [...steamActivities];

              if (value === "name") {
                sorted.sort((a, b) => a.name.localeCompare(b.name));
              } else if (value === "hours") {
                sorted.sort((a, b) => b.playtime_hours - a.playtime_hours);
              }

              setGames(value === "default" ? steamActivities : sorted);
            }}
          >
            <option value="default">Purchased Date</option>
            <option value="name">Name</option>
            <option value="hours">Hours Played</option>
          </select>
        </div>

        {/* Search */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="border-b flex items-center gap-2 relative px-2 py-1 w-full max-w-xs md:max-w-sm"
        >
          <span className="absolute left-3 pointer-events-none">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </span>
          <input
            type="text"
            placeholder="Search games..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none px-9 py-2 w-full bg-transparent"
            style={{ border: "none", boxShadow: "none", paddingRight: query ? "2.5rem" : undefined }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="right-3 text-gray-400 hover:text-gray-600 absolute"
              aria-label="Clear search"
              style={{ right: "0.75rem" }}
            >
              <FontAwesomeIcon icon={faX} size="2xs" />
            </button>
          )}
        </form>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
        {games
          .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
          .map((game, idx) => (
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
