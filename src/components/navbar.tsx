"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  IconMenuDeep,
  IconBrandGithub,
  IconBrandX,
  IconSearch,
  IconCommand,
} from "@tabler/icons-react";
import { MobileSidebarContent } from "./sidebar-component";
import { HexLogo } from "./ui/logo/HexLogo";
import { ThemeToggleButton } from "./ui/logo/Icons";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandShortcut,
} from "@/components/ui/command";

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/images/logo.png",
    alt: "logo",
    title: "Hex UI",
  },
  menu = [
    {
      title: "Components",
      url: "/components",
    },
    {
      title: "Documentation",
      url: "/docs",
    },
    {
      title: "Templates",
      url: "/templates",
    },
  ],
}: NavbarProps) => {
  const pathname = usePathname();

  // Command palette state
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section className={`sticky top-0 z-50 w-full`}>
        <div className="mx-auto max-w-7xl py-2">
          {/* Desktop Menu */}
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <HexLogo />
                <span className="text-foreground text-base font-semibold tracking-tighter">
                  {logo.title}
                </span>
              </a>

              {/* Navigation Links */}
              <div className="flex items-center gap-4">
                {menu.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    aria-current={pathname === item.url ? "page" : undefined}
                    className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            {/* center: search input */}
            <div className="flex items-center justify-end">
              <div className="w-full">
                <button
                  onClick={() => setOpen(true)}
                  className="text-muted-foreground bg-muted hover:bg-muted/40 flex w-full items-center gap-3 rounded-md border px-3 py-1 text-sm"
                  aria-label="Open search"
                >
                  <IconSearch className="size-4" />
                  <span className="flex items-center gap-2 truncate">
                    Search Documuntation...
                    <span className="bg-background/30 flex items-center gap-1 px-2 py-0.5">
                      <IconCommand className="size-4" />
                      <samp>K</samp>
                    </span>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* GitHub Icon */}
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/80"
                >
                  <IconBrandGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>

              {/* X (Twitter) Icon */}
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/80"
                >
                  <IconBrandX />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </Button>

              {/* Animated Theme Toggle */}
              <ThemeToggleButton className="text-foreground hover:text-foreground/80" />
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <HexLogo />
                <span className="text-foreground text-lg font-semibold tracking-tighter">
                  {logo.title}
                </span>
              </a>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <IconMenuDeep className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <HexLogo />
                        <span className="text-foreground">{logo.title}</span>
                      </a>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-6 p-4">
                    {/* Always show the sidebar content in the mobile sheet so menu opens the sidebar */}
                    <MobileSidebarContent />

                    {/* Mobile Social Icons - always show */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-foreground/80"
                        >
                          <IconBrandGithub className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>

                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-foreground/80"
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          <span className="sr-only">X (Twitter)</span>
                        </a>
                      </Button>

                      <ThemeToggleButton
                        variant="outline"
                        className="text-foreground hover:text-foreground/80"
                      />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Pages">
            {menu.map((m) => (
              <CommandItem
                key={m.url}
                onSelect={() => (window.location.href = m.url)}
              >
                {m.title}
                <CommandShortcut>{m.url}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export { Navbar };
