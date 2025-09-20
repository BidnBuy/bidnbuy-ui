import BidsAndAuctionMobile from "./components/BidsAndAuctionMobile";
import BidsAndAuctionDesktop from "./components/BidsAndAuctionDesktop";
import { useProducts } from "@/hooks/useProducts";

/**
 * Main auctions page component
 * Uses Tailwind responsive classes to render appropriate layout for each screen size
 * Eliminates the need for JavaScript-based screen size detection
 */

const BidsAndAuction = () => {
  const { isLoading, mappedProducts } = useProducts();

  const bidsAndAuctionProps = {
    isLoading,
    recentlyAddedProducts: mappedProducts,
    trendingProducts: mappedProducts,
    gadgetsProducts: mappedProducts,
    recommendedItems: mappedProducts,
    topPicksProducts: mappedProducts,
  };
  
  return (
    <>
      <BidsAndAuctionMobile {...bidsAndAuctionProps} />
      <BidsAndAuctionDesktop {...bidsAndAuctionProps} />
    </>
  );
};

export default BidsAndAuction;
