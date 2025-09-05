import { useNavigate } from "react-router-dom";

import { useNotificationsStore } from "@/store/notification-store";
import type { NotificationData } from "@/components/notifications/notification-item"

import { NotificationsHeader } from "@/components/notifications/notifications-header"
import { NotificationsList } from "@/components/notifications/notifications-list"

export default function NotificationsPage() {
  const { notifications, unreadCount, markAsRead } = useNotificationsStore()
  const navigate = useNavigate()

  const handleNotificationClick = (notification: NotificationData) => {
    // Mark as read
    if (!notification.isRead) {
      markAsRead(notification.id)
    }

    // Navigate based on notification type
    switch (notification.type) {
      case "order_shipped":
        navigate(`/orders/${notification.orderId}`)
        break
      case "bid_won":
        navigate(`/bids/${notification.bidId}`)
        break
      default:
        navigate("/orders")
        break
    }
  }

  return (
    <div className="min-h-screen bg-[#01151C]" style={{ fontFamily: "Open Sans, sans-serif" }}>
      <NotificationsHeader unreadCount={unreadCount} />

      <div className="max-w-4xl mx-auto">
        <NotificationsList notifications={notifications} onNotificationClick={handleNotificationClick} />
      </div>
    </div>
  )
}
