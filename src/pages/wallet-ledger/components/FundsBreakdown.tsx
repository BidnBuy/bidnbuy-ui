/**
 * @file components/wallet-ledger/funds-breakdown-section.tsx
 * @description Presentational component for displaying a breakdown of funds.
 */


// Reference custom SVG icons by their public path
const AvailableFundsIconPath = "/icons/available-funds.svg"
const LockedFundsIconPath = "/icons/locked-funds.svg"
const FrozenIconPath = "/icons/frozen.svg"

/**
 * Interface for a single fund item.
 * @typedef {Object} FundItem
 * @property {string} label - The label for the fund type (e.g., "Available Funds").
 * @property {string} amount - The amount of funds (formatted string).
 * @property {string} iconPath - Path to the SVG icon for the fund type.
 * @property {string} [description] - Optional description for the fund type.
 */

type FundItem = {
  label: string
  amount: string
  iconPath: string 
  description?: string
}

/**
 * Props for the FundsBreakdownSection component.
 * @typedef {Object} FundsBreakdownSectionProps
 * @property {string} availableFunds - The amount of available funds.
 * @property {string} lockedFunds - The amount of locked funds.
 * @property {string} frozenFunds - The amount of frozen funds.
 */

type FundsBreakdownSectionProps = {
  availableFunds: string
  lockedFunds: string
  frozenFunds: string
}

/**
 * FundsBreakdownSection component displays a detailed breakdown of different fund types.
 * Uses custom SVG icons referenced by path and white background for icon containers.
 * @param {FundsBreakdownSectionProps} props - The component props.
 * @returns {JSX.Element} The rendered funds breakdown section.
 */

const FundsBreakdown = ({ availableFunds, lockedFunds, frozenFunds }: FundsBreakdownSectionProps) => {
  const funds: FundItem[] = [
    { label: "Available Funds", amount: availableFunds, iconPath: AvailableFundsIconPath },
    {
      label: "Locked Funds",
      amount: lockedFunds,
      iconPath: LockedFundsIconPath,
      description: "N250 locked to qualify for bidding",
    },
    { label: "Frozen", amount: frozenFunds, iconPath: FrozenIconPath },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Funds Breakdown</h2>
      <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        {funds.map((fund, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <img src={fund.iconPath || "/placeholder.svg"} alt={fund.label} width={24} height={24} />
            </div>
            <div>
              <p className="text-white text-lg font-semibold">{fund.label}</p>
              <p className="text-gray-300 text-base">{fund.amount}</p>
              {fund.description && <p className="text-gray-400 text-sm mt-1">{fund.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default FundsBreakdown;
