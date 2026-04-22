# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign GabayCo landing page with new logo format, services grid, individual service carousels with alternating themes, content pillars section, updated bio, and new CTA.

**Architecture:** Data-driven approach — all content lives in `constants.ts`, components consume typed data. Three new components (ServicesGrid, ContentPillars, ServiceCarousel) plus edits to Hero, AboutMe→QuemSouEu, CTASection, and page.tsx. Carousel uses Framer Motion drag gestures (no external library).

**Tech Stack:** Next.js 16, React 19, Framer Motion 12, Tailwind CSS v4

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/lib/constants.ts` | Modify | Add carousel data types, service carousel content, content pillars, updated bio/CTA text |
| `src/components/Hero.tsx` | Modify | New logo format + new hero phrase |
| `src/components/ServicesGrid.tsx` | Create | "Nossos Serviços" section — photo bg, overlay, grid 2x3 |
| `src/components/ServiceCarousel.tsx` | Create | Reusable carousel — peek cards, dots/arrows, swipe, themed |
| `src/components/ContentPillars.tsx` | Create | "Como Pensamos o Conteúdo" — 3 numbered pillar cards |
| `src/components/AboutMe.tsx` | Modify | Update content (title "Quem sou eu", new bio text from constants) |
| `src/components/CTASection.tsx` | Modify | New copy text |
| `src/app/page.tsx` | Modify | New section order |

---

### Task 1: Update constants.ts — Add carousel data and content pillars

**Files:**
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Add CarouselCard and CarouselService interfaces**

Add these new types after the existing `ServiceData` interface (around line 36):

```typescript
export interface CarouselCard {
  tag: string;
  title: string;
  text: string;
}

