import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useShallow } from "zustand/shallow"

import { useNotificationsStore } from "@/store/notification-store";

import type { NotificationData } from "./components/NotificationItem";
import { NotificationsList } from "./components/NotificationsList";


const Notifications = () => {
  const navigate = useNavigate()

  const { isLoading, notifications, markAsRead } = useNotificationsStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      notifications: state.notifications,
      markAsRead: state.markAsRead,
    }))
  );

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

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

  if (isLoading && notifications.length === 0) return <>

  return (
    <div className="min-h-screen mt-8 bg-[#01151C]">
      

      <div className="max-w-4xl mx-auto">
        <NotificationsList notifications={notifications} onNotificationClick={handleNotificationClick} />
      </div>
    </div>
  )
}

export default Notifications;
