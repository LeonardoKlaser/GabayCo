"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CONTENT_PILLARS } from "@/lib/constants";
import BrandLogo from "./BrandLogo";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const clipReveal = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const pillScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function ContentPillars() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[650px] md:min-h-[780px] overflow-hidden">
      {/* Background photo with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/photos/IMG_2742 Large.jpeg"
          alt="Gabriele Ayres"
          fill
          className="object-cover scale-110"
        />
      </motion.div>
      {/* Warm tint overlay — desaturates the photo and blends with brand palette */}
      <div className="absolute inset-0 bg-brand-dark-navy/70 mix-blend-multiply" />
      {/* Gradient for contrast — darker top & bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/55" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col justify-between min-h-[650px] md:min-h-[780px]">
        {/* Title block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={clipReveal}
            className="font-body text-base md:text-lg uppercase tracking-[0.08em] text-brand-ice-white/80"
          >
            Como pensamos
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.1 },
              },
            }}
            className="font-body text-4xl md:text-5xl font-bold uppercase tracking-[0.08em] text-brand-ice-white"
          >
            Conteúdo
          </motion.h2>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CONTENT_PILLARS.map((pillar) => (
            <motion.div key={pillar.number} variants={fadeUp}>
              {/* Decorative number */}
              <motion.p
                className="font-heading text-6xl md:text-7xl text-brand-ice-white/30 mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                {pillar.number}
              </motion.p>
              {/* Pill title */}
              <motion.div
                variants={pillScale}
                className="inline-block bg-brand-ice-white text-brand-dark-navy font-body text-sm font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded mb-3"
              >
                {pillar.title}
              </motion.div>
              {/* Description */}
              <p className="font-body text-sm md:text-base text-brand-ice-white leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Logo centered at bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <BrandLogo size="md" />
        </motion.div>
      </div>
    </section>
  );
}
