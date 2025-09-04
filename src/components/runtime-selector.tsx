"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import CopyButton from "@/components/ui/copy-button";

export type Runtime = "npm" | "pnpm" | "yarn" | "bun";

export type RuntimeSelectorProps = {
  className?: string;
  commands: Record<Runtime, string>;
  defaultRuntime?: Runtime;
  title?: string;
};

export function RuntimeSelector({
  className,
  commands,
  defaultRuntime = "npm",
  title,
}: RuntimeSelectorProps) {
  const order: Runtime[] = ["npm", "pnpm", "yarn", "bun"];

  return (
    <div className={cn("bg-background w-full rounded-md border", className)}>
      {title && (
        <div className="border-b">
          <div className="text-sm font-medium">{title}</div>
        </div>
      )}
      <div className="p-3">
        <Tabs defaultValue={defaultRuntime}>
          <div className="flex items-center justify-between">
            <TabsList className="bg-muted">
              {order.map((r) => (
                <TabsTrigger key={r} value={r}>
                  {r}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {order.map((r) => (
            <TabsContent key={r} value={r}>
              <div className="relative">
                <div className="bg-muted/40 text-foreground rounded-md rounded-tl-none border p-3 font-mono text-sm">
                  <div className="overflow-x-auto whitespace-pre">
                    {commands[r]}
                  </div>
                </div>
                <div className="absolute top-1 right-2">
                  <CopyButton
                    value={commands[r]}
                    aria-label={`Copy ${r} command`}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default RuntimeSelector;
