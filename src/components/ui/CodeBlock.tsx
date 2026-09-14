import { codeToHtml } from "shiki";

export async function CodeBlock({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  // Inline code
  if (!className) {
    return <code className="bg-orange-500/50 px-1 py-0.5 text-gray-950">{children}</code>;
  }

  const lang = className.match(/language-(\w+)/)?.[1] ?? "text";

  const html = await codeToHtml(String(children ?? ""), {
    lang,
    theme: "github-dark",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
