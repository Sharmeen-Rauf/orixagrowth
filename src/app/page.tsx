import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketingStatsSection from "@/components/MarketingStatsSection";
import WhyBrandsTrustSection from "@/components/WhyBrandsTrustSection";
import FeaturesApproachSection from "@/components/FeaturesApproachSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <MarketingStatsSection />
      <WhyBrandsTrustSection />
      <FeaturesApproachSection />
      <ClientLogosSection />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
