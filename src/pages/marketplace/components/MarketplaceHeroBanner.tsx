type MarketplaceHeroBannerProps = {
  title?: string
  subtitle?: string
  buttonText?: string
  backgroundImage?: string
  className?: string
}

const MarketplaceHeroBanner = ({
  title = "Redefine Your Kitchen",
  subtitle = "Transform your cooking space",
  buttonText = "Shop Now",
  backgroundImage = "/marketplace/kitchen-hero.png",
  className = "",
}: MarketplaceHeroBannerProps) => {
  return (
    <div className={`relative rounded-lg overflow-hidden h-64 mb-8 ${className}`}>
      <img src={backgroundImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          {subtitle && <p className="text-lg text-gray-200 mb-6">{subtitle}</p>}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceHeroBanner;
