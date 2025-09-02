type NairaIconProps {
  className?: string
  width?: number
  height?: number
}

export function NairaIcon({ className = "", width = 14, height = 16 }: NairaIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.333984 5.5H2.00065V0.5H3.66732L6.51732 5.5H10.334V0.5H12.0007V5.5H13.6673V7.16667H12.0007V8.83333H13.6673V10.5H12.0007V15.5H10.334L7.47565 10.5H3.66732V15.5H2.00065V10.5H0.333984V8.83333H2.00065V7.16667H0.333984V5.5ZM3.66732 5.5H4.60898L3.66732 3.85833V5.5ZM3.66732 7.16667V8.83333H6.51732L5.56732 7.16667H3.66732ZM10.334 12.1667V10.5H9.37565L10.334 12.1667ZM7.46732 7.16667L8.42565 8.83333H10.334V7.16667H7.46732Z"
        fill="currentColor"
      />
    </svg>
  )
}
