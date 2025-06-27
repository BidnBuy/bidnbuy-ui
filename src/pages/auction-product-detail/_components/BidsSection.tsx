import { Button } from "@/components/ui/button"

export function BidSection({ product }: { product: any }) {
  // Demo bid data
  const bidHistory = [
    { amount: "₦170,800", user: "User 4", time: "10:25 AM" },
    { amount: "₦170,500", user: "User 3", time: "10:20 AM" },
    { amount: "₦160,900", user: "User 2", time: "10:00 AM" },
    { amount: "₦150,500", user: "User 1", time: "09:30 AM" },
  ]

  return (
    <div className="rounded-xl p-6 border border-slate-700/30" style={{ backgroundColor: "#01212E" }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Current Highest Bid</h3>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-white">₦180,000</div>
            <div className="text-teal-400 text-sm font-medium">User **</div>
          </div>
          <div className="text-teal-400 text-sm font-medium">10:30 AM</div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Bid History</h3>
        <div className="space-y-4">
          {bidHistory.map((bid, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-white">{bid.amount}</div>
                <div className="text-teal-400 text-sm font-medium">{bid.user}</div>
              </div>
              <div className="text-teal-400 text-sm font-medium">{bid.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
