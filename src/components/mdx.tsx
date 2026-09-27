import Link from "next/link";

type AnchorProps = React.ComponentProps<"a">;

/**
 * Os estilos do corpo do artigo vivem em `.prose` (globals.css). Aqui só se
 * trata do que o CSS não resolve: links internos via next/link e links
 * externos abertos em nova aba com `rel` correto.
 */
export const mdxComponents = {
  a({ href = "", children, ...props }: AnchorProps) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...props}>
        {children}
      </a>
    );
  },
};
