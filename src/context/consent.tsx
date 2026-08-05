"use client";

import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent_v1";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  advertising: boolean;
};

type ConsentContextType = {
  consent: ConsentPreferences | null;
  updateConsent: (prefs: ConsentPreferences) => void;
  bannerOpen: boolean;
  openBanner: () => void;
  closeBanner: () => void;
};

const ConsentContext = createContext<ConsentContextType | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setConsent(JSON.parse(stored));
    }
  }, []);

  const updateConsent = (prefs: ConsentPreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));

    setConsent(prefs);
  };

  const openBanner = () => setBannerOpen(true);
  const closeBanner = () => setBannerOpen(false);

  return (
    <ConsentContext.Provider value={{ consent, updateConsent, bannerOpen, openBanner, closeBanner }}>
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => {
  const ctx = useContext(ConsentContext);

  if (!ctx) {
    throw new Error("useConsent must be used inside ConsentProvider");
  }

  return ctx;
};
