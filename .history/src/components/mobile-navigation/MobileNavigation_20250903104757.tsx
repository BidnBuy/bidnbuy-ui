import { Link } from "react-router-dom"

import CloseIcon from "../svg-icons/CloseIcon"
import MainHomeIcon from "../svg-icons/MainHomeIcon"
import MarketPlaceOutlineIcon from "../svg-icons/MarketPlaceOutlineIcon"
import BidIcon from "../svg-icons/BidIcon"


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
          <SellIcon />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M7 7H7.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sell
          </Link>

          <Link to="/help" className="flex items-center gap-4 text-white text-lg" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
