import type { Photo } from "@/types/content";

/* ==================================================================== *
 * GALLERY page (/blog/gallery) — reached from "View our Gallery".
 * ==================================================================== *
 *
 * This is the ONE place every photo lives — whether it belongs to a
 * specific month's recap or is just a general daycare photo. The Gallery
 * page shows every photo below in one grid, newest first.
 *
 * HOW TO ADD A PHOTO
 * 1. Save it into `public/images/gallery/`.
 * 2. Add a line to the `galleryPhotos` list below:
 *      { filename: "gallery/my-photo.jpg", label: "Short description", date: "2026-08" },
 *    `date` is just year-month (no day needed) — it controls the sort
 *    order on the Gallery page, newest first. Leave it off and the photo
 *    just sorts to the end instead.
 *
 * HOW TO REMOVE A PHOTO
 * Delete its line — AND, IMPORTANT: if a recap in `blog.ts` references
 * that same filename (in its `image` or `gallery` field), remove that
 * reference too. Nothing will break if you forget — the recap just shows
 * a placeholder where that photo used to be — but the reference will sit
 * there looking broken until it's cleaned up, so don't skip this step.
 *
 * USING A PHOTO IN A RECAP
 * `blog.ts` doesn't hold photo details itself — a recap just names which
 * photo(s) from THIS list it wants, by filename. So the two-step workflow
 * for a recap photo is: add it here first, then reference its filename in
 * the recap block in `blog.ts`. This is why deleting an old recap in
 * `blog.ts` never deletes its photos — they belong to this file, and the
 * recap was only ever pointing at them.
 *
 * `label` is shown as a caption under the photo when it's opened full-size,
 * and is also read aloud by screen readers — so keep it short and accurate.
 * ==================================================================== */

export const galleryHero = {
  heading: "Gallery",
  body: "Our gallery showcases the heart of our daycare — from thoughtfully designed learning spaces to fun-filled activities that encourage creativity, curiosity, and confidence.",
  image: {
    filename: "gallery-hero.jpg",
    label: "Children playing outside at 3 Tiny Steps",
  } as Photo,
};

export interface GalleryPhoto extends Photo {
  /** Year-month, e.g. "2026-07". Controls sort order (newest first). Optional — undated photos sort last. */
  date?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // ---- July 2026 recap ----
  {
    filename: "gallery/recap-july-2026.jpg",
    label: "Classroom decorated with jerseys and flags for the World Cup Final",
    date: "2026-07",
  },
  {
    filename: "gallery/recap-july-2026-1.jpg",
    label: "Children painting at the craft table",
    date: "2026-07",
  },
  {
    filename: "gallery/recap-july-2026-2.jpg",
    label: "World Cup decorations in the classroom",
    date: "2026-07",
  },
  { filename: "gallery/recap-july-2026-3.jpg", label: "Outdoor water play", date: "2026-07" },
  {
    filename: "gallery/recap-july-2026-4.jpg",
    label: "Storytime on the reading rug",
    date: "2026-07",
  },
  {
    filename: "gallery/recap-july-2026-5.jpg",
    label: "Building blocks together",
    date: "2026-07",
  },

  // ---- Add next month's recap photos here ----
  // Copy the block below, uncomment it, and change the filenames, labels,
  // and date. Group each month together under its own heading like the
  // July block above, newest month first.
  //
  // // ---- August 2026 recap ----
  // {
  //   filename: "gallery/recap-august-2026.jpg",
  //   label: "Short description of the photo",
  //   date: "2026-08",
  // },

  // ---- General daycare photos (not tied to a specific month) ----
  { filename: "day-gallery-1.jpg", label: "\"Amazing things happen here\" classroom wall" },
  { filename: "day-gallery-2.jpg", label: "Math learning wall with shapes and numbers" },
  { filename: "day-gallery-3.jpg", label: "Science wall with toy dinosaurs" },
  { filename: "facility-classroom.jpg", label: "Our main classroom and play area" },
  { filename: "hero-classroom.jpg", label: "A teacher leading a lesson at the classroom easel" },
  { filename: "mission-outdoor-play.jpg", label: "Our outdoor play area" },
  { filename: "program-infants.jpg", label: "Infant reaching for a toy" },
  { filename: "program-toddlers.jpg", label: "Toddler exploring outdoors with a caregiver" },
  { filename: "program-preschoolers.jpg", label: "Preschoolers practicing writing" },
  { filename: "programs-hero.jpg", label: "Teacher working with children at a table" },
  { filename: "parent-resources-hero.jpg", label: "Outdoor playground slide" },
  { filename: "contact-hero.jpg", label: "Shelf of toys in the classroom" },
];

/**
 * Looks up a photo by filename for `blog.ts`'s recap references. Falls back
 * to a stub (using the filename itself as the label) instead of throwing if
 * the filename isn't in `galleryPhotos` above — e.g. a typo, or a gallery
 * entry that was deleted but a recap still references it (see the REMOVE
 * instructions above — that reference should get cleaned up in `blog.ts`,
 * but forgetting to shows a placeholder rather than failing the build).
 */
export function findGalleryPhoto(filename: string): Photo {
  return (
    galleryPhotos.find((photo) => photo.filename === filename) ?? { filename, label: filename }
  );
}

/** Every gallery photo, newest first. Undated photos keep their listed order at the end. */
export const sortedGalleryPhotos: GalleryPhoto[] = [...galleryPhotos].sort((a, b) => {
  if (a.date && b.date) return b.date.localeCompare(a.date);
  if (a.date) return -1;
  if (b.date) return 1;
  return 0;
});
