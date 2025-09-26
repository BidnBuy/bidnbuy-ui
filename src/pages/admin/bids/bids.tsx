import { useNavigate } from "react-router-dom"
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table"

// Mock data for bids
const bidsData: DataItem[] = [
  {
    id: "1",
    bidder: "David Jack",
    product: "Leather Jacket",
    bidTime: "17:30",
    bidAmount: 18000,
    status: "Won",
    image: "/man-profile.png",
  },
  {
    id: "2",
    bidder: "Chloe Hans",
    product: "Leather Jacket",
    bidTime: "17:25",
    bidAmount: 17500,
    status: "Outbid",
    image: "/woman-profile.png",
  },
  {
    id: "3",
    bidder: "David Jack",
    product: "Leather Jacket",
    bidTime: "17:21",
    bidAmount: 17000,
    status: "Outbid",
    image: "/man-profile.png",
  },
  {
    id: "4",
    bidder: "Chloe Hans",
    product: "Leather Jacket",
    bidTime: "17:10",
    bidAmount: 16900,
    status: "Outbid",
    image: "/woman-profile.png",
  },
  {
    id: "5",
    bidder: "Steven Lorde",
    product: "iPhone 16",
    bidTime: "16:00",
    bidAmount: 700000,
    status: "Won",
    image: "/man-profile.png",
  },
]

const columns: Column[] = [
  {
    key: "bidder",
    label: "Bidder",
    sortable: true,
  },
  {
    key: "product",
    label: "Product",
    sortable: true,
  },
  {
    key: "bidTime",
    label: "Bid Time",
    sortable: true,
  },
  {
    key: "bidAmount",
    label: "Bid Amount",
    sortable: true,
    render: (value) => `₦${value.toLocaleString()}`,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
]

const BidsPage = () => {
  const navigate = useNavigate()

  const handleView = (bid: DataItem) => {
    navigate(`/admin/bids/${bid.id}`)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Bids</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">All Bids</h2>
        </div>

        <DataTable data={bidsData} columns={columns} searchPlaceholder="Search Bidder" onView={handleView} />
      </div>
    </div>
  )
}

export default BidsPage;
