"use client";

import { useState } from "react";
import { toast } from "react-toastify";

type OpenGraphMeta = Record<string, string>;

export default function OpenGraphTool() {
  const [url, setUrl] = useState("");
  const [meta, setMeta] = useState<OpenGraphMeta | null>(null);

  const fetchOG = async (e: React.FormEvent) => {
    e.preventDefault();
    setMeta(null);

    try {
      const res = await fetch("/api/tools/open-graph", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setMeta(data.meta);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <main className="mt-18 p-3 md:p-8">
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Open Graph Checker
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 mb-6">
          Enter a website URL to fetch its Open Graph metadata.
        </p>

        <form
          onSubmit={fetchOG}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition duration-200"
          >
            Fetch Metadata
          </button>
        </form>

        {meta && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Open Graph Metadata
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-inner space-y-2">
              {Object.entries(meta).map(([key, value]) => (
                <p key={key} className="text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
