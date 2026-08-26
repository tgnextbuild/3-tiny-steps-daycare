import { findGalleryPhoto } from "@/data/gallery";
import type { AccentColor, Photo } from "@/types/content";

/* ==================================================================== *
 * BLOG / MONTHLY RECAPS
 * ==================================================================== *
 *
 * Recap photos themselves live in `gallery.ts`, not here — a recap just
 * names which photos it wants, by filename. See `gallery.ts` for how to
 * add a photo; come back here once it's added to actually use it.
 *
 * HOW TO POST A NEW MONTHLY RECAP (no coding needed)
 *
 * 1. In `gallery.ts`, add every photo this recap will use (if they aren't
 *    already there) — see the instructions at the top of that file.
 * 2. In the `blogPosts` list at the bottom of this file, copy the WHOLE
 *    first `{ ... },` block and paste it ABOVE the existing one.
 *    The newest recap is always the FIRST one in the list — that is the
 *    one shown at the top of the Blog page.
 * 3. Edit the pasted copy: month, title, description, learning focus, and
 *    set `image`/`gallery` to the filenames of the photos you added in
 *    step 1 (must match exactly, including the `gallery/` part).
 *
 * While a recap is recent, it shows on the Blog page — as the featured
 * recap, then as one of the 3 "Looking Back" cards. You do NOT need to
 * delete old blocks for the site to keep working — the Blog page only
 * ever shows the newest 4, no matter how many blocks pile up here.
 *
 * Deleting a block only removes that recap's WRITE-UP from the Blog page.
 * Its photos are NOT deleted — they live in `gallery.ts` and keep showing
 * there regardless of what happens here. To actually remove a photo, delete
 * it from `gallery.ts` instead (see that file for the reminder to also
 * clean up any reference to it here, if one still points at it).
 *
 * Anything in "quotes" is text you can change freely. Each recap's panel
 * color is picked automatically (see `recapAccentRotation` near the bottom
 * of this file) — there's nothing to choose here.
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

export interface BlogPost {
  /** Short unique id, e.g. "july-2026". Used internally; keep it simple. */
  id: string;
  /** Shown on the little date ribbon, e.g. "July 2026". */
  month: string;
  /** First line of the recap title, e.g. "Inside Our Classroom:". */
  title: string;
  /** Second line of the title, e.g. "July Recap". */
  subtitle: string;
  /** The recap write-up. */
  description: string;
  /** Filename of this recap's main photo — must match an entry in `gallery.ts`. */
  image: string;
  /** Filenames of the photos in the Classroom Gallery strip — must match entries in `gallery.ts`. */
  gallery: string[];
  /** The themes this month focused on — shown as pills. */
  focus: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "july-2026",
    month: "July 2026",
    title: "Inside Our Classroom:",
    subtitle: "July Recap",
    description:
      "We kicked off the World Cup Final in style! Our classroom was filled with colorful jerseys, team spirit, and plenty of excitement as we celebrated cultures from around the world while learning the importance of teamwork and having fun together!",
    image: "gallery/recap-july-2026.jpg",
    gallery: [
      "gallery/recap-july-2026-1.jpg",
      "gallery/recap-july-2026-2.jpg",
      "gallery/recap-july-2026-3.jpg",
      "gallery/recap-july-2026-4.jpg",
      "gallery/recap-july-2026-5.jpg",
    ],
    focus: [
      "Outdoors and Nature",
      "Friendships & Kindness",
      "Colors & Creativity",
      "Movement and Music",
    ],
  },
  {
    id: "june-2026",
    month: "June 2026",
    title: "Inside Our Classroom:",
    subtitle: "June Recap",
    description:
      "June was all about summer sunshine and sensory play. We planted seeds in our garden beds, made hand-print art, and spent long mornings outside discovering bugs, leaves, and puddles together.",
    image: "gallery/recap-june-2026.jpg",
    gallery: [
      "gallery/recap-june-2026-1.jpg",
      "gallery/recap-june-2026-2.jpg",
      "gallery/recap-june-2026-3.jpg",
    ],
    focus: ["Gardening & Growing", "Sensory Play", "Sharing & Turn-Taking", "Summer Songs"],
  },
  {
    id: "may-2026",
    month: "May 2026",
    title: "Inside Our Classroom:",
    subtitle: "May Recap",
    description:
      "Placeholder recap — replace with what actually happened in May. Describe the month's activities, any special events, and what made it memorable for the children.",
    image: "gallery/recap-may-2026.jpg",
    gallery: ["gallery/recap-may-2026-1.jpg", "gallery/recap-may-2026-2.jpg"],
    focus: ["Placeholder Theme One", "Placeholder Theme Two"],
  },
  {
    id: "april-2026",
    month: "April 2026",
    title: "Inside Our Classroom:",
    subtitle: "April Recap",
    description:
      "Placeholder recap — replace with what actually happened in April. Describe the month's activities, any special events, and what made it memorable for the children.",
    image: "gallery/recap-april-2026.jpg",
    gallery: ["gallery/recap-april-2026-1.jpg", "gallery/recap-april-2026-2.jpg"],
    focus: ["Placeholder Theme One", "Placeholder Theme Two"],
  },
];

/* -------------------------------------------------------------------- *
 * Nothing below this line needs editing.
 * -------------------------------------------------------------------- */

/**
 * Panel colors for the featured recap and the Looking Back cards, cycled
 * through in this order automatically — whoever edits `blogPosts` above
 * never has to pick a color. Five colors means five recaps in a row never
 * repeat the same one.
 */
const recapAccentRotation: AccentColor[] = [
  "pastelAzure",
  "crimson",
  "green",
  "yellow",
  "azure",
];

/** A recap ready to render: photos resolved from `gallery.ts`, plus its automatically-assigned panel color. */
export interface AccentedBlogPost {
  id: string;
  month: string;
  title: string;
  subtitle: string;
  description: string;
  image: Photo;
  gallery: Photo[];
  focus: string[];
  accent: AccentColor;
}

const accentedPosts: AccentedBlogPost[] = blogPosts.map((post, i) => ({
  id: post.id,
  month: post.month,
  title: post.title,
  subtitle: post.subtitle,
  description: post.description,
  image: findGalleryPhoto(post.image),
  gallery: post.gallery.map(findGalleryPhoto),
  focus: post.focus,
  accent: recapAccentRotation[i % recapAccentRotation.length],
}));

/** The recap shown at the top of the Blog page (the newest one). */
export const currentPost: AccentedBlogPost | undefined = accentedPosts[0];

/** Older recaps, shown in the "Looking Back" row — capped at 3 cards. */
export const previousPosts: AccentedBlogPost[] = accentedPosts.slice(1, 4);
