import { Button } from "@/components/ui/button"

const LiveAuctionsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-12">
          Live Auctions
        </h2>

        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          
          {/* iPhone 16 Pink */}
          <div className="bg-slate-800 rounded-lg p-6">
            <div className="relative mb-4">
              <img
                src="/images/iphone-16-pink.png"
                alt="iPhone 16 Pink"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h3 className="text-white text-lg font-semibold mb-2">
              Iphone 16 pink
            </h3>

            <div className="space-y-1 mb-4">
              <p className="text-white text-sm">
                Current Bid: ₦1,250,000
              </p>
              <p className="text-white text-sm">
                2 bids
              </p>
              <p className="text-white text-sm">
                Time Left: 12h
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
               
              >
                Bid
              </Button>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
               
              >
                Buy
              </Button>
            </div>
          </div>

          {/* Generic Fashion Sunglasses */}
          <div className="bg-slate-800 rounded-lg p-6">
            <div className="relative mb-4">
              <img
                src="/images/fashion-sunglasses.png"
                alt="Generic Fashion Sunglasses"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h3 className="text-white text-lg font-semibold mb-2">
              Generic Fashion Sunglasses
            </h3>

            <div className="space-y-1 mb-4">
              <p className="text-white text-sm">
                Current Bid: ₦23,180
              </p>
              <p className="text-white text-sm">
                15 bids
              </p>
              <p className="text-white text-sm">
                Time Left: 2 days 2 hours
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
               
              >
                Bid
              </Button>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
               
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default LiveAuctionsSection;
