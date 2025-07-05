

// import { AppHeader } from "@/components/shared/AppHeader"
import type { EscrowState, Step } from '@/types/escrow'
import EscrowProductCard from '@/components/escrow-product-card/EscrowProductCard'

type EscrowStatusMobileProps = {
  escrowState: EscrowState
  steps: Step[]
  showActionButtons: boolean
  isConfirming: boolean
  isReporting: boolean
  onConfirmSatisfaction: () => void
  onReportProblem: () => void
  getLightIndicatorColor: (index: number) => string
  getStatusColor: () => string
  getEscrowStatusButton: () => { text: string; color: string }
}

export function EscrowStatusMobile({
  escrowState,
  steps,
  showActionButtons,
  isConfirming,
  isReporting,
  onConfirmSatisfaction,
  onReportProblem,
  getLightIndicatorColor,
  getStatusColor,
  getEscrowStatusButton
}: EscrowStatusMobileProps) {
  const escrowButton = getEscrowStatusButton()

  return (
    <div className="lg:hidden">
      
      <EscrowProductCard escrowHeight="197px" />
     

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
            {/* Progress Indicator */}
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
                <img
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
      {showActionButtons && (
        <div className="space-y-4 mt-8">
          <button
            onClick={onConfirmSatisfaction}
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
            onClick={onReportProblem}
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

      {/* Info Text - Mobile */}
      {!showActionButtons && (
        <p className="text-sm text-gray-400 leading-relaxed">
          Your funds will be held in escrow until you confirm the receipt of the item. Once confirmed, funds will be
          released to the vendor.
        </p>
      )}
    </div>
  )
}