const dictionaries = {
  en: () => import("@/messages/en.json").then((m) => m.default),
  fil: () => import("@/messages/fil.json").then((m) => m.default),
  hi: () => import("@/messages/hi.json").then((m) => m.default),
  es: () => import("@/messages/es.json").then((m) => m.default),
  cmn: () => import("@/messages/cmn.json").then((m) => m.default),
};

export async function getDictionary(
  locale: "cmn" | "en" | "es" | "fil" | "hi",
) {
  return dictionaries[locale]();
}
