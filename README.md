# Portfólio — Matutadidi Aristóteles Kivova

Portfólio pessoal em Next.js, com versões em português (`/`) e inglês (`/en`).
Conteúdo em MDX dentro do repositório, deploy na Vercel.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (tokens em `src/app/globals.css`, sem `tailwind.config.js`)
- MDX via `next-mdx-remote`, realce de código com `rehype-pretty-code` + Shiki
- Deploy: Vercel (detecção automática, sem configuração)

## Comandos

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # eslint
```

## Estrutura

```
content/projects/pt/*.mdx     Projetos em português
content/projects/en/*.mdx     Os mesmos projetos em inglês (mesmo slug)
public/projects/              Screenshots dos apps

src/
  app/
    (pt)/                     Raiz em português  -> /
      layout.tsx              <html lang="pt">
      page.tsx
      projetos/[slug]/page.tsx
    (en)/                     Raiz em inglês     -> /en
      layout.tsx              <html lang="en">
      en/page.tsx
      en/projects/[slug]/page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/                 Header, footer, cartões, tema, MDX
  i18n/                       config.ts (rotas) + dictionaries.ts (textos)
  lib/
    site.ts                   Nome, role, GitHub, email
    projects.ts               Leitor de MDX + frontmatter
    stack.ts                  Inventário de stack por idioma
```

Os dois idiomas usam **dois root layouts** em route groups. É a forma oficial
do Next de ter `<html lang>` correcto em `/` e em `/en` sem middleware. Não
adiciones um `src/app/layout.tsx` — passaria a haver dois root layouts.

## Adicionar um projeto

1. Cria `content/projects/pt/<slug>.mdx` **e** `content/projects/en/<slug>.mdx`
   com o mesmo nome de ficheiro. O switch de idioma depende dos slugs iguais.
2. Frontmatter obrigatório:

```yaml
---
title: "Nome do projeto"
summary: "Uma ou duas frases para o cartão e para os resultados de busca."
year: "2024 — 2026"
role: "O que fiz no projeto"
featured: true        # true = selo "Destaque"
order: 5              # ordena os cartões
stack: ["Flutter", "Dart"]
metrics:              # até 4, mostradas no cartão
  - { label: "Ficheiros Dart", value: "22" }
images:               # opcional
  - src: "/projects/app-1.png"
    alt: "Descrição da imagem"
    caption: "Legenda"
---
```

Campos opcionais: `repo` (URL), `live` (URL).

Um `repo` privado produz um 404 para quem não tem acesso. Enquanto o `noop`
for privado, a linha está comentada nos ficheiros PT e EN.

## Stack

`src/lib/stack.ts` tem o inventário, separado por idioma. Só entram aqui
tecnologias que realmente usas — o README do perfil GitHub é a espinha dorsal,
e o grupo de IA/ML foi acrescentado a partir do código real.

## Tema

Escuro por omissão, claro com `<html class="light">`. A escolha é guardada em
`localStorage` e, sem preferência guardada, segue o sistema. O script
anti-flash está em `src/components/shell.tsx` e corre antes do primeiro paint.

## Deploy

1. Sobe o repositório para o GitHub.
2. Importa em [vercel.com/new](https://vercel.com/new). Detecta Next.js sozinho.
3. Define a variável de ambiente:

   ```
   NEXT_PUBLIC_SITE_URL=https://<o-teu-dominio>
   ```

   Sem isto o `sitemap.xml` e as Open Graph tags usam o URL de fallback.

Depois do primeiro deploy, liga um domínio em **Settings → Domains** e o
HTTPS é automático.
