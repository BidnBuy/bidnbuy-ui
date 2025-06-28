import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { authService } from "@/services/auth";

import { DesktopVerificationLayout } from "@/components/verification-layout/DesktopVerificationLayout";
import { MobileVerificationLayout } from "@/components/verification-layout/MobileVerificationLayout";

export default function CustomerAccountVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  // const handleSubmit = async (code: string) => {
  //   setIsSubmitting(true)
  //   setError(undefined)

  //   try {
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000))
  //     console.log("Verification code submitted:", code)
  //     toast.success("Email verified! Please log in.")
  //     navigate("/login/customer")
  //   } catch (error) {
  //     setError("Invalid verification code. Please try again.")
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  const { mutate, isPending } = useMutation({
    mutationFn: (otpCode: string) => authService.verifyEmail(email, otpCode),
    onSuccess: () => {
      toast.success("Email verified! Please log in.");
      navigate("/login/customer");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        "An error occurred. Please try again.";
      toast.error(message);
    },
  });

  const handleBack = () => {
    console.log("Back button clicked");
  };

  const handleSubmit = async (code: string) => {
    mutate(code);
  };

  return (
    <>
      {email && (
        <div className="mb-4 text-center text-teal-400 font-medium">
          A verification code has been sent to{" "}
          <span className="font-bold">{email}</span>.
        </div>
      )}
      <MobileVerificationLayout
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        onBack={handleBack}
      />

      <DesktopVerificationLayout
        onSubmit={handleSubmit}
        isSubmitting={isPending}
      />
    </>
  );
}
