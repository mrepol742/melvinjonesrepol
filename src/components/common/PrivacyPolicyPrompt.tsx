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
  const { updateConsent } = useConsent();
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
    window.addEventListener("door:done", handleDoorDone);
    return () => window.removeEventListener("door:done", handleDoorDone);
  }, []);

  const saveConsent = (consent: ConsentPreferences) => {
    setVisible(false);
    setTimeout(() => {
      updateConsent(consent);
      setOpen(false);
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

  if (!open) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-[9999] px-3 md:px-6
        transition-all duration-400 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="mx-auto max-w-4xl rounded-2xl border bg-gray-900 text-white p-4 md:p-5 shadow-xl">
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
          <div className="mt-4 space-y-3 border-t border-gray-700 pt-4">
            <label className="flex items-center justify-between">
              <span>Necessary Cookies</span>

              <input type="checkbox" checked disabled />
            </label>

            <label className="flex items-center justify-between">
              <span>Analytics Cookies</span>

              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics: e.target.checked,
                  })
                }
              />
            </label>

            <label className="flex items-center justify-between">
              <span>Functional Cookies</span>

              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    functional: e.target.checked,
                  })
                }
              />
            </label>

            <label className="flex items-center justify-between">
              <span>Advertising Cookies</span>

              <input
                type="checkbox"
                checked={preferences.advertising}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    advertising: e.target.checked,
                  })
                }
              />
            </label>

            <button
              type="button"
              onClick={() => saveConsent(preferences)}
              className="mt-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 transition-all transition-duration-300"
            >
              Save Preferences
            </button>
          </div>
        )}

        <div className="mt-4 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={() => setShowPreferences((prev) => !prev)}
            className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100 transition-all transition-duration-300 hover:text-gray-700"
          >
            Manage Preferences
          </button>

          <button
            type="button"
            onClick={rejectOptional}
            className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100 transition-all transition-duration-300 hover:text-gray-700"
          >
            Reject Optional
          </button>

          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 transition-all transition-duration-300"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
