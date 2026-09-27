import Link from "next/link";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site } from "@/lib/site";

import { LocaleSwitch } from "./locale-switch";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const home = locale === "pt" ? "/" : "/en";
  const links = [
    { href: `${home}#work`, label: t.nav.work },
    { href: `${home}#stack`, label: t.nav.stack },
    { href: `${home}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-4 px-5">
        <Link
          href={locale === "pt" ? "/" : "/en"}
          className="font-mono text-sm font-medium tracking-tight"
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.nav.github}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-line bg-elevated text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
            </svg>
          </a>
          <LocaleSwitch locale={locale} label={t.nav.langLabel} />
          <ThemeToggle label={t.nav.theme} />
        </div>
      </div>
    </header>
  );
}
