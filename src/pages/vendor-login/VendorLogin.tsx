import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

import { Form } from "@/components/ui/form"
import { useAuthMutation } from "@/hooks/useAuthMutation"
import { authService } from "@/services/auth"

import MobileVendorLogin from "./MobileVendorLogin"
import DesktopVendorLogin from "./DesktopVendorLogin"

import { loginSchema, type LoginFormValues } from "@/lib/validations/auth"


const VendorLogin = () => {
  const navigate = useNavigate()
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

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
        <MobileVendorLogin form={form} onSubmit={onSubmit} isLoading={loginMutation.isPending} />
        <DesktopVendorLogin form={form} onSubmit={onSubmit} isLoading={loginMutation.isPending} />
      </Form>
    </div>
  )
}

export default VendorLogin
