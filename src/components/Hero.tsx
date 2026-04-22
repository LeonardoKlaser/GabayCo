"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { HERO_PHRASE } from "@/lib/constants";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="bg-brand-cream min-h-screen flex items-center relative overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark-brown">
              Gabriele.
            </h1>
            <span className="font-body font-light text-5xl md:text-6xl text-brand-taupe leading-none">
              |
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-body font-light text-[10px] uppercase tracking-[0.2em] text-brand-warm-brown">
                Comunicação
              </span>
              <span className="font-body font-light text-[10px] uppercase tracking-[0.2em] text-brand-warm-brown">
                e Marketing
              </span>
            </div>
          </div>

          <p className="text-brand-warm-brown text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            {HERO_PHRASE}
          </p>
          <WhatsAppButton>Fale comigo no WhatsApp</WhatsAppButton>
        </motion.div>

        {/* Photo with parallax */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            style={{ y }}
            className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/photos/IMG_2605 Large.jpeg"
              alt="Gabriele Ayres — Comunicação e Marketing"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
