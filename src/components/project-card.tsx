import Link from "next/link";

import { getDictionary } from "@/i18n/dictionaries";
import { projectPath, type Locale } from "@/i18n/config";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-elevated p-6 transition-colors hover:border-accent/50">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">
          <Link href={projectPath(locale, project.slug)} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        {project.featured ? (
          <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent">
            {t.work.featured}
          </span>
        ) : null}
      </div>

      <p className="mt-1 font-mono text-xs text-muted">{project.year}</p>
      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>

      {project.metrics.length > 0 ? (
        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-5 sm:grid-cols-4">
          {project.metrics.slice(0, 4).map((metric) => (
            <div key={metric.label}>
              <dt className="text-[11px] uppercase tracking-wide text-muted">{metric.label}</dt>
              <dd className="mt-0.5 font-mono text-sm font-medium text-fg">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 7).map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-line bg-bg px-2 py-1 font-mono text-[11px] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="mt-6 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
        {t.work.viewProject} →
      </p>
    </article>
  );
}
