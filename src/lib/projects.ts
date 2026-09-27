import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { Locale } from "@/i18n/config";

const CONTENT_ROOT = path.join(process.cwd(), "content", "projects");

export type Metric = {
  label: string;
  value: string;
};

export type Shot = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectMeta = {
  title: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  featured: boolean;
  order: number;
  repo?: string;
  live?: string;
  metrics: Metric[];
  images: Shot[];
};

export type Project = ProjectMeta & {
  slug: string;
  body: string;
};

function localeDir(locale: Locale): string {
  return path.join(CONTENT_ROOT, locale);
}

function readProject(locale: Locale, file: string): Project {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(localeDir(locale), file), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? "",
    year: data.year ?? "",
    role: data.role ?? "",
    stack: Array.isArray(data.stack) ? data.stack : [],
    featured: Boolean(data.featured),
    order: typeof data.order === "number" ? data.order : 99,
    repo: data.repo,
    live: data.live,
    metrics: Array.isArray(data.metrics) ? data.metrics : [],
    images: Array.isArray(data.images) ? data.images : [],
    body: content,
  };
}

/** Todos os projetos de um idioma, ordenados pelo campo `order`. */
export function getProjects(locale: Locale): Project[] {
  if (!fs.existsSync(localeDir(locale))) return [];

  return fs
    .readdirSync(localeDir(locale))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readProject(locale, file))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

/** Slugs de todos os idiomas — usado por `generateStaticParams`. */
export function getAllSlugs(): { locale: Locale; slug: string }[] {
  return getProjects("pt")
    .map((p) => ({ locale: "pt" as Locale, slug: p.slug }))
    .concat(getProjects("en").map((p) => ({ locale: "en" as Locale, slug: p.slug })));
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  const file = `${slug}.mdx`;
  const full = path.join(localeDir(locale), file);
  if (!fs.existsSync(full)) return undefined;
  return readProject(locale, file);
}
