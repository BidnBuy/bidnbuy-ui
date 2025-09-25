import React from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/shared/admin/AdminSidebar";
import DashboardMetrics from "@/pages/admin/components/DashboardMetrics";
import DashboardTables from "@/pages/admin/components/DashboardTables";
import RecentActivities from "@/pages/admin/components/RecentActivities";
import { Bell, User, Menu } from "lucide-react";

interface AdminDashboardPageProps {
  header: string;
  metrics?: any;
  auctions?: any[];
  productListings?: any[];
  topProducts?: any[];
  topVendors?: any[];
  recentActivities?: any[];
  showAuctions?: boolean;
  showProducts?: boolean;
  showTopItems?: boolean;
  description?: string;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  header,
  metrics = {},
  auctions = [],
  productListings = [],
  topProducts = [],
  topVendors = [],
  recentActivities = [],
  showAuctions = false,
  showProducts = false,
  showTopItems = false,
  description,
}) => {
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
              <h1 className="text-white text-2xl font-bold mb-2">{header}</h1>
              {description && <p className="text-gray-300 text-base">{description}</p>}
            </div>
            <div className="hidden md:block mb-8">
              <h1 className="text-white text-4xl font-bold mb-2">{header}</h1>
              {description && <p className="text-gray-300 text-lg">{description}</p>}
            </div>
            <div className="hidden md:block">
              <DashboardMetrics variant="sales" metrics={metrics} />
              <DashboardTables
                auctions={auctions}
                productListings={productListings}
                topProducts={topProducts}
                topVendors={topVendors}
                showAuctions={showAuctions}
                showProducts={showProducts}
                showTopItems={showTopItems}
              />
            </div>
            <div className="md:hidden">
              <DashboardMetrics variant="overview" metrics={metrics} />
            </div>
            <RecentActivities activities={recentActivities} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminDashboardPage;
