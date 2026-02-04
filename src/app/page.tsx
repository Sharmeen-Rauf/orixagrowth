import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketingStatsSection from "@/components/MarketingStatsSection";
import WavySeparator from "@/components/WavySeparator";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WavySeparator />
      <ServicesSection />
      <MarketingStatsSection />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
