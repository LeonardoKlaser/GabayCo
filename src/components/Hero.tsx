"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="bg-brand-cream min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-brand-sage text-xs tracking-[0.25em] uppercase mb-4">
            Comunicação e Marketing
          </p>
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-brand-black mb-6">
            Gabriele.
          </h1>
          <p className="text-brand-warm-brown text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            Estratégia, direção e presença digital para quem quer crescer com
            intenção.
          </p>
          <WhatsAppButton>Fale comigo no WhatsApp</WhatsAppButton>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/photos/IMG_2605 Large.jpeg"
              alt="Gabriele Ayres — Comunicação e Marketing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
