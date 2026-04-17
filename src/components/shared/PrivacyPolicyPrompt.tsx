"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "privacy_notice_ack_v1";

export default function PrivacyPolicyPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem(STORAGE_KEY);
    if (!acknowledged) {
      setOpen(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[9999] px-3 md:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border bg-gray-900 text-white backdrop-blur p-4 md:p-5 shadow-xl">
        <p className="text-sm leading-relaxed">
          We process certain technical and usage data to operate, secure, and
          improve this website. By continuing to use the site, you acknowledge
          this data processing. Please review the{" "}
          <Link
            href="/legal/privacy-policy"
            className="underline underline-offset-4 hover:text-orange-500"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>

        <div className="mt-3 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleAcknowledge}
            className="rounded-full border px-4 py-2 text-sm hover:bg-orange-500 hover:border-gray-900 hover:text-gray-800 transition"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
}
