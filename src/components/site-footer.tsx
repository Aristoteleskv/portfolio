import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  const links = [
    { href: site.githubUrl, label: t.nav.github },
    { href: site.linkedinUrl, label: t.nav.linkedin },
    { href: `mailto:${site.email}`, label: site.email },
  ];

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. {t.footer.rights}
        </p>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer noopener" })}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
