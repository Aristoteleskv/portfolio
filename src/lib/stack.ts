import type { Locale } from "@/i18n/config";

export type StackItem = {
  name: string;
  /** Só onde tenho evidência no código. Onde não, fica vazio de propósito. */
  note?: string;
};

export type StackGroup = {
  title: string;
  items: StackItem[];
};

/**
 * Inventário de stack.
 *
 * A espinha dorsal vem do README do perfil público (`Aristoteleskv/Aristoteleskv`),
 * para o site e o GitHub dizerem a mesma coisa. O grupo de IA/ML e as notas
 * foram acrescentados a partir do código real do `python_service/` e da rede
 * social — são a parte que me diferencia e vale a pena mostrar.
 *
 * As notas são deliberadamente selectivas: só descrevo o que verifiquei no
 * código. As tecnologias sem nota vêm do README do perfil e estão aqui porque
 * as declaraste tu — confirma que cada uma continua de pé antes de uma
 * entrevista.
 */
export function getStack(locale: Locale): StackGroup[] {
  const pt: StackGroup[] = [
    {
      title: "Linguagens",
      items: [
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "PHP", note: "PSR-12, PSR-4, código moderno em src/ com legado compatível" },
        { name: "Dart" },
        { name: "Python", note: "Serviço de ML, visão computacional e áudio" },
        { name: "Java" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "Angular" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "Vite" },
        { name: "Three.js", note: "Avatar 3D com retargeting de gestos" },
        { name: "MindAR", note: "Realidade aumentada no browser" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Laravel" },
        { name: "AdonisJS" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "Guzzle 7", note: "Cliente HTTP PSR-18 para todo o tráfego de saída" },
        { name: "Composer" },
      ],
    },
    {
      title: "Mobile",
      items: [
        { name: "Flutter", note: "Android, iOS, web, desktop" },
        { name: "Dart" },
        { name: "Android Studio" },
      ],
    },
    {
      title: "Bases de dados",
      items: [
        { name: "MySQL 8", note: "utf8mb4, 76 tabelas, routines e triggers" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis", note: "Cache de páginas, rate limiting e sessões" },
      ],
    },
    {
      title: "IA, ML e visão",
      items: [
        { name: "PyTorch", note: "Transformer de nível de carácter treinado do zero" },
        { name: "NumPy", note: "Álgebra linear e deteção de anomalias" },
        { name: "NudeNet", note: "Moderação de imagem em ONNX" },
        { name: "OpenCV", note: "Processamento de imagem e análise facial" },
        { name: "faster-whisper", note: "Legendas automáticas em vídeos e lives" },
        { name: "GFPGAN / Real-ESRGAN", note: "Restauro e super-resolução de rostos" },
        { name: "FastAPI + Uvicorn", note: "O serviço expõe HTTP e WebSocket" },
      ],
    },
    {
      title: "Tempo real",
      items: [
        { name: "WebSocket", note: "Ratchet + ReactPHP — chat e indicadores de escrita" },
        { name: "WebRTC", note: "Live streaming com sinalização própria" },
        { name: "coturn", note: "Servidor TURN para NAT traversal" },
      ],
    },
    {
      title: "DevOps e infra",
      items: [
        { name: "Docker" },
        { name: "Linux" },
        { name: "Nginx" },
        { name: "Caddy", note: "Reverse proxy com HTTPS automático" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Vercel", note: "Deploy deste site" },
      ],
    },
    {
      title: "Design e ferramentas",
      items: [
        { name: "Figma" },
        { name: "VS Code" },
        { name: "Postman" },
      ],
    },
    {
      title: "Qualidade",
      items: [
        { name: "PHPUnit", note: "Testes unitários e de integração" },
        { name: "PHP-CS-Fixer", note: "PSR-12" },
        { name: "ESLint" },
      ],
    },
  ];

  const en: StackGroup[] = [
    {
      title: "Languages",
      items: [
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "PHP", note: "PSR-12, PSR-4, modern code in src/ with a compatible legacy layer" },
        { name: "Dart" },
        { name: "Python", note: "ML, computer vision and audio service" },
        { name: "Java" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "Angular" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "Vite" },
        { name: "Three.js", note: "3D avatar with gesture retargeting" },
        { name: "MindAR", note: "Augmented reality in the browser" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Laravel" },
        { name: "AdonisJS" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "Guzzle 7", note: "PSR-18 HTTP client for all outbound traffic" },
        { name: "Composer" },
      ],
    },
    {
      title: "Mobile",
      items: [
        { name: "Flutter", note: "Android, iOS, web, desktop" },
        { name: "Dart" },
        { name: "Android Studio" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL 8", note: "utf8mb4, 76 tables, routines and triggers" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis", note: "Page cache, rate limiting and sessions" },
      ],
    },
    {
      title: "AI, ML & vision",
      items: [
        { name: "PyTorch", note: "Character-level transformer trained from scratch" },
        { name: "NumPy", note: "Linear algebra and anomaly detection" },
        { name: "NudeNet", note: "ONNX image moderation" },
        { name: "OpenCV", note: "Image processing and face analysis" },
        { name: "faster-whisper", note: "Automatic captions for videos and lives" },
        { name: "GFPGAN / Real-ESRGAN", note: "Face restoration and super-resolution" },
        { name: "FastAPI + Uvicorn", note: "The service exposes HTTP and WebSocket" },
      ],
    },
    {
      title: "Real-time",
      items: [
        { name: "WebSocket", note: "Ratchet + ReactPHP — chat and typing indicators" },
        { name: "WebRTC", note: "Live streaming with its own signalling" },
        { name: "coturn", note: "TURN server for NAT traversal" },
      ],
    },
    {
      title: "DevOps & infrastructure",
      items: [
        { name: "Docker" },
        { name: "Linux" },
        { name: "Nginx" },
        { name: "Caddy", note: "Reverse proxy with automatic HTTPS" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Vercel", note: "Deploying this site" },
      ],
    },
    {
      title: "Design & tools",
      items: [
        { name: "Figma" },
        { name: "VS Code" },
        { name: "Postman" },
      ],
    },
    {
      title: "Quality",
      items: [
        { name: "PHPUnit", note: "Unit and integration tests" },
        { name: "PHP-CS-Fixer", note: "PSR-12" },
        { name: "ESLint" },
      ],
    },
  ];

  return locale === "pt" ? pt : en;
}
