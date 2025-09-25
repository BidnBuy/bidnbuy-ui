import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Column {
  key: string
  label: string
  sortable?: boolean
  render?: (value: any, item: any) => React.ReactNode
}

export interface DataItem {
  id: string
  [key: string]: any
}

interface DataTableProps {
  data: DataItem[]
  columns: Column[]
  searchPlaceholder?: string
  onView?: (item: DataItem) => void
  className?: string
}

export function DataTable({ data, columns, searchPlaceholder = "Search...", onView, className }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<string>("")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Get unique status values for filter
  const statusOptions = useMemo(() => {
    const statuses = new Set<string>()
    data.forEach((item) => {
      if (item.status) {
        statuses.add(item.status.toLowerCase())
      }
    })
    return Array.from(statuses)
  }, [data])

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter((item) => {
      // Search filter
      const searchMatch = Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase()),
      )

      // Status filter
      const statusMatch = statusFilter === "all" || (item.status && item.status.toLowerCase() === statusFilter)

      return searchMatch && statusMatch
    })

    // Sort data
    if (sortField) {
      filtered.sort((a, b) => {
        const aValue = a[sortField]
        const bValue = b[sortField]

        if (typeof aValue === "string" && typeof bValue === "string") {
          const comparison = aValue.localeCompare(bValue)
          return sortDirection === "asc" ? comparison : -comparison
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue
        }

        return 0
      })
    }

    return filtered
  }, [data, searchTerm, sortField, sortDirection, statusFilter])

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const getStatusBadgeVariant = (status: string) => {
    const statusLower = status.toLowerCase()
    switch (statusLower) {
      case "approved":
      case "active":
      case "verified":
      case "in stock":
        return "default"
      case "pending":
        return "secondary"
      case "rejected":
      case "suspended":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#01151C] border-teal-700/30 text-white placeholder:text-teal-300/70"
          />
        </div>

        <div className="flex gap-2">
          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-[#01151C] border-teal-600/50 text-teal-100 hover:bg-teal-600/40"
              >
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#01151C] border-slate-700">
              {columns
                .filter((col) => col.sortable)
                .map((column) => (
                  <DropdownMenuItem
                    key={column.key}
                    onClick={() => handleSort(column.key)}
                    className="text-slate-200 hover:bg-slate-700"
                  >
                    {column.label}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Status Filter */}
          {statusOptions.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#01151C] border-teal-600/50 text-teal-100 hover:bg-teal-600/40"
                >
                  Status <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#01151C] border-slate-700">
                <DropdownMenuItem onClick={() => setStatusFilter("all")} className="text-slate-200 hover:bg-[#01151C]">
                  All Status
                </DropdownMenuItem>
                {statusOptions.map((status) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className="text-slate-200 hover:bg-[#01151C] capitalize"
                  >
                    {status}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <Card className="bg-[#01151C] border-teal-700/30">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#01151C] hover:bg-teal-900/20">
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className={cn("text-teal-100 font-medium", column.sortable && "cursor-pointer hover:text-teal-200")}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    {column.label}
                    {sortField === column.key && <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                  </TableHead>
                ))}
                <TableHead className="text-teal-100 font-medium">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedData.map((item) => (
                <TableRow key={item.id} className="border-teal-700/20 hover:bg-[#01151C]">
                  {columns.map((column) => (
                    <TableCell key={column.key} className="text-slate-200">
                      {column.render ? (
                        column.render(item[column.key], item)
                      ) : column.key === "status" ? (
                        <Badge variant={getStatusBadgeVariant(item[column.key])}>{item[column.key]}</Badge>
                      ) : (
                        String(item[column.key] || "")
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      size="sm"
                      onClick={() => onView?.(item)}
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredAndSortedData.map((item) => (
          <Card key={item.id} className="bg-[#01151C] border-teal-700/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {item.image && (
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={item.image || "/placeholder.svg"}
                      alt={item.name || item.productName || item.businessName}
                    />
                    <AvatarFallback className="bg-teal-700 text-white">
                      {(item.name || item.productName || item.businessName || "").charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <h3 className="font-medium text-white">{item.name || item.productName || item.businessName}</h3>
                  <p className="text-sm text-slate-400">{item.email || item.vendor || item.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {item.status && <Badge variant={getStatusBadgeVariant(item.status)}>{item.status}</Badge>}
                <Button size="sm" onClick={() => onView?.(item)} className="bg-teal-600 hover:bg-teal-700 text-white">
                  View
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
