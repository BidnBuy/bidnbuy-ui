"use client"

/**
 * @file app/admin/bids/[id]/page.tsx
 * @description Bid details page matching the mobile design.
 */

import { DetailPageLayout } from "@/features/admin-management/components/detail-page-layout"
import { DetailProfileCard } from "@/features/admin-management/components/detail-profile-card"
import { DetailInfoSection } from "@/features/admin-management/components/detail-info-section"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function BidDetails({ params }: { params: { id: string } }) {
  const { toast } = useToast()

  const bidData = {
    bidder: "BuildRight Inc",
    email: "buildrightbusiness@gmail.com",
    phone: "+2348143155867",
    avatar: "/images/amelia-profile.jpg",
    product: {
      name: "Steel Beams",
      description: "View Product Page",
    },
    vendor: {
      name: "SteelCo",
      email: "steel.cobusiness@gmail.com",
    },
    status: ["Active", "Outbid", "Won"],
    auction: {
      startingPrice: 50000,
      currentBid: 55000,
      timeLeft: "2 days",
    },
    bidLog: [
      { bidder: "Michael Brown", amount: 53000 },
      { bidder: "Jennifer Smith", amount: 52000 },
      { bidder: "David Lee", amount: 51000 },
    ],
  }

  const productInfo = [
    {
      label: "Product",
      value: (
        <div className="flex items-center gap-2">
          <span>{bidData.product.name}</span>
          <Button
            onClick={() => toast({ title: "Navigate to product page" })}
            className="bg-[#00707B] hover:bg-[#00707B]/80 text-white px-3 py-1 text-xs"
          >
            View
          </Button>
        </div>
      ),
    },
  ]

  const vendorInfo = [
    {
      label: "Vendor",
      value: (
        <div className="flex items-center gap-2">
          <Image
            src="/images/amelia-profile.jpg"
            alt="SteelCo"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div>
            <span className="text-white">{bidData.vendor.name}</span>
            <p className="text-gray-400 text-xs">{bidData.vendor.email}</p>
          </div>
          <Button
            onClick={() => toast({ title: "Navigate to vendor page" })}
            className="bg-[#00707B] hover:bg-[#00707B]/80 text-white px-3 py-1 text-xs ml-2"
          >
            View
          </Button>
        </div>
      ),
    },
  ]

  const auctionInfo = [
    { label: "Starting Price", value: `N${bidData.auction.startingPrice.toLocaleString()}` },
    { label: "Current Bid", value: `N${bidData.auction.currentBid.toLocaleString()}` },
    { label: "Time Left", value: bidData.auction.timeLeft },
  ]

  const handleCancelBid = () => {
    toast({ title: "Bid Cancelled", description: "The bid has been cancelled successfully." })
  }

  const handleFlagSuspicious = () => {
    toast({ title: "Flagged as Suspicious", description: "This bid has been flagged for review." })
  }

  const handleContactVendor = () => {
    toast({ title: "Contact Vendor", description: "Opening vendor contact form..." })
  }

  const handleAddDispute = () => {
    toast({ title: "Dispute Tag Added", description: "A dispute tag has been added to this bid." })
  }

  const actions = (
    <>
      <Button
        onClick={handleCancelBid}
        className="w-full md:w-auto bg-[#00707B] hover:bg-[#00707B]/80 text-white px-6 py-3"
      >
        Cancel Bid
      </Button>
      <Button
        onClick={handleFlagSuspicious}
        className="w-full md:w-auto bg-[#00707B] hover:bg-[#00707B]/80 text-white px-6 py-3"
      >
        Flag as Suspicious
      </Button>
      <Button
        onClick={handleContactVendor}
        className="w-full md:w-auto bg-[#00707B] hover:bg-[#00707B]/80 text-white px-6 py-3"
      >
        Contact Vendor
      </Button>
      <Button
        onClick={handleAddDispute}
        className="w-full md:w-auto bg-[#00707B] hover:bg-[#00707B]/80 text-white px-6 py-3"
      >
        Add Dispute Tag
      </Button>
    </>
  )

  return (
    <DetailPageLayout title="Bid Details" backUrl="/admin/bids" actions={actions}>
      <DetailProfileCard name={bidData.bidder} email={bidData.email} phone={bidData.phone} avatar={bidData.avatar} />

      <DetailInfoSection title="Product Information" items={productInfo} />
      <DetailInfoSection title="Vendor Information" items={vendorInfo} />

      {/* Status Section */}
      <div className="mb-8">
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-6">Status</h3>
        <div className="space-y-2">
          {bidData.status.map((status, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${status === "Won" ? "bg-green-500" : "bg-gray-500"}`}></div>
              <span className="text-white text-base">{status}</span>
            </div>
          ))}
        </div>
      </div>

      <DetailInfoSection title="Auction Information" items={auctionInfo} />

      {/* Bid Log */}
      <div className="mb-8">
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-6">Bid Log</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-300 border-b border-[#00707B]">
                <th className="py-3 px-4 font-semibold">Bidder</th>
                <th className="py-3 px-4 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {bidData.bidLog.map((bid, index) => (
                <tr key={index} className="border-b border-[#00707B]/30">
                  <td className="py-3 px-4 text-white">{bid.bidder}</td>
                  <td className="py-3 px-4 text-white">N{bid.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DetailPageLayout>
  )
}
