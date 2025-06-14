import type { UseFormReturn } from "react-hook-form"
import type { SignupFormValues } from "@/lib/validations/auth"
import { SignupFormFields } from "@/components/sign-up-form-field/SignUpFormField"

import CustomerBackgroundImage from "@/assets/customer-bg-img.jpg"
import CustomerOverlayImage from "@/assets/customer-overlay-img.jpg"
import BidnBuyLogo from "@/assets/bidnbuy-logo.png"

type DesktopSignupProps = {
  form: UseFormReturn<SignupFormValues>
  onSubmit: (values: SignupFormValues) => void
  isLoading?: boolean
}

const DesktopCustomerSignup = ({ form, onSubmit, isLoading }: DesktopSignupProps) => {
  return (
    <div className="hidden lg:block min-h-screen relative">
    
      <div className="absolute inset-0">
        <img src={CustomerBackgroundImage} alt="Shopping background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="bg-transparent backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full flex">
        
          <div className="w-1/2 bg-[#01151C] p-10 flex flex-col justify-center rounded-l-3xl">
            <div className="max-w-md mx-auto">
            
              <div className="mb-8">
                <img src={BidnBuyLogo} alt="Bid and Buy Logo" width={100} height={100} />
              </div>

           
              <div className="space-y-3 mb-8">
                <h1 className="text-4xl font-bold text-white leading-tight">Create your personal account</h1>
                <p className="text-gray-200 text-lg">You are one step away from smarter shopping.</p>
              </div>

              <SignupFormFields form={form} onSubmit={onSubmit} isLoading={isLoading} />
            </div>
          </div>

          <div className="w-1/2 relative">
            <div
              className="absolute inset-0 rounded-r-3xl"
              style={{
                backgroundImage: `url('${CustomerOverlayImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopCustomerSignup