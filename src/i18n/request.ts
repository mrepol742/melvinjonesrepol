import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fil", "cmn", "es", "hi"] as const;
export const supportedLocales = ["cmn", "es", "fil", "hi"];

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
