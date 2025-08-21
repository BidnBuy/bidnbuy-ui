import { Bell, User, Menu } from "lucide-react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { DashboardMetrics } from "@/components/admin/dashboard-metrics"
import { DashboardTables } from "@/components/admin/dashboard-tables"
import { RecentActivities } from "@/components/admin/recent-activities"
import { useDashboardStore } from "@/store/dashboard-store"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

/**
 * AdminDashboard component displays the main admin dashboard.
 * @returns {JSX.Element} The rendered admin dashboard.
*/

const AdminDashboard = () => {
  const { metrics, auctions, productListings, topProducts, topVendors, recentActivities } = useDashboardStore()

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
            {/* Welcome Message - Mobile Only */}
            <div className="md:hidden mb-6">
              <h1 className="text-white text-2xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-300 text-base">Welcome back! Here's what's happening on Bid and Buy</p>
            </div>

            {/* Desktop Title - No Header */}
            <div className="hidden md:block mb-8">
              <h1 className="text-white text-4xl font-bold mb-2">Dashboard</h1>
            </div>

            {/* Desktop Sales Overview */}
            <div className="hidden md:block">
              <DashboardMetrics variant="sales" metrics={metrics} />
              <DashboardTables
                auctions={auctions}
                productListings={productListings}
                showAuctions={true}
                showProducts={true}
                showTopItems={false}
              />
            </div>

            {/* Mobile Overview Cards */}
            <div className="md:hidden">
              <DashboardMetrics variant="overview" metrics={metrics} />
            </div>

            {/* Top Products and Vendors Tables */}
            <DashboardTables topProducts={topProducts} topVendors={topVendors} showTopItems={true} />

            {/* Recent Activities */}
            <RecentActivities activities={recentActivities} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminDashboard;
