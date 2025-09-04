"use client";
import type { ReactNode } from "react";
import RuntimeSelector from "@/components/runtime-selector";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockData,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/ui/kibo-ui/code-block";
import type { BundledLanguage } from "shiki";

type StepRowProps = {
  index: number;
  title: string;
  children: ReactNode;
};

function StepRow({ index, title, children }: StepRowProps) {
  return (
    <div className="grid grid-cols-[2rem_1fr] items-start gap-4">
      {/* Left: step circle (the continuous line is drawn by the parent wrapper) */}
      <div className="flex w-8 justify-center">
        <span className="bg-background text-foreground z-10 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium">
          {index}
        </span>
      </div>

      {/* Right: content */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Install Tailwind CSS (v4)
        </h1>
        <p className="text-muted-foreground">
          Add Tailwind CSS v4 to your Next.js project
        </p>
      </header>

      {/* Timeline wrapper: single vertical line from step 1 to 4 */}
      <div className="relative space-y-10">
        <span
          aria-hidden
          className="bg-border absolute top-0 bottom-0 left-4 w-px"
        />

        {/* 1. Create a new project */}
        <StepRow index={1} title="Create a new project">
          <RuntimeSelector
            title=""
            commands={{
              npm: "npx create-next-app@latest my-app --typescript --eslint && cd my-app",
              pnpm: "pnpm create next-app my-app --typescript --eslint && cd my-app",
              yarn: "yarn create next-app my-app --typescript --eslint && cd my-app",
              bun: "bun create next-app my-app --typescript --eslint && cd my-app",
            }}
          />
        </StepRow>

        {/* 2. Install Tailwind CSS v4 */}
        <StepRow index={2} title="Install Tailwind CSS v4">
          <RuntimeSelector
            commands={{
              npm: "npm install -D tailwindcss @tailwindcss/postcss && npx tailwindcss init -p",
              pnpm: "pnpm add -D tailwindcss @tailwindcss/postcss && pnpm dlx tailwindcss init -p",
              yarn: "yarn add -D tailwindcss @tailwindcss/postcss && yarn dlx tailwindcss init -p",
              bun: "bun add -d tailwindcss @tailwindcss/postcss && bunx tailwindcss init -p",
            }}
          />
        </StepRow>

        {/* 3. Configure your template paths */}
        <StepRow index={3} title="Configure your template paths">
          <CodeBlock
            defaultValue="ts"
            data={[
              {
                language: "ts",
                filename: "tailwind.config.ts",
                code: `import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
`,
              } satisfies CodeBlockData,
            ]}
          >
            <CodeBlockHeader>
              <CodeBlockFilename value="ts">
                tailwind.config.ts
              </CodeBlockFilename>
            </CodeBlockHeader>
            <CodeBlockBody
              childrenAction={({ language, code }: CodeBlockData) => (
                <CodeBlockItem key={language} value={language}>
                  <CodeBlockContent language={language as BundledLanguage}>
                    {code}
                  </CodeBlockContent>
                </CodeBlockItem>
              )}
            />
          </CodeBlock>
        </StepRow>

        {/* 4. Add the Tailwind directives to your CSS */}
        <StepRow index={4} title="Add the Tailwind directives to your CSS">
          <CodeBlock
            defaultValue="css"
            data={[
              {
                language: "css",
                filename: "app/globals.css",
                code: `@import "tailwindcss";

/* Optional: keep layer access if you need to add custom styles */
/* @tailwind base; */
/* @tailwind components; */
/* @tailwind utilities; */
`,
              } satisfies CodeBlockData,
            ]}
          >
            <CodeBlockHeader>
              <CodeBlockFilename value="css">app/globals.css</CodeBlockFilename>
            </CodeBlockHeader>
            <CodeBlockBody
              childrenAction={({ language, code }: CodeBlockData) => (
                <CodeBlockItem key={language} value={language}>
                  <CodeBlockContent language={language as BundledLanguage}>
                    {code}
                  </CodeBlockContent>
                </CodeBlockItem>
              )}
            />
          </CodeBlock>
        </StepRow>
      </div>
    </div>
  );
}
