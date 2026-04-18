"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { BIO_TEXT } from "@/lib/constants";

export default function AboutMe() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Photo */}
        <AnimatedSection className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/photos/IMG_2491 Large.jpeg"
              alt="Gabriele Ayres"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={0.15}>
          <p className="text-brand-sage text-xs tracking-[0.25em] uppercase mb-3">
            Sobre mim
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Quem é Gabriele
          </h2>
          {BIO_TEXT.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-brand-warm-brown leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
