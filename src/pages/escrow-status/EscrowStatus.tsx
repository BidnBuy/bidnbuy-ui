import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useEscrowSocket } from "@/hooks/useEscrowSocket"
// import { AppHeader } from "@/components/shared/AppHeader"
import { EscrowStatusMobile } from "./EscrowStatusMobile"
import { EscrowStatusDesktop } from "./EscrowStatusDesktop"
import type { EscrowState } from "@/types/escrow"
import Header from "@/components/header/Header"


export function EscrowStatus() {
  const navigate = useNavigate()
  const [isConfirming, setIsConfirming] = useState(false)
  const [isReporting, setIsReporting] = useState(false)

  const initialState: EscrowState = {
    orderStatus: "Pending",
    escrowStatus: "In Escrow",
    activeStep: 0,
    isItemReceived: false,
  }

  const { escrowState } = useEscrowSocket("100101", initialState)

  
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
      return { text: "Funds Released", color: "#0AE023" }
    }
    return { text: "In Escrow", color: "#3B82F6" }
  }

  const steps = [
    { id: 1, title: "In Escrow", completed: true, active: escrowState.activeStep === 0, icon: "/in-escrow.svg" },
    { id: 2, title: "Item Received", completed: escrowState.activeStep > 1, active: escrowState.activeStep === 1, icon: "/items-received.svg" },
    { id: 3, title: "Funds Released", completed: escrowState.activeStep > 2, active: escrowState.activeStep === 2, icon: "/funds-released.svg" },
    { id: 4, title: "Funds Refunded", completed: false, active: escrowState.activeStep === 3, icon: "/funds-refunded.svg" },
  ]

  const showActionButtons = escrowState.orderStatus === "Delivered" || escrowState.orderStatus === "Received"

  const handleConfirmSatisfaction = () => {
    setIsConfirming(true)
    setTimeout(() => {
      navigate(`/escrow/100101/payment-released`)
    }, 3000)
  }

  const handleReportProblem = () => {
    setIsReporting(true)
    setTimeout(() => {
      navigate(`/escrow/100101/report-problem`)
    }, 3000)
  }

  
  const sharedEscrowStatusProps = {
    escrowState,
    steps,
    showActionButtons,
    isConfirming,
    isReporting,
    onConfirmSatisfaction: handleConfirmSatisfaction,
    onReportProblem: handleReportProblem,
    getLightIndicatorColor,
    getStatusColor,
    getEscrowStatusButton,
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#01151C" }}>
      {/* <AppHeader /> */}
      <Header />
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">
          {showActionButtons ? "Item Received" : "Escrow Status"}
        </h1>
        
        
        <EscrowStatusMobile {...sharedEscrowStatusProps} />
        
    
        <EscrowStatusDesktop {...sharedEscrowStatusProps} />
      </div>
    </div>
  )
}
