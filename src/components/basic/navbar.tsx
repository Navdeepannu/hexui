"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconHexagons,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { SearchDialog } from "./search-dialog";
import { Button } from "@/components/ui/button";

export const Navbar = ({
  setSidebarOpenAction,
}: {
  setSidebarOpenAction: (open: boolean) => void;
}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const leftNavItems = [
    { title: "Docs", href: "/docs/introduction" },
    { title: "Components", href: "/components" },
  ];

  const socialLinks = [
    {
      title: <IconBrandGithub size={20} />,
      href: "https://github.com/navdeepannu",
      label: "GitHub",
    },
    {
      title: <IconBrandX size={20} />,
      href: "https://x.com/navdeepannu",
      label: "X (Twitter)",
    },
  ];

  const isNavActive = (itemHref: string) => {
    if (itemHref === "/docs/introduction") return pathname.startsWith("/docs");
    if (itemHref === "/components") return pathname.startsWith("/components");
    return pathname === itemHref;
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-background/80 border-border fixed top-1 right-0 left-0 z-50 w-full border-b backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left Side: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            className="text-foreground flex items-center gap-1 text-2xl font-bold"
            href="/"
          >
            <IconHexagons size={30} />
            <h1 className="flex">
              He
              <span className="mr-0.5 rotate-10 skew-6 transform text-3xl">
                X
              </span>
              ui
            </h1>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-6">
            {leftNavItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`hover:text-foreground text-sm font-medium transition-colors ${
                    isNavActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Search + Theme + Social */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden sm:block">
            <SearchDialog />
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {resolvedTheme === "dark" ? (
              <IconSun size={20} />
            ) : (
              <IconMoon size={20} />
            )}
          </Button>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground p-2 transition-colors"
                aria-label={link.label}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
