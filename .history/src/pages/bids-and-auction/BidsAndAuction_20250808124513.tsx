import { MobileAuctionLayout } from "@/components/auctions/mobile/mobile-auction-layout"
import { DesktopAuctionLayout } from "@/components/auctions/desktop/desktop-auction-layout"
import { AuctionSectionsContainer } from "@/components/auctions/containers/auction-sections-container"
import BidsAndAuctionMobile from "./components/BidsAndAuctionMobile"
import BidsAndAuctionDesktop from "./components/BidsAndAuctionDesktop"

/**
 * Main auctions page component
 * Uses Tailwind responsive classes to render appropriate layout for each screen size
 * Eliminates the need for JavaScript-based screen size detection
 */

const BidsAndAuction = () => {
  return (
    <>
      <BidsAndAuctionMobile />
      <BidsAndAuctionDesktop />
    </>
  )
}


export default BidsAndAuction;
