import { HeroSection } from "@/components/home/hero-section"
import { WhyBidnBuySection } from "@/components/home/why-bidnbuy-section"
import { LiveAuctionsSection } from "@/components/home/live-auctions-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { FooterCtaSection } from "@/components/home/footer-cta-section"
import OnboardingHero from "./components/OnboardingHero"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#01151C" }}>
      <main>
        <OnboardingHero />
        <WhyBidnBuySection />
        <LiveAuctionsSection />
        <HowItWorksSection />
        <FooterCtaSection />
      </main>
    </div>
  )
}
