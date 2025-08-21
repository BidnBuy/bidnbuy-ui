/**
 * @file components/admin/admin-sidebar.tsx
 * @description Admin sidebar component with navigation items and dynamic active states.
 */

import {
  LayoutDashboard,
  Users,
  Store,
  Package,
  Gavel,
  ShoppingCart,
  CreditCard,
  AlertTriangle,
  Settings,
  HelpCircle,
  UserCheck,
} from "lucide-react"
import { useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

/**
 * Navigation items for the admin sidebar.
 */
const navigationItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Vendors",
    url: "/admin/vendors",
    icon: Store,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: Package,
  },
  {
    title: "Marketer / Affiliate",
    url: "/admin/marketers",
    icon: UserCheck,
  },
  {
    title: "Bids",
    url: "/admin/bids",
    icon: Gavel,
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Payments",
    url: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Disputes",
    url: "/admin/disputes",
    icon: AlertTriangle,
  },
]

/**
 * AdminSidebar component for the admin dashboard.
 * @returns {JSX.Element} The rendered admin sidebar.
 */
export function AdminSidebar() {
  const { pathname } = useLocation()

  return (
    <Sidebar className="border-none">
      <div className="h-full bg-[#00222E] md:bg-[#01151C]">
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/bidnbuy-logo.png"
              alt="BidnBuy Logo"
              width={56}
              height={56}
              className="object-contain"
            />
            <span className="text-white font-semibold text-xl">BidnBuy</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="overflow-hidden">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => {
                  const isActive = pathname === item.url
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="text-white hover:bg-[#004755] data-[active=true]:bg-[#004755] data-[active=true]:text-white"
                      >
                        <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4">
          {/* Settings and Help */}
          <SidebarMenu className="mb-4">
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-white hover:bg-[#004755]">
                <a href="/admin/settings" className="flex items-center gap-3 px-3 py-2">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-white hover:bg-[#004755]">
                <a href="/admin/help" className="flex items-center gap-3 px-3 py-2">
                  <HelpCircle className="w-5 h-5" />
                  <span>Help</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Admin Profile */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#004755]">
            <Image
              src="/images/amelia-profile.jpg"
              alt="Admin Profile"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-white text-sm font-semibold">Precious</p>
              <p className="text-gray-400 text-xs">Admin</p>
            </div>
          </div>
        </SidebarFooter>
      </div>

      <SidebarRail />
    </Sidebar>
  )
}
