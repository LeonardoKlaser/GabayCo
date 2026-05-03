"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MARQUEE_PHRASES } from "@/lib/constants";

export default function Marquee() {
  const repeated = [...MARQUEE_PHRASES, ...MARQUEE_PHRASES, ...MARQUEE_PHRASES, ...MARQUEE_PHRASES];
  const [duration, setDuration] = useState(25);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setDuration(mql.matches ? 3 : 7);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <div className="bg-brand-dark-navy py-5 overflow-hidden relative">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <motion.div
        key={duration}
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {repeated.map((phrase, i) => (
          <span
            key={i}
            className="text-brand-ice-white/60 text-sm md:text-base font-light tracking-[0.3em] uppercase mx-8 flex items-center gap-8"
          >
            {phrase}
            <span className="text-brand-light-blue text-[8px]">&#9670;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
