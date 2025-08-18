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
    <div className={cn(`max-w-6xl mx-auto min-h-screen px-10 ${className}`)}>
      {children}
    </div>
  );
};
