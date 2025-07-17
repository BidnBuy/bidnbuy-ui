import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, Heart, ChevronLeft } from "lucide-react"
import { useAuctionStore } from "@/store/auction-store"
import { useBidMutation } from "./hooks/useBidMutation"
import { createBidValidation, type BidFormData } from "./schema/bid-schema"
import { ConnectionStatus } from "@/components/connection-status/ConnectionStatus"
import { CountdownTimer } from "@/components/countdown-timer/CountdownTimer"
import { BidStatusOverlay } from "./components/BidStatusOverlay"


type PlaceBidModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function PlaceBidModal({ isOpen, onClose }: PlaceBidModalProps) {
  const { auction, canPlaceBid, isAuctionEnded, timeLeft } = useAuctionStore()
  const bidMutation = useBidMutation()

  if (!auction) return null
  const validationSchema = auction
    ? createBidValidation(auction.currentBid, auction.minimumBid)
    : createBidValidation(180000, 150000) 

  const {
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    reset,
  } = useForm<BidFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      bidAmount: "",
      agreedToTerms: false,
    },
  })

  const bidAmount = watch("bidAmount")
  const agreedToTerms = watch("agreedToTerms")

  const onSubmit = async (data: BidFormData) => {
    if (!auction || !canPlaceBid()) return

    try {
      await bidMutation.mutateAsync({
        auctionId: auction.id,
        amount: data.bidAmount,
      })
    } catch (error) {
      console.error("Bid submission failed:", error)
    }
  }

  const handleClose = () => {
    reset() // Reset form fields
    bidMutation.reset() // Reset mutation state (isSuccess, isPending, isError)
    onClose() // Close the modal
  }

  if (!isOpen || !auction) return null

  const auctionEnded = isAuctionEnded()
  const canBid = canPlaceBid()
  const isProcessing = bidMutation.isPending
  const isSuccess = bidMutation.isSuccess
  const isError = bidMutation.isError
  const errorMessageFromMutation = bidMutation.error?.message

  // Get error message based on current state
  const getErrorMessage = () => {
    if (auctionEnded) {
      return "The auction has ended. Bids are no longer accepted."
    }
    if (!canBid && !isProcessing && !isSuccess) {
      return "Bidding is currently unavailable. Please check auction status."
    }
    if (isError && errorMessageFromMutation === "NETWORK_ERROR") {
      return "Network error: Please check your internet connection."
    }
    return null
  }

  const displayErrorMessage = getErrorMessage()

  const commonModalContent = (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-gray-400 text-sm">Current Bid:</span>
            <div className="text-xl font-bold" style={{ color: "#39F0BC" }}>
              ₦{auction.currentBid.toLocaleString()}
            </div>
          </div>
          <div>
            <span className="text-gray-400 text-sm">Minimum Bid:</span>
            <div className="text-xl font-bold" style={{ color: "#39F0BC" }}>
              ₦{auction.minimumBid.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-300">{auction.totalBids} bids</span>
          <CountdownTimer timeLeft={timeLeft} isAuctionEnded={auctionEnded} />
        </div>

        {auction.status === "live" && (
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Live Auction</span>
          </div>
        )}
      </div>

      <BidFormContent
        bidAmount={bidAmount?.toString() || ""}
        agreedToTerms={agreedToTerms}
        errors={errors}
        displayErrorMessage={displayErrorMessage}
        canBid={canBid}
        isProcessing={isProcessing}
        auctionEnded={auctionEnded}
        isValid={isValid}
        setValue={setValue}
        onSubmit={handleSubmit(onSubmit)}
      />
    </>
  )

  return (
    <>
      {/* Desktop Modal Overlay */}
      <div className="hidden lg:block fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={handleClose}>
        <div
          className="flex items-center justify-center min-h-screen p-4"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <div
            className="bg-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/30"
            style={{ backgroundColor: "#01151C" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Place Bid</h2>
              <div className="flex items-center gap-4">
                <ConnectionStatus productId={auction.id} />
                <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Left side - Product Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/30">
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-600/30">
                    <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                    <span className="text-sm font-medium">200</span>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/hermes-bag.png"
                      alt="Hermes Birkin Bag"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Bid Form */}
              <div>{commonModalContent}</div>
            </div>

            <BidStatusOverlay isProcessing={isProcessing} isSuccess={isSuccess} onClose={handleClose} />
          </div>
        </div>
      </div>

      {/* Mobile Full Screen */}
      <div className="lg:hidden fixed inset-0 z-50" style={{ backgroundColor: "#01151C" }}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <header className="bg-teal-800 px-4 py-3 flex items-center justify-between">
            <button onClick={handleClose} className="text-white">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-xl font-bold">B+</div>
            <ConnectionStatus productId={auction.id} className="scale-75" />
          </header>

          <div className="flex-1 overflow-y-auto p-4">
            {/* Product Image */}
            <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-xl p-6 mb-6 backdrop-blur-sm border border-slate-700/30">
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-600/30">
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                <span className="text-sm font-medium">200</span>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/hermes-bag.png"
                  alt="Hermes Birkin Bag"
                  width={280}
                  height={280}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center mt-4 gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-3 text-white">{auction.title}</h1>
              <div className="text-2xl font-bold mb-4" style={{ color: "#39F0BC" }}>
                ₦200,000
              </div>

              {commonModalContent}
            </div>
          </div>

          <BidStatusOverlay isProcessing={isProcessing} isSuccess={isSuccess} onClose={handleClose} isMobile />
        </div>
      </div>
    </>
  )
}
