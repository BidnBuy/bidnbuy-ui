type SignUpIconProps = {
  className?: string
  width?: number
  height?: number
}

export function SignUpIcon({ className = "", width = 20, height = 20 }: SignUpIconProps) {
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
        d="M10.0013 8.33268C11.8423 8.33268 13.3346 6.8403 13.3346 4.99935C13.3346 3.1584 11.8423 1.66602 10.0013 1.66602C8.16035 1.66602 6.66797 3.1584 6.66797 4.99935C6.66797 6.8403 8.16035 8.33268 10.0013 8.33268Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M16.6673 14.582C16.6673 16.6529 16.6673 18.332 10.0007 18.332C3.33398 18.332 3.33398 16.6529 3.33398 14.582C3.33398 12.5112 6.31898 10.832 10.0007 10.832C13.6823 10.832 16.6673 12.5112 16.6673 14.582Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  )
}
