import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import { Form } from "@/components/ui/form"

// import { AppHeader } from "@/components/shared/AppHeader"

import { reportProblemSchema, type ReportProblemFormData } from "@/types/report-problem"

import { useReportProblem } from "@/hooks/useReportProblem"
import { usePhotoUpload } from "@/hooks/usePhotoUpload"

import Header from "@/components/header/Header"

import EscrowReportProblemFormDesktop from "./EscrowReportProblemFormDesktop"
import EscrowReportProblemFormMobile from "./EscrowReportProblemFormMobile"


const EscrowReportProblemForm = ({ orderId }: { orderId: string }) =>{
  const navigate = useNavigate()
  
  const { isSubmitting, handleSubmit } = useReportProblem(orderId)
  const { uploadedPhotos, fileInputRef, triggerFileInput, handleFileChange, removePhoto } = usePhotoUpload()

 
  const form = useForm<ReportProblemFormData>({
    resolver: zodResolver(reportProblemSchema),
    defaultValues: {
      problem: "",
      additionalDetails: "",
      photos: [],
    },
  })

  const watchedProblem = form.watch("problem")
  const isFormValid = Boolean(watchedProblem)

  const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event)
    form.setValue("photos", uploadedPhotos)
  }

  const onSubmit = async (data: ReportProblemFormData) => {
    const formDataWithPhotos = { ...data, photos: uploadedPhotos }
    await handleSubmit(formDataWithPhotos)
  }

  const handleCancel = () => {
    navigate(-1)
  }

  const sharedReportProblemProps = {
    form,
    uploadedPhotos,
    fileInputRef,
    onUploadClick: triggerFileInput,
    onFileChange: onFileChangeHandler,
    onRemovePhoto: removePhoto,
    onCancel: handleCancel,
    isSubmitting,
    isFormValid,
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#01151C" }}>
      {/* <AppHeader /> */}
      <Header />
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Report a problem</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <EscrowReportProblemFormMobile {...sharedReportProblemProps} />

            <EscrowReportProblemFormDesktop {...sharedReportProblemProps} />
          </form>
        </Form>
      </div>
    </div>
  )
}

export default EscrowReportProblemForm;