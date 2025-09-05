import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, Package, Truck, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const NotificationOrders = () => {
  const navigate = useNavigate();
  const  = useParams();
  const orderId = params.id as string;

  // Mock order data
  const order = {
    id: orderId,
    status: "shipped",
    trackingNumber: "TRK" + orderId,
    estimatedDelivery: "Dec 25, 2024",
    shippingAddress: "123 Main Street, Lagos, Nigeria",
    items: [
      {
        id: "1",
        name: "iPhone 16 Pink",
        image: "/images/iphone-16-pink.png",
        price: "₦1,250,000",
        quantity: 1,
      },
    ],
    timeline: [
      { status: "Order Placed", date: "Dec 20, 2024", completed: true },
      { status: "Processing", date: "Dec 21, 2024", completed: true },
      { status: "Shipped", date: "Dec 22, 2024", completed: true },
      { status: "Out for Delivery", date: "Dec 25, 2024", completed: false },
      { status: "Delivered", date: "Dec 25, 2024", completed: false },
    ],
  }

  return (
    <div className="min-h-screen bg-[#01151C]">
      {/* Header */}
      <div className="bg-teal-600 px-4 py-4 flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="text-white hover:bg-teal-700 p-2 rounded-full"
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-white text-xl font-semibold">Order #{orderId}</h1>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Order Status Card */}
        <Card className="bg-[#00222E] border-[#00707B]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Truck className="text-teal-400" size={24} />
              Order Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Status</span>
              <span className="text-teal-400 font-medium capitalize">{order.status}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Tracking Number</span>
              <span className="text-white font-mono">{order.trackingNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Estimated Delivery</span>
              <span className="text-white">{order.estimatedDelivery}</span>
            </div>
          </CardContent>
        </Card>

        {/* Order Items */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Package className="text-teal-400" size={24} />
              Order Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-700 rounded-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <div className="text-teal-400 font-semibold">{item.price}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Order Timeline */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Order Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {order.timeline.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed ? "bg-teal-500" : "bg-gray-700"
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle size={16} className="text-white" />
                    ) : (
                      <div className="w-3 h-3 bg-gray-500 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${step.completed ? "text-white" : "text-gray-400"}`}>{step.status}</h4>
                    <p className="text-gray-500 text-sm">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shipping Address */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Shipping Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{order.shippingAddress}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NotificationOrders;