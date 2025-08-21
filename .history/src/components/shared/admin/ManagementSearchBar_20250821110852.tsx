import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Props for the ManagementSearchBar component.
 */

type ManagementSearchBarProps = {
  placeholder: string
  onSearch: (query: string) => void
  filters?: string[]
  hasStatusFilter?: boolean
  onSort?: (sortBy: string) => void
  onFilter?: (filter: string) => void
}

/**
 * ManagementSearchBar component provides search and filter functionality.
 * @param {ManagementSearchBarProps} props - The component props.
 * @returns {JSX.Element} The rendered search bar.
 */

const ManagementSearchBar = ({
  placeholder,
  onSearch,
//   filters = [],
  hasStatusFilter = false,
  onSort,
  onFilter,
}: ManagementSearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <div className="mb-8">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00707B] bg-[#013139] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00707B]"
          />
        </div>
        <Button
          variant="outline"
          className="text-white border-[#00707B] bg-[#013139] hover:bg-[#00707B]/20 px-6 py-3"
          onClick={() => onSort?.("default")}
        >
          Sort <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="text-white border-[#00707B] bg-[#013139] hover:bg-[#00707B]/20 px-6 py-3"
          onClick={() => onFilter?.("all")}
        >
          {hasStatusFilter ? "Status" : "Filter"} <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00707B] bg-[#013139] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00707B]"
          />
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="text-white border-[#00707B] bg-[#013139] hover:bg-[#00707B]/20 flex-1"
            onClick={() => onSort?.("default")}
          >
            Sort <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="text-white border-[#00707B] bg-[#013139] hover:bg-[#00707B]/20 flex-1"
            onClick={() => onFilter?.("all")}
          >
            Filter <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}


