"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to subscribe.");

      setEmail("");
      toast.success(
        data.status === "already-subscribed"
          ? "You are already subscribed."
          : "You are subscribed. Check your inbox for confirmation.",
      );
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to subscribe.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="newsletter-title"
      className="border-t border-orange-200 bg-orange-50 px-4 py-14 dark:border-orange-500/25 dark:bg-stone-950"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2
            id="newsletter-title"
            className="mt-3 text-3xl font-black tracking-tight text-stone-950 dark:text-white md:text-4xl"
          >
            Get updates worth opening.
          </h2>
          <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
            Occasional project launches, technical notes, and practical ideas
            from me.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@studio.com"
              className="min-h-12 flex-1 border border-orange-200 bg-white px-4 text-stone-950 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-stone-700 dark:bg-stone-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="min-h-12 bg-orange-600 px-5 font-bold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-stone-950"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">
            No spam. I promised :/
          </p>
        </form>
      </div>
    </section>
  );
}
