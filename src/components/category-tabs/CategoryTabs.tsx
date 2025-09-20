type CategoryTabsProps = {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
  className?: string
}

export function CategoryTabs({ categories, selectedCategory, onSelectCategory, className = "" }: CategoryTabsProps) {
  // Always show all categories, no horizontal scroll or hidden tabs
  // const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

  // Scroll to section logic
  const handleTabClick = (category: string) => {
    onSelectCategory(category);
    const sectionId = `category-section-${category.replace(/\s+/g, '-')}`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-2 w-full justify-center ${className}`}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleTabClick(category)}
          className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors flex-shrink-0 ${
            selectedCategory === category
              ? 'bg-orange-500 text-white'
              : 'bg-[#004755] text-white hover:bg-[#00545F]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
