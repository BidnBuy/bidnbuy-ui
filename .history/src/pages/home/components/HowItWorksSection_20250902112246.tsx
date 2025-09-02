import { SignUpIcon } from "@/components/icons/sign-up-icon"
import { AuctionIcon } from "@/components/icons/auction-icon"
import { WinIcon } from "@/components/icons/win-icon"

const HowItWorksSection - () {
  return (
    <section className="py-16 px-4 bg-[#01151C]">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sign up for free */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <SignUpIcon className="text-white" width={20} height={20} />
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-1">
                Sign up for free
              </h3>
              <p className="text-white text-sm">
                Create your account to get started.
              </p>
            </div>
          </div>

          {/* Bids on Auctions */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AuctionIcon className="text-white" width={19} height={19} />
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-1">
                Bids on Auctions
              </h3>
              <p className="text-white text-sm">
                Place bids on your favorite items.
              </p>
            </div>
          </div>

          {/* Win and Save */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <WinIcon className="text-white" width={20} height={20} />
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-1">
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
