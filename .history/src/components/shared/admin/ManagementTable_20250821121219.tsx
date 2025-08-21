import { useNavigate } from "react-router-dom"

import type { BaseManagementItem, TableColumn } from "@/types/admin-management"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


/**
 * Props for the ManagementTable component.
 */
interface ManagementTableProps {
  data: BaseManagementItem[]
  columns: TableColumn[]
  onView: (item: BaseManagementItem) => void
  isLoading?: boolean
  basePath: string // Add basePath for navigation
}

/**
 * ManagementTable component displays data in a table format for desktop.
 * @param {ManagementTableProps} props - The component props.
 * @returns {JSX.Element} The rendered table.
 */

const ManagementTable({ data, columns, onView, isLoading = false, basePath }: ManagementTableProps) {
  const navigate = useNavigate()

  /**
   * Gets the appropriate badge color for status values.
   */
  const getStatusBadgeColor = (status: string) => {
    const statusColors: Record<string, string> = {
      Active: "bg-green-500 hover:bg-green-600",
      Verified: "bg-green-500 hover:bg-green-600",
      Approved: "bg-green-500 hover:bg-green-600",
      Paid: "bg-green-500 hover:bg-green-600",
      Won: "bg-green-500 hover:bg-green-600",
      Pending: "bg-yellow-500 hover:bg-yellow-600",
      Suspended: "bg-red-500 hover:bg-red-600",
      Rejected: "bg-red-500 hover:bg-red-600",
      Failed: "bg-red-500 hover:bg-red-600",
      Cancelled: "bg-red-500 hover:bg-red-600",
      Outbid: "bg-gray-500 hover:bg-gray-600",
      Refunded: "bg-blue-500 hover:bg-blue-600",
    }
    return statusColors[status] || "bg-gray-500 hover:bg-gray-600"
  }

  /**
   * Renders cell content based on column configuration.
   */
  const renderCellContent = (column: TableColumn, item: BaseManagementItem) => {
    const value = item[column.key]

    if (column.render) {
      return column.render(value, item)
    }

    // Handle status badges
    if (column.key.toLowerCase().includes("status")) {
      return <Badge className={`${getStatusBadgeColor(value)} text-white`}>{value}</Badge>
    }

    // Handle currency formatting
    if (
      column.key.toLowerCase().includes("price") ||
      column.key.toLowerCase().includes("amount") ||
      column.key.toLowerCase().includes("sales")
    ) {
      return typeof value === "number" ? `N${value.toLocaleString()}` : value
    }

    return value
  }

  /**
   * Handles view button click with navigation.
   */
  const handleViewClick = (item: BaseManagementItem) => {
   
    navigate(`${basePath}/${item.id}`)
    
    onView(item)
  }

  if (isLoading) {
    return (
      <div className="hidden md:block p-6 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
        <div className="text-center py-8">
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="hidden md:block p-6 rounded-lg border border-[#00707B]" style={{ backgroundColor: "#013139" }}>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-300 border-b border-[#00707B]">
              {columns.map((column) => (
                <th key={column.key} className={`py-4 px-4 font-semibold ${column.className || ""}`}>
                  {column.label}
                </th>
              ))}
              <th className="py-4 px-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-[#00707B]/30 hover:bg-[#00707B]/10">
                {columns.map((column) => (
                  <td key={column.key} className={`py-4 px-4 text-white ${column.className || ""}`}>
                    {renderCellContent(column, item)}
                  </td>
                ))}
                <td className="py-4 px-4">
                  <Button
                    onClick={() => handleViewClick(item)}
                    className="bg-[#00707B] hover:bg-[#00707B]/80 text-white px-4 py-2 text-sm"
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
