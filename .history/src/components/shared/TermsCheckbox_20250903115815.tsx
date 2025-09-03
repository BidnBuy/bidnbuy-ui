import { Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TermsCheckboxProps {
  control: any;
  name?: string;
  error?: string;
  className?: string;
}

export function TermsCheckbox({
  control,
  name = "termsAccepted",
  error,
  className = "",
}: TermsCheckboxProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <Controller
        name={name}
        control={control}
        rules={{ required: "You must accept the Terms and Conditions" }}
        render={({ field }) => (
          <div className="flex items-center gap-2">
            <Checkbox
              id={name}
              checked={!!field.value}
              onCheckedChange={field.onChange}
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
            />
            <Label htmlFor={name} className="text-sm font-normal select-none">
              I agree to the {" "}
              <a
                href="/terms"
                className="underline text-primary hover:text-primary/80 cursor-pointer"
                tabIndex={0}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
            </Label>
          </div>
        )}
      />
      {error && (
        <span
          id={`${name}-error`}
          className="text-xs text-red mt-1"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
