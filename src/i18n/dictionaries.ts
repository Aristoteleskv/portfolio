import type { Locale } from "./config";

export const dict = {
  pt: {
    meta: {
      title: "Matutadidi Aristóteles Kivova — Engenheiro de Software Full-Stack & Mobile",
      description:
        "Portfólio de Matutadidi Aristóteles Kivova (Loops), engenheiro de software em Angola. PHP, Laravel, Angular, Flutter, MySQL, WebSocket/WebRTC e motores de IA em Python: sistemas completos, construídos de ponta a ponta.",
    },
    nav: {
      work: "Projetos",
      stack: "Stack",
      github: "GitHub",
      linkedin: "LinkedIn",
      contact: "Contacto",
      theme: "Alternar tema",
      langLabel: "English",
    },
    hero: {
      greeting: "Olá, sou",
      intro:
        "Construo software que tem de aguentar o mundo real: bases de dados com migrações, WebSockets, vídeo ao vivo e modelos de IA que não podem partir quando a rede falha.",
      ctaWork: "Ver projetos",
      ctaGithub: "Ver no GitHub",
      ctaLinkedin: "LinkedIn",
      ctaContact: "Falar comigo",
    },
    work: {
      eyebrow: "Projectos seleccionados",
      title: "Projetos",
      subtitle:
        "Dois sistemas que construí de ponta a ponta — arquitetura, implementação e operação.",
      featured: "Destaque",
      all: "Todos",
      others: "Outros projetos",
      viewProject: "Ver projeto",
      readOnGithub: "Ver código",
      live: "Online",
      repo: "Repositório",
      role: "Papel",
      year: "Período",
      stack: "Stack",
      outcomes: "Números",
      backToWork: "Todos os projetos",
      notFound: "Projeto não encontrado",
      notFoundHint: "Este projeto não existe ou foi movido.",
    },
    stack: {
      eyebrow: "O que uso todos os dias",
      title: "Stack",
      subtitle: "Ferramentas que uso no dia a dia.",
    },
    contact: {
      eyebrow: "Estamos em contacto",
      title: "Contacto",
      subtitle:
        "Aberto a projetos, leitura de código e a aprender em conjunto. A resposta mais rápida é o GitHub.",
      githubCta: "Abrir o meu GitHub",
      linkedinCta: "LinkedIn",
      emailCta: "Enviar email",
    },
    footer: {
      builtWith: "Construído com Next.js e Tailwind CSS. Sem cookies, sem trackers.",
      rights: "Todos os direitos reservados.",
    },
    notFound: {
      code: "404",
      title: "Página não encontrada",
      hint: "O link pode estar errado ou a página mudou de sítio.",
      back: "Voltar ao início",
    },
  },
  en: {
    meta: {
      title: "Matutadidi Aristóteles Kivova — Senior Software Engineer, Full-Stack & Mobile",
      description:
        "Portfolio of Matutadidi Aristóteles Kivova (Loops), a software engineer based in Angola. PHP, Laravel, Angular, Flutter, MySQL, WebSocket/WebRTC and Python AI engines: complete systems, built end to end.",
    },
    nav: {
      work: "Work",
      stack: "Stack",
      github: "GitHub",
      linkedin: "LinkedIn",
      contact: "Contact",
      theme: "Toggle theme",
      langLabel: "Português",
    },
    hero: {
      greeting: "Hi, I'm",
      intro:
        "I build software that has to survive the real world: databases with migrations, WebSockets, live video, and ML models that must not break when the network does.",
      ctaWork: "See the work",
      ctaGithub: "View on GitHub",
      ctaLinkedin: "LinkedIn",
      ctaContact: "Get in touch",
    },
    work: {
      eyebrow: "Selected work",
      title: "Work",
      subtitle:
        "Two systems I built end to end — architecture, implementation and operations.",
      featured: "Featured",
      all: "All",
      others: "Other projects",
      viewProject: "View project",
      readOnGithub: "View code",
      live: "Live",
      repo: "Repository",
      role: "Role",
      year: "Period",
      stack: "Stack",
      outcomes: "Numbers",
      backToWork: "All projects",
      notFound: "Project not found",
      notFoundHint: "This project does not exist or has moved.",
    },
    stack: {
      eyebrow: "What I reach for daily",
      title: "Stack",
      subtitle: "Tools I reach for daily.",
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Contact",
      subtitle:
        "Open to projects, code pairing, and learning together. The fastest way to reach me is GitHub.",
      githubCta: "Open my GitHub",
      linkedinCta: "LinkedIn",
      emailCta: "Send an email",
    },
    footer: {
      builtWith: "Built with Next.js and Tailwind CSS. No cookies, no trackers.",
      rights: "All rights reserved.",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      hint: "The link may be wrong or the page has moved.",
      back: "Back home",
    },
  },
};

export type Dictionary = (typeof dict)["pt"];

export function getDictionary(locale: Locale): Dictionary {
  return dict[locale];
}
