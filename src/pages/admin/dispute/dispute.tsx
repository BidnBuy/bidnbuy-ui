import { useNavigate } from "react-router-dom";
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table"

// Mock data for disputes
const disputesData: DataItem[] = [
  {
    id: "12345",
    disputeId: "12345",
    product: "Hermes Birkin Bag",
    against: "Vendor",
    disputeStatus: "Resolved",
    dateOpened: "2025-01-15",
    buyer: "Sophia Clark",
    vendor: "Alex Johnson",
  },
  {
    id: "12346",
    disputeId: "12346",
    product: "Hermes Birkin Bag",
    against: "Buyer",
    disputeStatus: "Resolved",
    dateOpened: "2025-01-14",
    buyer: "John Smith",
    vendor: "Fashion Store",
  },
  {
    id: "12347",
    disputeId: "12347",
    product: "Hermes Birkin Bag",
    against: "Vendor",
    disputeStatus: "Resolved",
    dateOpened: "2025-01-13",
    buyer: "Emma Wilson",
    vendor: "Luxury Goods",
  },
  {
    id: "12348",
    disputeId: "12348",
    product: "Hermes Birkin Bag",
    against: "Vendor",
    disputeStatus: "Resolved",
    dateOpened: "2025-01-12",
    buyer: "Michael Brown",
    vendor: "Premium Items",
  },
  {
    id: "12349",
    disputeId: "12349",
    product: "Hermes Birkin Bag",
    against: "Vendor",
    disputeStatus: "unresolved",
    dateOpened: "2025-01-11",
    buyer: "Sarah Davis",
    vendor: "Elite Fashion",
  },
  {
    id: "12350",
    disputeId: "12350",
    product: "Hermes Birkin Bag",
    against: "Vendor",
    disputeStatus: "Resolved",
    dateOpened: "2025-01-10",
    buyer: "David Miller",
    vendor: "Luxury Boutique",
  },
  {
    id: "12351",
    disputeId: "12351",
    product: "Hermes Birkin Bag",
    against: "Vendor",
    disputeStatus: "Vendor suspended",
    dateOpened: "2025-01-09",
    buyer: "Lisa Anderson",
    vendor: "Fashion Hub",
  },
  {
    id: "12352",
    disputeId: "12352",
    product: "Leather Jacket",
    against: "Vendor",
    disputeStatus: "Resolved",
    dateOpened: "2025-01-08",
    buyer: "Robert Taylor",
    vendor: "Leather Works",
  },
]

const columns: Column[] = [
  {
    key: "disputeId",
    label: "Dispute ID",
    sortable: true,
  },
  {
    key: "product",
    label: "Product",
    sortable: true,
  },
  {
    key: "against",
    label: "Against",
    sortable: true,
  },
  {
    key: "disputeStatus",
    label: "Dispute Status",
    sortable: true,
  },
]

export default function DisputesPage() {
  const navigate = useNavigate()

  const handleView = (dispute: DataItem) => {
    navigate(`/admin/disputes/${dispute.id}`)
  }

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      <div className="p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Disputes</h1>
          <p className="text-slate-400">Manage and resolve customer disputes</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">All Disputes</h2>
        </div>

        <DataTable data={disputesData} columns={columns} searchPlaceholder="Search Disputes" onView={handleView} />
      </div>
    </div>
  )
}
