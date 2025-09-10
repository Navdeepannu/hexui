import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 ${className}`,
      )}
      style={{
        // keep content centered on narrow screens with a small max-width for readability
        display: "block",
      }}
    >
      {children}
    </div>
  );
};
