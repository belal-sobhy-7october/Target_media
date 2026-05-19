import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { DigitalMarketingSection } from "@/components/landing/digital-marketing-section";
import { AiServicesSection } from "@/components/landing/ai-services-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { FocusSection } from "@/components/landing/focus-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <DigitalMarketingSection />
      <AiServicesSection />
      <PortfolioSection />
      <FocusSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
