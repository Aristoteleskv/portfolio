import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { PluggableList } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/lib/projects";
import { projectPath } from "@/i18n/config";

import { mdxComponents } from "./mdx";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

// A anotação `PluggableList` é necessária: sem ela o TypeScript wideniza
// `[rehypePrettyCode, {...}]` para um array comum e rejeita a tupla.
const remarkPlugins: PluggableList = [remarkGfm];
const rehypePlugins: PluggableList = [
  rehypeSlug,
  [
    rehypePrettyCode,
    {
      // Código é sempre escuro (ver `.prose pre` em globals.css).
      theme: "github-dark-dimmed",
      keepBackground: false,
    },
  ],
];

const options = {
  mdxOptions: { remarkPlugins, rehypePlugins },
};

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1 text-sm">{value}</dd>
    </div>
  );
}

export function ProjectDetail({
  project,
  locale,
  siblings,
}: {
  project: Project;
  locale: Locale;
  siblings: Project[];
}) {
  const t = getDictionary(locale);
  const home = locale === "pt" ? "/" : "/en";

  return (
    <>
      <SiteHeader locale={locale} />

      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-20">
          <Link
            href={`${home}#work`}
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            ← {t.work.backToWork}
          </Link>

          <header className="mt-8">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {project.summary}
            </p>
          </header>

          <dl className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-line bg-elevated p-6 sm:grid-cols-4">
            <Fact label={t.work.year} value={project.year} />
            <Fact label={t.work.role} value={project.role} />
            <Fact label={t.work.stack} value={`${project.stack.length} tecnologias`} />
            <Fact
              label={t.work.outcomes}
              value={`${project.metrics.length} métricas`}
            />
          </dl>

          {project.metrics.length > 0 ? (
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <li key={metric.label} className="rounded-xl border border-line p-4">
                  <p className="font-mono text-xl font-semibold text-accent">{metric.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">{metric.label}</p>
                </li>
              ))}
            </ul>
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.repo || project.live ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg border border-line bg-elevated px-4 py-2 text-sm transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {t.work.readOnGithub} ↗
                </a>
              ) : null}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  {t.work.live} ↗
                </a>
              ) : null}
            </div>
          ) : null}

          {project.images.length > 0 ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.images.map((shot, index) => (
                <li key={shot.src}>
                  <figure className="overflow-hidden rounded-2xl border border-line bg-elevated">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-full"
                    />
                    {shot.caption ? (
                      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
                        {shot.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="prose mt-12">
            <MDXRemote source={project.body} components={mdxComponents} options={options} />
          </div>

          {siblings.length > 0 ? (
            <nav className="mt-16 border-t border-line pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {t.work.others}
              </p>
              <ul className="mt-4 space-y-2">
                {siblings.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={projectPath(locale, other.slug)}
                      className="group flex items-baseline justify-between gap-4 rounded-lg border border-line bg-elevated px-4 py-3 transition-colors hover:border-accent/50"
                    >
                      <span className="text-sm font-medium">{other.title}</span>
                      <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                        {other.year}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </article>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
