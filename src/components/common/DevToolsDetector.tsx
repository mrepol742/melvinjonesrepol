"use client";

import { useEffect, useState } from "react";
import { addListener, removeListener, launch } from "devtools-detector";
import { useTranslations } from "next-intl";

export default function DevToolsDetector() {
  const t = useTranslations("components.devtools_detector");
  const [devtoolsOpen, setDevtoolsOpen] = useState(false);

  useEffect(() => {
    const listener = (isOpen: boolean) => setDevtoolsOpen(isOpen);

    addListener(listener);

    // delay detector startup slightly
    const timer = setTimeout(() => {
      launch();
    }, 10100);

    return () => {
      clearTimeout(timer);
      removeListener(listener);
    };
  }, []);

  return (
    devtoolsOpen && (
      <aside className="fixed inset-x-4 bottom-4 z-[9999] mx-auto max-w-4xl rounded-md border border-orange-500/40 bg-stone-950 p-4 text-sm leading-relaxed text-white shadow-[4px_4px_0_0_rgba(234,88,12,0.5)]">
        {t("description")}
      </aside>
    )
  );
}
