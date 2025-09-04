"use client";

import { createContext, useContext, useMemo } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { cn } from "@/lib/utils";

type TabsContextType = {
  value: string | undefined;
  setValue: (v: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

export type TabsProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string | undefined) => void;
  }
>;

export function Tabs({
  children,
  className,
  value: valueProp,
  defaultValue,
  onValueChange,
  ...props
}: TabsProps) {
  const [value, setValue] = useControllableState<string | undefined>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const ctx = useMemo(
    () => ({ value, setValue: (v: string) => setValue(v) }),
    [value, setValue],
  );

  return (
    <TabsContext.Provider value={ctx}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tablist"
      className={cn(
        "bg-secondary text-muted-foreground inline-flex h-9 items-center justify-start gap-1 rounded-t-md p-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type TabsTriggerProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>;

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: TabsTriggerProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used within <Tabs>");

  const active = ctx.value === value;

  return (
    <button
      role="tab"
      aria-selected={active}
      data-state={active ? "active" : "inactive"}
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-xs font-medium whitespace-nowrap transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      onClick={(e) => {
        props.onClick?.(e);
        ctx.setValue(value);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export type TabsContentProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & { value: string; unmount?: boolean }
>;

export function TabsContent({
  value,
  className,
  children,
  unmount = true,
  ...props
}: TabsContentProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used within <Tabs>");

  const active = ctx.value === value;
  if (unmount && !active) return null;

  return (
    <div
      role="tabpanel"
      hidden={!active}
      data-state={active ? "active" : "inactive"}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}
