import { MobileAuctionLayout } from "@/components/auctions/mobile/mobile-auction-layout"
import { DesktopAuctionLayout } from "@/components/auctions/desktop/desktop-auction-layout"
import { AuctionSectionsContainer } from "@/components/auctions/containers/auction-sections-container"

/**
 * Main auctions page component
 * Uses Tailwind responsive classes to render appropriate layout for each screen size
 * Eliminates the need for JavaScript-based screen size detection
 */

const BidsAndAuction = () => {
  return (
    <>
    
      <div className="flex flex-col min-h-screen bg-[#01151C] text-white lg:hidden">
      <MobileMarketplaceHeader />

      {/* Main content area with scroll behavior */}
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 pb-6 pt-4">{children}</div>
      </main>

      <Footer />
    </div>
    
      {/* Mobile Layout - visible on screens smaller than lg (1024px) */}
      <MobileAuctionLayout>
        <AuctionSectionsContainer />
      </MobileAuctionLayout>


<div className="hidden lg:block min-h-screen bg-[#01151C] text-white">
      <DesktopHeader />

      {/* Main content with responsive padding */}
      <main className="px-6 py-6">{children}</main>

      <DesktopFooter />
    </div>

      {/* Desktop Layout - visible on lg screens and larger */}
      <DesktopAuctionLayout>
        <AuctionSectionsContainer />
      </DesktopAuctionLayout>
    </>
  )
}


export default BidsAndAuction;
