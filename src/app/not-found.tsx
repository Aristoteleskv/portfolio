import { NotFound } from "@/components/not-found";
import { Shell } from "@/components/shell";

/**
 * 404 global — usado em URLs que não correspondem a nenhuma rota, como
 * `/qualquer-coisa`. As rotas de projeto chamam `notFound()`, que resolve para
 * o `not-found.tsx` do próprio route group (ver `src/app/(pt)/not-found.tsx`).
 *
 * Como existem dois root layouts (PT e EN) e nenhum `src/app/layout.tsx`, este
 * ficheiro tem de renderizar o documento completo por si só.
 */
export default function GlobalNotFound() {
  return (
    <Shell lang="pt">
      <NotFound locale="pt" />
    </Shell>
  );
}
