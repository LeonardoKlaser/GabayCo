"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES_GRID } from "@/lib/constants";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  const handleClick = (targetId: string | null) => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background photo */}
      <Image
        src="/photos/IMG_2538 Large.jpeg"
        alt="Gabriele Ayres"
        fill
        className="object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col justify-center min-h-[600px] md:min-h-[700px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.08em] text-brand-cream/80">
            Meus
          </p>
          <h2 className="font-body text-3xl md:text-4xl font-bold uppercase tracking-[0.08em] text-brand-cream mb-2">
            Serviços
          </h2>
          {/* Mini logo */}
          <div className="flex items-center gap-2 mb-10">
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
              onClick={() => handleClick(service.targetId)}
              className={`bg-white text-brand-dark-brown font-body text-xs font-semibold uppercase tracking-[0.06em] text-center py-3.5 px-5 rounded transition-transform duration-200 hover:scale-[1.03] ${
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
