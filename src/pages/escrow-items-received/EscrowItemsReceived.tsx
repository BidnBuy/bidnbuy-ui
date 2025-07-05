import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Header from "@/components/header/Header"

import { EscrowItemReceivedMobile } from "./EscrowItemsReceivedMobile"
import EscrowItemReceivedDesktop from "./EscrowItemsReceivedDesktop"

// import { AppHeader } from "@/components/shared/AppHeader"


const EscrowItemReceived = ({ orderId }: { orderId: string }) => {
  const navigate = useNavigate()
  const [isConfirming, setIsConfirming] = useState(false)
  const [isReporting, setIsReporting] = useState(false)

  const steps = [
    { id: 1, title: "In Escrow", completed: true, active: false, icon: "/in-escrow.svg" },
    { id: 2, title: "Item Received", completed: true, active: true, icon: "/items-received.svg" },
    { id: 3, title: "Funds Released", completed: false, active: false, icon: "/funds-released.svg" },
    { id: 4, title: "Funds Refunded", completed: false, active: false, icon: "/funds-refunded.svg" },
  ]

  const handleConfirmSatisfaction = () => {
    setIsConfirming(true)
    setTimeout(() => {
      navigate(`/escrow/${orderId}/payment-released`)
    }, 3000)
  }

  const handleReportProblem = () => {
    setIsReporting(true)
    setTimeout(() => {
      navigate(`/escrow/${orderId}/report-problem`)
    }, 3000)
  }

  const sharedEscrowItemReceivedProps = {
    orderId,
    steps,
    isConfirming,
    isReporting,
    onConfirmSatisfaction: handleConfirmSatisfaction,
    onReportProblem: handleReportProblem,
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#01151C" }}>
      {/* <AppHeader /> */}
      <Header />
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">Item Received</h1>
        
       
        <EscrowItemReceivedMobile {...sharedEscrowItemReceivedProps} />
       
        <EscrowItemReceivedDesktop {...sharedEscrowItemReceivedProps} />
      </div>
    </div>
  )
}

export default EscrowItemReceived;