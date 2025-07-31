"use client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/basic/container";
import {
  IconBook2,
  IconBrandFramerMotion,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconComponents,
  IconHexagons,
  IconStar,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Spotlight } from "@/components/landing/sportlight";

export default function Landing() {
  const words = ["Fast", "Easy", "Modern", "Clean"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="dark:from-background dark:to-background relative z-10 overflow-x-hidden bg-gradient-to-br from-neutral-50 to-blue-50/30">
      <Spotlight
        duration={7}
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        xOffset={100}
      />

      {/* Hero Section */}
      <Container className="flex min-h-screen items-center justify-center px-4 text-center md:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          {/* Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="https://github.com/navdeepannu/nestui"
              target="_blank"
              className="inline-block"
            >
              <Badge
                variant="outline"
                className="group relative overflow-hidden border-2 border-neutral-300 px-4 py-1 text-sm transition-colors duration-300 hover:border-blue-300 dark:border-zinc-400 dark:hover:border-stone-400"
              >
                <IconStar className="dark:text-muted-foreground mr-2 text-blue-500" />
                Star on Github
                {/* Glare effect - initial animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent dark:via-white/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                />
                {/* Glare effect - hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-200/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full dark:via-white/20"></div>
              </Badge>
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build Websites
            <br />
            <span className="inline-block py-2">
              Beautiful &{" "}
              <span className="inline-block w-[140px] text-left md:w-[200px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    className="inline-block bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent dark:from-[#CCE6FF] dark:via-zinc-400 dark:to-[#1A8CFF]/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-muted-foreground text-md mx-auto mt-4 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional React components built with Next.js, Tailwind CSS, and
            modern best practices. Copy, paste, and customize to ship faster.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/components/loader">
              <Button
                size="lg"
                className="h-auto bg-neutral-800 px-4 py-2 text-base font-medium text-white transition-transform duration-300 hover:bg-neutral-900 dark:bg-zinc-200 dark:text-black dark:hover:bg-neutral-100"
              >
                <IconComponents />
                Browse Components
              </Button>
            </Link>
            <Link href="/docs/introduction">
              <Button
                variant="outline"
                size="lg"
                className="dark:text-foreground h-auto border-neutral-300 px-3 py-2 text-base font-medium text-neutral-700 transition-transform duration-300 hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <IconBook2 />
                Read Documentation
              </Button>
            </Link>
          </motion.div>

          {/* Tech Stack */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm">
            <TechIcon
              icon={
                <IconBrandNextjs size={28} className="text-muted-foreground" />
              }
              label="Next.js"
              delay={0.8}
            />
            <TechIcon
              icon={
                <IconBrandTailwind
                  size={28}
                  className="text-muted-foreground"
                />
              }
              label="Tailwind CSS"
              delay={0.9}
            />
            <TechIcon
              icon={
                <IconBrandReact size={28} className="text-muted-foreground" />
              }
              label="React"
              delay={1.0}
            />
            <TechIcon
              icon={
                <IconBrandFramerMotion
                  size={28}
                  className="text-muted-foreground"
                />
              }
              label="Framer Motion"
              delay={1.1}
            />
            <TechIcon
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="text-muted-foreground h-7 w-7"
                >
                  <rect width="256" height="256" fill="none" />
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
              }
              label="shadcn/ui"
              delay={1.2}
            />
          </div>
        </div>
      </Container>

      {/* Bento Grid Section */}
      <Container className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Components Showcase
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Beautiful, accessible, and customizable components ready to copy
              and paste into your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Large feature card */}
            <div className="rounded-xl border border-neutral-200 bg-white/50 p-8 backdrop-blur-sm md:col-span-2 lg:col-span-2 dark:border-zinc-700 dark:bg-zinc-900/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                  <IconComponents className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">
                    50+ Components
                  </h3>
                  <p className="text-muted-foreground text-sm">Ready to use</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                From buttons and forms to complex data tables and navigation
                components. Each component is built with accessibility and
                customization in mind.
              </p>
              <div className="mt-6 flex gap-2">
                <div className="h-8 w-8 rounded border bg-blue-100 dark:bg-blue-900"></div>
                <div className="h-8 w-12 rounded border bg-green-100 dark:bg-green-900"></div>
                <div className="h-8 w-6 rounded border bg-purple-100 dark:bg-purple-900"></div>
              </div>
            </div>

            {/* Copy paste demo */}
            <div className="rounded-xl border border-neutral-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                  <IconBook2 className="text-white" size={20} />
                </div>
                <h3 className="text-foreground font-semibold">Copy & Paste</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                No package installation required. Just copy the code and paste
                it into your project.
              </p>
              <div className="rounded bg-neutral-100 p-3 font-mono text-xs dark:bg-zinc-800">
                <span className="text-blue-600 dark:text-blue-400">npx</span>{" "}
                <span className="text-foreground">hexui add button</span>
              </div>
            </div>

            {/* Theme support */}
            <div className="rounded-xl border border-neutral-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                  <IconStar className="text-white" size={20} />
                </div>
                <h3 className="text-foreground font-semibold">Dark Mode</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Built-in dark mode support with smooth transitions.
              </p>
              <div className="flex gap-2">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-white"></div>
                <div className="h-4 w-4 rounded-full bg-neutral-900"></div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="rounded-xl border border-neutral-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                  <IconWorld className="text-white" size={20} />
                </div>
                <h3 className="text-foreground font-semibold">Accessible</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                WCAG compliant components with proper ARIA labels and keyboard
                navigation.
              </p>
            </div>

            {/* TypeScript */}
            <div className="rounded-xl border border-neutral-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                  TS
                </div>
                <h3 className="text-foreground font-semibold">TypeScript</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Full TypeScript support with proper type definitions and
                IntelliSense.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* CLI Integration Section */}
      <Container className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              CLI Integration
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Install components with a single command. Our CLI handles
              dependencies and setup automatically.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900 dark:border-zinc-700 dark:bg-black">
              <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-muted-foreground ml-4 font-mono text-sm">
                  terminal
                </span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="mb-2 text-green-400">
                  $ npx hexui@latest init
                </div>
                <div className="mb-4 text-neutral-400">
                  ✓ Initializing project...
                </div>
                <div className="mb-2 text-green-400">
                  $ npx hexui add button card dialog
                </div>
                <div className="mb-2 text-neutral-400">
                  ✓ Installing button component
                </div>
                <div className="mb-2 text-neutral-400">
                  ✓ Installing card component
                </div>
                <div className="mb-4 text-neutral-400">
                  ✓ Installing dialog component
                </div>
                <div className="text-white">
                  Done! 3 components added to your project.
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                  <span className="font-bold text-white">1</span>
                </div>
                <h3 className="text-foreground mb-2 font-semibold">
                  Initialize
                </h3>
                <p className="text-muted-foreground text-sm">
                  Set up HexUI in your project with a single command
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
                  <span className="font-bold text-white">2</span>
                </div>
                <h3 className="text-foreground mb-2 font-semibold">
                  Add Components
                </h3>
                <p className="text-muted-foreground text-sm">
                  Install any component with automatic dependency resolution
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
                  <span className="font-bold text-white">3</span>
                </div>
                <h3 className="text-foreground mb-2 font-semibold">
                  Start Building
                </h3>
                <p className="text-muted-foreground text-sm">
                  Use components immediately in your React application
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Copy-Paste Demo Section */}
      <Container className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Copy, Paste, Customize
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              No complex setup required. Copy the component code and paste it
              directly into your project.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-foreground mb-4 text-xl font-semibold">
                Simple Button Component
              </h3>
              <p className="text-muted-foreground mb-6">
                Each component comes with complete source code, styling, and
                TypeScript definitions. Just copy and paste into your project.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground text-sm">
                    Zero configuration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground text-sm">
                    Fully customizable
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground text-sm">
                    Production ready
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900 dark:border-zinc-700 dark:bg-black">
              <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800">
                <span className="text-muted-foreground font-mono text-sm">
                  Button.tsx
                </span>
                <button className="rounded bg-blue-500 px-2 py-1 text-xs text-white">
                  Copy
                </button>
              </div>
              <div className="overflow-x-hidden p-4 font-mono text-xs break-words">
                <div className="text-blue-400">import</div>
                <div className="ml-2 text-white">
                  {`{ forwardRef }`} from "react"
                </div>
                <div className="mt-2 text-blue-400">export const</div>
                <div className="ml-2 text-yellow-300">Button</div>
                <div className="ml-1 text-white">= forwardRef({`() => (`}</div>
                <div className="ml-2 text-white">{`<button`}</div>
                <div className="ml-4 text-green-300">
                  className="px-4 py-2 bg-blue-500"
                </div>
                <div className="ml-2 text-white">{`>`}</div>
                <div className="ml-4 text-white">{`Click me`}</div>
                <div className="ml-2 text-white">{`</button>`}</div>
                <div className="text-white">))</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="dark:border-accent border-t border-neutral-200 bg-neutral-100 dark:bg-black">
        <Container className="min-h-0 px-4 py-20 md:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
              {/* Left Section - Logo and Attribution */}
              <div className="flex flex-col items-center md:items-start">
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
                <p className="text-muted-foreground text-md mx-1 text-center md:text-left">
                  Built with ❤️ by{" "}
                  <span className="cursor-pointer text-zinc-200 transition-colors duration-200 hover:text-zinc-300">
                    Navdeep Singh
                  </span>
                </p>
              </div>

              {/* Middle Section - Large Brand Name */}
              <div className="order-first text-center md:order-none">
                <h2 className="bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-4xl font-black tracking-tight text-transparent drop-shadow-lg md:text-[8rem] dark:from-zinc-500 dark:via-zinc-700 dark:to-neutral-900 dark:drop-shadow-2xl">
                  HEX UI
                </h2>
              </div>

              {/* Right Section - Links */}
              <div className="flex gap-8 md:gap-12">
                {/* Navigation Links */}
                <div>
                  <ul className="text-muted-foreground space-y-3 text-sm">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-foreground transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/components"
                        className="hover:text-foreground transition-colors"
                      >
                        Components
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/introduction"
                        className="hover:text-foreground transition-colors"
                      >
                        Docs
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <ul className="text-muted-foreground space-y-3 text-sm">
                    <li>
                      <Link
                        href="https://x.com/navdeepannu"
                        className="hover:text-foreground transition-colors"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/navdeepannu/nestui"
                        className="hover:text-foreground transition-colors"
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://linkedin.com/in/navdeepannu"
                        className="hover:text-foreground transition-colors"
                      >
                        LinkedIn
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <ul className="text-muted-foreground space-y-3 text-sm">
                    <li>
                      <Link
                        href="/terms"
                        className="hover:text-foreground transition-colors"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy"
                        className="hover:text-foreground transition-colors"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/license"
                        className="hover:text-foreground transition-colors"
                      >
                        License
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

const TechIcon = ({
  icon,
  label,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  delay?: number;
}) => (
  <motion.div
    className="flex flex-col items-center gap-2 rounded-lg p-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {icon}
    <span className="text-muted-foreground text-sm font-medium">{label}</span>
  </motion.div>
);
