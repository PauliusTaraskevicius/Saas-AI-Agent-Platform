import { SidebarProvider } from "@/components/ui/sidebar";
import DashBoardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar";
import { DashBoardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashBoardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashBoardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
