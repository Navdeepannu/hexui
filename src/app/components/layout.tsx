import SidebarComp from "@/components/sidebar-component";
import { Container } from "@/components/container";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-foreground bg-background min-h-screen">
      <Container>
        <div className="mx-auto flex w-full gap-8 py-12">
          {/* Sidebar (desktop) */}
          <aside
            aria-label="Primary navigation"
            className="hidden shrink-0 lg:block"
          >
            <SidebarComp />
          </aside>

          {/* Main content (centered column) */}
          <main className="max-w-4xl flex-1">{children}</main>
        </div>
      </Container>
    </div>
  );
}
