export const WHATSAPP_URL = "https://wa.me/5511999999999";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/gabriele",
  tiktok: "https://tiktok.com/@gabriele",
  linkedin: "https://linkedin.com/in/gabriele",
};

export const PAIN_POINTS = [
  "Posta sem estratégia e não sabe por que nada funciona",
  "Atrai o cliente errado e precisa justificar preço",
  "Não tem consistência e vive no improviso",
  "Sente que entrega mais do que consegue comunicar",
];

export interface ServiceData {
  step: string;
  title: string;
  subtitle: string;
  audience: string;
  deliverables: string[];
  bgClass: string;
  textClass: string;
  badgeClass: string;
}

export const SERVICES: ServiceData[] = [
  {
    step: "01",
    title: "Transforme sua Rotina em Conteúdo",
    subtitle: "Workshop de 1h + GPT personalizado",
    audience: "Para quem quer aprender a criar conteúdo sozinho",
    deliverables: [
      "Como identificar conteúdo no dia a dia",
      "Como transformar situações em posts",
      "Como pensar conteúdo sem travar",
      "Criação de ideias na prática",
      "Sistema GPT personalizado para seu nicho",
    ],
    bgClass: "bg-brand-cream",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-sage text-white",
  },
  {
    step: "02",
    title: "Posicionamento Estratégico do Zero",
    subtitle: "Perfil + bio + conteúdo inicial estruturado",
    audience: "Para quem está começando e precisa de base",
    deliverables: [
      "Estrutura estratégica do perfil",
      "Ajuste de bio e destaques",
      "Planejamento e roteiro de conteúdo inicial",
      "Direcionamento de produção",
      "Clareza de posicionamento",
      "Suporte via WhatsApp por 30 dias",
    ],
    bgClass: "bg-brand-cream",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-sage text-white",
  },
  {
    step: "03",
    title: "Planejamento Estratégico",
    subtitle: "Estratégia + roteiros + calendário editorial mensal",
    audience: "Para quem quer direção mas executa sozinho",
    deliverables: [
      "Planejamento mensal",
      "Estratégia de conteúdo",
      "Roteiros e legendas",
      "Calendário editorial",
      "Direcionamento estratégico",
      "Acompanhamento mensal",
    ],
    bgClass: "bg-brand-light-gray",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-sage text-white",
  },
  {
    step: "04",
    title: "Gestão de Redes Sociais",
    subtitle: "Tudo do Planejamento + edição + design + agendamento",
    audience: "Para quem quer delegar a comunicação completa",
    deliverables: [
      "Planejamento mensal",
      "Estratégia de conteúdo",
      "Roteiros e legendas",
      "Calendário editorial",
      "Direcionamento estratégico",
      "Edição de vídeos",
      "Design de artes",
      "Agendamento",
      "Acompanhamento mensal",
    ],
    bgClass: "bg-brand-warm-gray",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-dark-brown text-white",
  },
  {
    step: "05",
    title: "Método Direcione",
    subtitle: "30 dias de processo estratégico completo",
    audience: "Para empresas que precisam alinhar o negócio antes do marketing",
    deliverables: [
      "Diagnóstico Estratégico Completo",
      "Lista de Prioridades",
      "Narrativa de Marca",
      "Guia Estratégico de Marca e Comunicação",
      "Posicionamento claro e direção de comunicação",
    ],
    bgClass: "bg-brand-dark-brown",
    textClass: "text-white",
    badgeClass: "bg-brand-sage text-white",
  },
];

export const BIO_TEXT = `Há mais de 13 anos, eu ajudo empresas e profissionais a construírem uma comunicação com direção, clareza e estratégia.

Meu trabalho não começa no Instagram — começa no entendimento do seu negócio, do seu momento e do que faz sentido para o seu crescimento.

Já atendi dezenas de empresas de diferentes segmentos e percebi um padrão: quem cresce com consistência não é quem posta mais, é quem comunica com intenção.

É isso que eu construo com cada cliente.`;
