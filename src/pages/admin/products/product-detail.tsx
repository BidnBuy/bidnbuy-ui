import { useNavigate } from "react-router-dom"
import { DetailView } from "@/components/data-management/detail-view"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Package, DollarSign, Tag, Clock, User } from "lucide-react"

type SectionItem = {
    label: string;
  items?: string
  value: string | React.ReactNode
  icon?: React.ReactNode
}

// Mock product data
const productData = {
  id: "1",
  productName: "Vintage Leather Jacket",
  description:
    "A classic vintage leather jacket, perfect for any wardrobe. Made from high-quality leather, this jacket features a timeless design and durable construction.",
  price: "10,000",
  inventory: "15",
  category: "Clothing",
  image: "/placeholder.svg",
  vendor: {
    name: "Alex Johnson",
    email: "Alex.johnsonbusiness@gmail.com",
    avatar: "/placeholder-user.jpg",
  },
  auction: {
    startingPrice: "9,000",
    currentBid: "",
    timeLeft: "2 days",
  },
  status: {
    approval: "Approved",
    auction: "Active",
  },
}

const ProductDetailPage = () => {
  const navigate = useNavigate();

  const sections: { title: string; items: SectionItem[] }[] = [
    {
      title: "Product Information",
      items: [
        { label: "Price", value: `₦${productData.price}`, icon: <DollarSign className="h-4 w-4 text-teal-400" /> },
        { label: "Inventory", value: productData.inventory, icon: <Package className="h-4 w-4 text-teal-400" /> },
        { label: "Category", value: productData.category, icon: <Tag className="h-4 w-4 text-teal-400" /> },
      ],
    },
    {
      title: "Auction Information",
      items: [
        { label: "Starting Price", value: `₦${productData.auction.startingPrice}` },
        { label: "Current Bid", value: productData.auction.currentBid || "No bids yet" },
        { label: "Time Left", value: productData.auction.timeLeft, icon: <Clock className="h-4 w-4 text-teal-400" /> },
      ],
    },
    {
      title: "Vendor Information",
      items: [
        {
          label: "Vendor",
          value: (
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={productData.vendor.avatar || "/placeholder.svg"} alt={productData.vendor.name} />
                <AvatarFallback className="bg-teal-700 text-white text-xs">
                  {productData.vendor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span>{productData.vendor.name}</span>
              <Button size="sm" variant="outline" className="ml-2 h-6 text-xs bg-transparent">
                View
              </Button>
            </div>
          ),
          icon: <User className="h-4 w-4 text-teal-400" />,
        },
        { label: "Email", value: productData.vendor.email },
      ],
    },
    {
      title: "Status",
      items: [
        { label: "Approval Status", value: <Badge variant="default">{productData.status.approval}</Badge> },
        { label: "Auction Status", value: <Badge variant="secondary">{productData.status.auction}</Badge> },
      ],
    },
  ]

  const actions = [
    { label: "Approve", onClick: () => {}, variant: "default" as const },
    { label: "Feature on Homepage", onClick: () => {}, variant: "default" as const },
    { label: "Flag Product", onClick: () => {}, variant: "default" as const },
    { label: "Unlist from Store", onClick: () => {}, variant: "default" as const },
    { label: "Delete", onClick: () => {}, variant: "destructive" as const },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-teal-800/30 p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-teal-700/30">
            ← Product Details
          </Button>
        </div>
      </div>

      {/* Desktop & Mobile Content */}
      <div className="hidden md:block">
        <DetailView
          title={productData.productName}
          sections={sections}
          actions={actions}
          onBack={() => navigate(-1)}
        />
      </div>

      {/* Mobile Content */}
      <div className="md:hidden p-4 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">{productData.productName}</h1>

          <Card className="bg-slate-800/50 border-teal-700/30 p-4">
            <img
              src={productData.image || "/placeholder.svg"}
              alt={productData.productName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-slate-300 text-sm leading-relaxed">{productData.description}</p>
          </Card>
        </div>

        {/* Mobile Sections */}
        {sections.map((section, index) => (
          <Card key={index} className="bg-slate-800/50 border-teal-700/30 p-4">
            <h3 className="text-white font-semibold mb-3">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span className="text-slate-300 text-sm">{item.label}</span>
                  </div>
                  <div className="text-white text-sm font-medium">
                    {typeof item.value === "string" ? item.value : item.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}

        {/* Mobile Actions */}
        <div className="space-y-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              onClick={action.onClick}
              className={
                action.variant === "default"
                  ? "w-full bg-teal-600 hover:bg-teal-700"
                  : action.variant === "destructive"
                    ? "w-full bg-red-600/20 border border-red-600/50 text-red-400 hover:bg-red-600/30"
                    : "w-full"
              }
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage;