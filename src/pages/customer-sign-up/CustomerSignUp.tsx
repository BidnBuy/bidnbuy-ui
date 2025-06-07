import { useState } from "react"
import { Eye, EyeOff, Mail, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import BidnBuyLogo from "@/assets/bidnbuy-logo.png"
import { Link } from "react-router-dom"

const CustomerSignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#01151C]">
      {/* Mobile version */}
      <div className="lg:hidden">
        {/* Top section with background image and curved bottom */}
        <div className="relative">
          {/* Background image section */}
          <div className="relative h-80 overflow-hidden">
            <img src="/shopping-background.jpg" alt="Shopping background" className="w-full h-full object-cover" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
              {/* Logo */}
              <div className="mb-8">
                <img src="/bidnbuy-logo.png" alt="Bid and Buy Logo" width={100} height={100} className="mx-auto" />
              </div>

              {/* Header text */}
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-white leading-tight">Create your personal account</h1>
                <p className="text-gray-200 text-base opacity-90">You are one step away from smarter shopping.</p>
              </div>
            </div>
          </div>

          {/* Curved transition exactly as in Figma */}
          <div className="relative">
            <svg
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
            </svg>
          </div>
        </div>

        {/* Form section */}
        <div className="bg-[#00707B] px-6 pb-8 pt-2">
          <div className="max-w-sm mx-auto space-y-5">
            {/* Name field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-sm font-medium">
                Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-300" />
                <Input
                  id="name"
                  placeholder="johndoe"
                  className="bg-[#00707B]/80 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                />
              </div>
            </div>

            {/* Email field */}
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
                  className="bg-[#00707B]/80 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                />
              </div>
            </div>

            {/* Phone field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white text-sm font-medium">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-300" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234706748047G"
                  className="bg-[#00707B]/80 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="bg-[#00707B]/80 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-white text-sm font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  className="bg-[#00707B]/80 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Proceed button */}
            <div className="pt-4">
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 h-12 rounded-lg text-base transition-colors shadow-lg">
                Proceed →
              </Button>
            </div>

            {/* Login link */}
            <div className="text-center pt-6">
              <p className="text-teal-100 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-white hover:text-teal-200 font-medium underline underline-offset-2 transition-colors"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden lg:block min-h-screen relative">
        {/* Full screen background image */}
        <div className="absolute inset-0">
          <img src="/customer-bg-img.jpg" alt="Shopping background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Centered card */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full flex">
            {/* Left side - Form */}
            <div className="w-1/2 bg-[#00707B] p-10 flex flex-col justify-center">
              <div className="max-w-md mx-auto">
                {/* Logo */}
                <div className="mb-8">
                  <img src={BidnBuyLogo} alt="Bid and Buy Logo" width={100} height={100} />
                </div>

                {/* Header text */}
                <div className="space-y-3 mb-8">
                  <h1 className="text-4xl font-bold text-white leading-tight">Create your personal account</h1>
                  <p className="text-gray-200 text-lg">You are one step away from smarter shopping.</p>
                </div>

                {/* Form fields */}
                <div className="space-y-5">
                  {/* Name field */}
                  <div className="space-y-2">
                    <Label htmlFor="desktop-name" className="text-white text-sm font-medium">
                      Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-300" />
                      <Input
                        id="desktop-name"
                        placeholder="Johndoe"
                        className="bg-[#00707B]/80 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <Label htmlFor="desktop-email" className="text-white text-sm font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-300" />
                      <Input
                        id="desktop-email"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="bg-[#00707B]/80 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <Label htmlFor="desktop-phone" className="text-white text-sm font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-300" />
                      <Input
                        id="desktop-phone"
                        type="tel"
                        placeholder="+234707383849"
                        className="bg-[#00707B]/80 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="space-y-2">
                    <Label htmlFor="desktop-password" className="text-white text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="desktop-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="bg-[#00707B]/80 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password field */}
                  <div className="space-y-2">
                    <Label htmlFor="desktop-confirm-password" className="text-white text-sm font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="desktop-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Your Password"
                        className="bg-[#00707B]/80 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Proceed button */}
                  <div className="pt-4">
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 h-12 rounded-lg text-base transition-colors shadow-lg">
                      Proceed
                    </Button>
                  </div>

                  {/* Login link */}
                  <div className="text-center pt-6">
                    <p className="text-teal-100 text-sm">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-white hover:text-teal-200 font-medium underline underline-offset-2 transition-colors"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-1/2 relative bg-gray-100">
              {/* Using a div with background image for more precise control over the image display */}
              <div
                className="absolute inset-0 rounded-r-3xl"
                style={{
                  backgroundImage: `url('/customer-overlay-img.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSignUp
