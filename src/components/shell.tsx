import { JetBrains_Mono, Outfit } from "next/font/google";

import { CursorHalo } from "./cursor-halo";

import "../app/globals.css";

/**
 * A Geist é a fonte default do Next.js — é o primeiro sinal de "portfolio
 * gerado" que se vê. A Outfit é geométrica como a Noway do site Ideias
 * Paralelas (a original é da Fontfabric e não pode ir num repo público) e
 * lê-se bem nos pesos altos. JetBrains Mono para o código.
 */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Runs before first paint so the theme never flashes. Kept inline and tiny on
 * purpose: an external file would be fetched after the HTML is parsed.
 */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var l=window.matchMedia('(prefers-color-scheme: light)').matches;if(s==='light'||(s!=='dark'&&l)){document.documentElement.classList.add('light');}}catch(e){}})();`;

export function Shell({
  lang,
  children,
}: {
  lang: "pt" | "en";
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${outfit.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        {/* First thing in the body: runs before anything is painted. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <CursorHalo />
        {children}
      </body>
    </html>
  );
}
