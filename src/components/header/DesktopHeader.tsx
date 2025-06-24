import { MainNav } from "@/components/navigation/MainNav";
import { TopNav } from "@/components/navigation/TopNav";

export function DesktopHeader() {
  return (
    <header className="text-white">
      <TopNav />
      <MainNav />
    </header>
  )
}
