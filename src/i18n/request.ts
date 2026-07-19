import { Locale, locales } from "@/lib/i18n";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";
  const safeLocale = locales.includes(locale as Locale) ? locale : "en";

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
