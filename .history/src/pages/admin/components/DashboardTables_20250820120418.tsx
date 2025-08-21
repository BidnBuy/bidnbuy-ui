import { Badge } from "@/components/ui/badge"

/**
 * Types for auction data.
 */

type Auction = {
  id: string
  product: string
  currentBid: number
  timeRemaining: string
  bids: number
  status: "Active" | "Ended"
}

/**
 * type for product listing.
 */
type ProductListing = {
  id: string
  product: string
  price: number
  inventory: number
  status: "In Stock" | "Out of Stock"
}

/**
 * type for top item (product or vendor).
 */
type TopItem = {
  id: string
  name: string
  sales: number
}

/**
 * Props for the DashboardTables component.
 */
type DashboardTablesProps = {
  auctions?: Auction[]
  productListings?: ProductListing[]
  topProducts?: TopItem[]
  topVendors?: TopItem[]
  showAuctions?: boolean
  showProducts?: boolean
  showTopItems?: boolean
}

/**
 * DashboardTables component displays various data tables.
 * @param {DashboardTablesProps} props - The component props.
 * @returns {JSX.Element} The rendered tables.
 */

const DashboardTables = ({
  auctions = [],
  productListings = [],
  topProducts = [],
  topVendors = [],
  showAuctions = false,
  showProducts = false,
  showTopItems = true,
}: DashboardTablesProps) => {
  const formatPrice = (amount: number): string => {
    return `N${amount.toLocaleString()}`
  }

  return (
    <div className="space-y-8">
      {/* Active Auctions Table - Desktop Only */}
      {showAuctions && auctions.length > 0 && (
        <div className="hidden md:block">
          <h2 className="text-white text-xl font-semibold mb-6">Active Auctions</h2>
          <div className="p-6 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-300 border-b border-[#00707B]">
                    <th className="py-3 px-4 font-semibold">Product</th>
                    <th className="py-3 px-4 font-semibold">Current Bid</th>
                    <th className="py-3 px-4 font-semibold">Time Remaining</th>
                    <th className="py-3 px-4 font-semibold">Bids</th>
                    <th className="py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {auctions.map((auction) => (
                    <tr key={auction.id} className="border-b border-[#00707B]/30 hover:bg-[#00707B]/10">
                      <td className="py-3 px-4 text-white">{auction.product}</td>
                      <td className="py-3 px-4 text-white">{formatPrice(auction.currentBid)}</td>
                      <td className="py-3 px-4 text-gray-300">{auction.timeRemaining}</td>
                      <td className="py-3 px-4 text-white">{auction.bids}</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-[#00707B] text-white hover:bg-[#00707B]/80">{auction.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Product Listings Table - Desktop Only */}
      {showProducts && productListings.length > 0 && (
        <div className="hidden md:block">
          <h2 className="text-white text-xl font-semibold mb-6">Product Listings</h2>
          <div className="p-6 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-300 border-b border-[#00707B]">
                    <th className="py-3 px-4 font-semibold">Product</th>
                    <th className="py-3 px-4 font-semibold">Price</th>
                    <th className="py-3 px-4 font-semibold">Inventory</th>
                    <th className="py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {productListings.map((product) => (
                    <tr key={product.id} className="border-b border-[#00707B]/30 hover:bg-[#00707B]/10">
                      <td className="py-3 px-4 text-white">{product.product}</td>
                      <td className="py-3 px-4 text-white">{formatPrice(product.price)}</td>
                      <td className="py-3 px-4 text-gray-300">{product.inventory}</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-[#00707B] text-white hover:bg-[#00707B]/80">{product.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Top Products and Vendors Tables */}
      {showTopItems && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[35px]">
          {/* Top Products */}
          {topProducts.length > 0 && (
            <div>
              <h2 className="text-white text-xl font-semibold mb-6">Top Products</h2>
              <div className="p-6 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-300 border-b border-[#00707B]">
                        <th className="py-3 px-4 font-semibold">#</th>
                        <th className="py-3 px-4 font-semibold">Name</th>
                        <th className="py-3 px-4 font-semibold">Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topProducts.map((product, index) => (
                        <tr key={product.id} className="border-b border-[#00707B]/30 hover:bg-[#00707B]/10">
                          <td className="py-3 px-4 text-white">{index + 1}</td>
                          <td className="py-3 px-4 text-white">{product.name}</td>
                          <td className="py-3 px-4 text-gray-300">{product.sales} Sales</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Top Vendors */}
          {topVendors.length > 0 && (
            <div>
              <h2 className="text-white text-xl font-semibold mb-6">Top Vendors</h2>
              <div className="p-6 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-300 border-b border-[#00707B]">
                        <th className="py-3 px-4 font-semibold">#</th>
                        <th className="py-3 px-4 font-semibold">Name</th>
                        <th className="py-3 px-4 font-semibold">Total Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topVendors.map((vendor, index) => (
                        <tr key={vendor.id} className="border-b border-[#00707B]/30 hover:bg-[#00707B]/10">
                          <td className="py-3 px-4 text-white">{index + 1}</td>
                          <td className="py-3 px-4 text-white">{vendor.name}</td>
                          <td className="py-3 px-4 text-gray-300">{vendor.sales} Sales</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
