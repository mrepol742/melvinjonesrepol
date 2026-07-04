import { getRequestConfig } from "next-intl/server";

const locales = [
  "en",
  "fil",
  "cmn",
  "es",
  "hi",
  "nl",
  "fr",
  "ru",
  "ar",
] as const;
export const supportedLocales = [
  "cmn",
  "es",
  "fil",
  "hi",
  "nl",
  "fr",
  "ru",
  "ar",
];
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

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";
  const safeLocale = locales.includes(
    locale as "en" | "fil" | "cmn" | "es" | "hi" | "nl" | "fr" | "ru" | "ar",
  )
    ? locale
    : "en";

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
