import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminSkeleton from "./AdminSkeleton";

interface AdminPageWrapperProps {
  children: React.ReactNode;
  header: string;
  description?: string;
  color?: string;
  logo?: string;
}

const AdminPageWrapper: React.FC<AdminPageWrapperProps> = ({ children, header, description, color = "#01151C", logo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading
    return () => clearTimeout(timer);
  }, [header]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: color }}>
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              {logo && <img src={logo} alt="BidnBuy Logo" className="w-12 h-12 object-contain" />}
              <div>
                <h1 className="text-3xl font-bold text-white">{header}</h1>
                {description && <p className="text-gray-300 text-base">{description}</p>}
              </div>
            </div>
            {loading ? <AdminSkeleton /> : children}
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminPageWrapper;
