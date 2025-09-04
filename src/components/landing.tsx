"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const Landing = () => {
  const logos = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/shadcn-ui-icon.svg",
      alt: "ShadCN UI",
      className: "size-10",
      bgColor: "bg-card dark:bg-neutral-100/90",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/tailwind-icon.svg",
      alt: "Tailwind CSS",
      className: "size-10",
      bgColor: "bg-card dark:bg-neutral-700/40",
    },
    {
      component: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1103 386"
          width="1em"
          height="1em"
          className="h-8 w-8"
        >
          <path
            fill="currentColor"
            d="M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z"
          ></path>
        </svg>
      ),
      alt: "Bun",
      bgColor: "bg-[#fef62a] dark:bg-[#fef62a]",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/react-icon.svg",
      alt: "React",
      className: "size-10",
      bgColor: "bg-card dark:bg-neutral-700/40",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/nextjs-icon.svg",
      alt: "Next.js",
      className: "size-10",
      bgColor: "bg-card dark:bg-neutral-100/90",
    },
  ];

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center">
      {/* Sportlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        className="pointer-events-none absolute top-0 left-0 z-40 h-screen w-screen overflow-hidden"
      >
        {/* Main spotlight beam */}
        <div
          style={{
            transform: "rotate(-45deg) translate(-40%, -30%)",
            transformOrigin: "top left",
            width: "800px",
            height: "2200px",
            background:
              "radial-gradient(60% 40% at 50% 30%, hsla(180, 45%, 75%, .25) 0%, hsla(140, 35%, 65%, .18) 40%, hsla(120, 25%, 60%, .08) 70%, transparent 100%)",
          }}
          className="absolute top-0 left-0"
        ></div>

        {/* Secondary spotlight beam */}
        <div
          style={{
            position: "absolute",
            borderRadius: "30px",
            transform: "rotate(-45deg) translate(10%, -15%)",
            transformOrigin: "top left",
            top: "0",
            left: "0",
            width: "600px",
            height: "2000px",
            background:
              "radial-gradient(55% 35% at 45% 25%, hsla(200, 40%, 70%, .2) 0%, hsla(160, 30%, 60%, .12) 50%, hsla(140, 20%, 55%, .06) 80%, transparent 100%)",
          }}
          className="absolute top-0 left-0"
        ></div>

        {/* Accent spotlight for larger screens */}
        <div
          style={{
            position: "absolute",
            borderRadius: "40px",
            transform: "rotate(-45deg) translate(-20%, -10%)",
            transformOrigin: "top left",
            top: "0",
            left: "0",
            width: "400px",
            height: "1800px",
            background:
              "radial-gradient(45% 30% at 60% 20%, hsla(190, 35%, 80%, .15) 0%, hsla(150, 25%, 65%, .08) 60%, transparent 100%)",
          }}
          className="absolute top-0 left-0 hidden lg:block"
        ></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl">
        {/* Main heading animation */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto items-center bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-800 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent [text-shadow:0px_2px_4px_rgba(0,0,0,0.15)] md:text-4xl lg:max-w-4xl lg:text-7xl lg:[text-shadow:0px_3px_6px_rgba(0,0,0,0.2)] dark:from-neutral-100 dark:via-neutral-200/90 dark:to-neutral-300/90 dark:[text-shadow:0px_2px_4px_rgba(255,255,255,0.15)] lg:dark:[text-shadow:0px_3px_6px_rgba(255,255,255,0.2)]"
        >
          Beautiful components for{" "}
          <span className="bg-gradient-to-b from-teal-500 via-emerald-500 to-[#62c08f] to-99% bg-clip-text text-transparent">
            Modern{" "}
          </span>
          <span>Websites</span>
        </motion.h1>

        {/* Description animation */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-xl leading-normal tracking-tight [text-shadow:0px_1px_3px_rgba(0,0,0,0.1)] lg:[text-shadow:0px_2px_4px_rgba(0,0,0,0.12)] dark:[text-shadow:0px_1px_3px_rgba(255,255,255,0.1)] lg:dark:[text-shadow:0px_2px_4px_rgba(255,255,255,0.12)]"
        >
          Collection of copy-and-paste components built with React, TypeScript,
          and Tailwind CSS. Create stunning UI with our carefully crafted
          components and templates.
        </motion.p>

        {/* Buttons animation */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-2 text-base text-zinc-700 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] transition-transform duration-150 hover:bg-white hover:opacity-80 hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none dark:text-white"
            >
              <a href="/docs">Documentation</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Button
              size="lg"
              variant="default"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#464d55] to-[#25292e] px-6 py-2 text-base text-white shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] transition duration-150 hover:opacity-90 hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none"
            >
              <a href="/components">Browse Components</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Logo animation */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-4 lg:gap-10">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 6,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`${logo.bgColor} group flex cursor-pointer items-center justify-center rounded-2xl p-2 shadow-md transition-shadow duration-300 hover:shadow-lg`}
          >
            <div className="ransition-transform">
              {logo.component ? (
                logo.component
              ) : (
                <img src={logo.src} alt={logo.alt} className={logo.className} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
