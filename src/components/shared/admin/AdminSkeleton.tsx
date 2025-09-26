import React from "react";

const AdminSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-10 bg-gray-700 rounded w-1/3 mb-4" />
    <div className="h-6 bg-gray-700 rounded w-1/2 mb-2" />
    <div className="h-32 bg-gray-800 rounded mb-4" />
    <div className="h-6 bg-gray-700 rounded w-1/4 mb-2" />
    <div className="h-6 bg-gray-700 rounded w-1/4 mb-2" />
    <div className="h-6 bg-gray-700 rounded w-1/4 mb-2" />
  </div>
);

export default AdminSkeleton;
