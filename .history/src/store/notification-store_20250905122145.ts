import type { NotificationData } from "@/pages/notification/components/NotificationItem"
import { create } from "zustand"

type NotificationsState = {
  loading: boolean;
  setIsLoading: (state: )
  notifications: NotificationData[]
  unreadCount: number
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  addNotification: (notification: Omit<NotificationData, "id">) => void
}

const mockNotifications: NotificationData[] = [
  {
    id: "1",
    type: "order_shipped",
    title: "Order Shipped",
    message: "Your order #100101 has been shipped",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    isRead: false,
    orderId: "100101",
  },
  {
    id: "2",
    type: "order_shipped",
    title: "Order Shipped",
    message: "Your order #112131 has been shipped",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    isRead: false,
    orderId: "112131",
  },
  {
    id: "3",
    type: "order_shipped",
    title: "Order Shipped",
    message: "Your order #123256 has been shipped",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    isRead: true,
    orderId: "123256",
  },
  {
    id: "4",
    type: "order_shipped",
    title: "Order Shipped",
    message: "Your order #192171 has been shipped",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    isRead: true,
    orderId: "192171",
  },
  {
    id: "5",
    type: "order_shipped",
    title: "Order Shipped",
    message: "Your order #132132 has been shipped",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    isRead: true,
    orderId: "132132",
  },
  {
    id: "6",
    type: "order_shipped",
    title: "Order Shipped",
    message: "Your order #102166 has been shipped",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    isRead: true,
    orderId: "102166",
  },
]

export const useNotificationsStore = create<NotificationsState>((set) => ({
  loading: false,
  setIsLoading: (state: boolean) => set({ loading: state }),
  notifications: mockNotifications,
  unreadCount: mockNotifications.filter((n) => !n.isRead).length,

  markAsRead: (id: string) =>
    set((state) => {
      const updatedNotifications = state.notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification,
      )
      return {
        notifications: updatedNotifications,
        unreadCount: updatedNotifications.filter((n) => !n.isRead).length,
      }
    }),

  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((notification) => ({ ...notification, isRead: true })),
      unreadCount: 0,
    })),

  addNotification: (notification) =>
    set((state) => {
      const newNotification: NotificationData = {
        ...notification,
        id: Date.now().toString(),
      }
      const updatedNotifications = [newNotification, ...state.notifications]
      return {
        notifications: updatedNotifications,
        unreadCount: updatedNotifications.filter((n) => !n.isRead).length,
      }
    }),
}))
