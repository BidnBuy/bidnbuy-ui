import { useNavigate } from "react-router-dom"

import Header from "@/components/header/Header"
// import { AppHeader } from "@/components/shared/AppHeader"

import { EscrowPaymentReleasedMobile } from "./EscrowPaymentReleasedMobile"
import EscrowPaymentReleasedDesktop from "./EscrowPaymentReleasedDesktop"



const EscrowPaymentReleased = ({ orderId }: { orderId: string }) => {

  const navigate = useNavigate()

  const handleViewOrderDetails = () => {
    alert("Navigating to order details...")
  }

  const handleReturnToOrders = () => {
    navigate("/")
  }

  const sharedEscrowPaymentReleasedProps = {
    orderId,
    onViewOrderDetails: handleViewOrderDetails,
    onReturnToOrders: handleReturnToOrders,
  }

  return (
    <div className="min-h-screen text-white pb-4" style={{ backgroundColor: "#01151C" }}>
      {/* <AppHeader /> */}

      <Header />
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold mb-8">Escrow Released</h1>
        
       
        <EscrowPaymentReleasedMobile {...sharedEscrowPaymentReleasedProps} />
        
     
        <EscrowPaymentReleasedDesktop {...sharedEscrowPaymentReleasedProps} />
      </div>
    </div>
  )
}

export default EscrowPaymentReleased;