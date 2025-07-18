
import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

import MarketPlaceIcon from "../svg-icons/MarketPlaceIcon"

export function DesktopNavigation() {
  return (
    <div className="bg-[#00707B] px-6 py-2.5">
      <div className="flex items-center justify-between text-sm font-medium">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z" />
          </svg>
          <span>Sell on BidnBuy</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/product-home" className="flex items-center gap-2 hover:text-gray-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
            </svg>
            Home
          </Link>
          <Link to="/vendor-upload-product" className="flex items-center gap-2 hover:text-gray-200">
            <MarketPlaceIcon  />
            Marketplace
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-gray-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" />
            </svg>
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
