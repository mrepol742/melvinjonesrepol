"use client";

import { useConsent } from "@/context/consent";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent_v1";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  advertising: boolean;
};

const defaultConsent: ConsentPreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  advertising: false,
};

export default function CookieBanner() {
  const { consent, updateConsent, bannerOpen, closeBanner } = useConsent();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] =
    useState<ConsentPreferences>(defaultConsent);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent) return;

    const show = () => {
      setOpen(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true)),
      );
    };

    const handleDoorDone = () => {
      setTimeout(show, 600);
    };

    handleDoorDone();
    // window.addEventListener("door:done", handleDoorDone);
    // return () => window.removeEventListener("door:done", handleDoorDone);
  }, []);

  useEffect(() => {
    if (!bannerOpen) return;
    let raf2: number;
    const raf1 = requestAnimationFrame(() => {
      setOpen(true);
      raf2 = requestAnimationFrame(() => setVisible(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [bannerOpen]);

  const saveConsent = (consent: ConsentPreferences) => {
    setVisible(false);
    setTimeout(() => {
      updateConsent(consent);
      setOpen(false);
      closeBanner();
    }, 400);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      functional: true,
      advertising: true,
    });
  };

  const rejectOptional = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      functional: false,
      advertising: false,
    });
  };

  const togglePreferences = () => {
    if (!showPreferences) {
      setPreferences(
        consent
          ? { ...defaultConsent, ...consent, necessary: true }
          : defaultConsent,
      );
    }

    setShowPreferences((current) => !current);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-[9999] px-3 md:px-6
        transition-all duration-400 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="mx-auto max-w-4xl rounded-md border border-orange-500/40 bg-stone-950 text-white p-4 md:p-5 shadow-[4px_4px_0_0_rgba(234,88,12,0.5)]">
        <h3 className="font-semibold">Cookie Preferences</h3>

        <p className="mt-2 text-sm leading-relaxed">
          We use cookies and similar technologies to improve site functionality,
          measure traffic, display personalized advertising, and provide
          third-party services. You can accept all cookies, reject optional
          cookies, or customize your preferences.
        </p>

        <p className="mt-2 text-sm">
          Read our{" "}
          <Link
            href="/legal/privacy-policy"
            className="underline underline-offset-4 hover:text-orange-500"
          >
            Privacy Policy
          </Link>{" "}
          for more information.
        </p>

        {showPreferences && (
          <div className="mt-4 space-y-3 border-t border-stone-700 pt-4">
            <label className="flex items-center justify-between">
              <span>Necessary Cookies</span>

              <span className="relative inline-flex h-6 w-11 cursor-not-allowed items-center">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="peer sr-only"
                />
                <span className="h-6 w-11 rounded-full bg-stone-700 transition-colors after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-orange-600 peer-checked:after:translate-x-5 peer-disabled:opacity-100" />
              </span>
            </label>

            <label className="flex cursor-pointer items-center justify-between">
              <span>Analytics Cookies</span>

              <span className="relative inline-flex h-6 w-11 items-center">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((current) => ({
                      ...current,
                      analytics: e.target.checked,
                    }))
                  }
                  className="peer sr-only"
                />
                <span className="h-6 w-11 rounded-full bg-stone-700 transition-colors after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-orange-600 peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-orange-500 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-stone-950" />
              </span>
            </label>

            <label className="flex cursor-pointer items-center justify-between">
              <span>Functional Cookies</span>

              <span className="relative inline-flex h-6 w-11 items-center">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences((current) => ({
                      ...current,
                      functional: e.target.checked,
                    }))
                  }
                  className="peer sr-only"
                />
                <span className="h-6 w-11 rounded-full bg-stone-700 transition-colors after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-orange-600 peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-orange-500 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-stone-950" />
              </span>
            </label>

            <label className="flex cursor-pointer items-center justify-between">
              <span>Advertising Cookies</span>

              <span className="relative inline-flex h-6 w-11 items-center">
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={(e) =>
                    setPreferences((current) => ({
                      ...current,
                      advertising: e.target.checked,
                    }))
                  }
                  className="peer sr-only"
                />
                <span className="h-6 w-11 rounded-full bg-stone-700 transition-colors after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-orange-600 peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-orange-500 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-stone-950" />
              </span>
            </label>

            <button
              type="button"
              onClick={() => saveConsent(preferences)}
              className="mt-2 rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-orange-50 hover:bg-orange-500 transition-colors"
            >
              Save Preferences
            </button>
          </div>
        )}

        <div className="mt-4 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={togglePreferences}
            className="rounded-md border border-stone-600 px-4 py-2 text-sm hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
          >
            Manage Preferences
          </button>

          <button
            type="button"
            onClick={rejectOptional}
            className="rounded-md border border-stone-600 px-4 py-2 text-sm hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
          >
            Reject Optional
          </button>

          <button
            type="button"
            onClick={acceptAll}
            className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-orange-50 hover:bg-orange-500 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
