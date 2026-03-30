import Head from "next/head";
import { headers } from "next/headers";

const baseUrl = "https://www.melvinjonesrepol.com";

export default async function BreadcrumbJsonLd() {
  const h = await headers();

  const pathname =
    h.get("x-invoke-path") ||
    h.get("x-pathname") ||
    h.get("next-url") ||
    "/";

  const pathParts = pathname.split("/").filter(Boolean);

  const itemListElement = pathParts.map((part, index) => {
    const name = decodeURIComponent(part.replace(/-/g, " "));
    const item = `${baseUrl}/${pathParts.slice(0, index + 1).join("/")}`;
    return {
      "@type": "ListItem",
      position: index + 2,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      item,
    };
  });

  itemListElement.unshift({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: baseUrl,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
     <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
     </Head>
  );
}
