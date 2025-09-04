"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { gettingStartedLinks, componentLinks } from "@/data/sidebar-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarComp = () => {
  const [gettingStartedOpen, setGettingStartedOpen] = useState(true);
  const [componentsOpen, setComponentsOpen] = useState(true);
  const pathname = usePathname();
  const isActive = (href: string) => {
    const p = (pathname || "/").replace(/\/+$/, "");
    const h = (href || "/").replace(/\/+$/, "");
    return p === h || p.startsWith(h + "/");
  };

  return (
    <div className="bg-background hidden h-full w-64 border-r py-25 lg:block dark:border-neutral-900">
      <div className="space-y-6 px-4">
        {/* Getting Started Section */}
        <div>
          <button
            onClick={() => setGettingStartedOpen(!gettingStartedOpen)}
            className="text-foreground hover:text-accent-foreground mb-3 flex w-full items-center gap-2 text-left text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            {gettingStartedOpen ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
            Getting Started
          </button>

          {gettingStartedOpen && (
            <div className="ml-5 space-y-1">
              {gettingStartedLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "text-muted-foreground hover:text-foreground block rounded-md px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
                    isActive(item.href) &&
                      "text-foreground bg-neutral-100 dark:bg-neutral-800",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Components Section */}
        <div>
          <button
            onClick={() => setComponentsOpen(!componentsOpen)}
            className="text-foreground hover:text-accent-foreground mb-3 flex w-full items-center gap-2 text-left text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            {componentsOpen ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
            Components
          </button>

          {componentsOpen && (
            <div className="ml-5 space-y-1">
              {componentLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm transition-colors",
                    isActive(item.href) && "bg-accent text-accent-foreground",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mobile version of the sidebar for use in mobile menu
const MobileSidebarContent = () => {
  const [gettingStartedOpen, setGettingStartedOpen] = useState(true);
  const [componentsOpen, setComponentsOpen] = useState(true);
  const pathname = usePathname();
  const isActive = (href: string) => {
    const p = (pathname || "/").replace(/\/+$/, "");
    const h = (href || "/").replace(/\/+$/, "");
    return p === h || p.startsWith(h + "/");
  };

  return (
    <div className="space-y-6">
      {/* Getting Started Section */}
      <div>
        <button
          onClick={() => setGettingStartedOpen(!gettingStartedOpen)}
          className="text-muted-foreground hover:text-foreground mb-3 flex w-full items-center gap-2 text-left text-sm font-semibold tracking-wider uppercase transition-colors"
        >
          {gettingStartedOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
          Getting Started
        </button>

        {gettingStartedOpen && (
          <div className="ml-6 space-y-2">
            {gettingStartedLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm transition-colors",
                  isActive(item.href) && "bg-accent text-accent-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Components Section */}
      <div>
        <button
          onClick={() => setComponentsOpen(!componentsOpen)}
          className="text-muted-foreground hover:text-foreground mb-3 flex w-full items-center gap-2 text-left text-sm font-semibold tracking-wider uppercase transition-colors"
        >
          {componentsOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
          Components
        </button>

        {componentsOpen && (
          <div className="ml-6 space-y-2">
            {componentLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm transition-colors",
                  isActive(item.href) && "bg-accent text-accent-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarComp;
export { MobileSidebarContent };
