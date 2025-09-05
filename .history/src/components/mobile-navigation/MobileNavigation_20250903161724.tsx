import { Link } from "react-router-dom"

import CloseIcon from "../svg-icons/CloseIcon"
import MainHomeIcon from "../svg-icons/MainHomeIcon"
import MarketPlaceOutlineIcon from "../svg-icons/MarketPlaceOutlineIcon"
import BidIcon from "../svg-icons/BidIcon"
import SellOutlineIcon from "../svg-icons/SellOutlineIcon"
import HelpAndContactIcon from "../svg-icons/HelpAndContactIcon"

type MobileNavigationProps = {
  isOpen: boolean
  onClose: () => void
  isLoggedIn?: boolean
}

export function MobileNavigation({ isOpen, onClose, isLoggedIn = false }: MobileNavigationProps) {
  if (!isOpen) return null

  const handleLogout = () => {
    console.log("Logging out...")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#01151C] w-full max-w-full overflow-x-hidden">
      {/* Close button */}
      <div className="flex justify-end p-4 w-full max-w-full overflow-x-hidden">
        <button onClick={onClose} className="text-white p-2 cursor-pointer">
          <CloseIcon />
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="px-6 py-4 w-full max-w-full overflow-x-hidden">
        <nav className="space-y-6 w-full max-w-full overflow-x-hidden">
          <Link to="/" className="flex items-center gap-4 text-white text-lg" onClick={onClose}>
          
            <MainHomeIcon />

            Home
          </Link>

          <Link to="/marketplace" className="flex items-center gap-4 text-white text-lg" onClick={onClose}>
            <MarketPlaceOutlineIcon />
            
            Marketplace
          </Link>

          <Link to="/bids-and-auction" className="flex items-center gap-4 text-white text-lg" onClick={onClose}>
          <BidIcon width={24} height={24} />
           
            Bids & Auctions
          </Link>


          <Link to="/sell" className="flex items-center gap-4 text-white text-lg" onClick={onClose}>
        
          <SellOutlineIcon />
           
            Sell
          </Link>

          <Link to="/help" className="flex items-center gap-4 text-white text-lg" onClick={onClose}>
            <HelpAndContactIcon />

            Help & Contact
          </Link>
        </nav>

        {/* Conditional Account Section */}
        {isLoggedIn ? (
          // Logged in state - Show Log Out
          <div className="mt-12">
            <button
              onClick={handleLogout}
              className="text-[#00707B] text-lg font-medium hover:text-[#008a9a] transition-colors"
            >
              Log Out
            </button>
          </div>
        ) : (
          // Logged out state - Show Sign In and Create Account
          <div className="mt-12 space-y-6">
            <div className="text-center">
              <p className="text-gray-300 text-lg mb-4">Already have an account?</p>
              <Link to="/login/customer" className="text-white underline text-lg" onClick={onClose}>
                Sign In
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-300 text-lg mb-4">New to BidnBuy?</p>
              <Link to="/signup/customer" onClick={onClose}>
                <button className="bg-[#00707B] text-white px-8 py-3 rounded-lg text-lg font-medium w-full max-w-xs">
                  Create an account
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
