"use client";

/**
 * O ícone é controlado por CSS (`.theme-icon-*` em globals.css) a partir da
 * classe `light` no `<html>`. Assim não há estado no React: sem `setState`
 * dentro de um efeito e sem risco de hydration mismatch, já que o servidor e
 * o cliente renderizam exatamente o mesmo markup.
 */
export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("light") ? "dark" : "light";
    root.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* modo privado: o tema só dura esta sessão */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-line bg-elevated text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      <span aria-hidden className="relative block size-4">
        {/* Lua — tema escuro (por omissão) */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="theme-icon-dark absolute inset-0"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
        {/* Sol — tema claro */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="theme-icon-light absolute inset-0"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      </span>
    </button>
  );
}
