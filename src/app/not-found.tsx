import AlgoliaSearch from "@/components/shared/AlgoliaSearch";
import Button from "@/components/ui/Button";
import Link from "next/link";

const quotes = [
  "The page you seek has been eaten by a bug.",
  "404: Page not found. But at least the coffee machine still works.",
  "Looks like this page rage-quit.",
  "This page is on vacation. Try again later.",
  "Oops. Even the best developers ship 404s.",
  "The link you followed is more lost than my semicolons.",
  "This page escaped into production.",
  "404: The developer responsible has been notified (probably).",
  "This page doesn't exist... yet.",
  "Looks like you found a secret level. Unfortunately it's empty.",
  "Error 404: Brain not found.",
  "The page is missing, but the portfolio is still awesome.",
  "This URL took a wrong turn at the router.",
  "Even Google can't find this one.",
  "The page you’re looking for has been refactored into oblivion.",
];

export default function NotFound() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-8xl font-bold tracking-tight">
          <span className="text-indigo-500">4</span>
          <span className="text-gray-500">0</span>
          <span className="text-indigo-500">4</span>
        </h1>

        <h2 className="mt-6 text-2xl font-semibold">“{quote}”</h2>

        <p className="my-3 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-6 rounded-full text-start">
          <AlgoliaSearch />
        </div>

        <p className="text-xs text-gray-500">
          Dont worry the search works even if the page doesn't! Powered by
          Algolia.
        </p>
      </div>
    </div>
  );
}
