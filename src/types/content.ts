/** Shared content types used across the files in `src/data/`. */

export type AccentColor =
  | "green"
  | "crimson"
  | "azure"
  | "pastelAzure"
  | "yellow";

/**
 * A photo referenced by data. `filename` points at `/public/images/<filename>`;
 * if that file doesn't exist yet the site renders a labelled placeholder in its
 * place, so photos can be dropped in later without touching any code.
 */
export interface Photo {
  filename: string;
  /** Human-readable description, used as the image's alt text. */
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "tiktok" | "facebook" | "winnie" | "linktree";
  /** CSS background value (solid color or gradient) for the badge — kept close to the platform's real brand color so the row reads instantly. */
  bg: string;
}
