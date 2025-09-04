import React from "react";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { HexLogo } from "./ui/logo/HexLogo";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Footer = ({
  logo = {
    url: "/",
    src: "/images/logo.png",
    alt: "logo",
    title: "Hex UI",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Components", href: "/components" },
      { label: "Documentation", href: "/docs" },
      { label: "Templates", href: "/templates" },
    ],
    resources: [
      { label: "Getting Started", href: "/docs/introduction" },
      { label: "Installation", href: "/docs/install-nextjs" },
      { label: "Examples", href: "/examples" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="border-accent col-start-1 row-span-full row-start-1 hidden border-x border-t border-b border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
      <div className="border-accent bg-background mx-auto max-w-7xl border-x px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a href={logo.url} className="mb-4 flex items-center gap-2">
              <HexLogo />
              <span className="text-foreground text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <IconBrandGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <IconBrandX className="h-5 w-5" />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-border mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {logo.title}. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
