import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Store } from "lucide-react"

// Mock data for bid details
const bidData = {
  id: "1",
  bidder: "BuildRight Inc",
  bidderEmail: "buildrightbusiness@gmail.com",
  bidderPhone: "+2348143155867",
  product: "Steel Beams",
  vendor: "SteelCo",
  vendorEmail: "steel.cobusiness@gmail.com",
  status: "Active",
  startingPrice: 50000,
  currentBid: 55000,
  timeLeft: "2 days",
  image: "/construction-worker-safety.png",
  productImage: "/steel-beams.png",
  vendorImage: "/confident-businessman.png",
}

const bidLog = [
  { bidder: "Michael Brown", amount: 53000 },
  { bidder: "Jennifer Smith", amount: 52000 },
  { bidder: "David Lee", amount: 51000 },
]

const BidDetailsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-teal-800/30 p-4 md:p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/admin/bids")}
            className="text-white hover:bg-teal-700/30"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-xl font-bold text-white">Bid Details</h1>
        </div>

        <div className="text-center space-y-4">
          <Avatar className="h-24 w-24 mx-auto">
            <AvatarImage src={bidData.image || "/placeholder.svg"} alt={bidData.bidder} />
            <AvatarFallback className="bg-teal-700 text-white text-2xl">{bidData.bidder.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-white">{bidData.bidder}</h2>
            <p className="text-teal-200 mt-1">{bidData.bidderEmail}</p>
            <p className="text-teal-200">{bidData.bidderPhone}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-6">
        {/* Product Information */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Package className="h-5 w-5 mr-2 text-teal-400" />
              Product Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <img
                src={bidData.productImage || "/placeholder.svg"}
                alt={bidData.product}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium">{bidData.product}</h3>
                <p className="text-slate-400 text-sm">View Product Page</p>
              </div>
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Vendor Information */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Store className="h-5 w-5 mr-2 text-teal-400" />
              Vendor Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={bidData.vendorImage || "/placeholder.svg"} alt={bidData.vendor} />
                <AvatarFallback className="bg-teal-700 text-white">{bidData.vendor.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-white font-medium">{bidData.vendor}</h3>
                <p className="text-slate-400 text-sm">{bidData.vendorEmail}</p>
              </div>
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Active</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Outbid</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Won</span>
            </div>
          </CardContent>
        </Card>

        {/* Auction Information */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Auction Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Starting Price</span>
              <span className="text-white font-medium">₦{bidData.startingPrice.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Current Bid</span>
              <span className="text-white font-medium">₦{bidData.currentBid.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Time Left</span>
              <span className="text-white font-medium">{bidData.timeLeft}</span>
            </div>
          </CardContent>
        </Card>

        {/* Bid Log */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Bid Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between font-medium text-slate-300 text-sm">
                <span>Bidder</span>
                <span>Amount</span>
              </div>
              {bidLog.map((bid, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <span className="text-white">{bid.bidder}</span>
                  <span className="text-white font-medium">₦{bid.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Cancel Bid</Button>
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Flag as Suspicious</Button>
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Contact Vendor</Button>
          <Button className="w-full bg-teal-600 hover:bg-teal-700">Add Dispute Tag</Button>
        </div>
      </div>
    </div>
  )
}

export default BidDetailsPage;
