"use client";

import { useEffect, useRef } from "react";

/**
 * As três camadas decorativas do hero — anéis, imagem e véu — agrupadas numa
 * única caixa que fica atrás do texto.
 *
 * Duas decisões, ambas por motivo:
 *
 * - O agrupamento existe para que a paralaxe escreva **uma** variável
 *   (`--hero-p`) numa subárvore sem texto dentro. O texto do hero fica no
 *   conteúdo, fora desta caixa, e por isso não paga o style recalc que a
 *   escrita provoca a cada frame de scroll.
 * - `--hero-p` vale 0 com a página no topo e 1 quando o hero já saiu todo do
 *   ecrã. O valor por omissão está em CSS (`.hero-layers`), por isso sem JS —
 *   ou sob `prefers-reduced-motion`, onde o listener nem sequer é ligado — o
 *   hero é exactamente o que era: as camadas no sítio, sem paralaxe.
 *
 * Escrever a variável, e não um `setState`: o React não renderiza nada por
 * frame, e quem lê o valor é o CSS. Mesmo padrão do `CursorHalo`.
 *
 * O texto não entra na paralaxe. A composição do hero foi medida contra os
 * píxeis reais da imagem (ver o véu em `globals.css`); mover o texto em
 * relação ao fundo desfazia essa medição.
 */
export function HeroLayers() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    // A caixa é filho directo do <section> do hero; é nele que se mede o
    // progresso.
    const section = node?.parentElement;
    if (!node || !section) {
      return;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;

    const paint = () => {
      frame = 0;
      // Leitura antes da escrita: o que escrevo a seguir (`translate` e
      // `background-position`) não invalida layout, por isso não há
      // reflow forçado.
      const rect = section.getBoundingClientRect();
      // `rect.top` é a distância do topo do hero ao topo do ecrã: positiva
      // enquanto o hero ainda não encostou ao topo (o header é `sticky`, por
      // isso ao abrir a página vale a altura dele), e `-rect.height` quando o
      // hero já saiu completamente. Entre os dois é a fração percorrida.
      const p = Math.min(1, Math.max(0, -rect.top / rect.height));
      node.style.setProperty("--hero-p", p.toFixed(4));
    };

    // Coalesce scroll + resize num único paint.
    const schedule = () => {
      frame ||= requestAnimationFrame(paint);
    };

    const stop = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };

    const start = () => {
      if (motion.matches) {
        return;
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      schedule();
    };

    // Mudar a preferência de movimento a meio da sessão tem de desligar a
    // paralaxe, não só a não a ligar.
    const onMotionChange = () => {
      if (motion.matches) {
        stop();
        node.style.removeProperty("--hero-p");
      } else {
        start();
      }
    };

    start();
    motion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div ref={ref} className="hero-layers">
      <div className="hero-rings" aria-hidden />
      <div className="hero-media" aria-hidden />
      <div className="hero-scrim" aria-hidden />
    </div>
  );
}
