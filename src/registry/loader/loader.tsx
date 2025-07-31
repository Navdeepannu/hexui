"use client";

import { motion } from "framer-motion";
import React from "react";

// Define supported sizes
type Size = "sm" | "md" | "lg";

// Component props
interface LoadingProps {
  size?: Size;
  className?: string;
}

// Tailwind size classes based on size prop
const sizeClasses: Record<Size, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

// Utility to join class names
const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const Loader = ({ size = "md", className }: LoadingProps) => {
  const sizeClass = sizeClasses[size];

  // Render animated loading dots
  const renderDots = () => (
    <div className="flex items-center justify-center">
      {[0, 0.3, 0.6].map((delay, i) => (
        <motion.div
          key={i}
          className={cn(
            "rounded-full bg-neutral-800 dark:bg-neutral-300", // fallback colors
            sizeClass,
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      role="status"
      aria-label="Loader"
    >
      {renderDots()}
    </div>
  );
};

export { Loader };
