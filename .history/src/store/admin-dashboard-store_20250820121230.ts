/**
 * @file store/dashboard-store.ts
 * @description Zustand store for managing admin dashboard state and data.
 */

import { create } from "zustand"

/**
 * Interface for dashboard metrics.
 */
interface DashboardMetrics {
  totalSales: number
  totalOrders: number
  totalEarnings: number
  totalUsers: number
  totalVendors: number
  activeAuctions: number
  completedSales: number
  pendingApprovals: number
  totalRevenue: number
}

/**
 * Interface for auction data.
 */
interface Auction {
  id: string
  product: string
  currentBid: number
  timeRemaining: string
  bids: number
  status: "Active" | "Ended"
}

/**
 * Interface for product listing.
 */
interface ProductListing {
  id: string
  product: string
  price: number
  inventory: number
  status: "In Stock" | "Out of Stock"
}

/**
 * Interface for top product.
 */
interface TopProduct {
  id: string
  name: string
  sales: number
}

/**
 * Interface for top vendor.
 */
interface TopVendor {
  id: string
  name: string
  totalSales: number
}

/**
 * Interface for recent activity.
 */
interface RecentActivity {
  id: string
  type: "listing" | "bid" | "sale"
  title: string
  description: string
  icon: string
}

/**
 * Dashboard store state.
 */
interface DashboardState {
  metrics: DashboardMetrics
  auctions: Auction[]
  productListings: ProductListing[]
  topProducts: TopProduct[]
  topVendors: TopVendor[]
  recentActivities: RecentActivity[]
}

/**
 * Dashboard store actions.
 */
interface DashboardActions {
  updateMetrics: (metrics: Partial<DashboardMetrics>) => void
  refreshData: () => void
}

type DashboardStore = DashboardState & DashboardActions

/**
 * Mock data for the dashboard.
 */
const mockData: DashboardState = {
  metrics: {
    totalSales: 100000,
    totalOrders: 70000,
    totalEarnings: 500000,
    totalUsers: 1234,
    totalVendors: 1234,
    activeAuctions: 345,
    completedSales: 232,
    pendingApprovals: 12,
    totalRevenue: 200000,
  },
  auctions: [
    {
      id: "1",
      product: "Leather Jacket",
      currentBid: 10000,
      timeRemaining: "3 days 2 hours",
      bids: 15,
      status: "Active",
    },
    {
      id: "2",
      product: "Ceramic Vase",
      currentBid: 50000,
      timeRemaining: "7 days 5 hours",
      bids: 12,
      status: "Active",
    },
    {
      id: "3",
      product: "Antique Watch",
      currentBid: 90000,
      timeRemaining: "9 days 9 hours",
      bids: 20,
      status: "Active",
    },
  ],
  productListings: [
    {
      id: "1",
      product: "Leather Jacket",
      price: 10000,
      inventory: 15,
      status: "In Stock",
    },
    {
      id: "2",
      product: "Ceramic Vase",
      price: 50000,
      inventory: 12,
      status: "In Stock",
    },
    {
      id: "3",
      product: "Antique Watch",
      price: 90000,
      inventory: 20,
      status: "In Stock",
    },
    {
      id: "4",
      product: "Nike Shoes",
      price: 100000,
      inventory: 30,
      status: "In Stock",
    },
  ],
  topProducts: [
    { id: "1", name: "Vintage Watch", sales: 150 },
    { id: "2", name: "Antique Vase", sales: 100 },
    { id: "3", name: "Apple Airpods", sales: 100 },
  ],
  topVendors: [
    { id: "1", name: "Vendor A", totalSales: 1500 },
    { id: "2", name: "Vendor B", totalSales: 1000 },
    { id: "3", name: "Vendor C", totalSales: 800 },
  ],
  recentActivities: [
    {
      id: "1",
      type: "listing",
      title: "New Listing",
      description: "Vendor A listed a new item",
      icon: "plus",
    },
    {
      id: "2",
      type: "bid",
      title: "New Bid",
      description: "User B placed a new bid",
      icon: "gavel",
    },
    {
      id: "3",
      type: "sale",
      title: "Sale Completed",
      description: "Vintage watch sales completed",
      icon: "check",
    },
  ],
}

/**
 * Dashboard store with mock data.
 */
export const useDashboardStore = create<DashboardStore>((set) => ({
  ...mockData,

  updateMetrics: (newMetrics) =>
    set((state) => ({
      metrics: { ...state.metrics, ...newMetrics },
    })),

  refreshData: () => {

    console.log("Refreshing dashboard data...")
  },
}))
