type CategoryTabsProps = {
  categories: string[]
  className?: string
}

export function CategoryTabs({ categories, className = "" }: CategoryTabsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {categories.map((category) => (
        <button
          key={category}
          className="bg-[#004755] text-white px-3 py-1.5 rounded-full text-xs whitespace-nowrap hover:bg-[#00545F] transition-colors flex-1"
        >
          {category}
        </button>
      ))}
    </div>
  )
}
