import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon"
import { NairaIcon } from "@/components/icons/naira-icon"
import { ProtectionIcon } from "@/components/icons/protection-icon"

const WhyBidnBuySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Why BidnBuy?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <ShoppingBagIcon className="text-white" width={20} height={20} />
            </div>
            <div>
              <p className="text-white text-base font-medium">
                Thousands of <span className="block">Unique Listings.</span>
              </p>
            </div>
          </div>

       
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <NairaIcon className="text-white" width={14} height={16} />
            </div>
            <div>
              <p className="text-white text-base font-medium">
                Win Products <span className="block">for as Low as ₦500</span>
              </p>
            </div>
          </div>

        
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <ProtectionIcon className="text-white" width={20} height={20} />
            </div>
            <div>
              <p className="text-white text-base font-medium">
                100% Buyer <span className="block">Protection</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export defa
