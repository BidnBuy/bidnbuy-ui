// import { WhyBidnBuySection } from "@/components/home/why-bidnbuy-section"
// import { LiveAuctionsSection } from "@/components/home/live-auctions-section"
// import { HowItWorksSection } from "@/components/home/how-it-works-section"
// import { FooterCtaSection } from "@/components/home/footer-cta-section"
import OnboardingHero from "./components/OnboardingHero"
import WhyBidnBuySection from "./components/WhyBidnBuySection"
import LiveAuctionsSection from "./components/LiveAuctionsSection"
import HowItWorksSection from "./components/HowItWorksSection"
import FooterCtaSection from "./components/FooterCtaSection"

const OnboardingHome = () => {
  return (
    <div className="min-h-screen bg-[#01151C]" style={{ backgroundColor: "" }}>
      <main>
        <OnboardingHero />
        <WhyBidnBuySection />
        <LiveAuctionsSection  />
        <HowItWorksSection />
        <FooterCtaSection />
      </main>
    </div>
  )
}

export default OnboardingHome;
