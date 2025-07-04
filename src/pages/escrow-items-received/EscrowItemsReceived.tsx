import { Bell, Menu, Search, ShoppingCart, User } from "lucide-react"

import { useState } from "react"

export default function EscrowItemsReceived({ params }: { params: { orderId: string } }) {
  const [isConfirming, setIsConfirming] = useState(false)
  const [isDisputing, setIsDisputing] = useState(false)

  const steps = [
    { id: 1, title: "In Escrow", completed: true, active: false, icon: "/in-escrow.svg" },
    { id: 2, title: "Item Received", completed: true, active: true, icon: "/items-received.svg" },
    { id: 3, title: "Funds Released", completed: false, active: false, icon: "/funds-released.svg" },
    { id: 4, title: "Funds Refunded", completed: false, active: false, icon: "/funds-refunded.svg" },
  ]

  const handleConfirmSatisfaction = () => {
    setIsConfirming(true)
    // For real integration, you'd call an API to confirm satisfaction
    setTimeout(() => {
      setIsConfirming(false)
      alert("Thank you for confirming! Funds will be released to the vendor.")
    }, 1500)
  }

  const handleDispute = () => {
    setIsDisputing(true)
    // For real integration, you would navigate to a dispute form
    setTimeout(() => {
      setIsDisputing(false)
      alert("Dispute process initiated. Our team will contact you shortly.")
    }, 1500)
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#01151C" }}>
      {/* Header */}
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
        <h1 className="text-xl font-semibold mb-6">Item Received</h1>

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
              <span className="text-sm">Order #{params.orderId}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">Order Status:</span>
                <div
                  className="px-3 py-1 text-white text-sm font-medium"
                  style={{
                    backgroundColor: "#00707B",
                    width: "100px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                  }}
                >
                  Received
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm">Escrow Status:</span>
              <div
                className="px-3 py-1 text-white text-sm font-medium bg-blue-600"
                style={{
                  width: "100px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
              >
                In Escrow
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
                {/* Progress Indicator Circle */}
                <div
                  className={`rounded-full flex items-center justify-center ${
                    step.active ? "bg-blue-600" : step.completed ? "bg-green-600" : "bg-gray-600"
                  }`}
                  style={{ width: "12px", height: "12px" }}
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

          {/* Action Buttons - Mobile */}
          <div className="space-y-4 mt-8">
            <button
              onClick={handleConfirmSatisfaction}
              disabled={isConfirming}
              className="w-full py-4 rounded-lg text-white font-medium transition-all"
              style={{ backgroundColor: "#00707B" }}
            >
              {isConfirming ? "Processing..." : "I am satisfied with my order"}
            </button>

            <button
              onClick={handleDispute}
              disabled={isDisputing}
              className="w-full py-4 rounded-lg text-white font-medium border border-gray-600 transition-all"
              style={{ backgroundColor: "transparent" }}
            >
              {isDisputing ? "Processing..." : "Dispute"}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex gap-8">
            {/* Left Side - Image and Progress Steps */}
            <div className="w-[723px]">
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
                    {/* Progress Indicator Circle */}
                    <div
                      className={`rounded-full mb-2 ${
                        step.active ? "bg-blue-600" : step.completed ? "bg-green-600" : "bg-gray-600"
                      }`}
                      style={{ width: "12px", height: "12px" }}
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
            </div>

            {/* Right Side - Product Details */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Hermes Birkin Bag</h2>
                <p className="text-xl font-semibold text-green-400 mb-4">₦200,000</p>

                <div className="mb-4">
                  <span className="text-sm block mb-4">Order #{params.orderId}</span>

                  {/* Aligned Status Buttons */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-sm w-28">Order Status:</span>
                      <div
                        className="px-3 py-1 text-white text-sm font-medium ml-2"
                        style={{
                          backgroundColor: "#00707B",
                          width: "100px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                        }}
                      >
                        Received
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span className="text-sm w-28">Escrow Status:</span>
                      <div
                        className="px-3 py-1 text-white text-sm font-medium bg-blue-600 ml-2"
                        style={{
                          width: "100px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                        }}
                      >
                        In Escrow
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="mt-8 space-y-4">
            <button
              onClick={handleConfirmSatisfaction}
              disabled={isConfirming}
              className="w-full py-4 rounded-lg text-white font-medium transition-all"
              style={{ backgroundColor: "#00707B" }}
            >
              {isConfirming ? "Processing..." : "I am satisfied with my order"}
            </button>

            <button
              onClick={handleDispute}
              disabled={isDisputing}
              className="w-full py-4 rounded-lg text-white font-medium border border-gray-600 transition-all"
              style={{ backgroundColor: "transparent" }}
            >
              {isDisputing ? "Processing..." : "Dispute"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
