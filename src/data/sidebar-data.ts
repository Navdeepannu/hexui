type navigation = {
  href: string;
  label: string;
}[];

export const gettingStartedLinks: navigation = [
  { href: "/docs/introduction", label: "Introduction" },
  { href: "/registry", label: "Registry" },
  { href: "/docs/install-nextjs", label: "Install Next.js" },
  { href: "/docs/install-tailwindcssv4", label: "Install Tailwind CSS v4" },
  { href: "/docs/install-tailwindcssv3", label: "Install Tailwind CSS v3" },
];

export const componentLinks: navigation = [
  // Layout Components
  { href: "/components/blog-card", label: "Blog Cards" },

  // Interactive Components
  { href: "/components/loader", label: "Loaders" },
  { href: "/components/button", label: "Buttons" },

  // Showcase Components
  { href: "/components/animate-svg", label: "Animated SVG" },
  { href: "/components/showcase", label: "Component Showcase" },
];