export interface CarouselServiceData {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  theme: "dark" | "cream";
  cards: CarouselCard[];
}
```

- [ ] **Step 2: Add CAROUSEL_SERVICES array**

Add after the `DIRECIONE` constant (around line 288). This replaces the old SERVICES array for the carousel display while keeping SERVICES for the grid:

```typescript
export const CAROUSEL_SERVICES: CarouselServiceData[] = [
  {
    id: "planejamento",
    step: "01",
    title: "Planejamento Estratégico",
    subtitle: "Estratégia + roteiros + calendário editorial mensal",
    theme: "dark",
    cards: [
      {
        tag: "DESTAQUE",
        title: "Você precisa de direção",
        text: "Você não precisa de mais ideias, precisa de direção. O planejamento estratégico foi pensado para auxiliar na criação de conteúdo, com o objetivo de atrair, conectar e gerar venda, garantindo a clareza do que fazer e por quê. É focado no seu posicionamento, conhecimento de mercado e a venda direta e indireta do seu serviço, gerando identificação com o público e reforçando o seu devido valor.",
      },
      {
        tag: "O QUE VOCÊ RECEBE",
        title: "Entregáveis",
        text: "Planejamento mensal, estratégia de conteúdo, roteiros e legendas, calendário editorial, direcionamento estratégico e acompanhamento mensal.",
      },
      {
        tag: "COMO FUNCIONA",
        title: "Processo",
        text: "A cada ciclo, analisamos sua comunicação, posicionamento e objetivos. A partir disso, você recebe um plano claro, com conteúdos estruturados para ter objetivo, fazer sentido na sua marca e ser fáceis de executar no seu dia a dia.",
      },
      {
        tag: "RESULTADO",
        title: "O que muda",
        text: "Não é uma consultoria cheia de teoria, aqui você sai com um plano mensal de conteúdos pronto para executar com consistência, conteúdos estruturados, comunicação alinhada ao posicionamento e menos improviso.",
      },
    ],
  },
  {
    id: "gestao",
    step: "02",
    title: "Gestão de Redes Sociais",
    subtitle: "Tudo do Planejamento + edição + design + agendamento",
    theme: "cream",
    cards: [
      {
        tag: "DESTAQUE",
        title: "Gestão estratégica completa",
        text: "Uma gestão estratégica completa da sua comunicação digital, que une planejamento, criação e execução, cuidando de todo o processo, do direcionamento à publicação, com foco no seu posicionamento, no entendimento do seu mercado e na geração de vendas diretas e indiretas, fortalecendo sua marca, criando conexão com o público e aumentando o valor percebido do seu serviço.",
      },
      {
        tag: "O QUE VOCÊ RECEBE",
        title: "Entregáveis",
        text: "Planejamento mensal, estratégia de conteúdo, roteiros e legendas, calendário editorial, direcionamento estratégico, edição de vídeos, design de artes, agendamento e acompanhamento mensal.",
      },
      {
        tag: "COMO FUNCIONA",
        title: "Processo",
        text: "Aqui, você não precisa mais se preocupar em produzir, editar ou agendar seus conteúdos. Além da direção estratégica, você conta com a execução completa da sua comunicação.",
      },
      {
        tag: "RESULTADO",
        title: "O que muda",
        text: "A ideia é facilitar sua rotina: você foca no seu negócio, enquanto a comunicação é executada com estratégia. O objetivo não é volume ou viralização, é construir percepção, coerência e valor ao longo do tempo.",
      },
    ],
  },
  {
    id: "direcione",
    step: "03",
    title: "Método Direcione",
    subtitle: "Clareza estratégica para alinhar sua marca, sua comunicação e o real nível do seu negócio",
    theme: "dark",
    cards: [
      {
        tag: "DESTAQUE",
        title: "Começa no seu negócio",
        text: "O Direcione não começa no Instagram. Ele começa no seu negócio. É um processo estratégico criado para organizar a base da sua empresa, identificar o problema real e te dar direção clara para crescer com consistência.",
      },
      {
        tag: "COMO FUNCIONA",
        title: "30 dias, 4 fases",
        text: "Fase 1: Leitura do Negócio — entender a empresa por dentro. Fase 2: Pesquisa Orientada — percepção externa. Fase 3: Diagnóstico Estratégico — identificar erros e diferenciais. Fase 4: Direção e Plano de Ação — posicionamento claro e prioridades.",
      },
      {
        tag: "O QUE VOCÊ RECEBE",
        title: "Entregáveis",
        text: "Diagnóstico Estratégico Completo, Lista de Prioridades, Narrativa de Marca e Guia Estratégico de Marca e Comunicação.",
      },
      {
        tag: "RESULTADO",
        title: "O que muda",
        text: "Isso não é uma consultoria rasa. E também não é sobre \"melhorar seu Instagram\". É sobre organizar a base do seu negócio para que tudo o resto funcione. Se você sente que sua empresa está travada, mas sabe que entrega mais do que consegue mostrar, o Direcione é o próximo passo.",
      },
    ],
  },
  {
    id: "perfil-do-zero",
    step: "04",
    title: "Perfil do Zero: Estrutura Completa",
    subtitle: "Ajuste de perfil e alinhamento de conteúdos iniciais",
    theme: "cream",
    cards: [
      {
        tag: "DESTAQUE",
        title: "A base da sua presença digital",
        text: "Aqui você encontra a base da sua presença digital, com um plano personalizado que organiza seu perfil, define seu conteúdo e ajusta o necessário, garantindo que qualquer pessoa que entre no seu perfil entenda: o que você faz, para quem você faz e por que escolher você.",
      },
      {
        tag: "COMO FUNCIONA",
        title: "Processo",
        text: "O processo começa com uma leitura estratégica do seu negócio, momento e objetivo. A partir disso, organizamos sua presença digital para que seu perfil tenha estrutura, comunique com clareza e esteja pronto para crescer com consistência.",
      },
      {
        tag: "O QUE VOCÊ RECEBE",
        title: "Entregáveis",
        text: "Um encontro online + documento de construção inicial personalizado + suporte no WhatsApp por 07 dias.",
      },
      {
        tag: "RESULTADO",
        title: "O que muda",
        text: "Você constrói um perfil estratégico, com conteúdos alinhados ao seu posicionamento através de uma comunicação com intenção desde o início e isso muda completamente a forma como você cresce e se posiciona.",
      },
    ],
  },
  {
    id: "rotina-em-conteudo",
    step: "05",
    title: "Transforme sua Rotina em Conteúdo",
    subtitle: "Workshop de 1h + GPT personalizado",
    theme: "dark",
    cards: [
      {
        tag: "DESTAQUE",
        title: "O problema não é falta de conteúdo",
        text: "É um encontro estratégico e prático para te ensinar a transformar sua rotina, suas experiências e as dúvidas dos seus clientes em conteúdo para as redes sociais. Aqui você não recebe um planejamento complexo, você aprende a pensar conteúdo no dia a dia, sem travar.",
      },
      {
        tag: "O QUE VOCÊ APRENDE",
        title: "Conteúdo do workshop",
        text: "Como identificar conteúdo no dia a dia, como transformar situações em conteúdo, como pensar conteúdo sem travar e criação de ideias na prática — construímos juntos ideias de posts e temas para você já começar.",
      },
      {
        tag: "O QUE VOCÊ RECEBE",
        title: "Entregáveis",
        text: "Além do encontro, você recebe um sistema prático (GPT personalizado) que te ajuda a transformar sua rotina em conteúdo sempre que precisar.",
      },
      {
        tag: "RESULTADO",
        title: "O que muda",
        text: "Essa não é uma aula sobre redes sociais. É um encontro para mudar a forma como você pensa conteúdo. Quem documenta, nunca fica sem conteúdo e quem observa o dia a dia, sempre tem o que comunicar.",
      },
    ],
  },
];
```

- [ ] **Step 3: Add CONTENT_PILLARS and SERVICES_GRID constants**

Add after `CAROUSEL_SERVICES`:

```typescript
export interface ContentPillar {
  number: string;
  title: string;
  description: string;
}

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    number: "01",
    title: "Estratégia",
    description: "Nada é por acaso: cada conteúdo tem um objetivo claro e direcionado para posicionar, engajar e gerar resultado.",
  },
  {
    number: "02",
    title: "Posicionamento",
    description: "Construímos conteúdos que revelam suas maiores forças, traduzem o que você acredita e posicionam sua marca com clareza, consistência e autoridade.",
  },
  {
    number: "03",
    title: "Diferenciação",
    description: "Não é sobre atrair qualquer pessoa, é sobre atrair as pessoas certas, aquelas que se conectam com o que você acredita e reconhecem o seu valor.",
  },
];

