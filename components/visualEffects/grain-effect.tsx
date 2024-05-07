import { cn } from "@/lib/utils";
import React from "react";

export default function grainEffect() {
  return (
    <div
      className={cn("fixed top-0 left-0 w-full h-full", "before-content-none")}
    ></div>
  );
}
