import HomeInteriorImage from "../assets/home-interior.png"
import GadgetImage from "../assets/gadget-product.png"
import FashionImage from "../assets/fashion.png"
import AppliancesImage from "../assets/appliances.jpg"
import HomeInteriorImage from "../assets/home-interior.png"
import HomeInteriorImage from "../assets/home-interior.png"

export function AuctionCategoryImages() {
  const categories = [
    {
      id: "home-decor",
      image: "/auctions/category-home-decor.png",
      title: "Home & Decor",
    },
    {
      id: "electronics",
      image: "/auctions/category-electronics.png", 
      title: "Electronics",
    },
    {
      id: "fashion",
      image: "/auctions/category-fashion.png",
      title: "Fashion",
    },
    {
      id: "jewelry",
      image: "/auctions/category-jewelry.png",
      title: "Jewelry",
    },
    {
      id: "automotive", 
      image: "/auctions/category-automotive.png",
      title: "Automotive",
    },
    {
      id: "collectibles",
      image: "/auctions/category-collectibles.png",
      title: "Collectibles",
    },
  ]

  return (
    <div className="px-4 lg:px-6 mb-6">
      {/* Mobile: 4 categories in full width grid */}
      <div className="grid grid-cols-4 gap-3 lg:hidden">
        {categories.slice(0, 4).map((category) => (
          <button
            key={category.id}
            className="group flex flex-col items-center"
            onClick={() => {
              console.log(`Selected category: ${category.title}`)
            }}
          >
            {/* Category image taking full width of grid cell */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-200 group-hover:scale-105 transition-transform duration-200">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Category title */}
            <p className="text-xs text-white text-center mt-1.5 font-medium leading-tight">
              {category.title}
            </p>
          </button>
        ))}
      </div>

      {/* Desktop: 6 categories in full width grid */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="group flex flex-col items-center"
            onClick={() => {
              console.log(`Selected category: ${category.title}`)
            }}
          >
            {/* Category image taking full width of grid cell */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-200 group-hover:scale-105 transition-transform duration-200">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Category title */}
            <p className="text-sm text-white text-center mt-2 font-medium">
              {category.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
