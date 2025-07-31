import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  image1: string;
  image2: string;
  className?: string;
}

export const ServiceCard = ({
  title,
  image1,
  image2,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative h-40 w-[250px] rounded-2xl border-2 border-white bg-gradient-to-br from-neutral-100/50 to-neutral-200/50 p-6 shadow-sm transition-all duration-300 hover:shadow-xl",
        className,
      )}
    >
      {/* Images Container */}
      <div className="relative mb-4 flex h-22 items-center justify-center">
        {/* First Image */}
        <div className="absolute top-2 left-2 z-10 origin-bottom-left rotate-[-8deg] transform rounded-md shadow-2xl transition-transform duration-300 group-hover:rotate-[-16deg]">
          <div className="h-15 w-15 overflow-hidden rounded-md border-2 border-transparent shadow-xl">
            <img
              src={image1}
              alt={`${title} example 1`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="absolute top-6 left-10 z-20 origin-bottom-right rotate-[12deg] transform rounded-md shadow-2xl transition-transform duration-300 group-hover:rotate-[20deg]">
          <div className="h-15 w-15 overflow-hidden rounded-md border-2 border-transparent shadow-xl">
            <img
              src={image2}
              alt={`${title} example 2`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold tracking-normal text-neutral-700 dark:text-neutral-200">
        {title}
      </h3>
    </div>
  );
};
