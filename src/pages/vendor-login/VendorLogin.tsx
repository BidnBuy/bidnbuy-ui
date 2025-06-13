import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginFormData } from "@/lib/validations/auth";
import { authService } from "@/services/auth";
import { useAuthStore } from "@/store/auth";

import BidnBuyLogo from "@/assets/bidnbuy-logo.png";
import { Link } from "react-router-dom";

import VendorOverlayImage from "@/assets/vendor-overlay-login.jpg";
import VendorLoginMobile from "@/assets/customer-sign-up-mobile.jpg";
import CustomerBackgroundImage from "@/assets/customer-bg-login.jpg";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    shouldUnregister: false,
  });

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success("Login successful!");
      navigate("/vendor/dashboard");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginMutation.mutateAsync(data);
    } catch (error) {
      // Error is handled by mutation
    }
  };

  return (
    <div className="lg:min-h-screen min-h-full bg-[#01151C]">
      <div className="lg:hidden">
        <div className="relative w-full">
          <div className="relative h-80 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Vendor Login background"
              src={VendorLoginMobile}
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
                  Login to join the marketplace and start bidding smart.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#01151C] px-6 pb-8 pt-8">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-5">
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
                  className="bg-[#00707B]/30 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-0 rounded-md"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="bg-[#00707B]/30 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-0 rounded-md"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 h-12 rounded-md text-base transition-colors shadow-lg"
                disabled={isSubmitting || loginMutation.isPending}
              >
                {isSubmitting || loginMutation.isPending ? "Logging in..." : "Log in"}
              </Button>
            </div>

            <div className="text-center pt-6">
              <p className="text-teal-100 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup/vendor"
                  className="text-white hover:text-teal-200 font-medium underline underline-offset-2 transition-colors"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Desktop View */}
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
                    Login to join the marketplace and start bidding smart.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                        className="bg-[#00707B]/30 border-teal-500/50 pl-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-0 rounded-md"
                        {...register("email", { required: true })}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="desktop-password" className="text-white text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="desktop-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="bg-[#00707B]/30 border-teal-500/50 pr-10 h-12 text-white placeholder:text-teal-200/80 focus:border-teal-400 focus:ring-0 rounded-md"
                        {...register("password", { required: true })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-300 hover:text-teal-200 transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                  </div>

                  <div className="text-white">Forgot password?</div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 h-12 rounded-md text-base transition-colors shadow-lg"
                      disabled={isSubmitting || loginMutation.isPending}
                    >
                      {isSubmitting || loginMutation.isPending ? "Logging in..." : "Log in"}
                    </Button>
                  </div>

                  <div className="text-center pt-6">
                    <p className="text-teal-100 text-sm">
                      Don't have an account?{" "}
                      <Link
                        to="/signup/vendor"
                        className="text-white hover:text-teal-200 font-medium underline underline-offset-2 transition-colors"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-1/2 relative">
              <img
                src={VendorOverlayImage}
                alt="Vendor login overlay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
