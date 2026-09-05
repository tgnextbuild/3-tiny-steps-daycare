import { findGalleryPhoto } from "@/data/gallery";
import { readContentCollection } from "@/lib/content";
import type { AccentColor, Photo } from "@/types/content";

/* ==================================================================== *
 * MONTHLY RECAPS — the part of the Blog page that changes every month.
 * ==================================================================== *
 *
 * Recaps are managed at `/admin` (Decap CMS), not by hand-editing this
 * file — each recap is one Markdown file under `content/blog/`, and this
 * file just reads whatever's there at build time and resolves its photos
 * against `gallery.ts`. There's nothing here to edit directly anymore.
 *
 * This file uses `fs` (via `readContentCollection`) to read those Markdown
 * files, which only works in server-side code — so it's kept deliberately
 * separate from `blog.ts` (the static page copy), which a client component
 * does import. See the comment at the top of `blog.ts` before merging
 * these back together.
 * ==================================================================== */

/**
 * The raw shape of one `content/blog/*.md` file's frontmatter. Must be kept
 * in sync BY HAND with the "blog" collection's `fields:` list in
 * `public/admin/config.yml` — `readContentCollection` casts to this type
 * with no runtime validation, so a field renamed/removed in one place but
 * not the other fails silently (e.g. a typo'd `focus` just renders an empty
 * pill list, no build error) rather than surfacing anywhere.
 */
interface BlogPostFile {
  /** Short unique id, e.g. "july-2026". */
  id: string;
  /**
   * Year-month, e.g. "2026-07" — controls which recap is "newest" (shown
   * first) AND is formatted into the date-ribbon label ("July 2026"), so
   * there's exactly one place this ever gets typed, never two things that
   * could disagree with each other.
   */
  date: string;
  /** Second line of the title, e.g. "July Recap". */
  subtitle: string;
  /** The recap write-up. */
  description: string;
  /** Filename of this recap's main photo — must match an entry in `content/gallery/`. */
  image: string;
  /** Filenames of the photos in the Classroom Gallery strip. */
  gallery: string[];
  /** The themes this month focused on — shown as pills ("Focus of the Month"). */
  focus: string[];
}

/**
 * First line of every recap's title — the same for every single recap, so
 * it's not something `/admin` asks for. If this wording ever needs to
 * change, it changes here, once, for every recap past and future.
 */
const RECAP_TITLE_PREFIX = "Inside Our Classroom:";

/**
 * Panel colors for the featured recap and the Looking Back cards, cycled
 * through in this order automatically — nobody posting a recap in `/admin`
 * has to pick a color. Five colors means five recaps in a row never repeat
 * the same one.
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

/**
 * Turns "2026-07" into "July 2026" — the one place this formatting
 * happens, so the date ribbon can never show something that doesn't match
 * the "Month & Year" value a recap was actually filed under.
 */
function formatMonthLabel(date: string): string {
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
    new Date(year, month - 1, 1),
  );
}

const blogPostFiles = readContentCollection<BlogPostFile>("content/blog");

// Newest first — the same ordering `blogPosts` used to get for free from
// being a hand-maintained array with the newest block pasted at the top.
const sortedBlogPostFiles = [...blogPostFiles].sort((a, b) => b.date.localeCompare(a.date));

const accentedPosts: AccentedBlogPost[] = sortedBlogPostFiles.map((post, i) => ({
  id: post.id,
  month: formatMonthLabel(post.date),
  title: RECAP_TITLE_PREFIX,
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
