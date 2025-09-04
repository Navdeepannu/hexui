import type { ReactNode } from "react";
import CodePreview from "@/components/ui/kibo-ui/code-preview";
import AiGlareLoader from "@/components/ui/loaders/ai-glare-loader";

const sourceTsx = `"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type AiGlareLoaderProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function AiGlareLoader({ className, label = "Thinking…", ...props }: AiGlareLoaderProps) {
  return (
    <div className={cn("relative isolate", className)} {...props}>
      {/* Card background */}
      <div className="bg-card/60 border text-foreground relative overflow-hidden rounded-lg p-4">
        {/* Glare sweep */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/2 left-0 h-[200%] w-24 -skew-x-12 bg-white/10 blur-md animate-[glare_2s_ease-in-out_infinite] dark:bg-white/10" />
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
  <style jsx>{\`
        @keyframes glare {
          0% { transform: translateX(-40%) rotate(0.001deg); opacity: 0; }
          10% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateX(160%) rotate(0.001deg); opacity: 0; }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: .7; }
          40% { transform: translateY(-30%); opacity: 1; }
        }
  \`}</style>
    </div>
  );
}
`;

const usageTsx = `import AiGlareLoader from "@/components/ui/loaders/ai-glare-loader";

export default function Example(){
  return (
    <div className="max-w-md">
      <AiGlareLoader label="Thinking…" />
    </div>
  )
}`;

const sourceJsx = `"use client";

import { cn } from "@/lib/utils";

export function AiGlareLoader({ className, label = "Thinking…", ...props }) {
  return (
    <div className={cn("relative isolate", className)} {...props}>
      {/* Card background */}
      <div className="bg-card/60 border text-foreground relative overflow-hidden rounded-lg p-4">
        {/* Glare sweep */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/2 left-0 h-[200%] w-24 -skew-x-12 bg-white/10 blur-md animate-[glare_2s_ease-in-out_infinite] dark:bg-white/10" />
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
      <style jsx>{\`
        @keyframes glare {
          0% { transform: translateX(-40%) rotate(0.001deg); opacity: 0; }
          10% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateX(160%) rotate(0.001deg); opacity: 0; }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: .7; }
          40% { transform: translateY(-30%); opacity: 1; }
        }
      \`}</style>
    </div>
  );
}
`;

const usageJsx = `import { AiGlareLoader } from "@/components/ui/loaders/ai-glare-loader";

export default function Example(){
  return (
    <div className="max-w-md">
      <AiGlareLoader label="Thinking…" />
    </div>
  )
}`;

export default function Page() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          AI Loader with Glare
        </h1>
        <p className="text-muted-foreground">
          A subtle thinking state with a sweeping glare and animated dots.
        </p>
      </header>

      <CodePreview
        title="AI Glare Loader"
        description="Preview, source, and usage of the loader component."
        initialTab="preview"
        codeHeight={420}
        preview={
          <div className="max-w-md">
            <AiGlareLoader label="Thinking…" />
          </div>
        }
        source={{
          defaultValue: "tsx",
          data: [
            {
              language: "tsx",
              filename: "ai-glare-loader.tsx",
              code: sourceTsx,
            },
            {
              language: "jsx",
              filename: "ai-glare-loader.jsx",
              code: sourceJsx,
            },
          ],
        }}
        code={{
          defaultValue: "tsx",
          data: [
            { language: "tsx", filename: "usage.tsx", code: usageTsx },
            { language: "jsx", filename: "usage.jsx", code: usageJsx },
          ],
        }}
      />

      <section className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>When to use</h2>
        <ul>
          <li>While generating AI responses or running long inference.</li>
          <li>
            During background tasks that need a calm, unobtrusive indicator.
          </li>
        </ul>
        <h2>Accessibility</h2>
        <ul>
          <li>Include a live region if you update status text dynamically.</li>
          <li>Keep motion subtle and respect user preferences if needed.</li>
        </ul>
        <h2>Customization</h2>
        <ul>
          <li>
            Change the label via the <code>label</code> prop.
          </li>
          <li>Adjust glare speed by changing the animation duration.</li>
          <li>Tweak dot sizes/delays for different rhythms.</li>
        </ul>
      </section>
    </div>
  );
}
