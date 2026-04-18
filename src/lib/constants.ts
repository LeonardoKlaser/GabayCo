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
  id: string;
  title: string;
  subtitle: string;
  hook: string;
  description: string;
  audience: string;
  howItWorks: string;
  deliverables: string[];
  deliverablesLabel: string;
  notIncluded?: string;
  bonus?: { title: string; description: string };
  results: string[];
  format?: string[];
  closing: string;
  bgClass: string;
  accentBg: string;
  textClass: string;
  badgeClass: string;
}

export const SERVICES: ServiceData[] = [
  {
    step: "01",
    id: "rotina-em-conteudo",
    title: "Transforme sua Rotina em Conteúdo",
    subtitle: "Workshop de 1h + GPT personalizado",
    hook: "Essa não é uma aula sobre redes sociais. É um encontro para mudar a forma como você pensa conteúdo.",
    description:
      "Você acha que não tem ideias, que precisa seguir trends, mas a realidade é que você ainda não aprendeu a reconhecer um conteúdo. Você vive situações todos os dias, mas não percebe o potencial, não registra e não transforma em conteúdo — e volta sempre para o mesmo lugar: \"o que eu posto hoje?\" e acaba travando, adiando ou simplesmente não conseguindo manter constância.",
    audience:
      "Para quem quer aprender a transformar situações do dia a dia em conteúdos, sem travar e de forma simples e prática.",
    howItWorks:
      "Um encontro online com duração de 1h que irá te ajudar a identificar conteúdos na sua própria rotina, ensinando a transformar situações reais em postagens que convertem, além da construção de ideias de conteúdo aplicáveis.",
    deliverables: [
      "Como identificar conteúdo no dia a dia — através de dúvidas de clientes, erros e aprendizados, bastidores e situações reais",
      "Como transformar situações em conteúdo — lógica simples: o que aconteceu, o que isso revela e o que o público aprende",
      "Como pensar conteúdo sem travar — raciocínio claro para criar conteúdo sem depender de tendência ou inspiração",
      "Criação de ideias na prática — construímos juntos ideias de posts, temas e possíveis conteúdos para você já começar",
    ],
    deliverablesLabel: "O que você vai aprender",
    bonus: {
      title: "Sistema prático (GPT personalizado)",
      description:
        "Te ajuda a estruturar ideias e manter a consistência na criação de conteúdo sempre que precisar.",
    },
    results: [
      "Clareza de como gerar conteúdo no dia a dia",
      "Ideias prontas para postar",
      "Direção prática de conteúdo",
      "Robô treinado adaptado ao seu nicho",
    ],
    closing:
      "Quem documenta, nunca fica sem conteúdo e quem observa o dia a dia, sempre tem o que comunicar.",
    bgClass: "bg-brand-cream",
    accentBg: "bg-brand-sage",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-sage text-white",
  },
  {
    step: "02",
    id: "posicionamento",
    title: "Posicionamento Estratégico do Zero",
    subtitle: "Perfil + bio + conteúdo inicial estruturado",
    hook: "Isso não é só \"arrumar o perfil\". Aqui você sai com uma base estratégica para construir sua presença com intenção.",
    description:
      "O problema de quem está iniciando nas redes sociais não é falta de conteúdo, é não saber como se posicionar e qual caminho seguir. E isso faz com que você poste sem direção, trave na produção ou simplesmente não consiga crescer. Aqui você encontra a base da sua presença digital, com um plano personalizado que organiza seu perfil, define seu conteúdo e ajusta o necessário, garantindo que qualquer pessoa que entre no seu perfil entenda: o que você faz, para quem você faz e por que escolher você.",
    audience:
      "Para quem está começando ou recomeçando e não quer depender de tentativa e erro, nem perder tempo produzindo conteúdo sem direção.",
    howItWorks:
      "O processo começa com uma leitura estratégica do seu negócio, momento e objetivo. A partir disso, organizamos sua presença digital para que seu perfil tenha estrutura, comunique com clareza e esteja pronto para crescer com consistência.",
    deliverables: [
      "Estrutura estratégica do perfil",
      "Ajuste de bio e destaques",
      "Planejamento e roteiro de conteúdo inicial",
      "Direcionamento de produção",
      "Clareza de posicionamento",
    ],
    deliverablesLabel: "O que você recebe",
    notIncluded: "Design, edição, captação ou gestão de redes sociais (podem ser contratados à parte).",
    format: [
      "1 reunião de briefing",
      "1 reunião de apresentação estratégica",
      "Suporte via WhatsApp por 30 dias",
    ],
    results: [
      "Clareza sobre como se posicionar",
      "Perfil organizado e estratégico",
      "Conteúdos com função definida",
      "Mais segurança para produzir",
      "Menos travamento e dúvida",
      "Comunicação com intenção desde o início",
    ],
    closing:
      "Quando existe direção, você não perde tempo ajustando depois.",
    bgClass: "bg-white",
    accentBg: "bg-brand-sage",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-sage text-white",
  },
  {
    step: "03",
    id: "planejamento",
    title: "Planejamento Estratégico",
    subtitle: "Estratégia + roteiros + calendário editorial mensal",
    hook: "Você não precisa de mais ideias, precisa de direção.",
    description:
      "O planejamento estratégico foi pensado para auxiliar na criação de conteúdo, com o objetivo de atrair, conectar e gerar venda — garantindo a clareza do que fazer e por quê. Não é uma consultoria cheia de teoria, aqui você sai com um plano mensal pronto para executar.",
    audience:
      "Para quem quer produzir o próprio conteúdo, mas não aceita mais fazer isso sem estratégia.",
    howItWorks:
      "A cada ciclo, analisamos sua comunicação, posicionamento e objetivos. A partir disso, você recebe um plano claro, com conteúdos estruturados para ter objetivo, fazer sentido na sua marca e ser fáceis de executar no seu dia a dia.",
    deliverables: [
      "Planejamento mensal",
      "Estratégia de conteúdo",
      "Roteiros e legendas",
      "Calendário editorial",
      "Direcionamento estratégico",
      "Acompanhamento mensal",
    ],
    deliverablesLabel: "O que você recebe",
    notIncluded: "Design, edição ou agendamento.",
    results: [
      "Conteúdo com intenção",
      "Comunicação alinhada ao posicionamento",
      "Mais consistência",
      "Menos improviso",
      "Mais segurança para executar",
    ],
    closing:
      "Esse é o tipo de estrutura que muda completamente a forma como você comunica e os resultados que você gera com isso.",
    bgClass: "bg-brand-cream",
    accentBg: "bg-brand-sage",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-sage text-white",
  },
  {
    step: "04",
    id: "gestao",
    title: "Gestão de Redes Sociais",
    subtitle: "Tudo do Planejamento + edição + design + agendamento",
    hook: "Essa é a evolução do planejamento.",
    description:
      "Aqui, você não precisa mais se preocupar em produzir, editar ou agendar, além da direção estratégica, você conta com a execução completa da sua comunicação. É um serviço pensado para gerar valor e transformar o digital em uma ferramenta real de vendas. A ideia é facilitar sua rotina: você foca no seu negócio, enquanto a comunicação é executada com estratégia.",
    audience:
      "Para quem quer delegar a comunicação com segurança, mantendo estratégia, consistência e posicionamento.",
    howItWorks:
      "Mensalmente, analisamos sua comunicação, posicionamento e objetivos. A partir disso, estruturamos o plano de conteúdo e orientamos suas captações. Depois, cuidamos da edição, organização e agendamento dos conteúdos, facilitando sua constância e reduzindo esforço operacional.",
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
    deliverablesLabel: "O que você recebe",
    results: [
      "Comunicação com direção clara",
      "Conteúdos com intenção estratégica",
      "Posicionamento coerente com o negócio",
      "Aumento de valor percebido",
      "Mais consistência",
      "Menos improviso e retrabalho",
      "Mais segurança nas decisões de marketing",
    ],
    format: ["Contratos mínimos de 3 meses"],
    closing:
      "Gestão estratégica é sobre construir percepção, coerência e valor ao longo do tempo.",
    bgClass: "bg-brand-light-gray",
    accentBg: "bg-brand-dark-brown",
    textClass: "text-brand-black",
    badgeClass: "bg-brand-dark-brown text-white",
  },
];

