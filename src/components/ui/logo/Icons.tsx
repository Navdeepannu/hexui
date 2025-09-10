"use client";
import { motion } from "motion/react";
import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

export const SunIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      {/* Rays */}
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M5.6 5.6l1.4 1.4" />
      <path d="M17 6.99l1.4-1.4" />
      <path d="M18.4 18.4l-1.4-1.4" />
      <path d="M7 17l-1.4 1.4" />
    </svg>
  );
};

export const MoonIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  const d =
    "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
};

// Animated theme toggle that coordinates animation with theme change
type ThemeToggleButtonProps = Omit<
  ComponentProps<typeof Button>,
  "children"
> & {
  iconSize?: number;
};

export function ThemeToggleButton({
  iconSize = 24,
  className,
  variant = "ghost",
  ...props
}: ThemeToggleButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [hideRaysFirst, setHideRaysFirst] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => setMounted(true), []);

  const handleClick = useCallback(() => {
    if (!isDark) {
      // Light -> Dark: first retract rays, then switch theme
      setHideRaysFirst(true);
      setTimeout(() => {
        setTheme("dark");
        setHideRaysFirst(false);
      }, 130);
    } else {
      // Dark -> Light: switch immediately, rays will animate in
      setTheme("light");
    }
  }, [isDark, setTheme]);

  const sunCoreVariants = useMemo(
    () => ({
      light: { opacity: 1, scale: 1 },
      dark: { opacity: 0, scale: 0.8 },
    }),
    [],
  );
  const raysVariants = useMemo(
    () => ({
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0.7 },
    }),
    [],
  );
  const moonVariants = useMemo(
    () => ({
      light: { opacity: 0, rotate: -15, scale: 0.9 },
      dark: { opacity: 1, rotate: 0, scale: 1 },
    }),
    [],
  );

  return (
    <Button
      type="button"
      size="icon"
      variant={variant}
      aria-label="Toggle theme"
      onClick={handleClick}
      className={className}
      {...props}
    >
      {!mounted ? (
        // SSR-safe fallback to avoid hydration mismatches
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M5.6 5.6l1.4 1.4" />
          <path d="M17 6.99l1.4-1.4" />
          <path d="M18.4 18.4l-1.4-1.4" />
          <path d="M7 17l-1.4 1.4" />
        </svg>
      ) : (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Sun core */}
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            initial={false}
            animate={isDark ? "dark" : "light"}
            variants={sunCoreVariants}
            transition={{ duration: 0.18, ease: "easeInOut" }}
          />

          {/* Rays group */}
          <motion.g
            initial={false}
            animate={hideRaysFirst || isDark ? "hidden" : "visible"}
            variants={raysVariants}
            transition={{ duration: 0.14, ease: "easeOut" }}
          >
            <path d="M3 12h2" />
            <path d="M19 12h2" />
            <path d="M12 3v2" />
            <path d="M12 19v2" />
            <path d="M5.6 5.6l1.4 1.4" />
            <path d="M17 6.99l1.4-1.4" />
            <path d="M18.4 18.4l-1.4-1.4" />
            <path d="M7 17l-1.4 1.4" />
          </motion.g>

          {/* Moon */}
          <motion.path
            d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
            initial={false}
            animate={isDark ? "dark" : "light"}
            variants={moonVariants}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          />
        </motion.svg>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
