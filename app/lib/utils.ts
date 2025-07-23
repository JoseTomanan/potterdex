import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dashIfNone = (val?: string | string[] | number) => (val ? val : `–`);

export const joinWithMiddot = (l: any[]) => l.filter(i => i !== null).join(" · ");

export const getHouseRelatedStyle = (house: String) => (
      house == "Gryffindor"
        ? "text-chart-2 text-shadow-chart-2"
        : house == "Slytherin"
          ? "text-chart-4 text-shadow-chart-4"
          : house == "Ravenclaw"
            ? "text-chart-1 text-shadow-chart-1"
            : house == "Hufflepuff"
              ? "text-chart-3 text-shadow-chart-3"
              : "text-muted-foreground text-shadow-muted-foreground font-light"
  );

