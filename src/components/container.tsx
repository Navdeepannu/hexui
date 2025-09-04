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
    <div className={cn(`mx-auto min-h-screen max-w-7xl px-10 ${className}`)}>
      {children}
    </div>
  );
};
