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
};

const ConsentContext = createContext<ConsentContextType | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);

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

  return (
    <ConsentContext.Provider value={{ consent, updateConsent }}>
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
