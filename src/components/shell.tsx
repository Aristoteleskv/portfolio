import { Geist, Geist_Mono } from "next/font/google";

import "../app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        {/* First thing in the body: runs before anything is painted. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
