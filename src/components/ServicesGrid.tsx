"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SERVICES_GRID } from "@/lib/constants";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
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

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const handleClick = (targetId: string | null) => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background photo with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/photos/IMG_2538 Large.jpeg"
          alt="Gabriele Ayres"
          fill
          className="object-cover scale-110"
        />
      </motion.div>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 flex flex-col justify-center min-h-[600px] md:min-h-[700px]">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={clipReveal}
            className="font-body text-sm uppercase tracking-[0.08em] text-brand-cream/80"
          >
            Meus
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
            className="font-body text-3xl md:text-4xl font-bold uppercase tracking-[0.08em] text-brand-cream mb-2"
          >
            Serviços
          </motion.h2>
          {/* Mini logo */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
            }}
            className="flex items-center gap-2 mb-10"
          >
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
          </motion.div>
        </motion.div>

        {/* Services grid 2x3 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES_GRID.map((service) => (
            <motion.button
              key={service.label}
              variants={fadeUp}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleClick(service.targetId)}
              className={`bg-white text-brand-dark-brown font-body text-xs font-semibold uppercase tracking-[0.06em] text-center py-3.5 px-5 rounded transition-shadow duration-200 hover:shadow-lg ${
                service.targetId ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {service.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
