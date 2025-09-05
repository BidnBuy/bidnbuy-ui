const NotificationSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#01151C]">
   

      {/* Notifications Skeleton */}
      <div className="max-w-4xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-start gap-4 p-4 border-b border-gray-700">
            <div className="w-6 h-6 bg-gray-800 rounded animate-pulse flex-shrink-0 mt-1" />
            <div className="flex-1 space-y-2">
              <div className="w-24 h-4 bg-gray-800 rounded animate-pulse" />
              <div className="w-full h-4 bg-gray-800 rounded animate-pulse" />
              <div className="w-16 h-3 bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationSkeleton;
