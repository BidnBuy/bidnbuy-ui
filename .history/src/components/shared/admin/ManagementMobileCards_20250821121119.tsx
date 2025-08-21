import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import type { BaseManagementItem, MobileCardConfig } from "@/types/admin-management"


/**
 * Props for the ManagementMobileCards component.
 */
type ManagementMobileCardsProps = {
  data: BaseManagementItem[]
  getCardConfig: (item: BaseManagementItem) => MobileCardConfig
  onView: (item: BaseManagementItem) => void
  isLoading?: boolean
  basePath: string 
}

/**
 * ManagementMobileCards component displays data in card format for mobile.
 * @param {ManagementMobileCardsProps} props - The component props.
 * @returns {JSX.Element} The rendered mobile cards.
 */

export function ManagementMobileCards({
  data,
  getCardConfig,
  onView,
  isLoading = false,
  basePath,
}: ManagementMobileCardsProps) {

  const navigate = useNavigate()

  /**
   * Handles view button click with navigation.
   */
  const handleViewClick = (item: BaseManagementItem) => {
    // Navigate to detail page
    router.push(`${basePath}/${item.id}`)
    // Also call the onView callback for any additional logic
    onView(item)
  }

  if (isLoading) {
    return (
      <div className="md:hidden space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 rounded-lg border border-[#00707B] animate-pulse"
            style={{ backgroundColor: "#013139" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div>
                <div className="w-24 h-4 bg-gray-600 rounded mb-2"></div>
                <div className="w-32 h-3 bg-gray-600 rounded"></div>
              </div>
            </div>
            <div className="w-12 h-8 bg-gray-600 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="md:hidden space-y-4">
      {data.map((item) => {
        const config = getCardConfig(item)
        return (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg border border-[#00707B]"
            style={{ backgroundColor: "#013139" }}
          >
            <div className="flex items-center gap-3">
              {config.avatar && (
                <Image
                  src={config.avatar || "/placeholder.svg"}
                  alt={config.title}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-white text-base font-semibold">{config.title}</p>
                {config.subtitle && <p className="text-gray-300 text-sm">{config.subtitle}</p>}
                {config.additionalInfo?.map((info, index) => (
                  <p key={index} className="text-gray-400 text-xs">
                    {info}
                  </p>
                ))}
              </div>
            </div>
            <Button
              onClick={() => handleViewClick(item)}
              className="bg-[#00707B] hover:bg-[#00707B]/80 text-white px-4 py-2 text-sm"
            >
              View
            </Button>
          </div>
        )
      })}
    </div>
  )
}
