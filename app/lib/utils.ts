import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dashIfNone = (val?: string | string[] | number) => (val ? val : `–`);

export const joinWithMiddot = (l: any[]) => l.filter(i => i !== null).join(" · ");
