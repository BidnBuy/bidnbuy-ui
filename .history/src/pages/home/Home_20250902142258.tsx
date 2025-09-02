import OnboardingHero from "./components/OnboardingHero"
import WhyBidnBuySection from "./components/WhyBidnBuySection"
import LiveAuctionsSection from "./components/LiveAuctionsSection"
import HowItWorksSection from "./components/HowItWorksSection"
import FooterCtaSection from "./components/FooterCtaSection"

const OnboardingHome = () => {
  const navigate = useNavigate()
  
    const handleNavigate = () => navigate('/account-type')

  return (
    <div className="min-h-screen bg-[#01151C]">
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
