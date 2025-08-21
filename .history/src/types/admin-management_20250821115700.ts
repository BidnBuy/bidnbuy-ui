import type React from "react"

/**
 * Base interface for all management data items.
 */
export type BaseManagementItem = {
  id: string
  [key: string]: any
}

/**
 * Configuration for table columns.
 */
export type TableColumn = {
  key: string
  label: string
  render?: (value: any, item: BaseManagementItem) => React.ReactNode
  className?: string
}

/**
 * Configuration for mobile card display.
 */
export type MobileCardConfig = {
  title: string
  subtitle?: string
  avatar?: string
  additionalInfo?: string[]
}

/**
 * Management page configuration.
 */
export type ManagementPageConfig = {
  title: string
  searchPlaceholder: string
  itemName: string // e.g., "User", "Vendor", "Product"
  columns: TableColumn[]
  mobileCard: (item: BaseManagementItem) => MobileCardConfig
  filters?: string[]
  hasStatusFilter?: boolean
}

/**
 * User management data interface.
 */

export const UserStatus = {
    Active: "Active",
    Pending: "Pending",
    Suspended: "Suspended",
} as const

export type UserStatus = typeof UserStatus[keyof typeof UserStatus]

export type UserData = BaseManagementItem & {
  name: string
  email: string
  phone: string
  status: UserStatus
  registrationDate: string
  avatar: string
}

/**
 * Vendor management data interface.
 */
export interface VendorData extends BaseManagementItem {
  businessName: string
  email: string
  phone: string
  status: "Verified" | "Pending" | "Suspended"
  totalSales: number
  avatar: string
}

/**
 * Product management data interface.
 */
export interface ProductData extends BaseManagementItem {
  productName: string
  vendor: string
  category: string
  price: number
  status: "Approved" | "Pending" | "Rejected"
  image: string
}

/**
 * Order management data interface.
 */
export interface OrderData extends BaseManagementItem {
  orderId: string
  product: string
  buyer: string
  amount: number
  paymentStatus: "Pending" | "Paid" | "Failed" | "Refunded" | "Cancelled"
}

/**
 * Bid management data interface.
 */
export interface BidData extends BaseManagementItem {
  bidder: string
  product: string
  bidTime: string
  bidAmount: number
  status: "Won" | "Outbid" | "Cancelled"
  avatar: string
}

/**
 * Affiliate management data interface.
 */
export interface AffiliateData extends BaseManagementItem {
  name: string
  email: string
  phone: string
  status: UserStatus
  totalReferrals: number
  avatar: string
}

/**
 * Payment management data interface.
 */

export const PaymentStatus = {
    Pending: "Pending",
    Paid: "Paid",
    Failed: "Failed",
    Refunded: "Refunded",
    Cancelled: "Cancelled"
} as const

type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus]

export interface PaymentData extends BaseManagementItem {
  transactionId: string
  payment: string
  amount: number
  paymentStatus: PaymentStatus
}

/**
 * Dispute management data interface.
 */

expo

export type DisputeData = BaseManagementItem & {
  disputeId: string
  product: string
  against: "Vendor" | "Buyer"
  disputeStatus: "Resolved" | "unresolved" | "Vendor suspended"
}
