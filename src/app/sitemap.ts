import { MetadataRoute } from "next";
import { articlesData } from "@/data/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adebolaaderibigbe.com";

  const staticRoutes = [
    "",
    "/about",
    "/research",
    "/teaching",
    "/featured",
    "/writing",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const articleRoutes = articlesData.map((article) => ({
    url: `${baseUrl}/writing/${article.slug}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
