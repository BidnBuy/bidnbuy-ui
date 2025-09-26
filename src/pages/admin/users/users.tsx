import { useNavigate } from "react-router-dom";
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table";

// Mock data based on the designs
const usersData: DataItem[] = [
  {
    id: "1",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Active",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "2",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Pending",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "3",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "4",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Active",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "5",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "6",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "7",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Active",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "8",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Pending",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "9",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
  },
  {
    id: "10",
    name: "Sophia Clark",
    email: "sophiaclark@gmail.com",
    phoneNumber: "08034567890",
    status: "Suspended",
    registrationDate: "10 October 2025",
    image: "/placeholder-user.jpg",
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
    key: "registrationDate",
    label: "Registration Date",
    sortable: true,
  },
]

export default function UsersPage() {
  const navigate = useNavigate();

  const handleView = (user: DataItem) => {
    navigate(`/admin/users/${user.id}`)
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">User Management</h1>
        <p className="text-slate-400 mt-2">Manage all users on your platform</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">All Users</h2>
        <DataTable data={usersData} columns={columns} searchPlaceholder="Search User" onView={handleView} />
      </div>
    </div>
  )
}
