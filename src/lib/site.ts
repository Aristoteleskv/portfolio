export const site = {
  name: "Matutadidi Aristóteles Kivova",
  shortName: "Kivova",
  aliases: ["Loops", "Kivova"],
  role: "Senior Software Engineer · Full-Stack & Mobile Developer",
  rolePt: "Engenheiro de Software · Full-Stack & Mobile",
  location: "Angola",
  company: "Kv.Edition",
  github: "Aristoteleskv",
  githubUrl: "https://github.com/Aristoteleskv",
  email: "manuelkivova@gmail.com",
  /** Preenche quando quiseres linking para o LinkedIn. */
  linkedinUrl: "",
  /**
   * URL pública do site. Em produção define NEXT_PUBLIC_SITE_URL na Vercel
   * (ex.: https://aristoteleskv.vercel.app) para o sitemap e as Open Graph
   * tags saírem com o domínio certo.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aristoteleskv.vercel.app",
} as const;

export type Site = typeof site;
