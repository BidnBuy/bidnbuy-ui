/**
 * @file app/wallet-ledger/page.tsx
 * @description Container component for the Wallet Ledger page.
 * Orchestrates various presentational components to display user wallet details and transaction history.
 */

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { useBidCreditStore } from "@/store/bid-credit-store";

import Header from "@/components/header/Header";

import UserProfile from "./components/UserProfile";
import BalanceSummary from "./components/BalanceSummary";
import UnpaidBidAlert from "./components/UnpaidBidAlert";
import FundsBreakdown from "./components/FundsBreakdown";
import TransactionList from "./components/TransactionList";
import StreakReward from "./components/StreakReward";
import RewardsSection from "./components/RewardsSection";



/**
 * WalletLedgerPage component displays the user's wallet balance, bid credit,
 * funds breakdown, and recent transactions.
 * @returns {JSX.Element} The rendered wallet ledger page.
 */

const WalletLedger = () => {
  const currentBidCreditBalance = useBidCreditStore((state) => state.currentBalance)

  /**
   * Handles the "Pay Now" action in the unpaid bid warning.
   * Currently shows a toast, but can be extended to navigate to a payment page.
   */
  const handlePayNow = () => {
    toast.info("Redirecting to payment for unpaid bid...")
    // In a real app, you would navigate to a payment page or trigger a payment flow
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#01151C" }}>
 
      <main className="px-4 py-6 md:px-8 md:py-12">
        {/* Adjusted max-width for desktop content to match Figma */}
        <div className="max-w-md mx-auto md:max-w-3xl lg:max-w-4xl">
          {/* Mobile Back Button and Title */}
          <div className="md:hidden flex items-center gap-3 mb-6 w-full">
            <Link to="/" className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-white text-xl font-semibold">Wallet</h1>
          </div>


          {/* Desktop Title */}
          <h1 className="hidden md:block text-white text-4xl font-bold mb-8">My Wallet</h1>
          <UserProfile name="Amelia" handle="@amelia_123" avatarSrc="/images/amelia-profile.jpg" />
          <BalanceSummary walletBalance="N1,250" bidCreditBalance={`${currentBidCreditBalance.toLocaleString()} B.C`} />
          <UnpaidBidAlert onPayNow={handlePayNow} />
          <FundsBreakdown availableFunds="N1,250" lockedFunds="N250" frozenFunds="N0.00" />
          
         
          <div className="md:hidden">
            <StreakReward />
          </div>
          <RewardsSection /> 
          <TransactionList />
        </div>
      </main>
    </div>
  )
}

export default WalletLedger;