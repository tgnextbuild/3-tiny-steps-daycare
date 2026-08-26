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
 * Import it only from server components.
 */
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

export function siteImageExists(filename: string): boolean {
  const resolved = path.join(IMAGES_DIR, filename);
  // A filename that escapes public/images/ (e.g. via "../") is treated as
  // missing rather than checked outside the images folder.
  if (!resolved.startsWith(IMAGES_DIR + path.sep)) return false;
  return fs.existsSync(resolved);
}
