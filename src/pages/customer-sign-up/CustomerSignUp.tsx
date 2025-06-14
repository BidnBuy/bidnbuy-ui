import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Form } from "@/components/ui/form"

import { signupSchema, type SignupFormValues } from "@/lib/validations/auth"

import DesktopCustomerSignUp from "./DesktopCustomerSignUp"
import MobileCustomerSignUp from "./MobileCustomerSignUp"


const CustomerSignup = () => {
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

  async function onSubmit(values: SignupFormValues) {
    try {

      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", values)
      toast.success("Account created successfully!")

      form.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-[#01151C]">
      <Form {...form}>
        <MobileCustomerSignUp form={form} onSubmit={onSubmit} isLoading={form.formState.isSubmitting} />
        <DesktopCustomerSignUp form={form} onSubmit={onSubmit} isLoading={form.formState.isSubmitting} />
      </Form>
    </div>
  )
}

export default CustomerSignup
