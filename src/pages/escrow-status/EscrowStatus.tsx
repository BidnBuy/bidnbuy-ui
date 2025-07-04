import { Bell, Menu, Search, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useEscrowSocket } from "./hooks/useEscrowSocket"
import type { EscrowState } from "./types/escrow"

export default function EscrowStatus() {
  const router = useRouter()
  const [isConfirming, setIsConfirming] = useState(false)
  const [isReporting, setIsReporting] = useState(false)

  const initialState: EscrowState = {
    orderStatus: "Pending",
    escrowStatus: "In Escrow",
    activeStep: 0,
    isItemReceived: false,
  }

  const { escrowState } = useEscrowSocket("100101", initialState)

  // Get the appropriate light indicator color for each step
  const getLightIndicatorColor = (stepIndex: number) => {
    if (stepIndex === 0) {
      return "#1717D3"
    } else if (stepIndex === 1) {
      if (escrowState.activeStep >= 1) {
        return "#FFA500"
      }
      return "white"
    } else if (stepIndex === 2) {
      if (escrowState.activeStep >= 2) {
        return "#0AE023"
      }
      return "white"
    } else {
      return "white"
    }
  }

  const steps = [
    { id: 1, title: "In Escrow", completed: true, active: escrowState.activeStep === 0, icon: "/in-escrow.svg" },
    {
      id: 2,
      title: "Item Received",
      completed: escrowState.activeStep > 1,
      active: escrowState.activeStep === 1,
      icon: "/items-received.svg",
    },
    {
      id: 3,
      title: "Funds Released",
      completed: escrowState.activeStep > 2,
      active: escrowState.activeStep === 2,
      icon: "/funds-released.svg",
    },
    {
      id: 4,
      title: "Funds Refunded",
      completed: false,
      active: escrowState.activeStep === 3,
      icon: "/funds-refunded.svg",
    },
  ]

  
  const getStatusColor = () => {
    switch (escrowState.orderStatus) {
      case "Pending":
        return "#FFA500" 
      case "In Transit":
        return "#FFCC00" 
      case "Delivered":
      case "Received":
        return "#00707B" 
      default:
        return "#00707B"
    }
  }


  const getEscrowStatusButton = () => {
    if (escrowState.escrowStatus === "Funds Released") {
      return {
        text: "Funds Released",
        color: "#0AE023", 
      }
    }
    return {
      text: "In Escrow",
      color: "#3B82F6", 
    }
  }

  const escrowButton = getEscrowStatusButton()

 
  const showActionButtons = escrowState.orderStatus === "Delivered" || escrowState.orderStatus === "Received"

  const handleConfirmSatisfaction = () => {
    setIsConfirming(true)
    setTimeout(() => {
      router.push(`/escrow/100101/payment-released`)
    }, 3000)
  }

  const handleReportProblem = () => {
    setIsReporting(true)
    setTimeout(() => {
      router.push(`/escrow/100101/report-problem`)
    }, 3000)
  }

  const handleDispute = () => {
    alert("Dispute process initiated. Our team will contact you shortly.")
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#01151C" }}>
    
      <header className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#00707B" }}>
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6" />
          <div className="flex items-center">
            <span className="text-2xl font-bold">B</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full ml-1"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search className="h-5 w-5" />
          <User className="h-5 w-5" />
          <ShoppingCart className="h-5 w-5" />
          <Bell className="h-5 w-5" />
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">{showActionButtons ? "Item Received" : "Escrow Status"}</h1>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Product Card */}
          <div
            className="rounded-lg p-4 mb-6 border w-full"
            style={{
              backgroundColor: "#01212E",
              borderColor: "#00707B",
              height: "197px",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/hermes-bag.png"
                alt="Hermes Birkin Bag"
                width={183}
                height={183}
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Hermes Birkin Bag</h2>
            <p className="text-xl font-semibold text-green-400 mb-4">₦200,000</p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">Order #100101</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">Order Status:</span>
                <div
                  className="px-3 py-1 text-white text-sm font-medium"
                  style={{
                    backgroundColor: getStatusColor(),
                    width: "100px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                  }}
                >
                  {escrowState.orderStatus}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm">Escrow Status:</span>
              <div
                className="px-4 py-1 text-white text-sm font-medium"
                style={{
                  backgroundColor: escrowButton.color,
                  minWidth: "120px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
              >
                {escrowButton.text}
              </div>
            </div>
          </div>

          {/* Progress Steps - Mobile */}
          <div className="space-y-0 mb-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex items-center gap-3"
                style={{ marginBottom: index < steps.length - 1 ? "31px" : "0" }}
              >
                {/* Progress Indicator - Just colored circle */}
                <div
                  className="rounded-full"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: getLightIndicatorColor(index),
                  }}
                ></div>

                {/* Step Icon with connecting line */}
                <div className="relative flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <Image
                      src={step.icon || "/placeholder.svg"}
                      alt={step.title}
                      width={16}
                      height={16}
                      className={`object-contain ${step.active ? "opacity-100" : "opacity-60"}`}
                    />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="absolute bg-gray-600"
                      style={{
                        top: "16px",
                        left: "8px",
                        width: "1px",
                        height: "31px",
                        transform: "translateX(-0.5px)",
                      }}
                    ></div>
                  )}
                </div>

                {/* Step Text */}
                <span className={`text-sm ${step.active ? "text-white font-medium" : "text-gray-400"}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons - Mobile (only show when item is delivered) */}
          {showActionButtons && (
            <div className="space-y-4 mt-8">
              <button
                onClick={handleConfirmSatisfaction}
                disabled={isConfirming}
                className="w-full py-4 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: "#00707B" }}
              >
                {isConfirming ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  "I am satisfied with my order"
                )}
              </button>

              <button
                onClick={handleReportProblem}
                disabled={isConfirming || isReporting}
                className="w-full py-4 rounded-lg text-white font-medium border border-gray-600 transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: "transparent" }}
              >
                {isReporting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  "Report a problem"
                )}
              </button>
            </div>
          )}

          {/* Info Text - Mobile (only show when not delivered) */}
          {!showActionButtons && (
            <p className="text-sm text-gray-400 leading-relaxed">
              Your funds will be held in escrow until you confirm the receipt of the item. Once confirmed, funds will be
              released to the vendor.
            </p>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:gap-8">
          {/* Left Side - Image and Progress Steps */}
          <div className="lg:w-[723px]">
            {/* Product Card */}
            <div
              className="rounded-lg p-4 mb-6 border w-full"
              style={{
                backgroundColor: "#01212E",
                borderColor: "#00707B",
                height: "360px",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/hermes-bag.png"
                  alt="Hermes Birkin Bag"
                  width={183}
                  height={183}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Progress Steps - Desktop: Horizontal layout */}
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative">
                  {/* Progress Indicator - Just colored circle */}
                  <div
                    className="rounded-full mb-2"
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: getLightIndicatorColor(index),
                    }}
                  ></div>

                  {/* Step Icon */}
                  <div className="w-4 h-4 flex items-center justify-center mb-2 relative">
                    <Image
                      src={step.icon || "/placeholder.svg"}
                      alt={step.title}
                      width={16}
                      height={16}
                      className={`object-contain ${step.active ? "opacity-100" : "opacity-60"}`}
                    />
                    {/* Horizontal connecting line */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute bg-gray-600"
                        style={{
                          top: "8px",
                          left: "16px",
                          width: "120px",
                          height: "1px",
                        }}
                      ></div>
                    )}
                  </div>

                  {/* Step Text */}
                  <span className={`text-sm text-center ${step.active ? "text-white font-medium" : "text-gray-400"}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Info Text - Desktop (only show when not delivered) */}
            {!showActionButtons && (
              <p className="text-sm text-gray-400 leading-relaxed">
                Your funds will be held in escrow until you confirm the receipt of the item. Once confirmed, funds will
                be released to the vendor.
              </p>
            )}
          </div>

          {/* Right Side - Product Details */}
          <div className="lg:flex-1">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Hermes Birkin Bag</h2>
              <p className="text-xl font-semibold text-green-400 mb-4">₦200,000</p>

              <div className="mb-4">
                <span className="text-sm block mb-4">Order #100101</span>

                {/* Aligned Status Buttons */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sm w-28">Order Status:</span>
                    <div
                      className="px-3 py-1 text-white text-sm font-medium ml-2"
                      style={{
                        backgroundColor: getStatusColor(),
                        width: "100px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                      }}
                    >
                      {escrowState.orderStatus}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-28">Escrow Status:</span>
                    <div
                      className="px-4 py-1 text-white text-sm font-medium ml-2"
                      style={{
                        backgroundColor: escrowButton.color,
                        minWidth: "120px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                      }}
                    >
                      {escrowButton.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Desktop (only show when item is delivered) */}
        {showActionButtons && (
          <div className="hidden lg:block mt-8 space-y-4">
            <button
              onClick={handleConfirmSatisfaction}
              disabled={isConfirming}
              className="w-full py-4 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: "#00707B" }}
            >
              {isConfirming ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                "I am satisfied with my order"
              )}
            </button>

            <button
              onClick={handleReportProblem}
              disabled={isConfirming || isReporting}
              className="w-full py-4 rounded-lg text-white font-medium border border-gray-600 transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: "transparent" }}
            >
              {isReporting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                "Report a problem"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
