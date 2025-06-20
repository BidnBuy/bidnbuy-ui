import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

import { Form } from "@/components/ui/form"
import { authService } from "@/services/auth"

import { loginSchema, type LoginFormValues } from "@/lib/validations/auth"
import MobileCustomerLogin from "./MobileCustomerLogin"
import DesktopCustomerLogin from "./DesktopCustomerLogin"
import { useAuthMutation } from "@/hooks/useAuthMutation"


const CustomerLogin = () => {
  const navigate = useNavigate()
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  // Use the reusable auth mutation hook with correct types
  const loginMutation = useAuthMutation<LoginFormValues, import("@/services/auth").AuthResponse>(authService.login, {
    onSuccess: () => {
      toast.success("Logged In successfully!")
      form.reset()
      navigate("/dashboard")
    },
    onError: () => {
      // Error toast handled in hook
    }
  })

  function onSubmit(values: LoginFormValues) {
    loginMutation.mutate(values)
  }

  return (
    <div className="min-h-screen bg-[#01151C]">
      <Form {...form}>
        <MobileCustomerLogin form={form} onSubmit={onSubmit} isLoading={loginMutation.isPending} />
        <DesktopCustomerLogin form={form} onSubmit={onSubmit} isLoading={loginMutation.isPending} />
      </Form>
    </div>
  )
}

export default CustomerLogin
