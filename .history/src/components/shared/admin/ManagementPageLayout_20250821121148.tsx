import { Suspense, useEffect, useState } from "react"
import { Bell, User, Menu } from "lucide-react"
// import { AdminSidebar } from "@/components/admin/admin-sidebar"
import type { BaseManagementItem, ManagementPageConfig } from "@/types/admin-management"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

// import { ManagementSearchBar } from "./management-search-bar"
// import { ManagementTable } from "./management-table"
// import { ManagementMobileCards } from "./management-mobile-cards"
// import type { BaseManagementItem, ManagementPageConfig } from "../types"

import AdminSidebar from "./AdminSidebar"
import ManagementSearchBar from "./ManagementSearchBar"

/**
 * Props for the ManagementPageLayout component.
 */
interface ManagementPageLayoutProps {
  config: ManagementPageConfig
  data: BaseManagementItem[]
  onSearch: (query: string) => void
  onSort?: (sortBy: string) => void
  onFilter?: (filter: string) => void
  onView: (item: BaseManagementItem) => void
  isLoading?: boolean
  basePath: string // Add basePath for navigation
}

/**
 * Loading skeleton component to prevent blackout.
 */
function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="h-12 bg-gray-700 rounded mb-6"></div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-16 bg-gray-700 rounded"></div>
        ))}
      </div>
    </div>
  )
}

/**
 * ManagementPageLayout component provides a consistent layout for all management pages.
 * @param {ManagementPageLayoutProps} props - The component props.
 * @returns {JSX.Element} The rendered management page layout.
 */
export function ManagementPageLayout({
  config,
  data,
  onSearch,
  onSort,
  onFilter,
  onView,
  isLoading = false,
  basePath,
}: ManagementPageLayoutProps) {
  const [isClient, setIsClient] = useState(false)
  const [isPageReady, setIsPageReady] = useState(false)

  // Handle client-side hydration to prevent blackout
  useEffect(() => {
    setIsClient(true)
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsPageReady(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Show loading skeleton during hydration to prevent blackout
  if (!isClient || !isPageReady) {
    return (
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <header
            className="md:hidden flex h-16 shrink-0 items-center justify-between px-4"
            style={{ backgroundColor: "#00545F" }}
          >
            <SidebarTrigger className="text-white">
              <Menu className="w-6 h-6" />
            </SidebarTrigger>
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 text-white" />
              <User className="w-6 h-6 text-white" />
            </div>
          </header>
          <main className="flex-1 p-4 md:p-8" style={{ backgroundColor: "#01151C" }}>
            <div className="max-w-7xl mx-auto">
              <LoadingSkeleton />
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    )
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        {/* Mobile Header Only */}
        <header
          className="md:hidden flex h-16 shrink-0 items-center justify-between px-4"
          style={{ backgroundColor: "#00545F" }}
        >
          <SidebarTrigger className="text-white">
            <Menu className="w-6 h-6" />
          </SidebarTrigger>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-white" />
            <User className="w-6 h-6 text-white" />
          </div>
        </header>

    
        <main className="flex-1 p-4 md:p-8 bg-[#01151C]">
          <div className="max-w-7xl mx-auto">
          
            <div className="mb-8">
              <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">{config.title}</h1>
            </div>

            <ManagementSearchBar
              placeholder={config.searchPlaceholder}
              onSearch={onSearch}
              filters={config.filters}
              hasStatusFilter={config.hasStatusFilter}
              onSort={onSort}
              onFilter={onFilter}
            />

            {/* Content Section */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-6">All {config.itemName}s</h2>

              <Suspense fallback={<LoadingSkeleton />}>
                {/* Desktop Table */}
                <ManagementTable
                  data={data}
                  columns={config.columns}
                  onView={onView}
                  isLoading={isLoading}
                  basePath={basePath}
                />

                {/* Mobile Cards */}
                <ManagementMobileCards
                  data={data}
                  getCardConfig={config.mobileCard}
                  onView={onView}
                  isLoading={isLoading}
                  basePath={basePath}
                />
              </Suspense>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
