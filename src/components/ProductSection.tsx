"use client";

import { motion } from "framer-motion";
import type { ServiceData } from "@/lib/constants";
import { WHATSAPP_URL } from "@/lib/constants";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const clipReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

interface ProductSectionProps {
  service: ServiceData;
  index: number;
}

export default function ProductSection({ service, index }: ProductSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`${isEven ? "bg-brand-cream" : "bg-white"} relative overflow-hidden`}
    >
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 relative">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex items-center gap-5 mb-6">
            <div
              className={`${service.badgeClass} w-14 h-14 rounded-full flex items-center justify-content-center text-base font-bold flex-shrink-0 flex items-center justify-center`}
            >
              {service.step}
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black">
                {service.title}
              </h2>
              <p className="text-brand-taupe text-sm mt-1">{service.subtitle}</p>
            </div>
          </div>

          {/* Hook quote */}
          <div className="border-l-4 border-brand-sage pl-5 py-2">
            <p className="text-brand-warm-brown text-lg md:text-xl italic leading-relaxed">
              {service.hook}
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            className={`${isEven ? "bg-white" : "bg-brand-cream"} rounded-2xl p-6 md:p-8`}
          >
            <p className="text-brand-dark-brown text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </motion.div>

        {/* Grid: Para quem é + Como funciona */}
        <motion.div
          className="grid md:grid-cols-2 gap-5 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            className={`${isEven ? "bg-white" : "bg-brand-cream"} rounded-2xl p-6 md:p-8`}
          >
            <p className="text-brand-sage text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Para quem é
            </p>
            <p className="text-brand-warm-brown text-sm md:text-base leading-relaxed">
              {service.audience}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`${isEven ? "bg-white" : "bg-brand-cream"} rounded-2xl p-6 md:p-8`}
          >
            <p className="text-brand-sage text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Como funciona
            </p>
            <p className="text-brand-warm-brown text-sm md:text-base leading-relaxed">
              {service.howItWorks}
            </p>
          </motion.div>
        </motion.div>

        {/* Deliverables checklist */}
        <motion.div
          className={`${isEven ? "bg-white" : "bg-brand-cream"} rounded-2xl p-6 md:p-8 mb-12`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-sage text-xs tracking-[0.2em] uppercase font-medium mb-5"
          >
            {service.deliverablesLabel}
          </motion.p>
          <div className="grid md:grid-cols-2 gap-3">
            {service.deliverables.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <span className="text-brand-sage mt-1 flex-shrink-0">&#10003;</span>
                <span className="text-brand-dark-brown text-sm leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Format (if exists) */}
        {service.format && (
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {service.format.map((item, i) => (
                <span
                  key={i}
                  className="bg-brand-sage/10 text-brand-sage px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bonus (if exists) */}
        {service.bonus && (
          <motion.div
            className="mb-12"
            variants={clipReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="bg-brand-sage rounded-2xl p-6 md:p-8 text-white">
              <p className="text-xs tracking-[0.2em] uppercase opacity-70 mb-2">
                Bônus
              </p>
              <p className="text-lg md:text-xl font-bold font-heading mb-2">
                {service.bonus.title}
              </p>
              <p className="text-sm opacity-85 leading-relaxed">
                {service.bonus.description}
              </p>
            </div>
          </motion.div>
        )}

        {/* Not included (if exists) */}
        {service.notIncluded && (
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-center text-brand-warm-gray text-sm italic">
              {service.notIncluded}
            </p>
          </motion.div>
        )}

        {/* Results */}
        <motion.div
          className="mb-12"
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="bg-brand-dark-brown rounded-2xl p-6 md:p-8 text-white">
            <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-5">
              Resultado
            </p>
            <motion.div
              className="grid md:grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.results.map((result, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-brand-sage mt-0.5 flex-shrink-0">&#10003;</span>
                  <span className="text-sm opacity-90 leading-relaxed">
                    {result}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Closing + CTA */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-brand-taupe text-sm italic mb-8 max-w-lg mx-auto">
            {service.closing}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${service.accentBg} text-white inline-block px-8 py-4 rounded-lg font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            Quero saber mais
          </a>
        </motion.div>
      </div>
    </section>
  );
}
