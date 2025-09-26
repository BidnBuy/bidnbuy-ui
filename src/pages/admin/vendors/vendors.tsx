import { useNavigate} from "react-router-dom"
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table"

// Mock data based on the designs
const vendorsData: DataItem[] = [
  {
    id: "1",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Verified",
    totalSales: "1,000,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "2",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Pending",
    totalSales: "2,000,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "3",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    totalSales: "300,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "4",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Verified",
    totalSales: "5,000,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "5",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    totalSales: "10,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "6",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    totalSales: "900,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "7",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Verified",
    totalSales: "150,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "8",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Pending",
    totalSales: "290,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "9",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    totalSales: "167,000",
    image: "/placeholder-user.jpg",
  },
  {
    id: "10",
    businessName: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Verified",
    totalSales: "100,000",
    image: "/placeholder-user.jpg",
  },
]

const columns: Column[] = [
  {
    key: "businessName",
    label: "Business Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email Address",
    sortable: true,
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
  {
    key: "totalSales",
    label: "Total Sales",
    sortable: true,
    render: (value) => `₦${value}`,
  },
]

const VendorsPage = () => {
  const navigate = useNavigate()

  const handleView = (vendor: DataItem) => {
    navigate(`/admin/vendors/${vendor.id}`)
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Vendor Management</h1>
        <p className="text-slate-400 mt-2">Manage all vendors on your platform</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">All Vendors</h2>
        <DataTable data={vendorsData} columns={columns} searchPlaceholder="Search Vendor" onView={handleView} />
      </div>
    </div>
  )
}

export default VendorsPage;
