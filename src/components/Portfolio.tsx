"use client";

import Image from "next/image";
import ImageMarquee from "@/components/ImageMarquee";

const PORTFOLIO_IMAGES = [
  { src: "/photos/IMG_2491 Large.jpeg", alt: "Portfolio 1" },
  { src: "/photos/IMG_2513 Large.jpeg", alt: "Portfolio 2" },
  { src: "/photos/IMG_2538 Large.jpeg", alt: "Portfolio 3" },
  { src: "/photos/IMG_2605 Large.jpeg", alt: "Portfolio 4" },
  { src: "/photos/IMG_2666 Large.jpeg", alt: "Portfolio 5" },
  { src: "/photos/IMG_2742 Large.jpeg", alt: "Portfolio 6" },
  { src: "/photos/IMG_2867 Large.jpeg", alt: "Portfolio 7" },
];

export default function Portfolio() {
  return (
    <section className="bg-brand-ice-white py-24 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <p className="text-brand-steel-blue uppercase tracking-[0.25em] text-xs mb-4">
          Portfólio
        </p>
        <h2 className="font-heading text-4xl md:text-5xl">
          <span className="text-black">Últimos </span>
          <span className="text-brand-medium-navy">trabalhos</span>
        </h2>
      </div>

      {/* Marquee with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-brand-ice-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-brand-ice-white to-transparent z-10 pointer-events-none" />

        <ImageMarquee direction="left" duration={40} pauseOnHover>
          <div className="flex gap-6 pr-6">
          {PORTFOLIO_IMAGES.map((img) => (
            <div
              key={img.src}
              className="flex-shrink-0 rounded-2xl overflow-hidden hover:scale-[1.03] hover:-rotate-1 transition-transform duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={357}
                height={440}
                className="w-[240px] h-[300px] md:w-[357px] md:h-[440px] object-cover"
              />
            </div>
          ))}
          </div>
        </ImageMarquee>
      </div>
    </section>
  );
}
