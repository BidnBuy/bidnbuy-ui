"use client"

import { TruckIcon } from "@/components/icons/truck-icon"
import { formatDistanceToNow } from "date-fns"

export interface NotificationData {
  id: string
  type: "order_shipped" | "bid_won" | "payment_received" | "account_update"
  title: string
  message: string
  timestamp: Date
  isRead: boolean
  orderId?: string
  bidId?: string
}

interface NotificationItemProps {
  notification: NotificationData
  onClick: (notification: NotificationData) => void
}

const NotificationItem = ({ notification, onClick }: NotificationItemProps) => {
  const getIcon = () => {
    switch (notification.type) {
      case "order_shipped":
        return <TruckIcon className="text-white" size={24} />
      default:
        return <TruckIcon className="text-white" size={24} />
    }
  }

  const timeAgo = formatDistanceToNow(notification.timestamp, { addSuffix: true })

  return (
    <div
      onClick={() => onClick(notification)}
      className={`flex items-start gap-4 p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-800/50 transition-colors ${
        !notification.isRead ? "bg-gray-800/30" : ""
      }`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className="flex-shrink-0 mt-1">{getIcon()}</div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-white font-medium text-sm mb-1">{notification.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{notification.message}</p>
          </div>

          {!notification.isRead && <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-2" />}
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-400 text-xs">{timeAgo}</span>
        </div>
      </div>
    </div>
  )
}
