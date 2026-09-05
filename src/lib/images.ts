import fs from "node:fs";
import path from "node:path";

/**
 * Server-only. Checks whether a photo actually exists under
 * `public/images/` — including in subfolders like `recaps/` or `gallery/` —
 * so the site can render a real photo when the file exists and a labelled
 * placeholder when it doesn't. That lets the data files in `src/data/`
 * reference a photo before anyone has saved it — dropping the file into
 * place later is the only step needed to make it appear.
 *
 * Every page here is statically rendered, so this runs at build time.
 */
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

// `public/images/` never changes mid-build, so a filename's result is safe
// to cache for the lifetime of this module — several photos (a recap's
// cover, the Home page's auto-following banner, the Gallery grid's
// thumbnail + full-size pair) each get checked more than once across a
// build without this, all for the same `fs.existsSync` answer.
const existsCache = new Map<string, boolean>();

export function siteImageExists(filename: string): boolean {
  const cached = existsCache.get(filename);
  if (cached !== undefined) return cached;

  const resolved = path.join(IMAGES_DIR, filename);
  // A filename that escapes public/images/ (e.g. via "../") is treated as
  // missing rather than checked outside the images folder.
  const exists = resolved.startsWith(IMAGES_DIR + path.sep) && fs.existsSync(resolved);
  existsCache.set(filename, exists);
  return exists;
}

/**
 * Decap CMS's image-upload widget (used in `/admin` for the Gallery Photos
 * collection) writes the path it saves as `/images/gallery/foo.jpg` — its
 * `public_folder` setting, matching the real URL the file is served at.
 * Every other `filename` in this codebase is written by hand as relative to
 * `public/images/` with no leading slash (e.g. "gallery/foo.jpg"), which is
 * what `Photo`/`SiteImage` expect. This strips that prefix so a value can
 * come from either source — a hand-typed filename has no prefix to strip,
 * so it passes through unchanged.
 */
export function normalizeImagePath(filename: string): string {
  return filename.replace(/^\/?images\//, "");
}
