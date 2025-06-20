import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

import { Form } from "@/components/ui/form"
import { useAuthMutation } from "@/hooks/useAuthMutation"
import { authService } from "@/services/auth"

import { signupSchema, type SignupFormValues } from "@/lib/validations/auth"

import DesktopCustomerSignUp from "./DesktopCustomerSignUp"
import MobileCustomerSignUp from "./MobileCustomerSignUp"


const CustomerSignup = () => {
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
      userRole: "user", // or "customer" if that's your convention
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
        <MobileCustomerSignUp form={form} onSubmit={onSubmit} isLoading={signupMutation.isPending} />
        <DesktopCustomerSignUp form={form} onSubmit={onSubmit} isLoading={signupMutation.isPending} />
      </Form>
    </div>
  )
}

export default CustomerSignup
