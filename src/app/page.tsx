import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import CoreServicesSection from "@/components/sections/core-services-section";
import MethodologySection from "@/components/sections/methodology-section";
import InteractiveExperienceSection from "@/components/sections/interactive-experience-section";
import VoiceDemosSection from "@/components/sections/voice-demos-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CtaBookingSection from "@/components/sections/cta-booking-section";
import ClientsShowcaseSection from "@/components/sections/clients-showcase-section";
import FaqSection from "@/components/sections/faq-section";
import FinalCtaSection from "@/components/sections/final-cta-section";
import FooterSection from "@/components/sections/footer-section";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background-primary">
      <NavigationHeader />
      <HeroSection />
      <WhyChooseSection />
      <CoreServicesSection />
      <MethodologySection />
      <InteractiveExperienceSection />
      <VoiceDemosSection />
      <TestimonialsSection />
      <CtaBookingSection />
      <ClientsShowcaseSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}