import type { ReactNode } from "react"
import Link from "next/link"
import { User, Settings, Bell, CreditCard, LogOut } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-950 border-r border-zinc-800">
        <div className="p-6">
          <h2 className="text-xl font-bold">My Account</h2>
          <p className="text-sm text-zinc-400">Manage your Valioux profile</p>
        </div>
        <nav className="px-4 pb-6">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              >
                <User size={18} />
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/account"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              >
                <Settings size={18} />
                Account Settings
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/notifications"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              >
                <Bell size={18} />
                Notifications
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/billing"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              >
                <CreditCard size={18} />
                Billing
              </Link>
            </li>
            <li className="pt-6">
              <button className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors">
                <LogOut size={18} />
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-black">
        <div className="container mx-auto py-8 px-4">{children}</div>
      </main>
    </div>
  )
}
