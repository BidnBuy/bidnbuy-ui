import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Store, CreditCard, Truck, Clock } from "lucide-react"

// Mock data for order details
const orderData = {
  id: "1234567",
  buyer: "Sophia Clark",
  quantity: 2,
  unitPrice: 190000,
  totalPrice: 380000,
  vendor: "Alex Johnson",
  vendorEmail: "Alex.johnsonbusiness@gmail.com",
  orderType: "Buy Now",
  paymentMethod: "Wallet",
  paymentStatus: "Paid",
  transactionId: "TXN1234567890",
  deliveryAddress: "123 Main Road, Abuja Nigeria",
  trackingNo: "TRACK9876543210",
  deliveryStatus: "Delivered",
  vendorImage: "/confident-businessman.png",
}

const orderTimeline = [
  { status: "Ordered", completed: true },
  { status: "Paid", completed: true },
  { status: "Shipped", completed: true },
  { status: "Delivered", completed: true },
]

const OrderDetailsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      {/* Header */}
      <div className="bg-teal-800/30 p-4 md:p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/admin/orders")}
            className="text-white hover:bg-teal-700/30"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-xl font-bold text-white">Order Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-6">
        {/* Order Information */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Order Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Order ID</span>
              <span className="text-white font-medium">#{orderData.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Buyer</span>
              <span className="text-white font-medium">{orderData.buyer}</span>
            </div>
          </CardContent>
        </Card>

        {/* Product Information */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Product Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Quantity</span>
              <span className="text-white font-medium">{orderData.quantity}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Unit Price</span>
              <span className="text-white font-medium">₦{orderData.unitPrice.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Total Price</span>
              <span className="text-white font-medium">₦{orderData.totalPrice.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        {/* Vendor Information */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Store className="h-5 w-5 mr-2 text-teal-400" />
              Vendor Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={orderData.vendorImage || "/placeholder.svg"} alt={orderData.vendor} />
                <AvatarFallback className="bg-teal-700 text-white">{orderData.vendor.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-white font-medium">{orderData.vendor}</h3>
                <p className="text-slate-400 text-sm">{orderData.vendorEmail}</p>
              </div>
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Type */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Order Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Type</span>
              <span className="text-white font-medium">{orderData.orderType}</span>
            </div>
          </CardContent>
        </Card>

        {/* Payment Details */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-teal-400" />
              Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Payment Method</span>
              <span className="text-white font-medium">{orderData.paymentMethod}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Status</span>
              <Badge variant="default">{orderData.paymentStatus}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Transaction ID</span>
              <span className="text-white font-medium">{orderData.transactionId}</span>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Information */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Truck className="h-5 w-5 mr-2 text-teal-400" />
              Delivery Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between">
              <span className="text-slate-300">Address</span>
              <span className="text-white font-medium text-right">{orderData.deliveryAddress}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Tracking No</span>
              <span className="text-white font-medium">{orderData.trackingNo}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Status</span>
              <Badge variant="default">{orderData.deliveryStatus}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Order Timeline */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="h-5 w-5 mr-2 text-teal-400" />
              Order Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orderTimeline.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      step.completed ? "bg-teal-600 border-teal-600" : "border-slate-600"
                    }`}
                  />
                  <span className={`${step.completed ? "text-white" : "text-slate-400"}`}>{step.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Update Status</Button>
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Cancel Order</Button>
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Resend Email</Button>
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Open Message Tab</Button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsPage;