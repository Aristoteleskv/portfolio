"use client";

import { useEffect, useRef } from "react";

/**
 * Halo que segue o rato. Inspirado no `.cursor-ball` do site Ideias Paralelas.
 *
 * Duas diferenças, ambas por acessibilidade e não por estilo:
 *
 * - O cursor do sistema **não** é escondido. Esconder o cursor nativo quebra a
 *   noção de posição do rato para quem depende dele, e deixa o rato invisível
 *   em qualquer ecrã onde este JS falhe. Aqui o halo é um acento por cima.
 * - A posição é escrita no `style.transform` de dentro de um
 *   `requestAnimationFrame`. Um `setState` por evento de `pointermove`
 *   faria o React renderizar ~60 vezes por segundo sem qualquer útil.
 *
 * O CSS trata do resto: `.cursor-halo` não aparece com `pointer: coarse` (ecrãs
 * de toque) nem sob `prefers-reduced-motion`.
 */
export function CursorHalo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    let x = -100;
    let y = -100;
    let seen = false;
    let frame = 0;

    const paint = () => {
      frame = 0;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!seen) {
        seen = true;
        node.dataset.active = "true";
      }
      // Coalesce vários eventos num único paint.
      frame ||= requestAnimationFrame(paint);
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      node.dataset.hover = target?.closest(
        "a, button, [role='button'], input, textarea, select, summary",
      )
        ? "true"
        : "false";
    };

    const onLeaveWindow = () => {
      node.dataset.active = "false";
    };

    const onEnterWindow = () => {
      node.dataset.active = "true";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeaveWindow);
    document.addEventListener("pointerenter", onEnterWindow);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeaveWindow);
      document.removeEventListener("pointerenter", onEnterWindow);
    };
  }, []);

  return <div ref={ref} className="cursor-halo" aria-hidden />;
}
