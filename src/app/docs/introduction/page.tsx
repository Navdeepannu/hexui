export default function Page() {
  return (
    <article className="text-foreground mx-auto max-w-5xl px-4 md:px-6">
      {/* Header */}
      <header className="mb-10 md:mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Welcome to Hex UI
        </h1>
        <p className="text-muted-foreground mt-4 text-base leading-relaxed md:text-lg">
          Build beautiful, responsive interfaces faster with a modern React
          component library powered by TypeScript and Tailwind CSS.
        </p>
      </header>

      <div className="border-border my-8 border-t" />

      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Introduction
        </h2>
        <p className="text-base leading-relaxed md:text-lg">
          Hex UI is a modern React component library designed to help developers
          build beautiful, responsive interfaces with minimal effort. Our
          components are built with TypeScript, Tailwind CSS, and follow modern
          design principles.
        </p>

        {/* Callout */}
        <div className="border-border rounded-lg border p-4 md:p-5">
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            This is a test of the scrolling behavior. When you scroll in the
            sidebar, only the sidebar should scroll, and the main content should
            remain in place. Similarly, when you scroll in the main content
            area, only this content should move while the sidebar stays fixed.
          </p>
        </div>
      </section>

      <div className="border-border my-10 border-t" />

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Features
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-base md:text-lg">
          <li>Modern React components with TypeScript support</li>
          <li>Built with Tailwind CSS for easy customization</li>
          <li>Responsive design out of the box</li>
          <li>Accessible components following WCAG guidelines</li>
          <li>Easy to integrate with existing projects</li>
        </ul>
      </section>

      <footer className="border-border text-muted-foreground mt-12 border-t pt-6 text-sm md:mt-16">
        <p>
          Looking for more? Explore the rest of the docs to get set up quickly
          and start shipping polished UIs.
        </p>
      </footer>
    </article>
  );
}
