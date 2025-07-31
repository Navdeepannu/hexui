"use client";
import React from "react";
import { ComponentLayout } from "@/components/docsLayout/ComponentLayout";
import { BlogCard } from "@/components/ui/showcase/card";
import { ServiceCard } from "@/components/ui/showcase/service-card";

const cardComponentCode = `"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconShare3 } from "@tabler/icons-react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-200/50 bg-white dark:border-neutral-800/50 dark:bg-neutral-900",
        "shadow-lg shadow-neutral-900/5 transition-shadow duration-300 ease-out hover:shadow-xl dark:shadow-red-500",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BlogCard = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  articleLink,
}: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  articleLink?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-2xl bg-neutral-50 dark:bg-neutral-800">
        <div className="relative flex h-auto flex-col sm:h-96 sm:flex-row">
          {/* Left Image Section */}
          <motion.div
            className="relative h-48 w-full overflow-hidden sm:h-full sm:w-1/3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full rounded-t-xl object-cover sm:rounded-t-none sm:rounded-l-xl"
              style={{ minWidth: "200px" }}
            />
          </motion.div>

          {/* Right Content Section */}
          <div className="flex w-full flex-col justify-between p-6 sm:w-2/3 sm:p-10">
            {/* Date and Read Time */}
            <div className="mb-3 text-xs font-medium tracking-wider text-neutral-500 uppercase sm:mb-4 dark:text-neutral-400">
              {date} • {readTime}
            </div>

            {/* Title and Excerpt */}
            <div className="flex-1">
              <motion.h3
                className="mb-4 text-2xl leading-tight font-bold tracking-tight text-neutral-900 sm:mb-6 sm:text-4xl dark:text-neutral-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {title}
              </motion.h3>

              <motion.div
                className="text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {excerpt && excerpt.length > 0 && (
                  <>
                    <span className="text-2xl font-semibold tracking-wide text-neutral-900 sm:text-3xl dark:text-neutral-100">
                      {excerpt.charAt(0)}
                    </span>
                    <span className="text-sm">
                      {excerpt.slice(1).split(" ").slice(0, 29).join(" ")}
                      {excerpt.split(" ").length > 30 ? "..." : ""}
                    </span>
                  </>
                )}
              </motion.div>
            </div>

            {/* Author and Continue Reading */}
            <motion.div
              className="mt-6 border-t border-neutral-200 pt-4 sm:mt-10 sm:pt-6 dark:border-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                  By {author}
                </div>

                <motion.a
                  href={articleLink || "#"}
                  target={articleLink ? "_blank" : "_self"}
                  rel={articleLink ? "noopener noreferrer" : undefined}
                  className="flex cursor-pointer items-center space-x-2 text-xs font-medium tracking-wider text-neutral-500 uppercase transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Continue Reading</span>
                  <motion.svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Share Icon */}
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <motion.button
              className="cursor-pointer rounded-full bg-white/80 p-2 backdrop-blur-sm transition-transform hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-700"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <IconShare3 className="h-4 w-4 text-neutral-400 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export { Card, BlogCard };
`;

const cardDemo = `import { BlogCard } from "@/components/ui/card";

export function CardDemo() {
  return (
     <BlogCard
          title="Minimalism"
          excerpt="Minimalism isn't about what is there — it's about what's not.”
Every removed icon, line, or word can bring clarity."
          author="Navdeep Singh"
          date="Jul 25"
          readTime="2 min read"
          image="https://images.unsplash.com/photo-1546471180-335a013cb87b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          articleLink="https://medium.com/@navdeepsingh0/minimalism-in-ui-ux-design-less-but-better-76d43c1d76ef"
        />
  );
}`;

export default function Page() {
  return (
    <ComponentLayout
      title="Service Card"
      description="Minimalist Service Card components."
      preview={
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-11 text-2xl font-bold tracking-tight md:text-4xl">
            How can I help?
          </h1>
          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
            <ServiceCard
              title="Web Development"
              image1="https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwYnJhbmRpbmd8ZW58MHx8MHx8fDA%3D"
              image2="https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-3xl"
            />
            <ServiceCard
              title="Creative Design"
              image1="https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwYnJhbmRpbmd8ZW58MHx8MHx8fDA%3D"
              image2="https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-xl"
            />
            <ServiceCard
              title="Branding"
              image1="https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwYnJhbmRpbmd8ZW58MHx8MHx8fDA%3D"
              image2="https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-2xl"
            />
            <ServiceCard
              title="Product Design"
              image1="https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwYnJhbmRpbmd8ZW58MHx8MHx8fDA%3D"
              image2="https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-lg"
            />
          </div>
        </div>
      }
      code={cardDemo}
      installation={{
        packages: ["motion", "clsx", "tailwind-merge", "@tabler/icons-react"],
        files: [
          {
            name: "components/ui/blog-card.tsx",
            content: cardComponentCode,
            language: "tsx",
          },
        ],
      }}
      props={[
        {
          name: "title",
          type: "string",
          description: "The title of the blog post",
        },
        {
          name: "excerpt",
          type: "string",
          description: "The excerpt or preview text of the blog post",
        },
        {
          name: "author",
          type: "string",
          description: "The author name of the blog post",
        },
        {
          name: "date",
          type: "string",
          description: "The publication date",
        },
        {
          name: "readTime",
          type: "string",
          description: "Estimated reading time",
        },
        {
          name: "image",
          type: "string",
          description: "URL of the blog post image",
        },
        {
          name: "articleLink",
          type: "string",
          description: "URL to the full article (opens in new tab)",
        },
      ]}
      nextComponent={{
        name: "Button",
        href: "/components/button",
      }}
    />
  );
}
