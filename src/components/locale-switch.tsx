"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { switchLocalePath, type Locale } from "@/i18n/config";

/** Alterna PT/EN mantendo o visitante na mesma página quando ela existe nos dois idiomas. */
export function LocaleSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? "/";
  const target: Locale = locale === "pt" ? "en" : "pt";

  return (
    <Link
      href={switchLocalePath(target, pathname)}
      hrefLang={target}
      aria-label={label}
      className="inline-flex h-9 items-center rounded-lg border border-line bg-elevated px-2.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      {label}
    </Link>
  );
}
