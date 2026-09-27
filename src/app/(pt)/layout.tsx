import type { Metadata } from "next";

import { Shell } from "@/components/shell";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

const t = getDictionary("pt");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: t.meta.title,
    template: `%s — ${site.shortName}`,
  },
  description: t.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: t.meta.title,
    description: t.meta.description,
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: t.meta.title,
    description: t.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="pt">{children}</Shell>;
}
