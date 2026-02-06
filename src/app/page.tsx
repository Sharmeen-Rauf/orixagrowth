import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketingStatsSection from "@/components/MarketingStatsSection";
import WhyBrandsTrustSection from "@/components/WhyBrandsTrustSection";
import FeaturesIllustrationSection from "@/components/FeaturesIllustrationSection";
import FeaturesApproachSection from "@/components/FeaturesApproachSection";
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
      <FeaturesIllustrationSection />
      <FeaturesApproachSection />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
