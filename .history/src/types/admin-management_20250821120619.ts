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

const VendorStatus = {
    Verified: "Verified",
    Pending: "Pending",
    Suspended: "Suspended"
} as const

export type VendorStatus = typeof VendorStatus[keyof typeof VendorStatus]

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

const ProductStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected"
} as const

export type ProductStatus = typeof ProductStatus[keyof typeof ProductStatus]

export interface ProductData extends BaseManagementItem {
  productName: string
  vendor: string
  category: string
  price: number
  status: ProductStatus
  image: string
}

/**
 * Order management data interface.
 */

export const PaymentStatus = {
    Pending: "Pending",
    Paid: "Paid",
    Failed: "Failed",
    Refunded: "Refunded",
    Cancelled: "Cancelled"
} as const

type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus]

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

const BidStatus = {
    Pending: "Pending",
    Accepted: "Accepted",
    Rejected: "Rejected"
} as const

export type BidStatus = typeof BidStatus[keyof typeof BidStatus]

export type BidData = BaseManagementItem & {
  bidder: string
  product: string
  bidTime: string
  bidAmount: number
  status: BidStatus
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

export interface PaymentData extends BaseManagementItem {
  transactionId: string
  payment: string
  amount: number
  paymentStatus: PaymentStatus
}

/**
 * Dispute management data interface.
 */

const DisputeStatus = {
    Resolved: "Resolved",
    Unresolved: "Unresolved",
    VendorSuspended: "Vendor Suspended"
} as const

export type DisputeStatus = typeof DisputeStatus[keyof typeof DisputeStatus]

const AgainstStatus = {
    Vendor: "Vendor",
    Buyer: "Buyer"
} as const;

type AgainstStatus = typeof AgainstStatus[keyof typeof AgainstStatus]

export type DisputeData = BaseManagementItem & {
  disputeId: string
  product: string
  against: AgainstStatus
  disputeStatus: DisputeStatus
}
