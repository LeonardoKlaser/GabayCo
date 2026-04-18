"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceData } from "@/lib/constants";

interface ServiceCardProps {
  service: ServiceData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`${service.bgClass} ${service.textClass} rounded-2xl p-6 md:p-8 cursor-pointer transition-shadow duration-300 hover:shadow-xl`}
      onClick={() => setExpanded(!expanded)}
      layout
    >
      <div className="flex items-start gap-5">
        {/* Number badge */}
        <div
          className={`${service.badgeClass} w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0`}
        >
          {service.step}
        </div>

        <div className="flex-1">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-1">
            {service.title}
          </h3>
          <p className="text-sm opacity-75 mb-1">{service.subtitle}</p>
          <p className="text-xs opacity-60">{service.audience}</p>

          {/* Expandable details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-5 pt-5 border-t border-current/10">
                  <p className="text-xs tracking-[0.15em] uppercase opacity-50 mb-3">
                    O que você recebe
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-brand-sage mt-0.5">&#10003;</span>
                        <span className="opacity-80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand hint */}
          <p className="text-xs opacity-40 mt-3">
            {expanded ? "Clique para fechar" : "Clique para ver detalhes"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
