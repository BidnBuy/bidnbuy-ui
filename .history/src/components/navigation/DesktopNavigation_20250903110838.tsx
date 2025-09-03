import { Link } from "react-router-dom"

import MarketPlaceIcon from "../svg-icons/MarketPlaceIcon"
import HomeIcon from "../svg-icons/HomeIcon"
import BidIcon from "../svg-icons/BidIcon"
import AddToCartIcon from "../svg-icons/AddToCartIcon"
import SellOutlineIcon from "../svg-icons/SellOutlineIcon"
import HelpAndContactIcon from "../svg-icons/HelpAndContactIcon"
import MainHomeIcon from "../svg-icons/MainHomeIcon"

const DesktopNavigation = () => {
  return (
    <div className="bg-[#00707B] px-6 py-2.5">
      <div className="flex items-center justify-between text-sm font-medium">
        <div className="flex items-center gap-2">
          <SellOutlineIcon width={14} height={14} />
          <span>Sell on BidnBuy</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/product-home" className="flex items-center gap-2 hover:text-gray-200">
          <MainHomeIcon width={14} height={14} />
            <HomeIcon />
            Home
          </Link>
          <Link to="/marketplace" className="flex items-center gap-2 hover:text-gray-200">
            <MarketPlaceIcon  />
            Marketplace
          </Link>
          <Link to="/bids-and-auction" className="flex items-center gap-2 hover:text-gray-200">
            
            <BidIcon />
            Bids&Auctions
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-gray-200">
            <AddToCartIcon />
            Cart
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-gray-200">
            
            <HelpAndContactIcon width={14} height={14} />
            Help & Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavigation;
