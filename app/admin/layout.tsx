import { SidebarProvider } from "@/components/ui/sidebar"
import AdminSidebar from "../components/admin/Sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />

        <main className="flex-1 p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}