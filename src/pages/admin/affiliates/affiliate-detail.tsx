import { useNavigate } from "react-router-dom"
import { DetailView } from "@/components/data-management/detail-view"
import { Users, Calendar } from "lucide-react"

// Mock data for affiliate details
const affiliateData = {
  id: "1",
  name: "Sophia Clark",
  email: "sophia.clark@gmail.com",
  phone: "08034567890",
  totalReferrals: 15,
  lastLogin: "23-07-2025",
  status: "Active",
  image: "/woman-profile.png",
}

const AffiliateDetailsPage = () => {
  const navigate = useNavigate()

  const sections = [
    {
      title: "Statistics",
      items: [
        {
          label: "Total Referrals",
          value: affiliateData.totalReferrals,
          icon: <Users className="h-4 w-4 text-teal-400" />,
        },
        {
          label: "Last Login",
          value: affiliateData.lastLogin,
          icon: <Calendar className="h-4 w-4 text-teal-400" />,
        },
      ],
    },
    {
      title: "Status Information",
      items: [
        {
          label: "Status",
          value: affiliateData.status,
        },
      ],
    },
  ]

  const actions = [
    {
      label: "Activate",
      onClick: () => console.log("Activate affiliate"),
      variant: "default" as const,
    },
    {
      label: "Suspend",
      onClick: () => console.log("Suspend affiliate"),
      variant: "secondary" as const,
    },
    {
      label: "Delete",
      onClick: () => console.log("Delete affiliate"),
      variant: "destructive" as const,
    },
  ]

  return (
    <DetailView
      title={affiliateData.name}
      subtitle={affiliateData.email}
      avatar={{
        src: affiliateData.image,
        fallback: affiliateData.name.charAt(0),
      }}
      sections={sections}
      actions={actions}
      onBack={() => navigate("/admin/affiliates")}
    />
  )
}

export default AffiliateDetailsPage;
