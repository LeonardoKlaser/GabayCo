import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import PainPoints from "@/components/PainPoints";
import Marquee from "@/components/Marquee";
import ValueLadder from "@/components/ValueLadder";
import ProductSection from "@/components/ProductSection";
import DirecioneSection from "@/components/DirecioneSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <PainPoints />
      <Marquee />
      <ValueLadder />
      {SERVICES.map((service, index) => (
        <ProductSection key={service.step} service={service} index={index} />
      ))}
      <DirecioneSection />
      <Marquee />
      <CTASection />
      <Footer />
    </main>
  );
}
