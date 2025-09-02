

import DesktopMarketPlace from "./components/DesktopMarketPlace";
import MobileMarketPlace from "./components/MobileMarketPlace";
import { useProducts } from "@/hooks/useProducts";


const Marketplace = () => {
    const { isLoading, mappedProducts } = useProducts();

    const marketPlaceProps = {
      isLoading,
      recentlyAddedProducts: mappedProducts,
      trendingProducts: mappedProducts,
      gadgetsProducts: mappedProducts,
      recommendedItems: mappedProducts,
      topPicksProducts: mappedProducts,
    };

 

  return (
    <>
      

      <MobileMarketPlace {...marketPlaceProps} />

      <DesktopMarketPlace {...marketPlaceProps} />
    </>
  );
};

export default Marketplace;
