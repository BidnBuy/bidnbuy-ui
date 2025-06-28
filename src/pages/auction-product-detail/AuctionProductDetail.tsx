// import { useState } from "react"
// import { DesktopHeader, DesktopSearchBar, MobileHeader } from "./components/header"
// import { CategoryTabs } from "./components/category-tabs"


import { ProductInfoSection } from "./_components/ProductInfoSection"
import { ProductDetails } from "./_components/ProductDetails"
import { ProductDescription } from "./_components/ProductDescription"
import { ProductInformation } from "./_components/ProductInformation"
import { BidSection } from "./_components/BidsSection"
import { ProductCarousel } from "./_components/ProductCarousel"
import { DesktopHeader } from "@/components/header/DesktopHeader"
import { MobileHeader } from "@/components/header/MobileHeader"
import { useParams } from "react-router-dom"
import { useProductDetail } from "@/hooks/useProductDetail"

export default function AuctionProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  console.log("Slug:", slug)

  const { data: product, isLoading, isError } = useProductDetail(slug || "generic-cotton-pizza")
  console.log("Auction Product Data:", product)

  if (isLoading) return <div className="text-center py-20">Loading...</div>
  if (isError || !product) return <div className="text-center py-20 text-red-400 text-xl">404 | Product not found</div>

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#01151C" }}>
   
    <div className="hidden md:block">

      <DesktopHeader />
    </div>

      <MobileHeader />


      

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        
          <div className="mb-6 lg:mb-0">
            <ProductCarousel images={product.images} />
          </div>

         
          <ProductInfoSection product={product} />
        </div>

        <div className="mt-8 lg:mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">About this product</h2>
            <button className="text-red-400 text-sm underline hover:text-red-300 transition-colors">
              Report this item
            </button>
          </div>

          
          <ProductDetails product={product} />

          <ProductDescription details={product.details} />

          <ProductInformation product={product} />

      
          <BidSection />
        </div>
      </div>
    </div>
  )
}
