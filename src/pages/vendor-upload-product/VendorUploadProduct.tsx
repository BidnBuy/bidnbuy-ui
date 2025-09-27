// TODO: Fix data mapping once API schema aligns with Figma UI


import { useState, useRef } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { uploadProductSchema, type UploadProductFormValues } from "@/lib/validations/upload-product"
import { productService } from "@/services/product"
import { useAuthStore } from "@/store/auth"

import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { PriceInput, UploadProductFormField, UploadProductFormInput, UploadProductFormSelect, UploadProductFormTextarea } from "@/components/upload-product-form-field/UploadProductFormField"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { FileUploader } from "@/components/file-uploader/FileUploader"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { UploadSuccessMessage } from "@/components/upload-success-message/UploadSuccessMessage"


// "product": {
//     "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "itemName": "string",
//     "slug": "string",
//     "category": "string",
//     "condition": "string",
//     "description": "string",
//     "files": [
//       "string"
//     ],
//     "basePrice": 0,
//     "discountPrice": 0,
//     "startingBidPrice": 0,
//     "buyItNowPrice": 0,
//     "reservePrice": 0,
//     "quantity": 0,
//     "deliveryType": "string",
//     "handlingTime": "string",
//     "length": "string",
//     "width": "string",
//     "height": "string",
//     "weight": "string",
//     "_vendor": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "isApproved": true,
//     "auctionPrice": 0,
//     "categories": "string",
//     "offers": [
//       "string"
//     ],
//     "createdAt": "2025-09-26T16:55:09.676Z",
//     "updatedAt": "2025-09-26T16:55:09.676Z"
//   }
// }

// Form type now comes from zod schema

const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "home", label: "Home & Garden" },
  { value: "sports", label: "Sports" },
]

const deliveryOptions = [
  { value: "standard", label: "Standard Shipping" },
  { value: "express", label: "Express Shipping" },
  { value: "overnight", label: "Overnight Shipping" },
]

const handlingOptions = [
  { value: "1-day", label: "1 business day" },
  { value: "3-days", label: "3 business days" },
  { value: "5-days", label: "5 business days" },
  { value: "7-days", label: "7 business days" },
]

