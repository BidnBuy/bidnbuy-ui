import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

import { Form } from "@/components/ui/form"

import { signupSchema, type SignupFormValues } from "@/lib/validations/auth"

import { authService } from "@/services/auth"
import { useAuthMutation } from "@/hooks/useAuthMutation"
import MobileVendorSignUp from "./MobileCustomerSignUp"
import DesktopVendorSignup from "./DesktopVendorSignUp"


const VendorSignup = () => {
  const navigate = useNavigate()
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  })

  // Use the reusable auth mutation hook with correct types
  const signupMutation = useAuthMutation<SignupFormValues, import("@/services/auth").AuthResponse>(async (values) => {
    // Map form values to API schema
    return await authService.signup({
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: values.phone, // API expects phoneNumber
      userRole: "vendor", // vendor role for vendor signup
    } as any)
  }, {
    onSuccess: () => {
      toast.success("Account created successfully!")
      form.reset()
      navigate("/dashboard")
    },
    onError: () => {
      // Error toast handled in hook
    }
  })

  function onSubmit(values: SignupFormValues) {
    signupMutation.mutate(values)
  }

  return (
    <div className="min-h-screen bg-[#01151C]">
      <Form {...form}>
        <MobileVendorSignUp form={form} onSubmit={onSubmit} isLoading={signupMutation.isPending} />
        <DesktopVendorSignup form={form} onSubmit={onSubmit} isLoading={signupMutation.isPending} />
      </Form>
    </div>
  )
}

export default VendorSignup
