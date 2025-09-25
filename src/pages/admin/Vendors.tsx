import { Bell, User, Menu } from "lucide-react";
import { useDashboardStore } from "@/store/admin-dashboard-store";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "../../components/shared/admin/AdminSidebar";
import DashboardMetrics from "./components/DashboardMetrics";
import DashboardTables from "./components/DashboardTables";
import RecentActivities from "./components/RecentActivities";

const Vendors = () => {
  const { metrics, auctions, productListings, topProducts, topVendors, recentActivities } = useDashboardStore();
  const topVendorsAsTopItems = topVendors?.map(vendor => ({
    id: vendor.id,
    name: vendor.name,
    sales: vendor.totalSales,
  })) || [];
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="md:hidden flex h-16 shrink-0 items-center justify-between px-4" style={{ backgroundColor: "#00545F" }}>
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
            <div className="md:hidden mb-6">
              <h1 className="text-white text-2xl font-bold mb-2">Vendors</h1>
              <p className="text-gray-300 text-base">View and manage all vendors</p>
            </div>
            <div className="hidden md:block mb-8">
              <h1 className="text-white text-4xl font-bold mb-2">Vendors</h1>
            </div>
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
            <div className="md:hidden">
              <DashboardMetrics variant="overview" metrics={metrics} />
            </div>
            <DashboardTables topProducts={topProducts} topVendors={topVendorsAsTopItems} showTopItems={true} />
            <RecentActivities activities={recentActivities} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Vendors;
