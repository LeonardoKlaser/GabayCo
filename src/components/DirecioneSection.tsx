"use client";

import { motion } from "framer-motion";
import { DIRECIONE, WHATSAPP_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const phaseReveal = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function DirecioneSection() {
  const d = DIRECIONE;

  return (
    <section
      id={d.id}
      className="bg-brand-dark-navy text-white relative overflow-hidden"
    >
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 relative">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex items-center gap-5 mb-6">
            <div className="bg-brand-light-blue text-white w-14 h-14 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0">
              {d.step}
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                {d.title}
              </h2>
              <p className="text-brand-blue-gray text-sm mt-1">{d.subtitle}</p>
            </div>
          </div>

          {/* Hook */}
          <div className="border-l-4 border-brand-light-blue pl-5 py-2">
            <p className="text-brand-ice-white text-lg md:text-xl italic leading-relaxed">
              {d.hook}
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <p className="text-brand-ice-white/90 text-base md:text-lg leading-relaxed">
              {d.description}
            </p>
          </div>
        </motion.div>

        {/* Trust text */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-brand-light-blue text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Por que você pode confiar nisso?
          </p>
          <p className="text-brand-ice-white/80 text-sm md:text-base leading-relaxed">
            {d.trustText}
          </p>
        </motion.div>

        {/* Audience */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-light-blue text-xs tracking-[0.2em] uppercase font-medium mb-5"
          >
            Para quem é o Direcione
          </motion.p>
          <div className="space-y-3">
            {d.audience.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <span className="text-brand-light-blue mt-0.5 flex-shrink-0">&#8594;</span>
                <span className="text-brand-ice-white/85 text-sm leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4-Phase Timeline */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-light-blue text-xs tracking-[0.2em] uppercase font-medium mb-10"
          >
            Como funciona — 30 dias, 4 fases
          </motion.p>

          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-[2px] bg-brand-light-blue/40 origin-top"
              variants={lineGrow}
            />

            <motion.div
              className="space-y-10"
              variants={staggerContainer}
            >
              {d.phases.map((phase) => (
                <motion.div
                  key={phase.number}
                  variants={phaseReveal}
                  className="flex gap-6 items-start"
                >
                  {/* Phase number circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-brand-light-blue flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {phase.number}
                  </div>

                  <div className="pt-2">
                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-brand-ice-white/75 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-light-blue text-xs tracking-[0.2em] uppercase font-medium mb-6"
          >
            O que você recebe
          </motion.p>
          <div className="grid md:grid-cols-2 gap-4">
            {d.deliverables.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-brand-light-blue flex-shrink-0">&#10003;</span>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                </div>
                <p className="text-brand-ice-white/65 text-xs leading-relaxed pl-6">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-brand-ice-white/70 text-sm italic mb-6 max-w-lg mx-auto">
            {d.closing}
          </p>
          <p className="font-heading text-2xl md:text-3xl font-bold text-brand-ice-white mb-3">
            {d.finalQuestion}
          </p>
          <p className="text-brand-ice-white/80 text-sm mb-10 max-w-md mx-auto">
            {d.finalCta}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-light-blue text-white inline-block px-8 py-4 rounded-lg font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Quero entender se faz sentido
          </a>
        </motion.div>
      </div>
    </section>
  );
}
