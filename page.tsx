import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { StatsSection } from "@/components/stats-section"
import { ClientsSection } from "@/components/clients-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProcessSection />
      <PortfolioSection />
      <ClientsSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <ContactSection />
    </main>
  )
}

