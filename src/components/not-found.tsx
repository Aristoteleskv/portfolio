import Link from "next/link";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function NotFound({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center px-5 py-32">
        <p className="font-mono text-6xl font-semibold text-accent">{t.notFound.code}</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.notFound.title}
        </h1>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">
          {t.notFound.hint}
        </p>
        <Link
          href={locale === "pt" ? "/" : "/en"}
          className="mt-8 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
        >
          {t.notFound.back}
        </Link>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