export const SERVICES_GRID = [
  { label: "Planejamento Estratégico", targetId: "planejamento" },
  { label: "Gestão de Redes Sociais", targetId: "gestao" },
  { label: "Método Direcione", targetId: "direcione" },
  { label: "Suporte Criativo", targetId: null },
  { label: "Transforme sua Rotina em Conteúdo", targetId: "rotina-em-conteudo" },
  { label: "Perfil do Zero: Estrutura Completa", targetId: "perfil-do-zero" },
];

export const HERO_PHRASE = "Estratégia e direção para negócios que precisam de comunicação além das redes sociais. Aqui pensamos na sua empresa antes de pensar em conteúdo.";

export const CTA_TITLE = "Pronta para transformar a sua comunicação em uma ferramenta de vendas?";
export const CTA_SUBTITLE = "Fale comigo e descubra qual solução faz sentido pro seu momento.";
```

- [ ] **Step 4: Verify the file has no syntax errors**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit src/lib/constants.ts 2>&1 | head -20`

Expected: No errors (or only warnings unrelated to constants.ts)

- [ ] **Step 5: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: add carousel, pillars, and grid data to constants"
```

---

### Task 2: Update Hero.tsx — New logo format and phrase

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Update Hero component with new logo and phrase**

Replace the entire Hero content. Key changes:
- Logo: `Gabriele.` in Playfair Bold + pipe `|` + stacked `COMUNICAÇÃO` / `E MARKETING`
- New hero phrase from `HERO_PHRASE` constant
- Keep parallax photo and WhatsApp button

```tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { HERO_PHRASE } from "@/lib/constants";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="bg-brand-cream min-h-screen flex items-center relative overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark-brown">
              Gabriele.
            </h1>
            <span className="font-body font-light text-5xl md:text-6xl text-brand-taupe leading-none">
              |
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-body font-light text-[10px] uppercase tracking-[0.2em] text-brand-warm-brown">
                Comunicação
              </span>
              <span className="font-body font-light text-[10px] uppercase tracking-[0.2em] text-brand-warm-brown">
                e Marketing
              </span>
            </div>
          </div>

          <p className="text-brand-warm-brown text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            {HERO_PHRASE}
          </p>
          <WhatsAppButton>Fale comigo no WhatsApp</WhatsAppButton>
        </motion.div>

        {/* Photo with parallax */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            style={{ y }}
            className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/photos/IMG_2605 Large.jpeg"
              alt="Gabriele Ayres — Comunicação e Marketing"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -20`

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: update Hero with new logo format and phrase"
```

---

### Task 3: Create ServicesGrid.tsx — "Nossos Serviços" section

**Files:**
- Create: `src/components/ServicesGrid.tsx`

- [ ] **Step 1: Create the ServicesGrid component**

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES_GRID } from "@/lib/constants";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  const handleClick = (targetId: string | null) => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background photo */}
      <Image
        src="/photos/IMG_2538 Large.jpeg"
        alt="Gabriele Ayres"
        fill
        className="object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col justify-center min-h-[600px] md:min-h-[700px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.08em] text-brand-cream/80">
            Meus
          </p>
          <h2 className="font-body text-3xl md:text-4xl font-bold uppercase tracking-[0.08em] text-brand-cream mb-2">
            Serviços
          </h2>
          {/* Mini logo */}
          <div className="flex items-center gap-2 mb-10">
            <span className="font-heading font-bold text-xs text-brand-cream">
              Gabriele.
            </span>
            <span className="font-body font-light text-base text-brand-warm-gray">
              |
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-body font-light text-[7px] uppercase tracking-[0.15em] text-brand-warm-gray">
                Comunicação
              </span>
              <span className="font-body font-light text-[7px] uppercase tracking-[0.15em] text-brand-warm-gray">
                e Marketing
              </span>
            </div>
          </div>
        </motion.div>

        {/* Services grid 2x3 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES_GRID.map((service) => (
            <motion.button
              key={service.label}
              variants={fadeUp}
              onClick={() => handleClick(service.targetId)}
              className={`bg-white text-brand-dark-brown font-body text-xs font-semibold uppercase tracking-[0.06em] text-center py-3.5 px-5 rounded transition-transform duration-200 hover:scale-[1.03] ${
                service.targetId ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {service.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -20`

- [ ] **Step 3: Commit**

```bash
git add src/components/ServicesGrid.tsx
git commit -m "feat: add ServicesGrid section with 2x3 clickable grid"
```

---

### Task 4: Create ServiceCarousel.tsx — Reusable carousel component

**Files:**
- Create: `src/components/ServiceCarousel.tsx`

- [ ] **Step 1: Create the ServiceCarousel component**

This is the most complex component — peek cards with swipe, dots, arrows, and dual theming.

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CarouselServiceData } from "@/lib/constants";
import { WHATSAPP_URL } from "@/lib/constants";

interface ServiceCarouselProps {
  service: CarouselServiceData;
}

const themes = {
  dark: {
    bg: "bg-brand-dark-brown",
    number: "text-brand-warm-gray/40",
    name: "text-brand-cream",
    subtitle: "text-brand-taupe",
    cardBg: "bg-white/[0.06] border border-white/10",
    tagBg: "bg-brand-sage/35 text-brand-cream",
    cardTitle: "text-brand-cream",
    cardText: "text-brand-warm-gray",
    arrow: "text-brand-warm-gray",
    dotInactive: "bg-brand-warm-gray/30",
    dotActive: "bg-brand-sage",
    ctaBg: "bg-brand-sage text-white",
  },
  cream: {
    bg: "bg-brand-cream",
    number: "text-brand-dark-brown/15",
    name: "text-brand-dark-brown",
    subtitle: "text-brand-warm-brown",
    cardBg: "bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
    tagBg: "bg-brand-sage/10 text-brand-sage",
    cardTitle: "text-brand-dark-brown",
    cardText: "text-brand-warm-brown",
    arrow: "text-brand-warm-brown",
    dotInactive: "bg-brand-dark-brown/15",
    dotActive: "bg-brand-sage",
    ctaBg: "bg-brand-sage text-white",
  },
};

export default function ServiceCarousel({ service }: ServiceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = themes[service.theme];
  const cards = service.cards;
  const isLast = service.cards[activeIndex]?.tag === "RESULTADO";

  const goTo = (index: number) => {
    if (index >= 0 && index < cards.length) setActiveIndex(index);
  };

  return (
    <section id={service.id} className={`${theme.bg} relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-8">
          <p className={`font-heading text-5xl md:text-6xl font-normal ${theme.number}`}>
            {service.step}.
          </p>
          <h2 className={`font-body text-sm md:text-base font-semibold uppercase tracking-[0.1em] mt-1 ${theme.name}`}>
            {service.title}
          </h2>
          <p className={`font-body text-xs mt-1 ${theme.subtitle}`}>
            {service.subtitle}
          </p>
        </div>

        {/* Cards — peek layout */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{ x: `${-activeIndex * 75}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: -(cards.length - 1) * 300, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_e, info) => {
              if (info.offset.x < -50 && activeIndex < cards.length - 1) {
                goTo(activeIndex + 1);
              } else if (info.offset.x > 50 && activeIndex > 0) {
                goTo(activeIndex - 1);
              }
            }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className={`min-w-[72%] md:min-w-[70%] rounded-2xl p-5 md:p-6 ${theme.cardBg} transition-opacity duration-300 ${
                  i === activeIndex ? "opacity-100" : "opacity-35"
                }`}
              >
                <span
                  className={`inline-block font-body text-[8px] uppercase tracking-[0.12em] px-2.5 py-1 rounded ${theme.tagBg} mb-3`}
                >
                  {card.tag}
                </span>
                <h3 className={`font-heading text-base md:text-lg mb-2 ${theme.cardTitle}`}>
                  {card.title}
                </h3>
                <p className={`font-body text-[11px] md:text-xs leading-relaxed ${theme.cardText}`}>
                  {card.text}
                </p>
                {/* WhatsApp CTA on last card */}
                {isLast && i === activeIndex && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-4 px-6 py-3 rounded-lg font-body text-xs font-medium uppercase tracking-widest transition-transform duration-200 hover:scale-105 ${theme.ctaBg}`}
                  >
                    Quero saber mais
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation: arrows + dots */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={`font-body text-xs flex items-center gap-1 transition-opacity ${theme.arrow} ${
              activeIndex === 0 ? "opacity-25 cursor-default" : "cursor-pointer hover:opacity-80"
            }`}
          >
            ← Anterior
          </button>

          <div className="flex items-center gap-1.5">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[7px] rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? `w-[22px] ${theme.dotActive}`
                    : `w-[7px] ${theme.dotInactive}`
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === cards.length - 1}
            className={`font-body text-xs flex items-center gap-1 transition-opacity ${theme.arrow} ${
              activeIndex === cards.length - 1 ? "opacity-25 cursor-default" : "cursor-pointer hover:opacity-80"
            }`}
          >
            Próximo →
          </button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -20`

- [ ] **Step 3: Commit**

```bash
git add src/components/ServiceCarousel.tsx
git commit -m "feat: add ServiceCarousel with peek cards, swipe, dots/arrows, dual theme"
```

---

### Task 5: Create ContentPillars.tsx — "Como Pensamos o Conteúdo" section

**Files:**
- Create: `src/components/ContentPillars.tsx`

- [ ] **Step 1: Create the ContentPillars component**

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTENT_PILLARS } from "@/lib/constants";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ContentPillars() {
  return (
    <section className="relative w-full min-h-[550px] md:min-h-[650px] overflow-hidden">
      {/* Background photo */}
      <Image
        src="/photos/IMG_2742 Large.jpeg"
        alt="Gabriele Ayres"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col justify-between min-h-[550px] md:min-h-[650px]">
        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.08em] text-brand-cream/80">
            Como pensamos
          </p>
          <h2 className="font-body text-2xl md:text-3xl font-bold uppercase tracking-[0.08em] text-brand-cream">
            Conteúdo
          </h2>
          {/* Mini logo */}
          <div className="flex items-center gap-2 mt-2">
            <span className="font-heading font-bold text-xs text-brand-cream">
              Gabriele.
            </span>
            <span className="font-body font-light text-base text-brand-warm-gray">
              |
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-body font-light text-[7px] uppercase tracking-[0.15em] text-brand-warm-gray">
                Comunicação
              </span>
              <span className="font-body font-light text-[7px] uppercase tracking-[0.15em] text-brand-warm-gray">
                e Marketing
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CONTENT_PILLARS.map((pillar) => (
            <motion.div key={pillar.number} variants={fadeUp}>
              {/* Decorative number */}
              <p className="font-heading text-3xl text-brand-cream/30 mb-1">
                {pillar.number}
              </p>
              {/* Pill title */}
              <div className="inline-block bg-brand-cream text-brand-dark-brown font-body text-[11px] font-semibold uppercase tracking-[0.08em] px-3 py-1.5 rounded mb-2">
                {pillar.title}
              </div>
              {/* Description */}
              <p className="font-body text-[10px] md:text-[11px] text-brand-cream leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -20`

