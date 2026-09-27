import type { MetadataRoute } from "next";

import { projectPath } from "@/i18n/config";
import { getProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/en`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const pt = getProjects("pt").map((project) => ({
    url: `${site.url}${projectPath("pt", project.slug)}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const en = getProjects("en").map((project) => ({
    url: `${site.url}${projectPath("en", project.slug)}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...home, ...pt, ...en];
}
