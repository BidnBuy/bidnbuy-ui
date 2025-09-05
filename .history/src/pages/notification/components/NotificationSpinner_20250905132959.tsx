export default function NotificationsLoading() {
  return (
    <div className="min-h-screen bg-[#01151C]" style={{ fontFamily: "Open Sans, sans-serif" }}>
      {/* Header Skeleton */}
      <div className="bg-teal-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-teal-700 rounded animate-pulse" />
          <div className="w-8 h-8 bg-teal-700 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-teal-700 rounded animate-pulse" />
          ))}
        </div>
      </div>

      {/* Back Button and Title Skeleton */}
      <div className="bg-[#01151C] px-4 py-4 flex items-center gap-4">
        <div className="w-8 h-8 bg-gray-800 rounded-full animate-pulse" />
        <div className="w-32 h-6 bg-gray-800 rounded animate-pulse" />
      </div>

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
