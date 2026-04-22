"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BIO_TEXT } from "@/lib/constants";

const photoReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const textSlide = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AboutMe() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={photoReveal}
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/photos/IMG_2491 Large.jpeg"
              alt="Gabriele Ayres"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p
            variants={textSlide}
            className="text-brand-sage text-xs tracking-[0.25em] uppercase mb-3"
          >
            Quem sou eu
          </motion.p>
          <motion.h2
            variants={textSlide}
            className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-6"
          >
            Quem Sou Eu
          </motion.h2>
          {BIO_TEXT.split("\n\n").map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-brand-warm-brown leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
