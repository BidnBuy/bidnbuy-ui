import { useNavigate } from "react-router-dom"
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table"

// Mock data for orders
const ordersData: DataItem[] = [
  {
    id: "12345",
    orderId: "12345",
    product: "Leather Jacket",
    buyer: "Elliott James",
    amount: 10000,
    paymentStatus: "Pending",
  },
  {
    id: "12344",
    orderId: "12344",
    product: "Leather Jacket",
    buyer: "Elliott James",
    amount: 10000,
    paymentStatus: "Paid",
  },
  {
    id: "12343",
    orderId: "12343",
    product: "Leather Jacket",
    buyer: "Elliott James",
    amount: 10000,
    paymentStatus: "Failed",
  },
  {
    id: "12342",
    orderId: "12342",
    product: "Leather Jacket",
    buyer: "Elliott James",
    amount: 10000,
    paymentStatus: "Refunded",
  },
  {
    id: "11029",
    orderId: "11029",
    product: "Leather Jacket",
    buyer: "Elliott James",
    amount: 12000,
    paymentStatus: "Pending",
  },
]

const columns: Column[] = [
  {
    key: "orderId",
    label: "Order ID",
    sortable: true,
  },
  {
    key: "product",
    label: "Product",
    sortable: true,
  },
  {
    key: "buyer",
    label: "Buyer",
    sortable: true,
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
    render: (value) => `₦${value.toLocaleString()}`,
  },
  {
    key: "paymentStatus",
    label: "Payment Status",
    sortable: true,
  },
]

const OrdersPage = () => {
  const navigate = useNavigate()

  const handleView = (order: DataItem) => {
    navigate(`/admin/orders/${order.id}`)
  }

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      <div className="p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Orders</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">All Orders</h2>
        </div>

        <DataTable data={ordersData} columns={columns} searchPlaceholder="Search Product" onView={handleView} />
      </div>
    </div>
  )
}

export default OrdersPage;
