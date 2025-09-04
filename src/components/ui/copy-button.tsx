"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";

export type CopyButtonProps = {
  value: string;
  className?: string;
  timeout?: number;
  size?: "icon" | "sm" | "default";
  variant?: "ghost" | "outline" | "default";
  "aria-label"?: string;
};

export function CopyButton({
  value,
  className,
  timeout = 1500,
  size = "icon",
  variant = "ghost",
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch {
      // ignore
    }
  }

  const Icon = copied ? CheckIcon : CopyIcon;

  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      onClick={onCopy}
      className={cn("shrink-0 cursor-pointer", className)}
      aria-live="polite"
      {...props}
    >
      <Icon className="text-foreground size-4" />
    </Button>
  );
}

export default CopyButton;
