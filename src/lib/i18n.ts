export const locales = ["en", "fil", "hi", "es", "cmn", "nl", "fr", "ru", "ar"];
export const nonEnLocales = ["fil", "hi", "es", "cmn", "nl", "fr", "ru", "ar"];

const dictionaries = {
  en: () => import("@/messages/en.json").then((m) => m.default),
  fil: () => import("@/messages/fil.json").then((m) => m.default),
  hi: () => import("@/messages/hi.json").then((m) => m.default),
  es: () => import("@/messages/es.json").then((m) => m.default),
  cmn: () => import("@/messages/cmn.json").then((m) => m.default),
  nl: () => import("@/messages/nl.json").then((m) => m.default),
  fr: () => import("@/messages/fr.json").then((m) => m.default),
  ru: () => import("@/messages/ru.json").then((m) => m.default),
  ar: () => import("@/messages/ar.json").then((m) => m.default),
};

export type Locale = "cmn" | "en" | "es" | "fil" | "hi" | "nl" | "fr" | "ru" | "ar";

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export const navLanguages = [
  { code: "en", label: "English", region: "Global", short: "EN" },
  { code: "fil", label: "Filipino", region: "Philippines", short: "FIL" },
  {
    code: "cmn",
    label: "中文 (Chinese)",
    region: "China",
    short: "ZH",
  },
  {
    code: "es",
    label: "Español (Spanish)",
    region: "Latin America",
    short: "ES",
  },
  {
    code: "hi",
    label: "हिंदी (Hindi)",
    region: "India",
    short: "HI",
  },
  {
    code: "nl",
    label: "Nederlands (Dutch)",
    region: "Netherlands",
    short: "NL",
  },
  {
    code: "fr",
    label: "Français (French)",
    region: "France",
    short: "FR",
  },
  {
    code: "ru",
    label: "Русский (Russian)",
    region: "Russia",
    short: "RU",
  },
  {
    code: "ar",
    label: "العربية (Arabic)",
    region: "Arabia",
    short: "AR",
  },
];
