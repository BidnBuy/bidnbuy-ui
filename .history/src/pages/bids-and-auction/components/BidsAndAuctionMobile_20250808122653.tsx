

const BidsAndAuctionMobile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#01151C] text-white lg:hidden">
    
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 pb-6 pt-4">{children}</div>
      </main>

    </div>
  )
}

export default BidsAndAuctionMobile