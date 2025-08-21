import { ManagementPageLayout } from "@/components/shared/admin/ManagementPageLayout"
import type { BidData, ManagementPageConfig } from "@/types/admin-management"
import { useState, useMemo } from "react"
// import { ManagementPageLayout } from "@/features/admin-management/components/management-page-layout"

const mockBids: BidData[] = [
  {
    id: "1",
    bidder: "David Jack",
    product: "Leather Jacket",
    bidTime: "17:30",
    bidAmount: 18000,
    status: "Won",
    avatar: "/images/amelia-profile.jpg",
  },
  {
    id: "2",
    bidder: "Chloe Hans",
    product: "Leather Jacket",
    bidTime: "17:25",
    bidAmount: 17500,
    status: "Outbid",
    avatar: "/images/amelia-profile.jpg",
  },
  {
    id: "3",
    bidder: "David Jack",
    product: "Leather Jacket",
    bidTime: "17:21",
    bidAmount: 17000,
    status: "Outbid",
    avatar: "/images/amelia-profile.jpg",
  },
  {
    id: "4",
    bidder: "Steven Lorde",
    product: "iPhone 16",
    bidTime: "16:00",
    bidAmount: 700000,
    status: "Won",
    avatar: "/images/amelia-profile.jpg",
  },
  {
    id: "5",
    bidder: "Jennifer Jill",
    product: "iPhone 16",
    bidTime: "15:55",
    bidAmount: 695000,
    status: "Outbid",
    avatar: "/images/amelia-profile.jpg",
  },
]

const pageConfig: ManagementPageConfig = {
  title: "Bids",
  searchPlaceholder: "Search Bidder",
  itemName: "Bid",
  hasStatusFilter: true,
  columns: [
    { key: "bidder", label: "Bidder" },
    { key: "product", label: "Product" },
    { key: "bidTime", label: "Bid Time" },
    { key: "bidAmount", label: "Bid Amount" },
    { key: "status", label: "Status" },
  ],
  mobileCard: (item: BidData) => ({
    title: "BuildRight Inc.",
    subtitle: `Vendor: SteelCo`,
    additionalInfo: [`Product: ${item.product}`],
    avatar: item.avatar,
  }),
}

const AdminBidManagement = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const filteredData = useMemo(() => {
    if (!searchQuery) return mockBids

    return mockBids.filter(
      (bid) =>
        bid.bidder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bid.product.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleSort = (sortBy: string) => {
    console.log("Sort by:", sortBy)
  }

  const handleFilter = (filter: string) => {
    console.log("Filter by:", filter)
  }

  const handleViewBid = (bid: BidData) => {
    console.log("Navigating to bid details:", bid.id)
  }

  return (
    <ManagementPageLayout
      config={pageConfig}
      data={filteredData}
      onSearch={handleSearch}
      onSort={handleSort}
      onFilter={handleFilter}
      onView={handleViewBid}
      isLoading={isLoading}
      basePath="/admin/bids"
    />
  )
}

export default AdminBidManagement;
