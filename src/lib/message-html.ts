import sanitizeHtml from "sanitize-html";

const allowedTags = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "a",
  "ul",
  "ol",
  "li",
  "blockquote",
  "code",
  "pre",
  "h2",
  "h3",
  "h4",
];

const allowedAttributes = {
  a: ["href", "target", "rel"],
};

export function sanitizeMessageHtml(message: string) {
  return sanitizeHtml(message, {
    allowedTags,
    allowedAttributes,
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        target: "_blank",
        rel: "noopener noreferrer",
      }),
    },
  });
}

export function messageHtmlToText(message: string) {
  return sanitizeHtml(message, { allowedTags: [], allowedAttributes: {} })
    .replace(/\s{3,}/g, "\n\n")
    .trim();
}
