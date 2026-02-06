import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketingStatsSection from "@/components/MarketingStatsSection";
import WhyBrandsTrustSection from "@/components/WhyBrandsTrustSection";
import FeaturesApproachSection from "@/components/FeaturesApproachSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import BlogsSection from "@/components/BlogsSection";
import LaunchCTASection from "@/components/LaunchCTASection";
import Footer from "@/components/Footer";
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
      <GoogleReviewsSection />
      <BlogsSection />
      <LaunchCTASection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
