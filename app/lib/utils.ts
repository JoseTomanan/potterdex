import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type React from "react";


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

export type HouseTokens = {
  color:  string;
  dim:    string;
  mid:    string;
  letter: string;
};

export const getHouseTokens = (house?: string | null): HouseTokens => {
  switch (house) {
    case 'Gryffindor': return { color: '#e8503a', dim: 'rgba(232,80,58,0.12)',   mid: 'rgba(232,80,58,0.22)',   letter: 'G' };
    case 'Slytherin':  return { color: '#1aad72', dim: 'rgba(26,173,114,0.11)',  mid: 'rgba(26,173,114,0.22)',  letter: 'S' };
    case 'Ravenclaw':  return { color: '#4a6ec8', dim: 'rgba(74,110,200,0.12)',  mid: 'rgba(74,110,200,0.22)',  letter: 'R' };
    case 'Hufflepuff': return { color: '#c9970e', dim: 'rgba(201,151,14,0.13)',  mid: 'rgba(201,151,14,0.22)',  letter: 'H' };
    default:           return { color: '#6a6460', dim: 'rgba(106,100,96,0.09)',  mid: 'rgba(106,100,96,0.18)',  letter: '?' };
  }
};

export const houseStyleVars = (h: HouseTokens): React.CSSProperties => ({
  '--house-color': h.color,
  '--house-bg':    h.dim,
  '--house-mid':   h.mid,
} as React.CSSProperties);

