"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
            &larr; Anterior
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
            Pr&oacute;ximo &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
