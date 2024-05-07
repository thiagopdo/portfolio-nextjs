import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * this function is used to merge class names
 * clsx for concatenating class names together
 
 * @param inputs 
 * @returns the classes is combined with clsx and the passed to twMerge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
