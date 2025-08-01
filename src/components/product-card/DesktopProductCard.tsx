type DesktopProductCardProps = {
  image: string
  title: string
  rating: number
  reviews: number
  price: string
  originalPrice?: string
  actionType: "buy" | "bid" | "offer"
}

export function DesktopProductCard({
  image,
  title,
  rating,
  reviews,
  price,
  originalPrice,
  actionType,
}: DesktopProductCardProps) {
  return (
    <div className="bg-[#00222E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image || "/placeholder.svg?height=200&width=200"}
          alt={title}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-white mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={i < rating ? "gold" : "none"}
                stroke={i < rating ? "none" : "gray"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5.11L14.5 10.19L20 11.15L16 15.05L17.18 20.6L12 17.95L6.82 20.6L8 15.05L4 11.15L9.5 10.19L12 5.11Z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-300">({reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-white text-lg">{price}</span>
          {originalPrice && <span className="text-sm text-gray-400 line-through">{originalPrice}</span>}
        </div>
        <ActionButton type={actionType} />
      </div>
    </div>
  )
}

function ActionButton({ type }: { type: "buy" | "bid" | "offer" }) {
  const styles = {
    buy: "bg-orange-500 hover:bg-orange-600 text-white",
    bid: "bg-red-500 hover:bg-red-600 text-white",
    offer: "bg-yellow-500 hover:bg-yellow-600 text-black",
  }

  const labels = {
    buy: "Buy",
    bid: "Bid",
    offer: "Add to Cart",
  }

  const icons = {
    buy: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
      </svg>
    ),
    bid: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" />
      </svg>
    ),
    offer: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 8V18H15V8H9Z" />
      </svg>
    ),
  }

  return (
    <button
      className={`${styles[type]} w-full text-sm px-3 py-2.5 rounded-md font-medium flex items-center justify-center gap-2 transition-colors`}
    >
      {icons[type]}
      {labels[type]}
    </button>
  )
}



