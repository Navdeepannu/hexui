"use client";
import React from "react";
import { motion } from "motion/react";

type HexLogoProps = {
  size?: number;
  className?: string;
};

export const HexLogo = ({ size = 24, className }: HexLogoProps) => {
  const paths = [
    // Left hex
    "M4 18v-5l4 -2l4 2v5l-4 2z",
    // Middle-top connection
    "M8 11v-5l4 -2l4 2v5",
    // Right hex
    "M12 13l4 -2l4 2v5l-4 2l-4 -2",
  ];

  const delays = [0, 0.15, 0.3];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          pathLength={1}
          initial={{ pathLength: 0, opacity: 1 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delays[i], ease: "easeInOut" }}
        />
      ))}
    </motion.svg>
  );
};
