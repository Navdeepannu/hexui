"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export type AiGlareLoaderProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export function AiGlareLoader({ className, ...props }: AiGlareLoaderProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "relative z-10 shadow-[0_20px_20px_rgba(0_0_0/0.2)]",
        className,
      )}
    >
      {/* dark bg */}
      <span className="absolute -inset-x-2 -inset-y-3.5 -z-10 rounded-lg bg-gradient-to-b from-[#424242] to-[#343434]" />

      {/* glass bg */}
      <span className="absolute -inset-x-3.5 -inset-y-5 -z-20 rounded-lg bg-transparent shadow-[0_0_24px_rgba(0,0,0,0.3)] dark:bg-neutral-600/50 dark:shadow-[0_10px_28px_rgba(0,0,0,0.35)]" />

      {/* colors gradient (anchored to glass, not center) */}
      <span className="absolute -inset-x-3.5 -inset-y-5 -z-15 rounded-lg bg-conic/decreasing from-violet-700/30 via-lime-300/40 to-violet-700/30 opacity-70 blur-lg dark:from-violet-600/20 dark:via-lime-300 dark:to-violet-600/20" />

      {/* text */}
      <span className="rounded-full bg-gradient-to-b from-[#343434] to-[#424242] p-2 text-white text-shadow-2xs">
        + Add to Cart
      </span>
    </button>
  );
}

export default AiGlareLoader;
