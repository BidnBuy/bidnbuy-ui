
import { Link } from "react-router-dom"

import { ShoppingCart } from "lucide-react"

import MarketPlaceIcon from "../svg-icons/MarketPlaceIcon"
import SellIcon from "../svg-icons/SellIcon"
import HomeIcon from "../svg-icons/HomeIcon"
import BidIcon from "../svg-icons/BidIcon"

const DesktopNavigation = () => {
  return (
    <div className="bg-[#00707B] px-6 py-2.5">
      <div className="flex items-center justify-between text-sm font-medium">
        <div className="flex items-center gap-2">
          <SellIcon />
          <span>Sell on BidnBuy</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/product-home" className="flex items-center gap-2 hover:text-gray-200">
            <HomeIcon />
            Home
          </Link>
          <Link to="/marketplace" className="flex items-center gap-2 hover:text-gray-200">
            <MarketPlaceIcon  />
            Marketplace
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-gray-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" />
            </svg>
            <BidIcon />
            Bids&Auctions
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-gray-200">
            <ShoppingCart size={14} />
            Cart
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-gray-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>
            Help & Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavigation;
