"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { SERVICES, DIRECIONE } from "@/lib/constants";

const allSteps = [
  ...SERVICES.map((s) => ({ step: s.step, title: s.title, id: s.id })),
  { step: DIRECIONE.step, title: DIRECIONE.title, id: DIRECIONE.id },
];

const pillVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const staggerPills = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function ValueLadder() {
  return (
    <section className="bg-brand-ice-white py-20 px-6 relative overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-3xl mx-auto relative">
        <AnimatedSection className="text-center mb-10">
          <p className="text-brand-light-blue text-xs tracking-[0.25em] uppercase mb-3">
            Como posso te ajudar
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-3">
            A solução certa para o seu momento
          </h2>
          <p className="text-brand-steel-blue text-sm">
            Clique para ir direto ao que faz sentido para você
          </p>
        </AnimatedSection>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          variants={staggerPills}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {allSteps.map((s) => (
            <motion.a
              key={s.step}
              href={`#${s.id}`}
              variants={pillVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`${
                s.step === "05"
                  ? "bg-brand-dark-navy"
                  : "bg-brand-light-blue"
              } text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-shadow hover:shadow-lg flex items-center gap-2`}
            >
              <span className="opacity-70">{s.step}</span>
              <span>{s.title}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