- [ ] **Step 3: Commit**

```bash
git add src/components/ContentPillars.tsx
git commit -m "feat: add ContentPillars section with numbered pillar cards"
```

---

### Task 6: Update AboutMe.tsx — New "Quem Sou Eu" content

**Files:**
- Modify: `src/components/AboutMe.tsx`

- [ ] **Step 1: Update title and subtitle in AboutMe**

Change the subtitle text from "Sobre mim" to "Quem sou eu" and the heading from "Quem é Gabriele" to "Quem Sou Eu". The BIO_TEXT constant already has the correct content (it was updated previously), so the paragraph rendering stays the same.

In `src/components/AboutMe.tsx`, replace:
```tsx
          <p className="text-brand-sage text-xs tracking-[0.25em] uppercase mb-3">
            Sobre mim
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Quem é Gabriele
          </h2>
```

With:
```tsx
          <p className="text-brand-sage text-xs tracking-[0.25em] uppercase mb-3">
            Quem sou eu
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Quem Sou Eu
          </h2>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/AboutMe.tsx
git commit -m "feat: update AboutMe to Quem Sou Eu section"
```

---

### Task 7: Update CTASection.tsx — New copy

**Files:**
- Modify: `src/components/CTASection.tsx`

- [ ] **Step 1: Import and use new CTA constants**

