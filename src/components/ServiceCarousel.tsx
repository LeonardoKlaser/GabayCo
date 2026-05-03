"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CarouselServiceData } from "@/lib/constants";
import { WHATSAPP_URL } from "@/lib/constants";

interface ServiceCarouselProps {
  service: CarouselServiceData;
}

const themes = {
  dark: {
    bg: "bg-brand-dark-navy",
    number: "text-brand-blue-gray/40",
    name: "text-brand-ice-white",
    subtitle: "text-brand-steel-blue",
    cardBg: "bg-white/[0.06] border border-white/10",
    tagBg: "bg-brand-light-blue/35 text-brand-ice-white",
    cardTitle: "text-brand-ice-white",
    cardText: "text-brand-blue-gray",
    arrow: "text-brand-blue-gray",
    dotInactive: "bg-brand-blue-gray/30",
    dotActive: "bg-brand-light-blue",
    ctaBg: "bg-brand-light-blue text-white",
  },
  cream: {
    bg: "bg-brand-ice-white",
    number: "text-brand-dark-navy/15",
    name: "text-brand-dark-navy",
    subtitle: "text-brand-medium-navy",
    cardBg: "bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
    tagBg: "bg-brand-light-blue/10 text-brand-light-blue",
    cardTitle: "text-brand-dark-navy",
    cardText: "text-brand-medium-navy",
    arrow: "text-brand-medium-navy",
    dotInactive: "bg-brand-dark-navy/15",
    dotActive: "bg-brand-light-blue",
    ctaBg: "bg-brand-light-blue text-white",
  },
};

const CARD_WIDTH_PERCENT = 75;
const GAP_REM = 0.75;

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ServiceCarousel({ service }: ServiceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = themes[service.theme];
  const cards = service.cards;
  const isLast = cards[activeIndex]?.tag === "RESULTADO";
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const goTo = (index: number) => {
    if (index >= 0 && index < cards.length) setActiveIndex(index);
  };

  return (
    <section
      id={service.id}
      ref={sectionRef}
      className={`${theme.bg} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Header with entrance animation */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
        >
          <motion.p
            className={`font-heading text-6xl md:text-7xl font-normal ${theme.number}`}
            style={{ y: numberY }}
          >
            {service.step}.
          </motion.p>
          <h2 className={`font-body text-sm md:text-base font-semibold uppercase tracking-[0.1em] mt-1 ${theme.name}`}>
            {service.title}
          </h2>
          <p className={`font-body text-xs md:text-sm mt-1.5 ${theme.subtitle}`}>
            {service.subtitle}
          </p>
        </motion.div>

        {/* Cards — peek layout with proper alignment */}
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex"
            style={{ gap: `${GAP_REM}rem` }}
            animate={{
              x: `calc(-${activeIndex * CARD_WIDTH_PERCENT}% - ${activeIndex * GAP_REM}rem)`,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            drag="x"
            dragConstraints={{ left: -(cards.length - 1) * 300, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_e, info) => {
              if (info.offset.x < -30 && activeIndex < cards.length - 1) {
                goTo(activeIndex + 1);
              } else if (info.offset.x > 30 && activeIndex > 0) {
                goTo(activeIndex - 1);
              }
            }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className={`min-w-[${CARD_WIDTH_PERCENT}%] max-w-[${CARD_WIDTH_PERCENT}%] rounded-2xl p-6 md:p-8 ${theme.cardBg} transition-opacity duration-300 ${
                  i === activeIndex ? "opacity-100" : "opacity-35"
                }`}
                style={{
                  minWidth: `${CARD_WIDTH_PERCENT}%`,
                  maxWidth: `${CARD_WIDTH_PERCENT}%`,
                }}
              >
                <span
                  className={`inline-block font-body text-[9px] uppercase tracking-[0.12em] px-3 py-1.5 rounded ${theme.tagBg} mb-4`}
                >
                  {card.tag}
                </span>
                <h3 className={`font-heading text-lg md:text-xl mb-3 ${theme.cardTitle}`}>
                  {card.title}
                </h3>
                <p className={`font-body text-xs md:text-sm leading-relaxed ${theme.cardText}`}>
                  {card.text}
                </p>
                {/* WhatsApp CTA on last card */}
                {isLast && i === activeIndex && (
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-5 px-7 py-3.5 rounded-lg font-body text-xs font-medium uppercase tracking-widest ${theme.ctaBg}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Quero saber mais
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation: arrows + dots */}
        <motion.div
          className="flex items-center justify-between mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={`font-body text-xs flex items-center gap-1 transition-opacity ${theme.arrow} ${
              activeIndex === 0 ? "opacity-25 cursor-default" : "cursor-pointer hover:opacity-80"
            }`}
          >
            &larr; Anterior
          </button>

          <div className="flex items-center gap-2">
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
        </motion.div>
      </div>
    </section>
  );
}
