import { useNavigate, useParams } from "react-router-dom"
import { DetailView } from "@/components/data-management/detail-view"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, DollarSign, Star, FileText, ShoppingBag } from "lucide-react"

// Mock vendor data
const vendorData = {
  id: "1",
  name: "Alex Johnson",
  vendorId: "12345",
  joinedDate: "2 months ago",
  avatar: "/placeholder-user.jpg",
  contact: {
    email: "Alex.johnsonbusiness@gmail.com",
    phone: "+2348143155867",
    address: "Abuja, Nigeria",
  },
  products: [
    {
      id: "1",
      name: "Leather Jacket",
      price: "₦10,000",
      inventory: "15",
      status: "In Stock",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Ceramic Vase",
      price: "₦50,000",
      inventory: "12",
      status: "In Stock",
      image: "/placeholder.svg",
    },
  ],
  status: "Active",
  kycState: "Verified",
  salesMetrics: {
    totalOrders: "150",
    revenue: "₦100,000",
    rating: "4.8",
  },
  documents: ["ID Document", "CAC Document", "Certificates"],
}

const VendorDetailPage = () => {
  const { id: _id } = useParams<{id: string}>()
  const navigate = useNavigate()

  const sections = [
    {
      title: "Contact Information",
      items: [
        {
          label: "Email",
          value: vendorData.contact.email,
          icon: <Mail className="h-4 w-4 text-teal-400" />,
        },
        {
          label: "Phone",
          value: vendorData.contact.phone,
          icon: <Phone className="h-4 w-4 text-teal-400" />,
        },
        {
          label: "Address",
          value: vendorData.contact.address,
          icon: <MapPin className="h-4 w-4 text-teal-400" />,
        },
      ],
    },
    {
      title: "Product Listing",
      items: vendorData.products.map((product) => ({
        label: product.name,
        value: (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={product.image || "/placeholder.svg"} alt={product.name} />
                <AvatarFallback className="bg-teal-700 text-white text-xs">{product.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{product.price}</div>
                <div className="text-xs text-slate-400">Inventory: {product.inventory}</div>
              </div>
            </div>
            <Badge variant="default" className="text-xs">
              {product.status}
            </Badge>
          </div>
        ),
      })),
    },
    {
      title: "Status",
      items: [
        {
          label: "Active",
          value: <div className="w-2 h-2 bg-green-500 rounded-full" />,
        },
        {
          label: "KYC State",
          value: <Badge variant="default">{vendorData.kycState}</Badge>,
        },
      ],
    },
    {
      title: "Sales Metrics",
      items: [
        {
          label: "Total Orders",
          value: vendorData.salesMetrics.totalOrders,
          icon: <ShoppingBag className="h-4 w-4 text-teal-400" />,
        },
        {
          label: "Revenue",
          value: vendorData.salesMetrics.revenue,
          icon: <DollarSign className="h-4 w-4 text-teal-400" />,
        },
        {
          label: "Rating",
          value: vendorData.salesMetrics.rating,
          icon: <Star className="h-4 w-4 text-teal-400" />,
        },
      ],
    },
    {
      title: "KYC Documents",
      items: vendorData.documents.map((doc) => ({
        label: doc,
        value: <FileText className="h-4 w-4 text-teal-400" />,
      })),
    },
  ]

  const actions = [
    { label: "Activate", onClick: () => {}, variant: "default" as const },
    { label: "Suspend", onClick: () => {}, variant: "default" as const },
    { label: "Delete", onClick: () => {}, variant: "destructive" as const },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-teal-800/30 p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-teal-700/30">
            ← Vendor Details
          </Button>
        </div>
      </div>

      {/* Desktop & Mobile Content */}
      <div className="hidden md:block">
        <DetailView
          title={vendorData.name}
          subtitle={`Vendor ID: ${vendorData.vendorId}`}
          avatar={{
            src: vendorData.avatar,
            fallback: vendorData.name.charAt(0),
          }}
          sections={sections}
          actions={actions}
          onBack={() => navigate(-1)}
        />
      </div>

      {/* Mobile Content */}
      <div className="md:hidden p-4 space-y-6">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-teal-700">
            <img
              src={vendorData.avatar || "/placeholder.svg"}
              alt={vendorData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{vendorData.name}</h1>
            <p className="text-teal-200 mt-1">Vendor ID: {vendorData.vendorId}</p>
            <p className="text-slate-400 text-sm">Joined {vendorData.joinedDate}</p>
          </div>
        </div>

        {/* Contact Information */}
        <Card className="bg-slate-800/50 border-teal-700/30 p-4">
          <h3 className="text-white font-semibold mb-3">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-teal-400" />
              <span className="text-slate-300 text-sm">{vendorData.contact.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-teal-400" />
              <span className="text-slate-300 text-sm">{vendorData.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-teal-400" />
              <span className="text-slate-300 text-sm">{vendorData.contact.address}</span>
            </div>
          </div>
        </Card>

        {/* Product Listing */}
        <Card className="bg-slate-800/50 border-teal-700/30 p-4">
          <h3 className="text-white font-semibold mb-3">Product Listing</h3>
          <div className="space-y-3">
            {vendorData.products.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={product.image || "/placeholder.svg"} alt={product.name} />
                    <AvatarFallback className="bg-teal-700 text-white">{product.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-medium">{product.name}</div>
                    <div className="text-sm text-slate-400">
                      {product.price} | Inventory: {product.inventory}
                    </div>
                  </div>
                </div>
                <Badge variant="default" className="text-xs">
                  {product.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Status */}
        <Card className="bg-slate-800/50 border-teal-700/30 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-300">Status</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-white text-sm">Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">KYC State</span>
            <Badge variant="default">{vendorData.kycState}</Badge>
          </div>
        </Card>

        {/* Sales Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-slate-800/50 border-teal-700/30 p-3 text-center">
            <div className="text-lg font-bold text-white">{vendorData.salesMetrics.totalOrders}</div>
            <div className="text-xs text-slate-400">Total Orders</div>
          </Card>
          <Card className="bg-slate-800/50 border-teal-700/30 p-3 text-center">
            <div className="text-lg font-bold text-white">{vendorData.salesMetrics.revenue}</div>
            <div className="text-xs text-slate-400">Revenue</div>
          </Card>
          <Card className="bg-slate-800/50 border-teal-700/30 p-3 text-center">
            <div className="text-lg font-bold text-white">{vendorData.salesMetrics.rating}</div>
            <div className="text-xs text-slate-400">Rating</div>
          </Card>
        </div>

        {/* KYC Documents */}
        <Card className="bg-slate-800/50 border-teal-700/30 p-4">
          <h3 className="text-white font-semibold mb-3">KYC Documents</h3>
          <div className="space-y-2">
            {vendorData.documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                <span className="text-slate-300 text-sm">{doc}</span>
                <FileText className="h-4 w-4 text-teal-400" />
              </div>
            ))}
          </div>
        </Card>

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

export default VendorDetailPage;
