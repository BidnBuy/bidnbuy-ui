import BidIcon from "@/components/svg-icons/BidIcon";
import SignUpIcon from "@/components/svg-icons/SignUpIcon";
import WinIcon from "@/components/svg-icons/WinIcon";

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-3 gap-8 mb-8">

          {/* Sign up for free */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <SignUpIcon className="text-white mt-2" width={20} height={20} />
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-1 text-2xl md:text-3xl">
                Sign up for free
              </h3>
              <p className="text-white text-sm md:text-lg">
                Create your account to get started.
              </p>
            </div>
          </div>

          {/* Bids on Auctions */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <BidIcon className="text-white mt-2" width={19} height={19} />
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-1 text-2xl md:text-3xl">
                Bids on Auctions
              </h3>
              <p className="text-white text-sm md:text-lg">
                Place bids on your favorite items.
              </p>
            </div>
          </div>

          {/* Win and Save */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <WinIcon className="text-white mt-2" width={20} height={20} />
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-1 text-2xl md:text-3xl">
                Win and Save
              </h3>
              <p className="text-white text-sm">
                Score great deals on top products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection;
