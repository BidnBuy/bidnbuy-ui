import { MainNav } from "@/components/navigation/MainNav";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";

export function DesktopHeader() {
  return (
    <header className="text-white">
      <DesktopNavigation />
      <MainNav />
    </header>
  )
}
