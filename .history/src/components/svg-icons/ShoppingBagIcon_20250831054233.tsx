type ShoppingBagIconProps {
  className?: string
  width?: number
  height?: number
}

export function ShoppingBagIcon({ className = "", width = 20, height = 20 }: ShoppingBagIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.27624 6.66602H14.7254C14.9657 6.66599 15.2032 6.71792 15.4215 6.81827C15.6399 6.91861 15.834 7.06498 15.9905 7.24735C16.1469 7.42972 16.2621 7.64378 16.3282 7.87484C16.3942 8.1059 16.4094 8.3485 16.3729 8.58602L15.3271 15.3793C15.2363 15.9697 14.9371 16.5081 14.4837 16.8969C14.0304 17.2858 13.4527 17.4995 12.8554 17.4993H7.14541C6.54824 17.4993 5.97081 17.2855 5.5176 16.8967C5.06439 16.5078 4.76534 15.9696 4.67457 15.3793L3.62874 8.58602C3.59221 8.3485 3.60748 8.1059 3.6735 7.87484C3.73951 7.64378 3.85471 7.42972 4.0112 7.24735C4.16768 7.06498 4.36176 6.91861 4.58011 6.81827C4.79846 6.71792 5.03593 6.66599 5.27624 6.66602Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.16667V5C7.5 4.33696 7.76339 3.70107 8.23223 3.23223C8.70107 2.76339 9.33696 2.5 10 2.5C10.663 2.5 11.2989 2.76339 11.7678 3.23223C12.2366 3.70107 12.5 4.33696 12.5 5V9.16667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
