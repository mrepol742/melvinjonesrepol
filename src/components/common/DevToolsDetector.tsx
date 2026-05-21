"use client";

import { useEffect, useState } from "react";
import { addListener, removeListener, launch } from "devtools-detector";
import { useDoor } from "@/hooks/door";
import { useTranslations } from "next-intl";

export default function DevToolsDetector() {
  const t = useTranslations("components.devtools_detector");
  const { openDoor, closeDoor } = useDoor();
  const [devtoolsOpen, setDevtoolsOpen] = useState(false);

  useEffect(() => {
    const listener = (isOpen: boolean) => {
      setDevtoolsOpen(isOpen);

      if (isOpen) {
        // allow React to render first
        requestAnimationFrame(() => {
          setTimeout(() => {
            closeDoor();
          }, 100);
        });
      } else {
        openDoor();
      }
    };

    addListener(listener);

    // delay detector startup slightly
    const timer = setTimeout(() => {
      launch();
    }, 10100);

    return () => {
      clearTimeout(timer);
      removeListener(listener);
    };
  }, [closeDoor, openDoor]);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-[9999] px-3 md:px-6 ${
        devtoolsOpen ? "block" : "hidden"
      }`}
    >
      <div className="mx-auto max-w-4xl rounded-2xl border bg-gray-900 text-white backdrop-blur p-4 md:p-5 shadow-xl">
        <p className="text-sm leading-relaxed">{t("description")}</p>
      </div>
    </div>
  );
}
