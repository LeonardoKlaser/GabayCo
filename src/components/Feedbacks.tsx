"use client";

import Image from "next/image";
import ImageMarquee from "@/components/ImageMarquee";

const feedbacks = [
  { src: "/feedbacks/feedback_1.png", alt: "Depoimento 1" },
  { src: "/feedbacks/feedback2.png", alt: "Depoimento 2" },
  { src: "/feedbacks/feedback3.png", alt: "Depoimento 3" },
  { src: "/feedbacks/feedback4.png", alt: "Depoimento 4" },
];

export default function Feedbacks() {
  return (
    <section className="bg-brand-dark-navy py-24 px-6 overflow-hidden relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-brand-light-blue uppercase tracking-[0.25em] text-xs">
          Depoimentos
        </span>
        <h2 className="font-heading text-4xl md:text-5xl mt-4">
          <span className="text-white">O que falam </span>
          <span className="text-brand-steel-blue">de nós</span>
        </h2>
      </div>

      {/* Marquee with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-brand-dark-navy to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-brand-dark-navy to-transparent z-10 pointer-events-none" />

        <ImageMarquee direction="right" duration={50} mobileDuration={25} pauseOnHover>
          <div className="flex gap-6 pr-6">
            {feedbacks.map((fb) => (
              <div
                key={fb.src}
                className="bg-white rounded-xl shadow-lg p-2 hover:scale-[1.03] transition"
              >
                <Image
                  src={fb.src}
                  alt={fb.alt}
                  width={300}
                  height={400}
                  className="rounded-lg w-[240px] h-[320px] md:w-[300px] md:h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        </ImageMarquee>
      </div>
    </section>
  );
}
