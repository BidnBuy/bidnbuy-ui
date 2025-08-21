"use client"

/**
 * @file components/admin/recent-activities.tsx
 * @description Recent activities component for the admin dashboard.
 */

import { Plus, Gavel, Check } from "lucide-react"

/**
 * type for recent activity.
 */
type RecentActivity = {
  id: string
  type: "listing" | "bid" | "sale"
  title: string
  description: string
  icon: string
}

/**
 * Props for the RecentActivities component.
 */
type RecentActivitiesProps = {
  activities: RecentActivity[]
}

/**
 * RecentActivities component displays recent platform activities.
 * @param {RecentActivitiesProps} props - The component props.
 * @returns {JSX.Element} The rendered activities list.
 */

export function RecentActivities({ activities }: RecentActivitiesProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "listing":
        return Plus
      case "bid":
        return Gavel
      case "sale":
        return Check
      default:
        return Plus
    }
  }

  const getIconBg = (type: string) => {
    switch (type) {
      case "listing":
        return "bg-blue-500"
      case "bid":
        return "bg-orange-500"
      case "sale":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="mb-8 mt-[35px]">
      <h2 className="text-white text-xl font-semibold mb-6">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const IconComponent = getIcon(activity.type)
          const iconBg = getIconBg(activity.type)

          return (
            <div key={activity.id} className="flex items-center gap-4">
              <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white text-base font-semibold">{activity.title}</p>
                <p className="text-gray-300 text-sm">{activity.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