export interface DirecionePhase {
  number: number;
  title: string;
  description: string;
}

export interface DirecioneData {
  step: string;
  id: string;
  title: string;
  subtitle: string;
  hook: string;
  description: string;
  trustText: string;
  audience: string[];
  phases: DirecionePhase[];
  deliverables: { title: string; description: string }[];
  closing: string;
  finalQuestion: string;
  finalCta: string;
}

export const DIRECIONE: DirecioneData = {
  step: "05",
  id: "direcione",
  title: "Método Direcione",
  subtitle: "30 dias de processo estratégico completo",
  hook: "O problema não está no seu marketing. Está no desalinhamento do seu negócio.",
  description:
    "Sua empresa não cresce porque falta marketing. Ela não cresce porque está desalinhada — e você ainda está tentando resolver isso no lugar errado. Você posta, investe, tenta melhorar sua presença… mas nada sustenta. E isso acontece porque existe um desalinhamento entre o que você entrega, o que o cliente percebe e o que a sua marca comunica.",
  trustText:
    "Ao longo de mais de 13 anos atuando com empresas de diferentes segmentos, existe um padrão claro: empresas que não crescem não têm, necessariamente, um problema de marketing. Elas têm um problema de clareza, posicionamento e estrutura.",
  audience: [
    "Já têm um negócio rodando",
    "Sabem que entregam mais do que conseguem comunicar",
    "Sentem que algo está desalinhado, mas não conseguem identificar exatamente o quê",
    "Já investiram em marketing, mas sem consistência de resultado",
    "Querem parar de agir no achismo e tomar decisões estratégicas",
  ],
  phases: [
    {
      number: 1,
      title: "Leitura do Negócio",
      description:
        "Entender a empresa por dentro com reunião inicial e análise da visão do proprietário.",
    },
    {
      number: 2,
      title: "Pesquisa Orientada",
      description:
        "Entender percepção externa com pesquisa de clientes, equipe, análise de experiência e leitura da comunicação atual.",
    },
    {
      number: 3,
      title: "Diagnóstico Estratégico",
      description:
        "Analisamos os dados, identificamos os erros, gargalos e também os diferenciais que não estão sendo explorados.",
    },
    {
      number: 4,
      title: "Direção e Plano de Ação",
      description:
        "Posicionamento claro, problema central identificado, prioridades definidas, direcionamento da comunicação e segurança para tomar decisões estratégicas.",
    },
  ],
  deliverables: [
    {
      title: "Diagnóstico Estratégico Completo",
      description:
        "Clareza sobre o que fortalece sua marca, o que enfraquece a percepção e onde estão os gargalos.",
    },
    {
      title: "Lista de Prioridades",
      description:
        "O que ajustar agora, o que reorganizar e o que eliminar.",
    },
    {
      title: "Narrativa de Marca",
      description:
        "O que comunicar, como se posicionar e qual discurso sustenta valor.",
    },
    {
      title: "Guia Estratégico de Marca e Comunicação",
      description:
        "Um documento que orienta suas decisões, sua comunicação e seu crescimento.",
    },
  ],
  closing:
    "Isso não é uma consultoria rasa. E também não é sobre \"melhorar seu Instagram\". É sobre organizar a base do seu negócio para que tudo o resto funcione.",
  finalQuestion: "Qual você quer ser?",
  finalCta:
    "Se você sente que sua empresa está travada, mas sabe que entrega mais do que consegue mostrar, o Direcione é o próximo passo.",
};

export const BIO_TEXT = `Há mais de 13 anos, eu ajudo empresas e profissionais a construírem uma comunicação com direção, clareza e estratégia.

Meu trabalho não começa no Instagram — começa no entendimento do seu negócio, do seu momento e do que faz sentido para o seu crescimento.

Já atendi dezenas de empresas de diferentes segmentos e percebi um padrão: quem cresce com consistência não é quem posta mais, é quem comunica com intenção.

É isso que eu construo com cada cliente.`;

export const MARQUEE_PHRASES = [
  "ESTRATÉGIA",
  "DIREÇÃO",
  "PRESENÇA",
  "CONTEÚDO",
  "POSICIONAMENTO",
  "INTENÇÃO",
  "CLAREZA",
  "CONSISTÊNCIA",
];
