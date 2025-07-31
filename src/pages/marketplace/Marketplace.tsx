import Footer from "@/components/footer/Footer"

import ProductGrid from "@/components/product-grid/ProductGrid"
import MobileHeader from "@/components/header/MobileHeader"
import DesktopHeader from "@/components/header/DesktopHeader"
import PromotionalBanner from "./components/PromotionalBanner"
import MarketplaceHeroBanner from "./components/MarketplaceHeroBanner"

export default function MarketplacePage() {


  // Recently added products
  const recentlyAddedProducts = [
    {
      image: "/products/airpods.jpeg",
      title: "Infinity to Saga",
      rating: 4,
      reviews: 1200,
      price: "$49.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/antique-perfume.jpeg",
      title: "COCO Chanel Perfume",
      rating: 5,
      reviews: 800,
      price: "$129.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/smart-tv.jpeg",
      title: "Pink Satin Yoga Mat",
      rating: 4,
      reviews: 650,
      price: "$39.99",
      actionType: "offer" as const,
    },
    {
      image: "/products/macbook.png",
      title: "Dewalt Cordless Drill",
      rating: 5,
      reviews: 1500,
      price: "$199.99",
      actionType: "offer" as const,
    },
  ]

  // Trending products
  const trendingProducts = [
    {
      image: "/products/engagement-ring.png",
      title: "Luxury Crystal Chandelier",
      rating: 5,
      reviews: 450,
      price: "$899.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/mercedes-car.jpeg",
      title: "Vintage Collectible Toys",
      rating: 4,
      reviews: 320,
      price: "$159.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/bedroom-set.jpeg",
      title: "Abstract Canvas Art",
      rating: 4,
      reviews: 280,
      price: "$79.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/washing-machine.jpeg",
      title: "Gaming Chair Pro",
      rating: 5,
      reviews: 890,
      price: "$299.99",
      actionType: "offer" as const,
    },
    {
      image: "/products/gas-cooker.jpeg",
      title: "Digital Smart Watch",
      rating: 4,
      reviews: 1200,
      price: "$249.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/iron.jpeg",
      title: "Leather Briefcase Premium",
      rating: 5,
      reviews: 340,
      price: "$189.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/airpods.jpeg",
      title: "Colorful Building Blocks",
      rating: 4,
      reviews: 560,
      price: "$45.99",
      actionType: "offer" as const,
    },
    {
      image: "/products/antique-perfume.jpeg",
      title: "Retro Gaming Console",
      rating: 5,
      reviews: 780,
      price: "$399.99",
      actionType: "bid" as const,
    },
  ]

  // Gadgets products
  const gadgetsProducts = [
    {
      image: "/products/smart-tv.jpeg",
      title: "Bose Wireless Speaker",
      rating: 5,
      reviews: 1100,
      price: "$199.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/macbook.png",
      title: "iPad Pro 11-inch",
      rating: 5,
      reviews: 2300,
      price: "$799.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/engagement-ring.png",
      title: "Canon EOS R6 Camera",
      rating: 5,
      reviews: 890,
      price: "$2499.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/mercedes-car.jpeg",
      title: "DJI Mini 3 Drone",
      rating: 4,
      reviews: 650,
      price: "$759.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/bedroom-set.jpeg",
      title: "Apple AirPods Pro",
      rating: 5,
      reviews: 3200,
      price: "$249.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/washing-machine.jpeg",
      title: "JBL Headphones",
      rating: 4,
      reviews: 1800,
      price: "$149.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/gas-cooker.jpeg",
      title: "Leather Briefcase Emerald",
      rating: 4,
      reviews: 420,
      price: "$189.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/iron.jpeg",
      title: "Colorful Toys for Toddlers",
      rating: 5,
      reviews: 890,
      price: "$59.99",
      actionType: "bid" as const,
    },
  ]

  // Recommended items
  const recommendedItems = [
    {
      image: "/products/airpods.jpeg",
      title: "Modern Living Room Set",
      rating: 4,
      reviews: 340,
      price: "$1299.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/antique-perfume.jpeg",
      title: "Washing Machine",
      rating: 5,
      reviews: 890,
      price: "$599.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/smart-tv.jpeg",
      title: "Crystal Chandelier",
      rating: 5,
      reviews: 230,
      price: "$899.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/macbook.png",
      title: "Designer Handbag",
      rating: 4,
      reviews: 560,
      price: "$299.99",
      actionType: "bid" as const,
    },
  ]

  // Top picks
  const topPicksProducts = [
    {
      image: "/products/engagement-ring.png",
      title: "LED Cinema Projector",
      rating: 4,
      reviews: 780,
      price: "$399.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/mercedes-car.jpeg",
      title: "Men's Polo Trousers",
      rating: 4,
      reviews: 450,
      price: "$79.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/bedroom-set.jpeg",
      title: "Electric Bike Foldable",
      rating: 5,
      reviews: 1200,
      price: "$899.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/washing-machine.jpeg",
      title: "Thick Winter Sunglasses",
      rating: 4,
      reviews: 340,
      price: "$129.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/gas-cooker.jpeg",
      title: "Gaming Laptop 17 inch",
      rating: 5,
      reviews: 890,
      price: "$1299.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/iron.jpeg",
      title: "LED Strip Lights",
      rating: 4,
      reviews: 1500,
      price: "$49.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/airpods.jpeg",
      title: "Yellow Casual T-Shirt",
      rating: 4,
      reviews: 670,
      price: "$29.99",
      actionType: "bid" as const,
    },
    {
      image: "/products/antique-perfume.jpeg",
      title: "Vintage T-Shirt",
      rating: 5,
      reviews: 230,
      price: "$39.99",
      actionType: "bid" as const,
    },
  ]

  return (
    <>
      {/* Mobile Layout - visible on screens smaller than lg (1024px) */}
 
        <div className="flex flex-col min-h-screen bg-[#01151C] text-white">
          <MobileHeader />

          <div className="flex-1 overflow-auto">
            <div className="flex flex-col gap-6 pb-6 pt-4">
              <ProductGrid title="Recently added products" products={recentlyAddedProducts} columns={2} />

              <ProductGrid title="Trending on BidnBuy" products={trendingProducts} columns={2} />

              <ProductGrid title="Gadgets(New, Used, Refurbished)" products={gadgetsProducts} columns={2} />

              <ProductGrid title="Recommended Items" products={recommendedItems} columns={2} />

              <ProductGrid title="Top Picks For You" products={topPicksProducts} columns={2} />
            </div>
          </div>

          <Footer />
        </div>
     

      {/* Desktop Layout - visible on lg screens and larger */}
      
        <div className="min-h-screen bg-[#01151C] text-white">
          <DesktopHeader />

          <div className="px-6 py-6">
            <MarketplaceHeroBanner />

            <ProductGrid
              title="Recently added products"
              products={recentlyAddedProducts}
              columns={4}
            />

            <ProductGrid title="Trending on BidnBuy" products={trendingProducts} columns={4} />

            <PromotionalBanner
              title="Specially Packed for the Girlies"
              backgroundImage="/marketplace/girlies-banner.png"
            />

            <ProductGrid
              title="Gadgets(New, Used, Refurbished)"
              products={gadgetsProducts}
              columns={4}
            />

            <PromotionalBanner title="All Book Lovers Shop Here" backgroundImage="/marketplace/books-banner.png" />

            <ProductGrid title="Recommended Items" products={recommendedItems} columns={4} />

            <ProductGrid title="Top Picks For You" products={topPicksProducts} columns={4} />
          </div>

          <Footer />
        </div>
 
    </>
  )
}
