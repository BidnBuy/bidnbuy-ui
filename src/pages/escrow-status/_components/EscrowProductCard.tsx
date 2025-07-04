type EscrowProductCardProps = {
  escrowHeight: string;
};

const EscrowProductCard = ({escrowHeight}: EscrowProductCardProps) => {
  return (
    <div
        className="rounded-lg p-4 mb-6 border w-full"
        style={{
          backgroundColor: "#01212E",
          borderColor: "#00707B",
          height: escrowHeight,
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/hermes-bag.png"
            alt="Hermes Birkin Bag"
            width={183}
            height={183}
            className="object-contain"
          />
        </div>
      </div>
  )
}

export default EscrowProductCard