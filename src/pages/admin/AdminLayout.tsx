import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/shared/admin/AdminSidebar";


const AdminLayout: React.FC = () => (
  <SidebarProvider>
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-4 md:p-4 bg-[#01151C]">
          <Outlet />
        </main>
      </div>
 
    </div>
  </SidebarProvider>
);

export default AdminLayout;
