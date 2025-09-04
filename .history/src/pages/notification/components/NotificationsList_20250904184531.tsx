import { NotificationItem, type NotificationData } from "./notification-item"

type NotificationsListProps = {
  notifications: NotificationData[]
  onNotificationClick: (notification: NotificationData) => void
}

export function NotificationsList({ notifications, onNotificationClick }: NotificationsListProps) {
  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-gray-400 text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21a2 2 0 0 1-3.46 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "Open Sans, sans-serif" }}>
            No notifications yet
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Open Sans, sans-serif" }}>
            When you have notifications, they'll appear here
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="divide-y divide-gray-700">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} onClick={onNotificationClick} />
      ))}
    </div>
  )
}
