import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft } from "lucide-react"

const RewardSettingsPage = () => {
  const navigate = useNavigate()
  const [rewardsEnabled, setRewardsEnabled] = useState(true)
  const [cashbackPercent, setCashbackPercent] = useState("5")
  const [streakCaps, setStreakCaps] = useState("10")
  const [platformSplit, setPlatformSplit] = useState("70")
  const [sellerSplit, setSellerSplit] = useState("30")
  const [conversionRate, setConversionRate] = useState("100")
  const [minBidCredit, setMinBidCredit] = useState("50")
  const [maxBidCredit, setMaxBidCredit] = useState("5000")
  const [listingFee] = useState("500")

  const handleSave = () => {
    // Save settings logic here
    console.log("Saving reward settings...")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Mobile Header */}
      <div className="md:hidden bg-teal-800/30 p-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-white hover:text-teal-200">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Reward Settings
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block bg-teal-800/30 p-6">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(-1)} className="flex items-center text-white hover:text-teal-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
          </button>
          <h1 className="text-2xl font-bold text-white">Reward Settings</h1>
        </div>
      </div>

      <div className="p-4 md:p-6 space-y-6">
        {/* Enable Rewards */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="rewards-toggle" className="text-white font-medium">
                  Enable rewards
                </Label>
                <p className="text-sm text-slate-400 mt-1">Turn on/off the rewards system for users</p>
              </div>
              <Switch id="rewards-toggle" checked={rewardsEnabled} onCheckedChange={setRewardsEnabled} />
            </div>
          </CardContent>
        </Card>

        {/* Cashback Settings */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Cashback Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cashback" className="text-slate-300">
                Cashback%
              </Label>
              <Input
                id="cashback"
                type="number"
                value={cashbackPercent}
                onChange={(e) => setCashbackPercent(e.target.value)}
                className="mt-1 bg-teal-900/20 border-teal-700/30 text-white"
                placeholder="Enter cashback percentage"
              />
            </div>
            <div>
              <Label htmlFor="streak-caps" className="text-slate-300">
                Streak Caps
              </Label>
              <Input
                id="streak-caps"
                type="number"
                value={streakCaps}
                onChange={(e) => setStreakCaps(e.target.value)}
                className="mt-1 bg-teal-900/20 border-teal-700/30 text-white"
                placeholder="Enter streak caps"
              />
            </div>
          </CardContent>
        </Card>

        {/* Platform / Seller Split */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Platform / Seller Split</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="platform-split" className="text-slate-300">
                Platform Split%
              </Label>
              <Input
                id="platform-split"
                type="number"
                value={platformSplit}
                onChange={(e) => setPlatformSplit(e.target.value)}
                className="mt-1 bg-teal-900/20 border-teal-700/30 text-white"
                placeholder="Enter platform split percentage"
              />
            </div>
            <div>
              <Label htmlFor="seller-split" className="text-slate-300">
                Seller Split%
              </Label>
              <Input
                id="seller-split"
                type="number"
                value={sellerSplit}
                onChange={(e) => setSellerSplit(e.target.value)}
                className="mt-1 bg-teal-900/20 border-teal-700/30 text-white"
                placeholder="Enter seller split percentage"
              />
            </div>
          </CardContent>
        </Card>

        {/* BidCredit Settings */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">BidCredit Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="conversion-rate" className="text-slate-300">
                Conversion Rate
              </Label>
              <Input
                id="conversion-rate"
                type="number"
                value={conversionRate}
                onChange={(e) => setConversionRate(e.target.value)}
                className="mt-1 bg-teal-900/20 border-teal-700/30 text-white"
                placeholder="Enter conversion rate"
              />
            </div>
            <div>
              <Label htmlFor="min-bidcredit" className="text-slate-300">
                Minimum BidCredit
              </Label>
              <Input
                id="min-bidcredit"
                type="number"
                value={minBidCredit}
                onChange={(e) => setMinBidCredit(e.target.value)}
                className="mt-1 bg-teal-900/20 border-teal-700/30 text-white"
                placeholder="Enter minimum BidCredit"
              />
            </div>
            <div>
              <Label htmlFor="max-bidcredit" className="text-slate-300">
                Maximum BidCredit
              </Label>
              <Input
                id="max-bidcredit"
                type="number"
                value={maxBidCredit}
                onChange={(e) => setMaxBidCredit(e.target.value)}
                className="mt-1 bg-teal-900/20 border-teal-700/30 text-white"
                placeholder="Enter maximum BidCredit"
              />
            </div>
          </CardContent>
        </Card>

        {/* Listing Fee Summary */}
        <Card className="bg-slate-800/50 border-teal-700/30">
          <CardHeader>
            <CardTitle className="text-white">Listing Fee Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">ListingFee</span>
                <span className="text-white font-medium">N{listingFee}</span>
              </div>
              <div className="text-sm text-slate-400">Reserve N250 locked | 30% to seller on default</div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button onClick={handleSave} className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3">
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default RewardSettingsPage;
