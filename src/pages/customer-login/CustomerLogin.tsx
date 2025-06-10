import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import BidnBuyLogo from "@/assets/bidnbuy-logo.png";
import { Link } from "react-router-dom";

import CustomerOverlayImage from "@/assets/customer-login-overlay.jpg";
import CustomerLoginMobile from "@/assets/customer-login-mobile.jpg";
import CustomerBackgroundImage from "@/assets/customer-bg-login.jpg";

const CustomerLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#01151C]">
      <div className="lg:hidden">
        <div className="relative w-full">
          <div
            className="relative h-80 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              alt="Customer Sign Up background"
              src={CustomerLoginMobile}
            />
          </div>

          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/20 via-black/40 to-black/60">
            <div className="relative flex flex-col items-center justify-center h-full mb-5 px-6 text-center">
              <div className="mb-8">
                <img
                  src={BidnBuyLogo}
                  alt="Bid and Buy Logo"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-white leading-tight">
                  Welcome Back! 👋
                </h1>
                <p className="text-gray-200 text-base opacity-90">
                  Login and pick up from where you left off.
                </p>
              </div>
            </div>
          </div>
        </div>

      
          

    
        <div className="bg-[#01151C] px-6 pb-8 pt-8">
          <div className="max-w-sm mx-auto space-y-5">
    

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-300" />
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="bg-[#00707B]/30 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md"
                />
              </div>
            </div>


            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-white text-sm font-medium"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="bg-[#00707B]/30 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                  aria-Label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirm-password"
                className="text-white text-sm font-medium"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  className="bg-[#00707B]/30 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                  aria-Label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 h-12 rounded-md text-base transition-colors shadow-lg">
                Log in
              </Button>
            </div>

            <div className="text-center pt-6">
              <p className="text-teal-100 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup/customer"
                  className="text-white hover:text-teal-200 font-medium underline underline-offset-2 transition-colors"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hidden lg:block min-h-screen relative">
       
        <div className="absolute inset-0">
          <img
            src={CustomerBackgroundImage}
            alt="Shopping background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full flex">
            <div className="w-1/2 bg-[#00707B] p-10 flex flex-col justify-center">
              <div className="max-w-md mx-auto">
                <div className="mb-8">
                  <img
                    src={BidnBuyLogo}
                    alt="Bid and Buy Logo"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="space-y-3 mb-8">
                  <h1 className="text-4xl font-bold text-white leading-tight">
                    Welcome Back! 👋
                  </h1>
                  <p className="text-gray-200 text-lg">
                    Login and pick up from where you left off.
                  </p>
                </div>

                <div className="space-y-5">
                
                  <div className="space-y-2">
                    <Label
                      htmlFor="desktop-email"
                      className="text-white text-sm font-medium"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-300" />
                      <Input
                        id="desktop-email"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="bg-[#00707B]/30 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="desktop-password"
                      className="text-white text-sm font-medium"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="desktop-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="bg-[#00707B]/30 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                        aria-Label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-white">Forgot password?</div>
                

                  <div className="pt-4">
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 h-12 rounded-md text-base transition-colors shadow-lg">
                      Login
                    </Button>
                  </div>

                  
                  <div className="text-center pt-6">
                    <p className="text-teal-100 text-sm">
                      Don't have an account?{" "}
                      <Link
                        to="/signup/customer"
                        className="text-white hover:text-teal-200 font-medium underline underline-offset-2 transition-colors"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 relative bg-gray-100">
              <div
                className="absolute inset-0 rounded-r-3xl"
                style={{
                  backgroundImage: `url(${CustomerOverlayImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
