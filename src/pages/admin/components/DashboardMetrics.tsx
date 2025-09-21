"use client"

/**
 * @file components/admin/dashboard-metrics.tsx
 * @description Dashboard metrics cards component.
 */

import { TrendingUp, TrendingDown } from "lucide-react"

/**
 * Interface for a metric card.
 */
interface MetricCard {
  title: string
  value: string
  change?: string
  trend?: "up" | "down"
  icon?: string
}

/**
 * Props for the DashboardMetrics component.
 */
interface DashboardMetricsProps {
  variant: "sales" | "overview"
  metrics: {
    totalSales?: number
    totalOrders?: number
    totalEarnings?: number
    totalUsers?: number
    totalVendors?: number
    activeAuctions?: number
    completedSales?: number
    pendingApprovals?: number
    totalRevenue?: number
  }
}

/**
 * DashboardMetrics component displays metric cards.
 * @param {DashboardMetricsProps} props - The component props.
 * @returns {JSX.Element} The rendered metrics cards.
 */

const DashboardMetrics = ({ variant, metrics }: DashboardMetricsProps) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toLocaleString()
  }

  const formatCurrency = (num: number): string => {
    return `N${formatNumber(num)}`
  }

  if (variant === "sales") {
    const salesCards: MetricCard[] = [
      {
        title: "Total Sales",
        value: formatNumber(metrics.totalSales || 0),
        icon: "📊",
      },
      {
        title: "Total Orders",
        value: formatNumber(metrics.totalOrders || 0),
        icon: "📦",
      },
      {
        title: "Total Earnings",
        value: formatCurrency(metrics.totalEarnings || 0),
        icon: "💰",
      },
    ]

    return (
      <div className="mb-8">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Sales Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salesCards.map((card, index) => (
            <div key={index} className="p-6 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{card.icon}</span>
                <div className="w-8 h-8 bg-[#00707B] rounded flex items-center justify-center">
                  <span className="text-white text-xs">📈</span>
                </div>
              </div>
              <div className="text-white text-2xl font-bold mb-2">{card.value}</div>
              <div className="text-gray-300 text-sm">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Overview variant for mobile dashboard
  const overviewCards: MetricCard[] = [
    {
      title: "Total Users",
      value: formatNumber(metrics.totalUsers || 0),
      change: "+8% from yesterday",
      trend: "up",
    },
    {
      title: "Total Vendors",
      value: formatNumber(metrics.totalVendors || 0),
      change: "+12.3% from yesterday",
      trend: "up",
    },
    {
      title: "Active Auctions",
      value: formatNumber(metrics.activeAuctions || 0),
      change: "+10.5% from yesterday",
      trend: "up",
    },
    {
      title: "Completed Sales",
      value: formatNumber(metrics.completedSales || 0),
      change: "+33.3% from yesterday",
      trend: "up",
    },
    {
      title: "Pending Approvals",
      value: formatNumber(metrics.pendingApprovals || 0),
    },
    {
      title: "Total Revenue",
      value: formatCurrency(metrics.totalRevenue || 0),
      change: "+50% from yesterday",
      trend: "up",
    },
  ]

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 gap-4">
        {overviewCards.map((card, index) => (
          <div key={index} className="p-4 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-800 text-xs">👤</span>
              </div>
            </div>
            <div className="text-white text-xl font-bold mb-1">{card.value}</div>
            <div className="text-gray-300 text-sm mb-2">{card.title}</div>
            {card.change && (
              <div className="flex items-center gap-1">
                {card.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 text-green-400" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-400" />
                )}
                <span className="text-green-400 text-xs">{card.change}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardMetrics;
