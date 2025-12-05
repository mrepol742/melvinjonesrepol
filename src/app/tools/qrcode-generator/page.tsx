"use client";

import Image from "next/image";
import { useState } from "react";

export default function QRCodeGenerator() {
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
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-bold">QR Code Generator</h1>
        <p>
          This tool will allow you to generate QR codes for any URL or text.
        </p>

        <form onSubmit={handleGenerate} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Enter URL or text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ padding: "0.5rem", width: "300px" }}
          />
          <button
            type="submit"
            style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
          >
            Generate
          </button>
        </form>

        {qrUrl && (
          <div style={{ marginTop: "1rem" }}>
            <h3>Your QR Code:</h3>
            <Image
              src={qrUrl}
              alt="Generated QR Code"
              width={150}
              height={150}
            />
          </div>
        )}
      </section>
    </main>
  );
}
