"use client"

import { useNavigate } from "react-router-dom"
import { DetailView } from "@/components/data-management/detail-view"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Calendar, CheckCircle } from "lucide-react"

// Mock user data
const userData = {
  id: "1",
  name: "Sophia Clark",
  email: "sophia.clark@gmail.com",
  avatar: "/placeholder-user.jpg",
  stats: {
    totalOrders: "12",
    lastLogin: "23-07-2025",
  },
  kycState: "Verified",
  status: "Active",
}

const UserDetailPage = () => {
  const navigate = useNavigate()

  const sections = [
    {
      title: "User Statistics",
      items: [
        {
          label: "Total Orders",
          value: userData.stats.totalOrders,
          icon: <ShoppingBag className="h-4 w-4 text-teal-400" />,
        },
        {
          label: "Last Login",
          value: userData.stats.lastLogin,
          icon: <Calendar className="h-4 w-4 text-teal-400" />,
        },
      ],
    },
    {
      title: "Account Status",
      items: [
        {
          label: "KYC State",
          value: <Badge variant="default">{userData.kycState}</Badge>,
          icon: <CheckCircle className="h-4 w-4 text-teal-400" />,
        },
        {
          label: "Account Status",
          value: <Badge variant="default">{userData.status}</Badge>,
        },
      ],
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
            ← User Details
          </Button>
        </div>
      </div>

      {/* Desktop & Mobile Content */}
      <div className="hidden md:block">
        <DetailView
          title={userData.name}
          subtitle={userData.email}
          avatar={{
            src: userData.avatar,
            fallback: userData.name.charAt(0),
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
              src={userData.avatar || "/placeholder.svg"}
              alt={userData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{userData.name}</h1>
            <p className="text-teal-200 mt-1">{userData.email}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-slate-800/50 border-teal-700/30 p-4 text-center">
            <div className="text-2xl font-bold text-white">{userData.stats.totalOrders}</div>
            <div className="text-sm text-slate-400">Total Orders</div>
          </Card>
          <Card className="bg-slate-800/50 border-teal-700/30 p-4 text-center">
            <div className="text-sm font-medium text-white">{userData.stats.lastLogin}</div>
            <div className="text-sm text-slate-400">Last Login</div>
          </Card>
        </div>

        {/* Status Section */}
        <Card className="bg-slate-800/50 border-teal-700/30 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-300">KYC State</span>
            <Badge variant="default">{userData.kycState}</Badge>
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

export default UserDetailPage;
