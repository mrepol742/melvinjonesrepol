import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fil", "cmn", "es", "hi"] as const;
export const supportedLocales = ["cmn", "es", "fil", "hi"];
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
];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";
  const safeLocale = locales.includes(
    locale as "en" | "fil" | "cmn" | "es" | "hi",
  )
    ? locale
    : "en";

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
