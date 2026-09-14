"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function QRCodeGeneratorTool() {
  const t = useTranslations("tools_qrcode_generator");
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
    <main className="mt-18 px-4 py-12 md:px-8">
      <section className="mx-auto max-w-md border border-stone-300 bg-stone-50 p-6 shadow-[5px_5px_0_0_rgb(249_115_22)] dark:border-orange-500/40 dark:bg-zinc-900 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">Utility</p>
        <h1 className="text-2xl font-bold text-stone-950 dark:text-stone-100">
          {t("title")}
        </h1>
        <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
          {t("description")}
        </p>

        <form
          onSubmit={handleGenerate}
          className="mt-6 flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder={t("input_placeholder")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-stone-300 bg-white px-4 py-3 text-stone-950 outline-none placeholder:text-stone-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/25 dark:border-orange-500/35 dark:bg-zinc-800 dark:text-stone-100 dark:placeholder:text-stone-500"
          />
          <button
            type="submit"
            className="border border-orange-600 bg-orange-500 px-6 py-3 font-semibold text-stone-950 shadow-[3px_3px_0_0_rgb(67_20_7)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-orange-400"
          >
            {t("generate_button")}
          </button>
        </form>

        {qrUrl && (
          <div className="mt-8 flex flex-col items-center">
            <h3 className="mb-3 text-lg font-semibold text-stone-950 dark:text-stone-100">
              {t("result_label")}
            </h3>
            <div className="border border-stone-300 bg-orange-50 p-4 dark:border-orange-500/25 dark:bg-zinc-800">
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