const VendorUploadProduct = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const navigate = useNavigate()
  const auth = useAuthStore()
  const token = auth.token || ""

  const formDataRef = useRef<UploadProductFormValues | null>(null)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm<UploadProductFormValues>({
    resolver: zodResolver(uploadProductSchema),
    defaultValues: {
      condition: "new",
      deliveryType: "standard",
      handlingTime: "3-days",
      files: [],
      startingBidPrice: 1,
    },
  })

  // Store latest form data and open modal
  const onSubmit = (data: UploadProductFormValues) => {
    formDataRef.current = data
    setShowConfirm(true)
  }

  const uploadMutation = useMutation({
    mutationFn: (data: UploadProductFormValues) => productService.upload(data, token!),
    onSuccess: () => {
      toast.success("Product listed successfully!")
      setShowSuccess(true)
      reset()
      setTimeout(() => navigate("/seller-dashboard"), 1500)
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error?.message || "Failed to upload product."
      toast.error(message)
    },
    onSettled: () => {
      setShowConfirm(false)
      formDataRef.current = null
    }
  })

  // Validate and submit latest form data on modal confirm
  const handleConfirm = async () => {
    console.log('Submitting files:', watch('files'))
    const isValid = await trigger()
    if (isValid && formDataRef.current) {
      uploadMutation.mutate(formDataRef.current)
    } else {
      // Debug: log which fields are failing validation
      console.log('Validation failed. Errors:', errors)
      toast.error("Please fill all required fields correctly.")
      setShowConfirm(false)
    }
  }

  const description = watch("description", "")
  const maxChars = 2000

  const handleFilesChange = (newFiles: File[]) => {
    console.log('handleFilesChange received:', newFiles)
    setValue("files", newFiles, { shouldValidate: true })
  }

  // --- Render ---
  return (
    <div className="min-h-screen bg-[#01151C] text-white">
    
      <div className="desktop-header hidden md:block">
       
        <div className="bg-[#01151C] px-4 py-4">
          <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-32 flex justify-center">
      <div className="relative max-w-md w-full">
      </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 pb-24 max-w-4xl mx-auto">
        <h1 className="text-lg md:text-xl font-medium mb-6 text-white mt-6">List a new item</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <UploadProductFormField label="Item name" error={errors.itemName?.message} required>
            <UploadProductFormInput
              {...register("itemName")}
              placeholder="e.g. What are you selling"
              error={!!errors.itemName}
            />
          </UploadProductFormField>

          <UploadProductFormField label="Category" error={errors.category?.message} required>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <UploadProductFormSelect
                  placeholder="Select a category"
                  options={categoryOptions}
                  onValueChange={field.onChange}
                  error={!!errors.category}
                />
              )}
            />
          </UploadProductFormField>

          <UploadProductFormField label="Condition of your item" required>
            <Controller
              name="condition"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="md:flex md:gap-8 space-y-3 md:space-y-0"
                >
                  {[{ value: "fairly-used", label: "Fairly Used" }, { value: "refurbished", label: "Refurbished" }, { value: "parts-not-working", label: "Some parts not working" }].map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="border-[#00707B] text-white w-4 h-4 data-[state=checked]:bg-[#00707B] data-[state=checked]:border-[#00707B]"
                      />
                      <Label htmlFor={option.value} className="text-white text-sm font-normal cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
          </UploadProductFormField>

          <UploadProductFormField label="Item description" error={errors.description?.message} required>
            <div className="relative">
              <UploadProductFormTextarea
                {...register("description")}
                placeholder="Describe your item in detail..."

                maxLength={maxChars}
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                {maxChars - description.length} words maximum
              </div>
            </div>
          </UploadProductFormField>

          <UploadProductFormField label="Photos and Videos of your item" error={errors.files?.message}>
            <FileUploader
              onFilesChange={handleFilesChange}
              maxFiles={5}
              maxSizeInMB={2}
              error={errors.files?.message}
            />
          </UploadProductFormField>

          <div className="space-y-4">
            <h3 className="text-white text-sm font-normal">Pricing and Quantity</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UploadProductFormField label="Base Price" error={errors.basePrice?.message} required>
                <Controller
                  name="basePrice"
                  control={control}
                  rules={{
                    required: "Base price is required",
                    pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Please enter a valid price" },
                    min: { value: 1, message: "Price must be at least ₦1" },
                  }}
                  render={({ field }) => (
                    <PriceInput
                      value={typeof field.value === "string" ? field.value : String(field.value ?? "")}
                      onChange={field.onChange}
                      error={!!errors.basePrice}
                      placeholder="0.00"
                    />
                  )}
                />
              </UploadProductFormField>
              <UploadProductFormField label="Starting bid price" error={errors.startingBidPrice?.message} required>
                <Controller
                  name="startingBidPrice"
                  control={control}
                  rules={{
                    required: "Starting bid price is required",
                    pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Please enter a valid price" },
                    min: { value: 1, message: "Price must be at least ₦1" },
                  }}
                  render={({ field }) => (
                    <PriceInput
                      value={typeof field.value === "string" ? field.value : String(field.value ?? "")}
                      onChange={field.onChange}
                      error={!!errors.startingBidPrice}
                      placeholder="0.00"
                    />
                  )}
                />
              </UploadProductFormField>

              <UploadProductFormField label="Buy It Now (Optional)" error={errors.buyItNowPrice?.message}>
                <Controller
                  name="buyItNowPrice"
                  control={control}
                  rules={{
                    pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Please enter a valid price" },
                  }}
                  render={({ field }) => (
                    <PriceInput
                      value={typeof field.value === "string" ? field.value : String(field.value ?? "")}
                      onChange={field.onChange}
                      error={!!errors.buyItNowPrice}
                      placeholder="0.00"
                    />
                  )}
                />
              </UploadProductFormField>

              <UploadProductFormField label="Quantity" error={errors.quantity?.message} required>
                <UploadProductFormInput
                  {...register("quantity")}
                  type="number"
                  min="1"
                  placeholder="1"
                  error={!!errors.quantity}
                />
              </UploadProductFormField>

              <UploadProductFormField label="Reserve price (Optional)" error={errors.reservePrice?.message}>
                <Controller
                  name="reservePrice"
                  control={control}
                  rules={{
                    pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Please enter a valid price" },
                  }}
                  render={({ field }) => (
                    <PriceInput
                      value={typeof field.value === "string" ? field.value : String(field.value ?? "")}
                      onChange={field.onChange}
                      error={!!errors.reservePrice}
                      placeholder="0.00"
                    />
                  )}
                />
              </UploadProductFormField>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-sm font-normal">Shipping</h3>

            <UploadProductFormField label="Category" error={errors.deliveryType?.message} required>
              <Controller
                name="deliveryType"
                control={control}
                rules={{ required: "Please select delivery type" }}
                render={({ field }) => (
                  <UploadProductFormSelect
                    placeholder="Standard Shipping"
                    options={deliveryOptions}
                    onValueChange={field.onChange}
                    error={!!errors.deliveryType}
                  />
                )}
              />
            </UploadProductFormField>

            <UploadProductFormField label="Handling Time" error={errors.handlingTime?.message} required>
              <Controller
                name="handlingTime"
                control={control}
                rules={{ required: "Please select handling time" }}
                render={({ field }) => (
                  <UploadProductFormSelect
                    placeholder="3 business days"
                    options={handlingOptions}
                    onValueChange={field.onChange}
                    error={!!errors.handlingTime}
                  />
                )}
              />
            </UploadProductFormField>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-sm font-normal">Weight and dimensions (Optional)</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "length", label: "Length", unit: "cm" },
                { name: "width", label: "Width", unit: "cm" },
                { name: "height", label: "Height", unit: "cm" },
                { name: "weight", label: "Weight", unit: "kg" },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label className="text-white text-xs font-normal">{field.label}</Label>
                  <div className="flex">
                    <UploadProductFormInput
                      {...register(field.name as keyof UploadProductFormValues)}
                      type="number"
                      min="0"
                      step="0.1"
                      defaultValue="0"
                      className="rounded-r-none h-10 text-sm"
                    />
                    <div className="bg-[#01151C] border-[#00707B] border-l-0 px-3 py-2 text-gray-500 text-xs rounded-r flex items-center border">
                      {field.unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6">
            <Button
              type="submit"
              disabled={uploadMutation.isPending}
              className="w-full bg-[#00707B] hover:bg-[#005a66] text-white py-3 text-base font-medium h-12 rounded-md disabled:opacity-50 cursor-pointer"
              onClick={() => setShowConfirm(true)}
            >
              {uploadMutation.isPending ? "Listing Item..." : "List Item"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#00707B] text-white hover:bg-[#00707B]/10 py-3 text-base font-medium bg-[#01151C] h-12 rounded-md cursor-pointer"
            >
              Preview
            </Button>
          </div>
        </form>
        {/* Confirmation Modal */}
        <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-black">Confirm Listing</DialogTitle>
            </DialogHeader>
            <p className="text-black">Are you sure you want to list this item for sale?</p>
            <DialogFooter>
              <Button type="button" onClick={handleConfirm} disabled={uploadMutation.isPending} className="bg-[#00707B] hover:bg-[#00707B] text-white cursor-pointer">
                {uploadMutation.isPending ? "Listing..." : "Yes, List Item"}
              </Button>
              <Button className="text-black hover:text-black cursor-pointer" variant="outline" onClick={() => setShowConfirm(false)} disabled={uploadMutation.isPending}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Success Message Modal */}
        {showSuccess && (
          <UploadSuccessMessage
            message="Your item has been successfully listed! It will be reviewed and published shortly."
            onClose={() => setShowSuccess(false)}
          />
        )}
      </div>
     
    </div>
  )
}

export default VendorUploadProduct;
