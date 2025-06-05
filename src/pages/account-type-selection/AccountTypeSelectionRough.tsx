
import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

import { useMediaQuery } from "@/hooks/useMediaQuery"

import { ArrowRight } from "lucide-react"


import ShoppingBagImage from "@/assets/shopping-bag.jpg"
import BidnBuyLogo from "@/assets/bidnbuy-logo.png"



const AccountTypeSelection = () => {
  const [selectedType, setSelectedType] = useState<"customer" | "vendor">("customer")
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0] px-4 py-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={ShoppingBagImage} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-800/75 md:bg-slate-800/50" />
      </div>

      {/* Content Container */}
      <div className={`relative z-10 w-full ${isDesktop ? "max-w-md" : ""}`}>
        {/* Desktop Card Container */}
        <div
          className={`${isDesktop ? "bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mx-auto" : "min-h-screen"}`}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col px-8 py-6 md:py-10">
            {/* Logo */}
            <div className="flex justify-center pt-4 pb-6 md:pt-2">
              <img
                src={BidnBuyLogo}
                alt="Bid and Buy Logo"
                width={isDesktop ? 100 : 120}
                height={isDesktop ? 100 : 120}
                className="object-contain"
              />
            </div>

            {/* Welcome Text */}
            <div className="text-center mb-8 md:mb-6">
              <h1 className="text-white text-3xl font-bold mb-4 md:mb-3 leading-tight">Welcome To Bid and Buy</h1>
              <p className="text-gray-300 text-base md:text-sm leading-relaxed">
                New Here? We've Been Waiting for You
                <br />
                Start bidding, Start winning, Start now.
              </p>
            </div>

            {/* Sign up section */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-8 md:mb-6">
                <p className="text-white text-lg md:text-base mb-6 md:mb-4 font-medium">Sign up as:</p>

                {/* Selection Buttons */}
                <div className="space-y-4 md:space-y-3 mb-8 md:mb-6">
                  <button
                    onClick={() => setSelectedType("customer")}
                    className={`w-full py-5 md:py-3 px-6 rounded-xl md:rounded-md border text-left text-lg md:text-base font-medium transition-all ${
                      selectedType === "customer"
                        ? "border-teal-400 bg-teal-400/20 text-teal-300"
                        : isDesktop
                          ? "border-teal-600/70 bg-transparent text-gray-300 hover:border-teal-500"
                          : "border-teal-600/40 bg-slate-700/40 text-gray-300"
                    }`}
                  >
                    Customer
                  </button>

                  <button
                    onClick={() => setSelectedType("vendor")}
                    className={`w-full py-5 md:py-3 px-6 rounded-xl md:rounded-md border text-left text-lg md:text-base font-medium transition-all ${
                      selectedType === "vendor"
                        ? "border-teal-400 bg-teal-400/20 text-teal-300"
                        : isDesktop
                          ? "border-teal-600/70 bg-transparent text-gray-300 hover:border-teal-500"
                          : "border-teal-600/40 bg-slate-700/40 text-gray-300"
                    }`}
                  >
                    Vendor
                  </button>
                </div>

                {/* Proceed Button */}
                <Button
                  className={`w-full bg-teal-500 hover:bg-teal-600 text-white py-6 md:py-3 rounded-xl md:rounded-md font-semibold text-lg md:text-base`}
                  size="lg"
                >
                  Proceed
                  {!isDesktop && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </div>
            </div>

       
            <div className="text-center pb-4">
              <p className="text-gray-400 text-base md:text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-teal-400 hover:text-teal-300 transition-colors font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountTypeSelection
