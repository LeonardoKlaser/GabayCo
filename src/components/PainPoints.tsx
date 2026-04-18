"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { PAIN_POINTS } from "@/lib/constants";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PainPoints() {
  return (
    <section className="bg-brand-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-brand-sage text-xs tracking-[0.25em] uppercase mb-4">
            Você se identifica?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
            Você posta sem direção, trava na produção
            <br className="hidden md:block" /> e não vê resultado?
          </h2>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-[#111] border-l-[3px] border-brand-sage rounded-lg p-5 text-left"
            >
              <p className="text-brand-warm-gray text-sm leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
