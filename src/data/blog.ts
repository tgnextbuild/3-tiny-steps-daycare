import type { Photo } from "@/types/content";

/* ==================================================================== *
 * BLOG page — static copy around the recaps (hero, section headings,
 * "Looking Back" labels). The recaps themselves are NOT in this file
 * anymore — see `blog-posts.ts`.
 *
 * Why the split: this file is safe for both server AND client components
 * to import (no page currently needs that for these exports, but keeping
 * it that way is what makes the split correct) — `blog-posts.ts` reads
 * Markdown files from disk at build time, which only works in server-side
 * code. If this file ever imported `blog-posts.ts`, any client component
 * that imports so much as one export from here (like `LookingBack.tsx`
 * does for `lookingBack`) would pull that disk-reading code into the
 * browser bundle and fail to build. Keep this file free of imports from
 * `blog-posts.ts` for that reason.
 * ==================================================================== */

/** Page header at the top of /blog. */
export const blogHero = {
  heading: "The Tiny Steps Timeline",
  body: "Take a look back at our month filled with learning, laughter and memories at every step!",
  image: {
    filename: "blog-hero.jpg",
    label: "Children playing outside at 3 Tiny Steps",
  } as Photo,
};

/** Headings for the sections below the recap. Edit the wording freely. */
export const classroomGalleryHeading = "Classroom Gallery";
export const classroomGalleryCtaLabel = "View our Gallery";

export const learningFocus = {
  headingPrefix: "What We Focused on",
  headingAccent: "This Month",
  body: "Our activities were planned around fun, meaningful themes that support your child's growth",
};

export const lookingBack = {
  heading: "Looking Back",
  subheading: "Every month is filled with new adventures",
  ctaLabel: "View Recap",
};
