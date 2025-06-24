import { useEffect, useState } from "react"

import { MobileHeader } from "@/components/header/MobileHeader"
import { SearchBar } from "@/components/search-bar/SearchBar"
import { CategoryTabs } from "@/components/category-tabs/CategoryTabs"
import { MobileProductSection } from "@/components/product-section/MobileProductSection"
import { MobileDiscoverSection } from "@/components/discover-section/MobileDiscoverSection"
import { DesktopHeader } from "@/components/header/DesktopHeader"
import { DashboardHeroSection } from "@/components/dashboard-hero-section/DashboardHeroSection"
import { DesktopProductSection } from "@/components/product-section/DesktopProductSection"
import { DesktopDiscoverSection } from "@/components/discover-section/DesktopDiscoverSection"
import { FeaturedCarousel } from "@/components/featured-carousel/FeaturedCarousel"


import AntiquePerfumeImg from "@/assets/products/antique-perfume-img.png"
import BedroomImg from "@/assets/products/bedroom-set.jpg"
import AirPodsImg from "@/assets/products/earpods-img.jpg"
import EngagementRingImg from "@/assets/products/engagement-ring.png"
import IronImg from "@/assets/products/iron-img.jpg"
import MercedesImg from "@/assets/products/mercedes-benz.jpg"
import SmartTvImg from "@/assets/products/smart-tv.jpg"
import MacbookImg from "@/assets/products/macbook-img.png"
import GasCookerImg from "@/assets/products/gas-cooker.jpg"
import WashingMachineImg from "@/assets/products/washing-machine-img.jpg"

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Product data with real images
  const categories = [
    "All",
    "Accessories",
    "Gadgets",
    "Fashion",
    "Electronics",
    "Health&Beauty",
    // "Home&Office",
    // "Appliances",
  ]

  const exploreProducts = [
    {
      image: AirPodsImg,
      title: "AirPods Pro 3rd Generation",
      rating: 5,
      reviews: 1500,
      price: "$249.99",
      actionType: "bid" as const,
    },
    {
      image: AntiquePerfumeImg,
      title: "Latafa Antique Emerald Perfume",
      rating: 5,
      reviews: 2300,
      price: "$89.99",
      actionType: "buy" as const,
    },
    {
      image: SmartTvImg,
      title: 'Hisense 32" Smart TV 2023',
      rating: 4,
      reviews: 800,
      price: "$299.99",
      actionType: "buy" as const,
    },
    {
      image: MacbookImg,
      title: "MacBook Pro 13-inch",
      rating: 5,
      reviews: 3200,
      price: "$1299.99",
      actionType: "bid" as const,
    },
    {
      image: EngagementRingImg,
      title: "Diamond Engagement Ring",
      rating: 5,
      reviews: 650,
      price: "$2499.99",
      actionType: "buy" as const,
    },
    {
      image: MercedesImg,
      title: "Mercedes-Benz AMG GT",
      rating: 5,
      reviews: 180,
      price: "$89,999.99",
      actionType: "offer" as const,
    },
  ]

  const electronicsProducts = [
    {
      image: GasCookerImg,
      title: "4-Burner Gas Cooker with Oven",
      rating: 4,
      reviews: 2100,
      price: "$399.99",
      actionType: "buy" as const,
    },
    {
      image: AirPodsImg,
      title: "AirPods Pro 3rd Generation",
      rating: 5,
      reviews: 3400,
      price: "$249.99",
      actionType: "offer" as const,
    },
    {
      image: SmartTvImg,
      title: 'Hisense 32" Smart TV',
      rating: 4,
      reviews: 1200,
      price: "$299.99",
      actionType: "buy" as const,
    },
    {
      image: IronImg,
      title: "Steam Iron Electric Blue",
      rating: 4,
      reviews: 950,
      price: "$59.99",
      actionType: "buy" as const,
    },
  ]

  const featuredProducts = [
    {
      image: BedroomImg,
      title: "King Size Bedroom Furniture Set",
      rating: 4,
      reviews: 850,
      price: "$1299.99",
      actionType: "bid" as const,
    },
    {
      image: AntiquePerfumeImg,
      title: "Latafa Antique Emerald",
      rating: 5,
      reviews: 1200,
      price: "$89.99",
      actionType: "bid" as const,
    },
    {
      image: MercedesImg,
      title: "Mercedes-Benz AMG GT",
      rating: 5,
      reviews: 75,
      price: "$89,999.99",
      actionType: "buy" as const,
    },
    {
      image: BedroomImg,
      title: "Premium Bedroom Set",
      rating: 4,
      reviews: 620,
      price: "$1599.99",
      actionType: "bid" as const,
    },
    {
      image: SmartTvImg,
      title: 'Hisense 32" Smart TV 2023',
      rating: 5,
      reviews: 980,
      price: "$299.99",
      actionType: "buy" as const,
    },
    {
      image: IronImg,
      title: "Premium Steam Iron",
      rating: 4,
      reviews: 1500,
      price: "$79.99",
      actionType: "bid" as const,
    },
    {
      image: EngagementRingImg,
      title: "Diamond Engagement Ring",
      rating: 5,
      reviews: 1200,
      price: "$2499.99",
      actionType: "offer" as const,
    },
    {
      image: MacbookImg,
      title: "MacBook Pro 13-inch",
      rating: 5,
      reviews: 800,
      price: "$1299.99",
      actionType: "bid" as const,
    },
  ]

  const fashionProducts = [
    {
      image: EngagementRingImg,
      title: "Diamond Engagement Ring",
      rating: 5,
      reviews: 750,
      price: "$2499.99",
      actionType: "buy" as const,
    },
    {
      image: AntiquePerfumeImg,
      title: "Latafa Antique Emerald Perfume",
      rating: 5,
      reviews: 1200,
      price: "$89.99",
      actionType: "offer" as const,
    },
    {
      image: WashingMachineImg,
      title: "Automatic Washing Machine",
      rating: 4,
      reviews: 650,
      price: "$449.99",
      actionType: "buy" as const,
    },
    {
      image: GasCookerImg,
      title: "4-Burner Gas Cooker",
      rating: 4,
      reviews: 1800,
      price: "$399.99",
      actionType: "offer" as const,
    },
  ]

  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen bg-[#01151C] text-white">
        <MobileHeader />
        <SearchBar />
        <CategoryTabs categories={categories} />

        <div className="flex-1 overflow-auto">
          <div className="flex flex-col gap-6 pb-6">
            <FeaturedCarousel />
            <MobileProductSection title="Explore Your Interests" products={exploreProducts} />
            <MobileProductSection title="All things Electronics" products={electronicsProducts} />
            <MobileDiscoverSection />
            <MobileProductSection title="Featured Listings" products={featuredProducts} />
            <MobileProductSection title="Fashion Deals For You" products={fashionProducts} />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      <DesktopHeader />
      <DashboardHeroSection />

      <div className="px-6">
        <DesktopProductSection title="Explore Your Interests" products={exploreProducts} columns={4} />
        <DesktopProductSection title="All Things Electronics" products={electronicsProducts} columns={4} />
        <DesktopDiscoverSection />
        <DesktopProductSection title="Featured Listings" products={featuredProducts} columns={8} />
        <DesktopProductSection title="Fashion Deals For You" products={fashionProducts} columns={8} />
      </div>

      {/* <Footer /> */}
    </div>
  )
}
