export type SearchItem = {
  title: string;
  description?: string;
  type: "page" | "section";
  href: string;
  category: "getting-started" | "components"; 
};

export const searchData: SearchItem[] = [
  {
    title: "Introduction",
    type: "section",
    href: "#introduction",
    category: "getting-started",
  },
  {
    title: "Install with Next.js",
    type: "page",
    href: "/docs/install-nextjs",
    category: "getting-started",
  },
  {
    title: "Install Tailwindcss v4",
    type: "page",
    href: "/docs/install-tailwindcssv4",
    category: "getting-started",
  },
  {
    title: "Button Component",
    type: "page",
    href: "/components/button",
    category: "components",
  },
  {
    title: "Card Component",
    type: "page",
    href: "/components/card",
    category: "components",
  },
  {
    title: "Theming",
    type: "section",
    href: "#theming",
    category: "getting-started",
  },
];
