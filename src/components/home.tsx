import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { getProjects } from "@/lib/projects";
import { getStack } from "@/lib/stack";
import { site } from "@/lib/site";

import { ProjectCard } from "./project-card";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

function SectionHeading({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight sm:text-3xl">
        <span className="font-mono text-accent"># </span>
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted">{subtitle}</p>
    </div>
  );
}

export function Home({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const projects = getProjects(locale);
  const stack = getStack(locale);

  return (
    <>
      <SiteHeader locale={locale} />

      <main className="flex-1">
        {/* ---------------------------------------------------------- Hero */}
        <section className="hero-glow relative overflow-hidden border-b border-line">
          <div className="aurora" aria-hidden />
          <div className="grid-lines absolute inset-0" aria-hidden />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
            <p className="font-mono text-sm text-muted">{t.hero.greeting}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {site.name}
            </h1>
            <p className="mt-4 font-mono text-sm text-accent sm:text-base">
              {locale === "pt" ? site.rolePt : site.role}
            </p>
            <p className="mt-2 font-mono text-xs text-muted">
              {site.location} · {site.company}
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
              >
                {t.hero.ctaWork}
              </a>
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg border border-line bg-elevated px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t.hero.ctaGithub}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- Projetos */}
        <section className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-24">
          <SectionHeading id="work" title={t.work.title} subtitle={t.work.subtitle} />
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ Stack */}
        <section className="border-y border-line bg-elevated/40">
          <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-24">
            <SectionHeading id="stack" title={t.stack.title} subtitle={t.stack.subtitle} />

            <div className="space-y-10">
              {stack.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                    {group.title}
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="rounded-xl border border-line bg-bg p-4 transition-colors hover:border-accent/40"
                      >
                        <p className="font-medium">{item.name}</p>
                        {item.note ? (
                          <p className="mt-1 text-sm leading-relaxed text-muted">{item.note}</p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- Contacto */}
        <section className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-24">
          <SectionHeading id="contact" title={t.contact.title} subtitle={t.contact.subtitle} />
          <div className="flex flex-wrap gap-3">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              {t.contact.githubCta}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border border-line bg-elevated px-5 py-2.5 font-mono text-sm transition-colors hover:border-accent/50 hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
