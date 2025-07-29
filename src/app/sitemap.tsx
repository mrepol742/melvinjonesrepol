import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.melvinjonesrepol.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.melvinjonesrepol.com/projects",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.melvinjonesrepol.com/projects/webvium-browser",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.melvinjonesrepol.com/projects/webvium-vpn",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.melvinjonesrepol.com/projects/orion-chatbot",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.melvinjonesrepol.com/projects/axleshift-core-1",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.melvinjonesrepol.com/projects/ulisha-store",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.melvinjonesrepol.com/my-team",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.melvinjonesrepol.com/certificates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.melvinjonesrepol.com/work-experience",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.melvinjonesrepol.com/gallery",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.melvinjonesrepol.com/contact",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.melvinjonesrepol.com/privacy",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.melvinjonesrepol.com/terms",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
