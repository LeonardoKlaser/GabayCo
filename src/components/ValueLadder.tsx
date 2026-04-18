"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/constants";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ValueLadder() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-brand-sage text-xs tracking-[0.25em] uppercase mb-3">
            Como posso te ajudar
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black">
            A solução certa para o seu momento
          </h2>
        </AnimatedSection>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.step} variants={cardVariant}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
