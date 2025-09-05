import { Link } from "react-router-dom"

import MarketPlaceIcon from "../svg-icons/MarketPlaceIcon"
import BidIcon from "../svg-icons/BidIcon"
import AddToCartIcon from "../svg-icons/AddToCartIcon"
import SellOutlineIcon from "../svg-icons/SellOutlineIcon"
import HelpAndContactIcon from "../svg-icons/HelpAndContactIcon"
import MainHomeIcon from "../svg-icons/MainHomeIcon"
import { Button } from "../ui/button"
import { Bell } from "lucide-react"

type NotificationHeaderProps = {
  unreadCount: number
}

const DesktopNavigation = () => {
  const { unreadCount } 
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
          <Link to="/cart" className="flex items-center gap-2 hover:text-gray-200">
            <AddToCartIcon />
            Cart
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-gray-200">
            
            <HelpAndContactIcon width={14} height={14} />
            Help & Contact
          </Link>

          <Button variant="ghost" size="sm" className="text-white hover:bg-teal-700 p-2 relative">
                      <Bell size={20} />
                      {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {unreadCount > 9 ? "9+" : unreadCount}
                        </span>
                      )}
                    </Button>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavigation;
