import type React from "react"
import { forwardRef } from "react"
import { Input } from "@/components/ui/input"

type CustomNumberInputProps = {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  placeholder?: string
  min?: number
  max?: number
  disabled?: boolean
  error?: boolean
}

/**
 * Custom Number Input Component
 *
 * A clean, sleek number input without increment/decrement buttons
 * Features:
 * - Clean design that matches the overall UI
 * - Numeric input validation
 * - Error state styling
 * - Proper formatting for currency values
 */

export const CustomNumberInput = forwardRef<HTMLInputElement, CustomNumberInputProps>(
  ({ value, onChange, onBlur, placeholder, min = 0, max, disabled, error }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value

      // Allow empty string or numbers (and commas for display, but remove for internal value)
      // This regex allows digits and commas, but we'll strip commas before passing to onChange
      if (inputValue === "" || /^[\d,]*$/.test(inputValue)) {
        // Remove commas for the actual value passed to onChange
        const numericValueString = inputValue.replace(/,/g, "")

        // Only update if it's a valid number string or empty
        if (numericValueString === "" || /^\d+$/.test(numericValueString)) {
          onChange(numericValueString) // Pass the unformatted numeric string
        }
      }
    }

    const handleBlur = () => {
      // Ensure minimum value on blur
      if (value && min !== undefined) {
        const numericValue = Number(value.replace(/,/g, "")) // Ensure commas are removed for parsing
        if (numericValue < min) {
          onChange(min.toString()) // Pass the unformatted numeric string
        }
      }
      onBlur?.()
    }

    // Format the value for display in the input field
    const displayValue = value === "" ? "" : Number(value).toLocaleString()

    return (
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-medium">₦</div>
        <Input
          ref={ref}
          type="text"
          inputMode="numeric"
          value={displayValue} 
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`pl-8 text-right bg-slate-800/50 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500/20 ${
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
          }`}
        />
      </div>
    )
  },
)

CustomNumberInput.displayName = "CustomNumberInput"
