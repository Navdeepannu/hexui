"use client";

import { useEffect, useState } from "react";
import { createHighlighter, type Highlighter } from "shiki";

interface CodeBlockProps {
  code: string;
  language: string;
  theme?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  title?: string;
}

export function CodeBlock({
  code,
  language,
  theme = "github-dark",
  showLineNumbers = false,
  highlightLines = [],
  title,
}: CodeBlockProps) {
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const initHighlighter = async () => {
      const shiki = await createHighlighter({
        themes: ["github-dark", "github-light", "dracula", "monokai"],
        langs: [
          "typescript",
          "javascript",
          "tsx",
          "jsx",
          "json",
          "css",
          "html",
          "bash",
          "python",
          "sql",
          "yaml",
        ],
      });
      setHighlighter(shiki);
    };

    initHighlighter();
  }, []);

  useEffect(() => {
    if (!highlighter) return;

    try {
      const highlighted = highlighter.codeToHtml(code, {
        lang: language,
        theme: theme,
        transformers: [
          {
            line(node, line) {
              // Add line numbers
              if (showLineNumbers) {
                node.properties = {
                  ...node.properties,
                  "data-line": line,
                };
              }

              // Highlight specific lines
              if (highlightLines.includes(line)) {
                node.properties = {
                  ...node.properties,
                  style: "background-color: rgba(255, 255, 255, 0.1);",
                };
              }
            },
          },
        ],
      });
      setHtml(highlighted);
    } catch (error) {
      console.error("Error highlighting code:", error);
      setHtml(`<pre><code>${code}</code></pre>`);
    }
  }, [highlighter, code, language, theme, showLineNumbers, highlightLines]);

  if (!highlighter) {
    return (
      <div className="animate-pulse rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
        <div className="mb-2 h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="mb-2 h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700"></div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      {title && (
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-800">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {title}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {language}
          </span>
        </div>
      )}
      <div
        className={`overflow-x-auto ${showLineNumbers ? "shiki-line-numbers" : ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <style jsx>{`
        :global(.shiki-line-numbers .line::before) {
          content: attr(data-line);
          display: inline-block;
          width: 2rem;
          margin-right: 1rem;
          text-align: right;
          color: rgba(156, 163, 175, 0.6);
          user-select: none;
        }
        :global(.shiki) {
          padding: 1rem;
          margin: 0;
          border-radius: 0.5rem;
          overflow-x: auto;
        }
        :global(.shiki code) {
          font-family:
            "Fira Code", "Cascadia Code", "JetBrains Mono", monospace;
          font-size: 0.875rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

// Multiple code blocks demo component
export function ShikiDemo() {
  const [theme, setTheme] = useState<string>("github-dark");

  const codeExamples = [
    {
      title: "React Component",
      language: "tsx",
      code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.button
      className={\`px-4 py-2 rounded-lg \${
        variant === 'primary' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-800'
      }\`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {children}
    </motion.button>
  );
};`,
      highlightLines: [15, 16, 17, 18, 19],
    },
    {
      title: "Package.json",
      language: "json",
      code: `{
  "name": "nestui",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "next": "15.3.5",
    "shiki": "^1.0.0",
    "framer-motion": "^12.23.5"
  }
}`,
      highlightLines: [13, 14],
    },
    {
      title: "Terminal Commands",
      language: "bash",
      code: `# Install Shiki
npm install shiki

# Add component to your project
npx shadcn@latest add https://nestui.com/registry/blog-card.json

# Start development server
npm run dev

# Build for production
npm run build`,
      highlightLines: [5],
    },
    {
      title: "CSS Styles",
      language: "css",
      code: `.code-block {
  @apply rounded-lg border border-gray-200 bg-gray-50;
  @apply dark:border-gray-800 dark:bg-gray-900;
}

.shiki {
  padding: 1rem;
  margin: 0;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
}

.line {
  display: block;
  min-height: 1.5rem;
}

.line.highlighted {
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 -1rem;
  padding: 0 1rem;
}`,
      highlightLines: [16, 17, 18, 19, 20],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Shiki Syntax Highlighting Demo
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Beautiful syntax highlighting with themes and line highlighting
        </p>

        {/* Theme Selector */}
        <div className="mb-8 flex justify-center gap-2">
          {["github-dark", "github-light", "dracula", "monokai"].map(
            (themeName) => (
              <button
                key={themeName}
                onClick={() => setTheme(themeName)}
                className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                  theme === themeName
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {themeName}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Code Examples */}
      <div className="grid gap-6">
        {codeExamples.map((example, index) => (
          <CodeBlock
            key={index}
            code={example.code}
            language={example.language}
            theme={theme}
            title={example.title}
            showLineNumbers={true}
            highlightLines={example.highlightLines}
          />
        ))}
      </div>

      {/* Features List */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Shiki Features Demo
        </h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            Multiple themes (GitHub Dark, GitHub Light, Dracula, Monokai)
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            Line numbers with proper styling
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            Line highlighting for important code sections
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            Multiple language support (TypeScript, JSON, Bash, CSS, etc.)
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            Loading states with skeleton animation
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            Custom transformers for enhanced functionality
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            Responsive design with horizontal scrolling
          </li>
        </ul>
      </div>
    </div>
  );
}
