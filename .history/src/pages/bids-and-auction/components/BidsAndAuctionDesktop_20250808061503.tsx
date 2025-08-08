import { AuctionCategoryImages } from "./AuctionCategoryImages"
import { AuctionCategoryTabs } from "./AuctionCategoryTabs"
import { AuctionHeroBanner } from "./AuctionHeroBanner"


const BidsAndAuctionDesktop = () => {
    const [activeCategory, setActiveCategory] = useState("daily-deals")

  /** Handles category tab changes and updates active state */
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    // In a real app, this would filter the auction items based on category
  }

  /** Updates category active states based on current selection */
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

        </div>
      </main>

    </div>
  )
}

export default BidsAndAuctionDesktop