import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import PainPoints from "@/components/PainPoints";
import ValueLadder from "@/components/ValueLadder";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <PainPoints />
      <ValueLadder />
      <CTASection />
      <Footer />
    </main>
  );
}
