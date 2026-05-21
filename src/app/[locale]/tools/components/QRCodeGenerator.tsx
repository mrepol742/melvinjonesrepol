"use client";

import Image from "next/image";
import { useState } from "react";

export default function QRCodeGeneratorTool() {
  const [input, setInput] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const encoded = encodeURIComponent(input.trim());
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encoded}&size=200x200`;

    setQrUrl(qrImageUrl);
  };

  return (
    <main className="mt-18 p-3 md:p-8">
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          QR Code Generator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This tool will allow you to generate QR codes for any URL or text.
        </p>

        <form
          onSubmit={handleGenerate}
          className="mt-6 flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Enter URL or text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition duration-200"
          >
            Generate
          </button>
        </form>

        {qrUrl && (
          <div className="mt-8 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Your QR Code:
            </h3>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-inner">
              <Image
                src={qrUrl}
                alt="Generated QR Code"
                width={200}
                height={200}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
