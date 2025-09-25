import { useNavigate } from "react-router-dom";
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table"

// Mock data for payments
const paymentsData: DataItem[] = [
  {
    id: "1234567890-1",
    transactionId: "1234567890",
    payment: "Leather Jacket",
    amount: "10,000",
    paymentStatus: "Pending",
    type: "buyer_payment",
  },
  {
    id: "1234567890-2",
    transactionId: "1234567890",
    payment: "Vendor payout",
    amount: "50,000",
    paymentStatus: "Paid",
    type: "vendor_payout",
  },
  {
    id: "1234567890-3",
    transactionId: "1234567890",
    payment: "Platform Commission",
    amount: "1,000",
    paymentStatus: "Paid",
    type: "platform_commission",
  },
  {
    id: "1234567890-4",
    transactionId: "1234567890",
    payment: "Refund",
    amount: "3,000",
    paymentStatus: "Refunded",
    type: "refund",
  },
  {
    id: "1234567890-5",
    transactionId: "1234567890",
    payment: "Leather Jacket",
    amount: "10,000",
    paymentStatus: "Pending",
    type: "buyer_payment",
  },
  {
    id: "1234567890-6",
    transactionId: "1234567890",
    payment: "Leather Jacket",
    amount: "10,000",
    paymentStatus: "Pending",
    type: "buyer_payment",
  },
  {
    id: "1234567890-7",
    transactionId: "1234567890",
    payment: "Leather Jacket",
    amount: "10,000",
    paymentStatus: "Pending",
    type: "buyer_payment",
  },
  {
    id: "1234567890-8",
    transactionId: "1234567890",
    payment: "Leather Jacket",
    amount: "10,000",
    paymentStatus: "Pending",
    type: "buyer_payment",
  },
]

const columns: Column[] = [
  {
    key: "transactionId",
    label: "Transaction ID",
    sortable: true,
  },
  {
    key: "payment",
    label: "Payment",
    sortable: true,
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
  },
  {
    key: "paymentStatus",
    label: "Payment Status",
    sortable: true,
  },
]

const PaymentsPage = () => {
  const navigate = useNavigate()

  const handleView = (payment: DataItem) => {
    navigate(`/admin/payments/${payment.id}`)
  }

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      <div className="p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Payments</h1>
          <p className="text-slate-400">Manage all payment transactions</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">All Payments</h2>
        </div>

        <DataTable data={paymentsData} columns={columns} searchPlaceholder="Search Payments" onView={handleView} />
      </div>
    </div>
  )
}

export default PaymentsPage;
