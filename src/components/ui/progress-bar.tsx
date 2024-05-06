import { cn } from "@/lib/utils";
import React from "react";

interface ProgressBarProps {
  p: number;
  parentClassName?: string;
  className?: string;
}

export const ProgressBar = ({
  p,
  parentClassName,
  className,
}: ProgressBarProps) => {
  return (
    <div className={cn("bg-gray-200 rounded-md h-4", parentClassName)}>
      <div
        className={cn("bg-blue-500 rounded-md h-full", className)}
        style={{ width: `${p}%` }}
      />
    </div>
  );
};
