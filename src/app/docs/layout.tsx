import SidebarComp from "@/components/sidebar-component";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-background z-10 flex min-h-screen w-full max-w-[94rem] border-x border-neutral-900">
        {/* Sidebar */}
        <SidebarComp />
        {/* Main content */}
        <main className="flex-1 px-8 py-30">{children}</main>
      </div>
    </div>
  );
}
