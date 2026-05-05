"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CarouselServiceData } from "@/lib/constants";
import { WHATSAPP_URL } from "@/lib/constants";
import BrandLogo from "./BrandLogo";

interface ServiceTextFreeProps {
  service: CarouselServiceData;
}

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ServiceTextFree({ service }: ServiceTextFreeProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const cards = service.cards;
  const destaceCard = cards.find((c) => c.tag === "DESTAQUE");
  const recebeCard = cards.find((c) => c.tag === "O QUE VOCÊ RECEBE");
  const funcionaCard = cards.find((c) => c.tag === "COMO FUNCIONA");
  const resultadoCard = cards.find((c) => c.tag === "RESULTADO");

  return (
    <section
      id={service.id}
      ref={sectionRef}
      className="bg-brand-dark-navy relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
        >
          <motion.p
            className="font-heading text-6xl md:text-7xl font-normal text-brand-blue-gray/40"
            style={{ y: numberY }}
          >
            {service.step}.
          </motion.p>
          <h2 className="font-body text-sm md:text-base font-semibold uppercase tracking-[0.1em] mt-1 text-brand-ice-white">
            {service.title}
          </h2>
          <p className="font-body text-xs md:text-sm mt-1.5 text-brand-steel-blue">
            {service.subtitle}
          </p>
        </motion.div>

        {/* Content sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {/* Destaque */}
          {destaceCard && (
            <motion.div variants={fadeUp} className="mb-10">
              <p className="font-body text-sm md:text-base leading-relaxed text-brand-blue-gray">
                {destaceCard.text}
              </p>
            </motion.div>
          )}

          {/* O que você recebe */}
          {recebeCard && (
            <motion.div variants={fadeUp} className="mb-10">
              <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.12em] text-brand-light-blue/60 mb-3">
                {recebeCard.tag}
              </p>
              <h3 className="font-heading text-lg md:text-xl text-brand-ice-white mb-3">
                {recebeCard.title}
              </h3>
              <p className="font-body text-sm md:text-base leading-relaxed text-brand-blue-gray">
                {recebeCard.text}
              </p>
            </motion.div>
          )}

          {/* Como funciona */}
          {funcionaCard && (
            <motion.div variants={fadeUp} className="mb-10">
              <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.12em] text-brand-light-blue/60 mb-3">
                {funcionaCard.tag}
              </p>
              <h3 className="font-heading text-lg md:text-xl text-brand-ice-white mb-3">
                {funcionaCard.title}
              </h3>
              <p className="font-body text-sm md:text-base leading-relaxed text-brand-blue-gray">
                {funcionaCard.text}
              </p>
            </motion.div>
          )}

          {/* Resultado */}
          {resultadoCard && (
            <motion.div variants={fadeUp} className="mb-10">
              <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.12em] text-brand-light-blue/60 mb-3">
                {resultadoCard.tag}
              </p>
              <h3 className="font-heading text-lg md:text-xl text-brand-ice-white mb-3">
                {resultadoCard.title}
              </h3>
              <p className="font-body text-sm md:text-base leading-relaxed text-brand-blue-gray">
                {resultadoCard.text}
              </p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 rounded-lg font-body text-xs font-medium uppercase tracking-widest bg-brand-light-blue text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Quero saber mais
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Brand Logo centered at bottom */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <BrandLogo size="sm" />
        </motion.div>
      </div>
    </section>
  );
}