Replace the hardcoded text with the new constants. In `src/components/CTASection.tsx`, add the import:

```tsx
import { CTA_TITLE, CTA_SUBTITLE } from "@/lib/constants";
```

Then replace the h2 and p content:

Replace:
```tsx
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Pronta para dar direção à sua comunicação?
        </h2>
        <p className="text-brand-light-gray text-lg mb-10">
          Fale comigo e descubra qual solução faz sentido pro seu momento.
        </p>
```

With:
```tsx
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {CTA_TITLE}
        </h2>
        <p className="text-brand-light-gray text-lg mb-10">
          {CTA_SUBTITLE}
        </p>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CTASection.tsx
git commit -m "feat: update CTA section with new copy"
```

---

### Task 8: Update page.tsx — New section order

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite page.tsx with the new section structure**

```tsx
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceCarousel from "@/components/ServiceCarousel";
import ContentPillars from "@/components/ContentPillars";
import AboutMe from "@/components/AboutMe";
import PainPoints from "@/components/PainPoints";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { CAROUSEL_SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      {CAROUSEL_SERVICES.map((service) => (
        <ServiceCarousel key={service.id} service={service} />
      ))}
      <ContentPillars />
      <AboutMe />
      <PainPoints />
      <Marquee />
      <CTASection />
      <Footer />
    </main>
  );
}
```

