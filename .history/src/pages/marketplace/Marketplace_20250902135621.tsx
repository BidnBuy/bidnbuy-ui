import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@/services/products";
import { useProductStore, type Product } from "@/store/products";

import DesktopMarketPlace from "./components/DesktopMarketPlace";
import MobileMarketPlace from "./components/MobileMarketPlace";


const Marketplace = () => {
    const { isLoading, mappedProducts } = 
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
