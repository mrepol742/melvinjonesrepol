"use client";

import { useState } from "react";
import { toast } from "react-toastify";

type OpenGraphMeta = Record<string, string>;

export default function Home() {
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
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-bold">Open Graph Checker</h1>
        <form onSubmit={fetchOG}>
          <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ padding: "0.5rem", width: "300px" }}
          />
          <button
            type="submit"
            style={{ marginLeft: "1rem", padding: "0.5rem" }}
          >
            Fetch Metadata
          </button>
        </form>

        {meta && (
          <div style={{ marginTop: "2rem" }}>
            <h2>Open Graph Metadata</h2>
            {Object.entries(meta).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
