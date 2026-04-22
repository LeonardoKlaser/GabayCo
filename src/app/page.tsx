import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceCarousel from "@/components/ServiceCarousel";
import ContentPillars from "@/components/ContentPillars";
import AboutMe from "@/components/AboutMe";
import PainPoints from "@/components/PainPoints";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { CAROUSEL_SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      {CAROUSEL_SERVICES.map((service) => (
        <ServiceCarousel key={service.id} service={service} />
      ))}
      <ContentPillars />
      <AboutMe />
      <PainPoints />
      <Marquee />
      <CTASection />
      <Footer />
    </main>
  );
}
