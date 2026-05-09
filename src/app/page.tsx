import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceSection from "@/components/ServiceSection";
import ContentPillars from "@/components/ContentPillars";
import Feedbacks from "@/components/Feedbacks";
import AboutMe from "@/components/AboutMe";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { UNIFIED_SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <Portfolio />
      {UNIFIED_SERVICES.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
      <ContentPillars />
      <Feedbacks />
      <AboutMe />
      <Marquee />
      <CTASection />
      <Footer />
    </main>
  );
}
