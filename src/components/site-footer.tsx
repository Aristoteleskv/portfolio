import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
