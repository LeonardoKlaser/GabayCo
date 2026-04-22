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
