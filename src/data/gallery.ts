import { readContentCollection } from "@/lib/content";
import { normalizeImagePath } from "@/lib/images";
import type { Photo } from "@/types/content";

/* ==================================================================== *
 * GALLERY page (/blog/gallery) — reached from "View our Gallery".
 * ==================================================================== *
 *
 * This is the ONE place every photo lives — whether it belongs to a
 * specific month's recap or is just a general daycare photo. The Gallery
 * page shows every photo below in one grid, newest first.
 *
 * Photos are managed at `/admin` (Decap CMS), not by hand-editing this
 * file — each photo is one Markdown file under `content/gallery/`, and
 * `/admin` handles uploading the image itself into `public/images/gallery/`
 * for you. This file just reads whatever's in `content/gallery/` at build
 * time; there's nothing here to edit directly anymore.
 *
 * USING A PHOTO IN A RECAP
 * A Blog Recap in `/admin` names which gallery photo(s) it wants by
 * filename — so the workflow for a recap photo is still: add it to the
 * Gallery collection first, then reference its filename from the recap.
 * This is why deleting a recap's write-up never deletes its photos — they
 * belong to the Gallery collection, and the recap was only ever pointing
 * at them (see `findGalleryPhoto` below, and `blog-posts.ts`).
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

/**
 * Must be kept in sync BY HAND with the "gallery" collection's `fields:`
 * list in `public/admin/config.yml` — see the same note on `BlogPostFile`
 * in `blog-posts.ts` for why a mismatch here fails silently instead of at
 * build time.
 */
export interface GalleryPhoto extends Photo {
  /** Year-month, e.g. "2026-07". Controls sort order (newest first). Optional — undated photos sort last. */
  date?: string;
}

export const galleryPhotos: GalleryPhoto[] = readContentCollection<GalleryPhoto>(
  "content/gallery",
).map((photo) => ({ ...photo, filename: normalizeImagePath(photo.filename) }));

/**
 * Looks up a photo by filename for `blog-posts.ts`'s recap references.
 * Falls back to a stub (using the filename itself as the label) instead of
 * throwing if the filename isn't in `galleryPhotos` above — e.g. a typo, or
 * a gallery entry that was deleted but a recap still references it.
 */
export function findGalleryPhoto(filename: string): Photo {
  const normalized = normalizeImagePath(filename);
  return (
    galleryPhotos.find((photo) => photo.filename === normalized) ?? {
      filename: normalized,
      label: normalized,
    }
  );
}

/** Every gallery photo, newest first. Undated photos keep their listed order at the end. */
export const sortedGalleryPhotos: GalleryPhoto[] = [...galleryPhotos].sort((a, b) => {
  if (a.date && b.date) return b.date.localeCompare(a.date);
  if (a.date) return -1;
  if (b.date) return 1;
  return 0;
});
