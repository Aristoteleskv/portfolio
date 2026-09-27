export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Rota pública de um projeto, por idioma. */
export function projectPath(locale: Locale, slug: string): string {
  return locale === "pt" ? `/projetos/${slug}` : `/en/projects/${slug}`;
}

/** Alterna o idioma preservando a página atual quando possível. */
export function switchLocalePath(locale: Locale, pathname: string): string {
  if (locale === "pt") {
    if (pathname === "/en") return "/";
    if (pathname.startsWith("/en/projects/")) {
      return `/projetos/${pathname.replace("/en/projects/", "")}`;
    }
    return "/";
  }
  if (pathname === "/") return "/en";
  if (pathname.startsWith("/projetos/")) {
    return `/en/projects/${pathname.replace("/projetos/", "")}`;
  }
  return "/en";
}
