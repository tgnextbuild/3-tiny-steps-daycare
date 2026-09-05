import type { AccentColor } from "@/types/content";

/**
 * Centralized Tailwind class lookup per accent color. Tailwind's compiler
 * needs literal class strings to detect them, so accent classes are always
 * resolved through this map rather than built with template strings like
 * `bg-${accent}`.
 */
export const accentClasses: Record<
  AccentColor,
  {
    text: string;
    bgSolid: string;
    bgTint: string;
    border: string;
  }
> = {
  green: {
    text: "text-green-dark",
    bgSolid: "bg-green",
    bgTint: "bg-green-tint",
    border: "border-green",
  },
  crimson: {
    text: "text-pastel-red",
    bgSolid: "bg-crimson",
    bgTint: "bg-crimson-tint",
    border: "border-crimson",
  },
  azure: {
    text: "text-azure",
    bgSolid: "bg-azure",
    bgTint: "bg-azure-tint",
    border: "border-azure",
  },
  pastelAzure: {
    text: "text-azure",
    bgSolid: "bg-pastel-azure",
    bgTint: "bg-pastel-azure-tint",
    border: "border-pastel-azure",
  },
  yellow: {
    text: "text-amber-700",
    bgSolid: "bg-light-yellow",
    bgTint: "bg-light-yellow/40",
    border: "border-light-yellow",
  },
};

/**
 * The "lift on hover" treatment for a tinted, clickable card — was
 * hand-typed identically in three unrelated components (QuickAccessCards,
 * LookingBack, ResourceCardGrid). Append to a card's own layout classes
 * rather than retyping this.
 */
export const cardHoverLiftClasses =
  "transition-transform duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(43,36,32,0.35)]";

/**
 * Icon text color per accent, plus "violet" — a fifth, genuinely distinct hue
 * for places that need more variety than the 4 icon-text colors the accent
 * palette provides (azure and pastelAzure share one). Derived from
 * `accentClasses` so the two can never drift apart.
 */
export const iconTextColor: Record<AccentColor | "violet", string> = {
  green: accentClasses.green.text,
  crimson: accentClasses.crimson.text,
  azure: accentClasses.azure.text,
  pastelAzure: accentClasses.pastelAzure.text,
  yellow: accentClasses.yellow.text,
  violet: "text-violet-500",
};
