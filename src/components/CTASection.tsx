"use client";

import AnimatedSection from "./AnimatedSection";
import WhatsAppButton from "./WhatsAppButton";
import { CTA_TITLE, CTA_SUBTITLE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-brand-sage py-24 px-6">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {CTA_TITLE}
        </h2>
        <p className="text-brand-light-gray text-lg mb-10">
          {CTA_SUBTITLE}
        </p>
        <WhatsAppButton variant="inverted">
          Chamar no WhatsApp
        </WhatsAppButton>
      </AnimatedSection>
    </section>
  );
}
