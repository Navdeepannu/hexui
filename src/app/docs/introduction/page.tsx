export default function Page() {
  return (
    <div className="prose">
      <h1>Introduction</h1>
      <p>
        Hex UI is a modern <code>react</code> component library designed to help
        developers build beautiful, responsive interfaces with minimal effort.
        Our components are built with <code>typescript</code>,
        <code>tailwincss</code>, and follow modern design principles.
      </p>
      {/* Callout */}
      <div>
        <p>
          This is a test of the scrolling behavior. When you scroll in the
          sidebar, only the sidebar should scroll, and the main content should
          remain in place. Similarly, when you scroll in the main content area,
          only this content should move while the sidebar stays fixed.
        </p>
      </div>

      {/* Features */}
      <h3>Features</h3>
      <ul>
        <li>Modern React components with TypeScript support</li>
        <li>Built with Tailwind CSS for easy customization</li>
        <li>Responsive design out of the box</li>
        <li>Accessible components following WCAG guidelines</li>
        <li>Easy to integrate with existing projects</li>
      </ul>

      <pre>
        <code>
          Looking for more? Explore the rest of the docs to get set up quickly
          and start shipping polished UIs.
        </code>
      </pre>
    </div>
  );
}
