import type { MetadataRoute } from "next";
import { insights, siteUrl } from "./insights/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPublishedAt = insights.reduce(
    (latest, item) => item.publishedAt > latest ? item.publishedAt : latest,
    "1970-01-01",
  );
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(latestPublishedAt),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/insights`,
      lastModified: new Date(latestPublishedAt),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...insights.map((item) => ({
      url: `${siteUrl}/insights/${item.slug}`,
      lastModified: new Date(item.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
