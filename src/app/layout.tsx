import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hex UI",
  description:
    "Build beautiful UI for your websites faster with reusuable NestUI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  function getTheme() {
                    if (typeof localStorage !== 'undefined') {
                      const stored = localStorage.getItem('vite-ui-theme');
                      if (stored && (stored === 'dark' || stored === 'light' || stored === 'system')) {
                        return stored;
                      }
                    }
                    return 'system';
                  }
                  
                  const theme = getTheme();
                  const root = document.documentElement;
                  
                  // Clear existing theme classes
                  root.classList.remove('light', 'dark');
                  
                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {
                  // Fallback to light mode if anything fails
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
