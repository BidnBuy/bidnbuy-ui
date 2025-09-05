type TruckIconProps = {
  className?: string
  size?: number
}

const TruckIcon = ({ className = "", size = 24 }: TruckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 3H15V13H1V3ZM16 6H19L22 9V13H16V6ZM0.5 15.5C0.5 16.6046 1.39543 17.5 2.5 17.5C3.60457 17.5 4.5 16.6046 4.5 15.5C4.5 14.3954 3.60457 13.5 2.5 13.5C1.39543 13.5 0.5 14.3954 0.5 15.5ZM18.5 15.5C18.5 16.6046 19.3954 17.5 20.5 17.5C21.6046 17.5 22.5 16.6046 22.5 15.5C22.5 14.3954 21.6046 13.5 20.5 13.5C19.3954 13.5 18.5 14.3954 18.5 15.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
