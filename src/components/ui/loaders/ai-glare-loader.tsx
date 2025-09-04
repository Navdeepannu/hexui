"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type AiGlareLoaderProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function AiGlareLoader({
  className,
  label = "Thinking…",
  ...props
}: AiGlareLoaderProps) {
  return (
    <div className={cn("relative isolate", className)} {...props}>
      {/* Card background */}
      <div className="bg-card/60 text-foreground relative overflow-hidden rounded-lg border p-4">
        {/* Glare sweep */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/2 left-0 h-[200%] w-24 -skew-x-12 animate-[glare_2s_ease-in-out_infinite] bg-white/10 blur-md dark:bg-white/10" />
        </div>

        {/* Content */}
        <div className="flex items-center gap-3">
          {/* Dot wave */}
          <div className="flex items-end gap-1">
            <span className="bg-foreground/70 inline-block h-1.5 w-1.5 animate-[bounce_1s_infinite] rounded-full [animation-delay:-180ms]" />
            <span className="bg-foreground/70 inline-block h-2 w-2 animate-[bounce_1s_infinite] rounded-full [animation-delay:-90ms]" />
            <span className="bg-foreground/70 inline-block h-2.5 w-2.5 animate-[bounce_1s_infinite] rounded-full" />
          </div>

          <div className="text-muted-foreground text-sm">{label}</div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes glare {
          0% {
            transform: translateX(-40%) rotate(0.001deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(160%) rotate(0.001deg);
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          40% {
            transform: translateY(-30%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default AiGlareLoader;
