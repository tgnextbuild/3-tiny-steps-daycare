import { Fredoka, Blinker } from "next/font/google";

/**
 * Heading / navigation / button typeface.
 * Spec calls for "Bubblebody Neue" (a licensed rounded display face we don't
 * have access to) — Fredoka is the closest freely-licensed match: a rounded,
 * friendly geometric face with the same chunky, kid-approachable feel.
 */
export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

/** Body copy typeface, matches spec exactly. */
export const blinker = Blinker({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
