import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none bg-[#1a202c]">
        <SideNav />
      </div>
      <div className="flex-grow p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
