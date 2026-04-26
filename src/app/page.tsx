import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceCarousel from "@/components/ServiceCarousel";
import ContentPillars from "@/components/ContentPillars";
import Feedbacks from "@/components/Feedbacks";
import AboutMe from "@/components/AboutMe";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
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
      <Feedbacks />
      <AboutMe />
      <Marquee />
      <Portfolio />
      <CTASection />
      <Footer />
    </main>
  );
}
