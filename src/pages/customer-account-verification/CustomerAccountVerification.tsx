import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { DesktopVerificationLayout } from "@/components/verification-layout/DesktopVerificationLayout"
import { MobileVerificationLayout } from "@/components/verification-layout/MobileVerificationLayout"


export default function CustomerAccountVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string>()

  const handleSubmit = async (code: string) => {
    setIsSubmitting(true)
    setError(undefined)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Verification code submitted:", code)
      toast.success("Email verified! Please log in.")
      navigate("/customer-login")
    } catch (error) {
      setError("Invalid verification code. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    console.log("Back button clicked")
  }

  return (
    <>
      {email && (
        <div className="mb-4 text-center text-teal-400 font-medium">
          A verification code has been sent to <span className="font-bold">{email}</span>.
        </div>
      )}
      <MobileVerificationLayout onSubmit={handleSubmit} isSubmitting={isSubmitting} error={error} onBack={handleBack} />
      <DesktopVerificationLayout onSubmit={handleSubmit} isSubmitting={isSubmitting} error={error} />
    </>
  )
}
