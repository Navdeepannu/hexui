import RuntimeSelector from "@/components/runtime-selector";
import type { ReactNode } from "react";

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
        <h1 className="text-foreground text-4xl font-bold tracking-tight">
          Install Next.js
        </h1>
        <p className="text-muted-foreground">
          Install Next.js with Create Next App
        </p>
      </header>

      {/* Timeline wrapper: draws a single vertical line going from 1 to 3 */}
      <div className="relative space-y-10">
        {/* The line is aligned to the center of the 2rem (w-8) left column */}
        <span
          aria-hidden
          className="bg-border absolute top-0 bottom-0 left-4 w-px"
        />

        <StepRow index={1} title="Create a new project">
          <RuntimeSelector
            title=""
            commands={{
              npm: "npx create-next-app@latest",
              pnpm: "pnpm create next-app",
              yarn: "yarn create next-app",
              bun: "bun create next-app",
            }}
          />
        </StepRow>

        <StepRow
          index={2}
          title="As you install, the following prompts will appear:"
        >
          <div className="bg-card rounded-md border p-4">
            <pre className="text-muted-foreground text-sm leading-6 whitespace-pre-wrap">{`What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use 'src/' directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*`}</pre>
          </div>
        </StepRow>

        <StepRow index={3} title="Start the development server">
          <RuntimeSelector
            commands={{
              npm: "cd my-app && npm run dev",
              pnpm: "cd my-app && pnpm dev",
              yarn: "cd my-app && yarn dev",
              bun: "cd my-app && bun dev",
            }}
          />
        </StepRow>
      </div>
    </div>
  );
}
