import { codeToHtml } from "shiki";

export async function CodeBlock(props: React.HTMLAttributes<HTMLElement>) {
  const raw = String(props.children ?? "");

  // Extract language from className
  const className = props.className || "";
  const match = className.match(/language-(\w+)/);

  const lang = match?.[1] || "text";

  const html = await codeToHtml(raw, {
    lang,
    theme: "github-dark",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
