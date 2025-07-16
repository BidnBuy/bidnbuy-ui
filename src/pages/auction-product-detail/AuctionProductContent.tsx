import { useState } from "react"
import Header from "@/components/header/Header" 
import { ProductSummarySection } from "./components/auction/sections/product-summary-section"
import { ProductDetailsSection } from "./components/auction/sections/product-details-section" 
import { BidHistorySection } from "./components/auction/sections/bid-history-section" 
import { PlaceBidModal } from "./components/auction/bid-modal/place-bid-modal" 
import { useAuctionStore } from "./stores/auction-store" 
import { ProductCarousel } from "./components/ProductCarousel"

function AuctionPageContent() {
  const [activeTab, setActiveTab] = useState("All")
  const [showBidModal, setShowBidModal] = useState(false)

 
  const { auction, timeLeft, isAuctionEnded, canPlaceBid, bidHistory } = useAuctionStore()

  if (!auction) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white" style={{ backgroundColor: "#01151C" }}>
        Loading auction data...
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#01151C" }}>
 
      <Header />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
      
          <div className="mb-6 lg:mb-0">
            <ProductCarousel />
          </div>

     
          <ProductSummarySection
            auction={auction}
            timeLeft={timeLeft}
            isAuctionEnded={isAuctionEnded()} 
            canPlaceBid={canPlaceBid()} 
            onPlaceBidClick={() => setShowBidModal(true)}
          />
        </div>

        <div className="mt-8 lg:mt-12">
          <ProductDetailsSection />
       
          <BidHistorySection bidHistory={bidHistory} currentHighestBid={auction.currentBid} />
      </div>
      </div>

      <PlaceBidModal isOpen={showBidModal} onClose={() => setShowBidModal(false)} />
    </div>
  )
}