Note: PainPoints and Marquee are kept after the new sections per user request ("seções que não citei pode manter como está"). ValueLadder, ProductSection, and DirecioneSection are removed since they're replaced by the new carousels.

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -20`

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: restructure page with new section order"
```

---

### Task 9: Visual verification and polish

**Files:**
- Possibly touch: any of the above files for adjustments

- [ ] **Step 1: Run the dev server**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npm run dev`

- [ ] **Step 2: Open in browser and verify all sections**

Navigate to `http://localhost:3000` and verify:
1. Hero shows new logo format (Gabriele. | Comunicação e Marketing) and new phrase
2. ServicesGrid shows photo background, overlay, title, mini logo, 6 white cards in 2x3 grid
3. 5 service carousels render with correct alternating themes (dark/cream/dark/cream/dark)
4. Each carousel has working swipe, dots, and arrows
5. ContentPillars shows photo background, 3 numbered pillars with cream pills
6. AboutMe shows "Quem Sou Eu" with updated text
7. PainPoints and Marquee appear after the new sections
8. CTA shows new copy with WhatsApp button
9. All sections are responsive (check mobile viewport too)
10. Cards in ServicesGrid scroll to the correct carousel section

- [ ] **Step 3: Fix any visual issues found**

Apply tweaks based on browser verification.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: visual polish and responsive adjustments"
```
