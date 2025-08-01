"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { toast } from "react-toastify";
import GameCard from "@/components/GameCard";
import Link from "next/link";
import Image from "next/image";

interface GameType {
  appid: number;
  name: string;
  playtime_hours: number;
  cover_url: string;
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [steamActivities, setSteamActivities] = useState<GameType[]>([]);
  const [defaultSort, setDefaultSort] = useState<GameType[]>([]);

  useEffect(() => {
    fetchSteamActivities();
  }, []);

  const fetchSteamActivities = async () => {
    const resolveAfter3Sec = new Promise(async (resolve) => {
      try {
        const response = await fetch("/api/steam");

        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();
        setSteamActivities(data.games);
        setDefaultSort(data.games);
        resolve(response);
      } catch (error) {
        resolve(error);
      }
    });

    toast.promise(resolveAfter3Sec, {
      pending: "Loading Steam activities...",
      error: "Failed to load Steam activities. Please try again.",
    });
  };

  return (
    <>
      <main className="p-8">
        <section>
          <h1 className="text-2xl font-semibold" data-aos="fade-right">
            Gaming
          </h1>
          <p
            className="text-gray-300"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Here are some of my gaming achievements and activities.
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="border rounded flex items-center gap-2 relative px-2 py-1 w-full max-w-xs md:max-w-sm"
              style={{ borderColor: "#e5e7eb" }}
            >
              <span className="absolute left-3 text-gray-400 pointer-events-none">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search games..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
                  onClick={() => setQuery("")}
                  className="right-3 text-gray-400 hover:text-gray-600 absolute"
                  aria-label="Clear search"
                  tabIndex={0}
                  style={{ right: "0.75rem" }}
                >
                  <X size={18} />
                </button>
              )}
            </form>
            <div className="flex items-center gap-2">
              <label htmlFor="filter" className="text-gray-400 text-sm">
                Sort by:
              </label>
              <select
                id="filter"
                className="border rounded px-2 py-3 text-gray-200"
                value={""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    setSteamActivities(defaultSort);
                    return;
                  }
                  setSteamActivities((prev: GameType[]) => {
                    const sorted = [...prev];
                    if (value === "name") {
                      sorted.sort((a, b) => a.name.localeCompare(b.name));
                    } else if (value === "hours") {
                      sorted.sort(
                        (a, b) => b.playtime_hours - a.playtime_hours
                      );
                    }
                    return sorted;
                  });
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="">Default</option>
                <option value="name">Name</option>
                <option value="hours">Hours Played</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
            {steamActivities
              .filter((game: GameType) =>
                game.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((game: GameType, idx) => (
                <GameCard
                  key={idx}
                  name={game.name}
                  playtime_hours={game.playtime_hours}
                  cover_url={game.cover_url}
                />
              ))}
          </div>

          <div className="my-6">
            <p
              className="text-gray-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              You can find more of my gaming activities on my steam profile.
            </p>
            <Link
              href="https://steamcommunity.com/id/mrepol742/"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                className="text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                            before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
                            after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
                style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
              >
                Steam Profile
              </button>
            </Link>
          </div>

          <span className="ml-auto text-xs text-gray-400">
            Data fetched from Steam API.
            <br />
            All Titles/Covers are properties of their respective owners.
          </span>
        </section>
      </main>
    </>
  );
}
