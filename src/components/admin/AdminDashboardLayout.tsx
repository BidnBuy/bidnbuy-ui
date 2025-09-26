import React from "react";
import { Link, Outlet } from "react-router-dom";

const adminLinks = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Users", path: "/admin/users" },
  { name: "Vendors", path: "/admin/vendors" },
  { name: "Products", path: "/admin/products" },
  { name: "Marketer / Affiliate", path: "/admin/marketer" },
  { name: "Bids", path: "/admin/bids" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Payments", path: "/admin/payments" },
  { name: "Disputes", path: "/admin/disputes" },
];

const AdminDashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-2">
            {adminLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block px-3 py-2 rounded hover:bg-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
