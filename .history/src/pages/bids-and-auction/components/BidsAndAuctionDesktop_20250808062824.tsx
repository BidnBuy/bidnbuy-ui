import { useState } from "react"

import { auctionCategories } from "../auction-data"

import AuctionCategoryImages from "./AuctionCategoryImages"
import AuctionCategoryTabs from "./AuctionCategoryTabs"
import AuctionHeroBanner from "./AuctionHeroBanner"
import LoadingGrid from "@/components/loading-grid/LoadingGrid"
import ProductGrid from "@/components/shared/product/ProductGrid"
import PromotionalBanner from "@/components/shared/product/PromotionalBanner"

import BidsAndAuctionPromotionalBanner from "../assets/auction-promo-banner.jpg"
import type { CategoryProductProps } from "@/types/product"

const BidsAndAuctionDesktop = (
    {
      isLoading,
      recentlyAddedProducts,
      trendingProducts,
      gadgetsProducts,
      recommendedItems,
      topPicksProducts,
    }: CategoryProductProps
) => {
    const [activeCategory, setActiveCategory] = useState("daily-deals")


  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const categoriesWithActiveState = auctionCategories.map((category) => ({
    ...category,
    active: category.id === activeCategory,
  }))
  return (
    <div className="flex flex-col min-h-screen bg-[#01151C] text-white lg:hidden">
     

   
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 pb-6 pt-4">

            <AuctionHeroBanner />

      <AuctionCategoryImages />


      <AuctionCategoryTabs categories={categoriesWithActiveState} onCategoryChange={handleCategoryChange} />

{isLoading ? (
              <LoadingGrid />
            ) : (
              <>
                <ProductGrid
                  title="Popular Auction Items"
                  products={recentlyAddedProducts}
                  columns={4}
                />

                <ProductGrid
                  title="Gadget Items"
                  products={trendingProducts}
                  columns={4}
                />

                <ProductGrid
                  title="Electronics Auction"
                  products={recentlyAddedProducts}
                  columns={4}
                />

                <ProductGrid
                  title="Fashion Auction"
                  products={trendingProducts}
                  columns={4}
                />

                <PromotionalBanner
                title="Let Buyers Compete For Your Product"
                backgroundImage={BidsAndAuctionPromotionalBanner}
                buttonText="List Now"
              />

                <ProductGrid
                  title="Home And Auction Kitchen Store"
                  products={gadgetsProducts}
                  columns={4}
                />

               
                <ProductGrid
                  title="Beauty Care Auction"
                  products={recommendedItems}
                  columns={4}
                />

                <ProductGrid
                  title="Library Auction"
                  products={topPicksProducts}
                  columns={4}
                />

                <ProductGrid
                  title="Automobile Auction"
                  products={topPicksProducts}
                  columns={4}
                />
              </>
            )}

        </div>
      </main>

    </div>
  )
}

export default BidsAndAuctionDesktop