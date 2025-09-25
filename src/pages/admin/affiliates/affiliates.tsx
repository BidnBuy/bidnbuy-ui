import { useNavigate } from "react-router-dom"
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table"

// Mock data for affiliates
const affiliatesData: DataItem[] = [
  {
    id: "1",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phone: "08034567890",
    status: "Active",
    totalReferrals: 5,
    image: "/woman-profile.png",
  },
  {
    id: "2",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phone: "08034567890",
    status: "Pending",
    totalReferrals: 0,
    image: "/woman-profile.png",
  },
  {
    id: "3",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phone: "08034567890",
    status: "Suspended",
    totalReferrals: 100,
    image: "/woman-profile.png",
  },
  {
    id: "4",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phone: "08034567890",
    status: "Active",
    totalReferrals: 19,
    image: "/woman-profile.png",
  },
  {
    id: "5",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phone: "08034567890",
    status: "Suspended",
    totalReferrals: 1100,
    image: "/woman-profile.png",
  },
]

const columns: Column[] = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email Address",
    sortable: true,
  },
  {
    key: "phone",
    label: "Phone Number",
    sortable: false,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
  {
    key: "totalReferrals",
    label: "Total Referrals",
    sortable: true,
  },
]

const AffiliatesPage = () => {
  const navigate = useNavigate()

  const handleView = (affiliate: DataItem) => {
    navigate(`/admin/affiliates/${affiliate.id}`)
  }

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      <div className="p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Affiliate Management</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">All Affiliates</h2>
        </div>

        <DataTable data={affiliatesData} columns={columns} searchPlaceholder="Search Affiliate" onView={handleView} />
      </div>
    </div>
  )
}

export default AffiliatesPage;
