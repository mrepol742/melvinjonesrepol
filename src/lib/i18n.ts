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

export async function getDictionary(
  locale: "cmn" | "en" | "es" | "fil" | "hi" | "nl" | "fr" | "ru" | "ar",
) {
  return dictionaries[locale]();
}
