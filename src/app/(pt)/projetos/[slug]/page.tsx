import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ProjectDetail } from "@/components/project-detail";
import { getDictionary } from "@/i18n/dictionaries";
import { projectPath } from "@/i18n/config";
import { getProject, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects("pt").map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject("pt", slug);

  if (!project) {
    return { title: getDictionary("pt").work.notFound };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: projectPath("pt", project.slug),
      languages: {
        "pt-PT": projectPath("pt", project.slug),
        en: projectPath("en", project.slug),
      },
    },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("pt", slug);

  if (!project) notFound();

  const siblings = getProjects("pt").filter((item) => item.slug !== slug);

  return <ProjectDetail project={project} locale="pt" siblings={siblings} />;
}
