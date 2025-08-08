import { AuctionHeroBanner } from "./AuctionHeroBanner"


const BidsAndAuctionDesktop = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#01151C] text-white lg:hidden">
     

   
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 pb-6 pt-4">

            <AuctionHeroBanner />

      {/* Category images - positioned between hero and tabs as per Figma */}
      <AuctionCategoryImages />

      {/* Category tabs */}
      <AuctionCategoryTabs categories={categoriesWithActiveState} onCategoryChange={handleCategoryChange} />

        </div>
      </main>

    </div>
  )
}

export default BidsAndAuctionDesktop