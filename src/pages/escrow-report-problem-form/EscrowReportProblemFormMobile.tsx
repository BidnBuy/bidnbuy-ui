import { ProblemSelector } from "./ProblemSelector"
import { AdditionalDetailsInput } from "./AdditionalDetailsInput"
import { PhotoUploadSection } from "./PhotoUploadSection"
import { FormActions } from "./FormActions"
import type { ReportProblemProps } from "./types/report-problem"

const EscrowReportProblemFormMobile = ({
  form,
  uploadedPhotos,
  fileInputRef,
  onUploadClick,
  onFileChange,
  onRemovePhoto,
  onCancel,
  isSubmitting,
  isFormValid
}: ReportProblemProps) => {
  return (
    <div className="lg:hidden">
      <ProblemSelector control={form.control} isMobile />
      <AdditionalDetailsInput control={form.control} isMobile />
      <PhotoUploadSection
        uploadedPhotos={uploadedPhotos}
        fileInputRef={fileInputRef}
        onUploadClick={onUploadClick}
        onFileChange={onFileChange}
        onRemovePhoto={onRemovePhoto}
        isMobile
      />
      <FormActions 
        onCancel={onCancel} 
        isSubmitting={isSubmitting} 
        isFormValid={isFormValid} 
        isMobile 
      />
    </div>
  )
}

export default EscrowReportProblemFormMobile;