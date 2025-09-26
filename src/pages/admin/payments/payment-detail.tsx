import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


const PaymentDetailsPage = () => {
  const navigate = useNavigate()
  const { id } = useParams<{id: string}>()

  // Mock payment data based on the ID
  const getPaymentData = (id: string) => {
    if (id.includes("vendor_payout")) {
      return {
        id: id,
        transactionId: "1234567890",
        type: "Vendor Payout",
        amount: "₦50,000",
        status: "Paid",
        date: "2025-01-15",
        description: "Payout to vendor for completed sale",
        vendor: "Fashion Store Ltd",
        product: "Leather Jacket",
        buyer: "John Smith",
        paymentMethod: "Bank Transfer",
        processingFee: "₦500",
        netAmount: "₦49,500",
      }
    } else if (id.includes("platform_commission")) {
      return {
        id: id,
        transactionId: "1234567890",
        type: "Platform Commission",
        amount: "₦1,000",
        status: "Paid",
        date: "2025-01-15",
        description: "Platform commission from sale",
        vendor: "Fashion Store Ltd",
        product: "Leather Jacket",
        buyer: "John Smith",
        paymentMethod: "Automatic Deduction",
        processingFee: "₦0",
        netAmount: "₦1,000",
      }
    } else if (id.includes("refund")) {
      return {
        id: id,
        transactionId: "1234567890",
        type: "Refund",
        amount: "₦3,000",
        status: "Refunded",
        date: "2025-01-15",
        description: "Partial refund for damaged item",
        vendor: "Fashion Store Ltd",
        product: "Leather Jacket",
        buyer: "John Smith",
        paymentMethod: "Bank Transfer",
        processingFee: "₦0",
        netAmount: "₦3,000",
      }
    } else {
      return {
        id: id,
        transactionId: "1234567890",
        type: "Buyer Payment",
        amount: "₦10,000",
        status: "Pending",
        date: "2025-01-15",
        description: "Payment for product purchase",
        vendor: "Fashion Store Ltd",
        product: "Leather Jacket",
        buyer: "John Smith",
        paymentMethod: "Card Payment",
        processingFee: "₦150",
        netAmount: "₦9,850",
      }
    }
  }

  if (!id) {
  return <div>No payment ID found.</div>;
}


  const payment = getPaymentData(id)

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "default"
      case "pending":
        return "secondary"
      case "refunded":
        return "outline"
      case "failed":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      {/* Mobile Header */}
      <div className="md:hidden bg-teal-800/30 p-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-white hover:text-teal-200">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Payment Details
        </button>
      </div>

      <div className="p-4 md:p-6 space-y-6">
        {/* Desktop Back Button */}
        <div className="hidden md:block">
          <button onClick={() => navigate(-1)} className="flex items-center text-white hover:text-teal-200 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Payments
          </button>
        </div>

        {/* Payment Overview */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">{payment.type}</h1>
              <div className="text-3xl font-bold text-teal-400 mb-2">{payment.amount}</div>
              <Badge variant={getStatusVariant(payment.status)} className="text-sm">
                {payment.status}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Details */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Transaction Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Transaction ID</span>
                <span className="text-white font-medium">{payment.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Date</span>
                <span className="text-white font-medium">{payment.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Payment Method</span>
                <span className="text-white font-medium">{payment.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Description</span>
                <span className="text-white font-medium">{payment.description}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Information */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Order Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Product</span>
                <span className="text-white font-medium">{payment.product}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Buyer</span>
                <span className="text-white font-medium">{payment.buyer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Vendor</span>
                <span className="text-white font-medium">{payment.vendor}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Breakdown */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Payment Breakdown</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Gross Amount</span>
                <span className="text-white font-medium">{payment.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Processing Fee</span>
                <span className="text-white font-medium">{payment.processingFee}</span>
              </div>
              <div className="flex justify-between border-t border-slate-600 pt-3">
                <span className="text-slate-300 font-medium">Net Amount</span>
                <span className="text-white font-bold">{payment.netAmount}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        {payment.status === "Pending" && (
          <div className="space-y-3">
            <Button
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => console.log("Process payment")}
            >
              Process Payment
            </Button>
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-200 hover:bg-slate-600/50"
              onClick={() => console.log("Cancel payment")}
            >
              Cancel Payment
            </Button>
          </div>
        )}

        {payment.status === "Paid" && (
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full bg-red-600/20 border border-red-600/50 text-red-400 hover:bg-red-600/30"
              onClick={() => console.log("Issue refund")}
            >
              Issue Refund
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PaymentDetailsPage;
