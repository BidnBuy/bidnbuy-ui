type MobileCountdownDisplayProps = {
  hours: number
  minutes: number
  seconds: number
  colorClass: string
}

const MobileCountdownDisplay = ({ hours, minutes, seconds, colorClass}: MobileCountdownDisplayProps) => {
  return (
    <div className="lg:hidden mt-2">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className={`text-2xl font-bold ${colorClass}`}>{hours.toString().padStart(2, "0")}</div>
            <div className="text-xs text-gray-400">H</div>
          </div>
          <div className="text-white text-xl">:</div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${colorClass}`}>
              {minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-400">M</div>
          </div>
          <div className="text-white text-xl">:</div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${colorClass}`}>
              {seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-400">S</div>
          </div>
        </div>
      </div>
   
  )
}

export default MobileCountdownDisplay