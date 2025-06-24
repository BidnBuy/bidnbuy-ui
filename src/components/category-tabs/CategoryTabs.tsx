import { useState } from "react"

type CategoryTabsProps = {
  categories: string[]
  className?: string
}

export function CategoryTabs({ categories, className = "" }: CategoryTabsProps) {
  const [showAll, setShowAll] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
  const visibleCategories = isMobile && !showAll ? categories.slice(0, 4) : categories
  const hasMore = isMobile && categories.length > 4 && !showAll

  return (
    <div
      className={`flex items-center gap-2 w-full ${isMobile ? 'justify-center' : 'overflow-x-auto no-scrollbar'} ${className}`}
    >
      {visibleCategories.map((category) => (
        <button
          key={category}
          className="bg-[#004755] text-white px-3 py-1.5 rounded-full text-xs whitespace-nowrap hover:bg-[#00545F] transition-colors flex-shrink-0"
        >
          {category}
        </button>
      ))}
      {hasMore && (
        <button
          className="bg-[#00707B] text-white px-3 py-1.5 rounded-full text-xs whitespace-nowrap hover:bg-[#008a9a] transition-colors flex-shrink-0"
          onClick={() => setShowAll(true)}
        >
          More
        </button>
      )}
    </div>
  )
}
