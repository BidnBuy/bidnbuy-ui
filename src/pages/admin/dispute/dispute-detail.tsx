import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import HermesBagImage from "@/assets/products/hermes-bag.png";

const DisputeDetailsPage = () => {
  const { paramsId } = useParams<{ paramsId: string }>();
  const navigate = useNavigate();

  // Mock dispute data
  const dispute = {
    id: paramsId,
    disputeId: "#1234567",
    dateOpened: "Sophia Clark",
    status: "Open",
    buyer: "Sophia Clark",
    vendor: "Alex Johnson",
    product: "Hermes Birkin Bag",
    issueDetails: "Additional details",
    evidence: [HermesBagImage, HermesBagImage],
    actionLog: [
      {
        user: "Admin",
        action: "Dispute opened by buyer",
        timestamp: "2025-07-15 10:00AM",
        avatar: "/admin-avatar.jpg",
      },
      {
        user: "Admin",
        action: "Dispute assigned to agent",
        timestamp: "2025-07-15 10:30AM",
        avatar: "/admin-avatar.jpg",
      },
      {
        user: "Admin",
        action: "Waiting for vendor response",
        timestamp: "2025-07-15 02:00PM",
        avatar: "/admin-avatar.jpg",
      },
      {
        user: "Alex Johnson",
        action:
          "We are investigating the issue and will provide an update within 24 hours.",
        timestamp: "2025-07-15 09:00AM",
        avatar: "/vendor-avatar.jpg",
      },
      {
        user: "Admin",
        action: "Vendor has provided a response. Reviewing evidence",
        timestamp: "2025-07-15 02:00AM",
        avatar: "/admin-avatar.jpg",
      },
    ],
  };

  //   const sections = [
  //     {
  //       title: "Case Information",
  //       items: [
  //         { label: "Dispute ID", value: dispute.disputeId },
  //         { label: "Date Opened", value: dispute.dateOpened },
  //         { label: "Status", value: dispute.status },
  //       ],
  //     },
  //     {
  //       title: "Parties Involved",
  //       items: [
  //         { label: "Buyer", value: dispute.buyer },
  //         { label: "Vendor", value: dispute.vendor },
  //         { label: "Product", value: dispute.product },
  //       ],
  //     },
  //   ]

  const actions = [
    {
      label: "Mark Resolved",
      onClick: () => console.log("Mark resolved"),
      variant: "default" as const,
    },
    {
      label: "Escalate",
      onClick: () => console.log("Escalate"),
      variant: "outline" as const,
    },
    {
      label: "Issue Refund",
      onClick: () => console.log("Issue refund"),
      variant: "outline" as const,
    },
    {
      label: "Suspend Vendor",
      onClick: () => console.log("Suspend vendor"),
      variant: "destructive" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      {/* Mobile Header */}
      <div className="md:hidden bg-teal-800/30 p-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-teal-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Dispute Details
        </button>
      </div>

      <div className="p-4 md:p-6 space-y-6">
        {/* Desktop Back Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-teal-200 mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Disputes
          </button>
        </div>

        {/* Case Information */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Case Information
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Dispute ID</span>
                <span className="text-white font-medium">
                  {dispute.disputeId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Date Opened</span>
                <span className="text-white font-medium">
                  {dispute.dateOpened}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Status</span>
                <span className="text-white font-medium">{dispute.status}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parties Involved */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Parties Involved
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Buyer</span>
                <span className="text-white font-medium">{dispute.buyer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Vendor</span>
                <span className="text-white font-medium">{dispute.vendor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Product</span>
                <span className="text-white font-medium">
                  {dispute.product}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Issue Details */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Issue Details
            </h2>
            <textarea
              className="w-full h-32 bg-teal-900/20 border border-teal-700/30 rounded-lg p-3 text-white placeholder:text-teal-300/70 resize-none"
              placeholder="Additional details"
              defaultValue={dispute.issueDetails}
            />
          </CardContent>
        </Card>

        {/* Uploaded Evidence */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Uploaded Evidence
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#01151C] rounded-lg overflow-hidden">
                <img
                  src={HermesBagImage}
                  alt="Evidence 1"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#01151C] rounded-lg overflow-hidden">
                <img
                  src={HermesBagImage}
                  alt="Evidence 2"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Log */}
        <Card className="bg-[#01151C] border-teal-700/30">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Action Log
            </h2>
            <div className="space-y-4">
              {dispute.actionLog.map((log, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={log.avatar || "/placeholder.svg"}
                      alt={log.user}
                    />
                    <AvatarFallback className="bg-teal-700 text-white text-sm">
                      {log.user.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-white">{log.user}</span>
                      <span className="text-sm text-slate-400">
                        {log.timestamp}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">{log.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                action.variant === "default"
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : action.variant === "destructive"
                  ? "bg-red-600/20 border border-red-600/50 text-red-400 hover:bg-red-600/30"
                  : "bg-slate-700/50 border border-slate-600 text-slate-200 hover:bg-slate-600/50"
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisputeDetailsPage;
