import type { UseFormReturn } from "react-hook-form"

import { SignupFormFields } from "@/components/sign-up-form-field/SignUpFormField"
import type { SignupFormValues } from "@/lib/validations/auth"

import CustomerSignUpMobileImage from "@/assets/customer-sign-up-mobile-img.jpg"
import BidnBuyLogo from "@/assets/bidnbuy-logo.png"


type MobileSignupProps = {
  form: UseFormReturn<SignupFormValues>
  onSubmit: (values: SignupFormValues) => void
  isLoading?: boolean
}

const MobileCustomerSignUp = ({ form, onSubmit, isLoading }: MobileSignupProps) => {
  return (
    <div className="lg:hidden">
      <div className="relative">
        <div className="relative h-80 overflow-hidden">
          <img src={CustomerSignUpMobileImage} alt="Shopping background" className="w-full h-full object-cover" />
         
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

    
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
           
            <div className="mb-8">
              <img src={BidnBuyLogo} alt="Bid and Buy Logo" width={100} height={100} className="mx-auto" />
            </div>

       
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-white leading-tight">Create your personal account</h1>
              <p className="text-gray-200 text-base opacity-90">You are one step away from smarter shopping.</p>
            </div>
          </div>
        </div>

      
        <div className="relative">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full text-[#00707B]"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg> */}
        </div>
      </div>

   
      <div className="bg-[#01151C] px-6 pb-8 pt-8">
        <div className="max-w-sm mx-auto">
          <SignupFormFields form={form} onSubmit={onSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}
export default MobileCustomerSignUp