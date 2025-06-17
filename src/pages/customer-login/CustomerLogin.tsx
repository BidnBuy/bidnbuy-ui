import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Form } from "@/components/ui/form"

import { loginSchema, type LoginFormValues } from "@/lib/validations/auth"
import MobileCustomerLogin from "./MobileCustomerLogin"
import DesktopCustomerLogin from "./DesktopCustomerLogin"


const CustomerLogin = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: LoginFormValues) {
    try {

      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", values)
      toast.success("Logged In successfully!")

      form.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-[#01151C]">
      <Form {...form}>
        <MobileCustomerLogin form={form} onSubmit={onSubmit} isLoading={form.formState.isSubmitting} />
        <DesktopCustomerLogin form={form} onSubmit={onSubmit} isLoading={form.formState.isSubmitting} />
      </Form>
    </div>
  )
}

export default CustomerLogin
