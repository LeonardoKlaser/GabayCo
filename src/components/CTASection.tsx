"use client";

import AnimatedSection from "./AnimatedSection";
import WhatsAppButton from "./WhatsAppButton";

export default function CTASection() {
  return (
    <section className="bg-brand-sage py-24 px-6">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Pronta para dar direção à sua comunicação?
        </h2>
        <p className="text-brand-light-gray text-lg mb-10">
          Fale comigo e descubra qual solução faz sentido pro seu momento.
        </p>
        <WhatsAppButton variant="inverted">
          Chamar no WhatsApp
        </WhatsAppButton>
      </AnimatedSection>
    </section>
  );
}
