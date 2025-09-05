"use client"

import { ArrowLeft, Menu, Search, User, ShoppingCart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface NotificationsHeaderProps {
  unreadCount: number
}

export function NotificationsHeader({ unreadCount }: NotificationsHeaderProps) {
  const router = useRouter()

  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      {/* Main Header */}
      <div className="bg-teal-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-teal-700 p-2">
            <Menu size={20} />
          </Button>

          <div className="flex items-center gap-2">
            <Image src="/images/bidnbuy-logo.png" alt="BidnBuy" width={24} height={24} className="rounded" />
            <span className="text-white font-bold text-lg">B</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-white hover:bg-teal-700 p-2">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-teal-700 p-2">
            <User size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-teal-700 p-2">
            <ShoppingCart size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-teal-700 p-2 relative">
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Back Button and Title */}
      <div className="bg-[#01151C] px-4 py-4 flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="text-white hover:bg-gray-800 p-2 rounded-full"
        >
          <ArrowLeft size={20} />
        </Button>

        <h1 className="text-white text-xl font-semibold">Notifications</h1>
      </div>
    </div>
  )
}
