/**
 * @file components/wallet-ledger/transaction-list.tsx
 * @description Component for displaying recent transactions, adapting for mobile list and desktop table views.
 * This component is explicitly exported as a named export.
 */

import type React from "react"

import { Button } from "@/components/ui/button"
import { useQuery } from "@tanstack/react-query"
import { Plus, Minus, ChevronDown } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import ListingFeeIcon from "@/components/svg-icons/ListingFeeIcon";
import PaymentForUnpaidBidIcon from "@/components/svg-icons/PaymentForUnpaidBid";


/**
 * Interface for a single transaction item.
 * @typedef {Object} Transaction
 * @property {string} id - Unique identifier for the transaction.
 * @property {string} date - The date of the transaction (e.g., "2025-07-26").
 * @property {string} time - The time of the transaction (e.g., "14:30").
 * @property {string} description - A description of the transaction (e.g., "Deposit via Paystack").
 * @property {number} amount - The transaction amount. Can be positive (deposit) or negative (withdrawal/fee).
 * @property {string} status - The status of the transaction (e.g., "Completed", "Pending").
 * @property {string} displayTime - The formatted time string for mobile display (e.g., "10:23 AM" or "3 days ago, 2:30 PM").
 */


type Transaction = {
  id: string
  date: string 
  time: string 
  description: string
  amount: number
  status: string
  displayTime: string 
}

/**
 * Simulates fetching transaction data from an API.
 * @returns {Promise<Transaction[]>} A promise resolving with an array of transactions.
 */

const fetchTransactions = async (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          date: "2025-07-26",
          time: "14:30",
          description: "Cashback from Purchase",
          amount: 50,
          status: "Completed",
          displayTime: "02:30 PM",
        },
        {
          id: "2",
          date: "2025-07-25",
          time: "10:15",
          description: "Referral Bonus",
          amount: 150,
          status: "Completed",
          displayTime: "10:15 AM",
        },
        {
          id: "3",
          date: "2025-07-24",
          time: "18:45",
          description: "Bonus Tier",
          amount: 112,
          status: "Completed",
          displayTime: "06:45 PM",
        },
        {
          id: "4",
          date: "2025-07-23",
          time: "09:00",
          description: "Streak Reward",
          amount: 300,
          status: "Completed",
          displayTime: "09:00 AM",
        },
        {
          id: "5",
          date: "2025-07-22",
          time: "11:00",
          description: "Listing Fee",
          amount: -500,
          status: "Completed",
          displayTime: "3 days ago, 11:00 AM", // Simulated relative time
        },
        {
          id: "6",
          date: "2025-07-21",
          time: "14:00",
          description: "Payment for Unpaid Bid",
          amount: -2000,
          status: "Completed",
          displayTime: "5 days ago, 02:00 PM", // Simulated relative time
        },
      ])
    }, 500) // Simulate network delay
  })
}

/**
 * Helper function to get the appropriate icon for a transaction.
 * Returns either a Lucide React icon component or a string path to an SVG.
 * @param {string} description - The transaction description.
 * @param {number} amount - The transaction amount.
 * @returns {React.ElementType | string} The Lucide React icon component or path to SVG.
 */

const getTransactionIcon = (description: string, amount: number): React.ElementType | string => {
  if (description.includes("Listing Fee")) return ListingFeeIcon
  if (description.includes("Payment for Unpaid Bid")) return PaymentForUnpaidBidIcon
  // For other transactions, use Plus/Minus based on amount as per previous logic
  if (amount > 0) return Plus
  if (amount < 0) return Minus
  return Plus // Default fallback
}

/**
 * Helper function to format the transaction amount.
 * @param {number} amount - The transaction amount.
 * @returns {string} The formatted amount string (e.g., "+10,000 B.C", "-500").
 */
const formatAmount = (amount: number): string => {
  const sign = amount > 0 ? "+" : ""
  return `${sign}${amount.toLocaleString()} B.C`
}

/**
 * TransactionList component displays a list or table of recent transactions.
 * It fetches data using React Query and adapts its layout for mobile and desktop.
 * Includes sort and filter dropdowns.
 * @returns {JSX.Element} The rendered transaction list/table.
 */

const TransactionList = () => {
  const {
    data: transactions,
    isLoading,
    isError,
  } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  })

  if (isLoading) {
    return <div className="text-gray-300 text-center">Loading transactions...</div>
  }

  if (isError) {
    return <div className="text-red-500 text-center">Error loading transactions.</div>
  }

  return (
    <div className="mb-8">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Recent Transactions</h2>

      {/* Mobile View: Sort/Filter buttons and list */}
      <div className="md:hidden">
        <div className="flex gap-3 mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-white border-[#00707B] bg-[#013139] hover:bg-[#00707B]/20">
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#013139] border-[#00707B] text-white">
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">Date (Newest)</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">Date (Oldest)</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">Amount (High to Low)</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">Amount (Low to High)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-white border-[#00707B] bg-[#013139] hover:bg-[#00707B]/20">
                Filter <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#013139] border-[#00707B] text-white">
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">All</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">Deposits</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">Withdrawals</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#00707B]/20 cursor-pointer">Fees</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="space-y-4">
          {transactions?.map((transaction) => {
            const icon = getTransactionIcon(transaction.description, transaction.amount)
            const isSvgPath = typeof icon === "string" // Check if it's an SVG path
            const IconComponent = icon as React.ElementType // Cast for Lucide icon component

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg border border-[#013139]"
              >
                <div className="flex items-center gap-4">
                  {/* Icon container background to white, matching Funds Breakdown */}
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    {isSvgPath ? (
                      <img
                        src={(icon as string) || "/placeholder.svg"}
                        alt={transaction.description}
                        width={24}
                        height={24}
                      />
                    ) : (
                      // Render as Lucide icon component
                      <IconComponent className="w-5 h-5 text-gray-800" />
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-lg font-semibold ${transaction.amount > 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {formatAmount(transaction.amount)}{" "}
                      <span className="text-white font-semibold">{transaction.description}</span>
                    </p>
                    <p className="text-gray-300 text-sm">{`${transaction.date} ${transaction.time}`}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop View: Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-300 text-lg border-b border-[#00707B]">
              <th className="py-3 px-4 font-semibold">Date</th>
              <th className="py-3 px-4 font-semibold">Description</th>
              <th className="py-3 px-4 font-semibold">Reward</th>
              <th className="py-3 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.id} className="border-b border-[#013139] hover:bg-[#013139]/50 transition-colors">
                <td className="py-3 px-4 text-gray-300">{transaction.date}</td>
                <td className="py-3 px-4 text-white">{transaction.description}</td>
                <td
                  className={`py-3 px-4 text-lg font-semibold ${transaction.amount > 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {formatAmount(transaction.amount)}
                </td>
                <td className="py-3 px-4 text-gray-300">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default TransactionList;
