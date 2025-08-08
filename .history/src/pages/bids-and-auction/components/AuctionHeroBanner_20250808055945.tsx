
import { Search } from 'lucide-react'

import AuctionHero from "@/assets/products/bids-image.jpg"

/**
 * Hero banner component with integrated search functionality
 * Features the exact design from the provided screenshots with responsive layout
 */
export function AuctionHeroBanner() {
  return (
    <div className="relative rounded-lg overflow-hidden h-48 lg:h-64 mb-6">
      

      <div className="">
        <img
          src={AuctionHer}
          alt="Auction Hero Desktop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-8">
        {/* Hero text */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-xl lg:text-4xl font-bold text-white mb-2 lg:mb-4">
            Discover all you have been
            <br />
            looking for!
          </h1>
          <p className="text-sm lg:text-xl text-white font-medium">
            Start searching, Start now
          </p>
        </div>

        {/* Integrated search bar */}
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Find everything you are looking for"
              className="w-full bg-[#095069] text-white rounded-md py-3 lg:py-4 pl-4 lg:pl-6 pr-12 lg:pr-14 text-sm lg:text-base placeholder-gray-300 border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 bg-[#00707B] hover:bg-[#008a9a] p-2 lg:p-2.5 rounded transition-colors">
              <Search className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
