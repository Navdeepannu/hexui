"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeBlock } from "./ShikiDemo";

export function SyntaxHighlighterComparison() {
  const [library, setLibrary] = useState<"shiki" | "react-syntax-highlighter">(
    "shiki",
  );
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const sampleCode = `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  title: string;
  description: string;
  onHover?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  onHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered && onHover) {
      onHover();
    }
  }, [isHovered, onHover]);

  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        z: 50 
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};`;

  const performanceMetrics = [
    {
      library: "Shiki",
      bundleSize: "~150KB (with themes)",
      loadTime: "~200ms (async)",
      themes: "50+ built-in themes",
      languages: "200+ languages",
      treeshaking: "✓ Excellent",
      ssr: "✓ Full support",
      customization: "✓ High",
    },
    {
      library: "react-syntax-highlighter",
      bundleSize: "~400KB+ (all styles)",
      loadTime: "Immediate (sync)",
      themes: "20+ styles",
      languages: "180+ languages",
      treeshaking: "⚠️ Limited",
      ssr: "✓ Good support",
      customization: "⚠️ Medium",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Syntax Highlighting Comparison
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Compare Shiki vs react-syntax-highlighter side by side
        </p>
      </div>

      {/* Controls */}
      <div className="mb-8 flex justify-center gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setLibrary("shiki")}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              library === "shiki"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            Shiki
          </button>
          <button
            onClick={() => setLibrary("react-syntax-highlighter")}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              library === "react-syntax-highlighter"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            react-syntax-highlighter
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setTheme("dark")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Dark
          </button>
          <button
            onClick={() => setTheme("light")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              theme === "light"
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Light
          </button>
        </div>
      </div>

      {/* Code Display */}
      <div className="grid gap-6">
        {library === "shiki" ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Shiki Implementation
              </h2>
            </div>
            <CodeBlock
              code={sampleCode}
              language="tsx"
              theme={theme === "dark" ? "github-dark" : "github-light"}
              title="AnimatedCard.tsx"
              showLineNumbers={true}
              highlightLines={[23, 24, 25, 26, 27]}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                react-syntax-highlighter Implementation
              </h2>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-800">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  AnimatedCard.tsx
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  tsx
                </span>
              </div>
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? vscDarkPlus : oneLight}
                showLineNumbers={true}
                wrapLines={true}
                lineProps={(lineNumber) => ({
                  style: {
                    backgroundColor: [23, 24, 25, 26, 27].includes(lineNumber)
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                  },
                })}
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
              >
                {sampleCode}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>

      {/* Performance Comparison Table */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          Performance Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-medium text-blue-600">
                  Shiki
                </th>
                <th className="px-4 py-3 text-left font-medium text-green-600">
                  react-syntax-highlighter
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(performanceMetrics[0])
                .filter((key) => key !== "library")
                .map((feature, index) => (
                  <tr
                    key={feature}
                    className={`border-b border-gray-100 dark:border-gray-700 ${
                      index % 2 === 0 ? "dark:bg-gray-750 bg-gray-50" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 capitalize dark:text-white">
                      {feature.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                      {
                        performanceMetrics[0][
                          feature as keyof (typeof performanceMetrics)[0]
                        ]
                      }
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                      {
                        performanceMetrics[1][
                          feature as keyof (typeof performanceMetrics)[1]
                        ]
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Differences */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
          <h3 className="mb-4 text-lg font-semibold text-blue-900 dark:text-blue-100">
            🚀 Shiki Advantages
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-blue-500">•</span>
              <span>TextMate grammars (same as VS Code)</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-blue-500">•</span>
              <span>Better tree-shaking and bundle optimization</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-blue-500">•</span>
              <span>More accurate syntax highlighting</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-blue-500">•</span>
              <span>Modern async loading pattern</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-blue-500">•</span>
              <span>Extensive theme collection (50+)</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
          <h3 className="mb-4 text-lg font-semibold text-green-900 dark:text-green-100">
            ⚡ react-syntax-highlighter Advantages
          </h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-green-500">•</span>
              <span>Immediate synchronous rendering</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-green-500">•</span>
              <span>No async setup required</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-green-500">•</span>
              <span>Mature library with extensive documentation</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-green-500">•</span>
              <span>Prism.js and highlight.js support</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-green-500">•</span>
              <span>Simple API for basic use cases</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
