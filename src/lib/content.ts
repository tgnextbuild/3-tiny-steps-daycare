import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Reads every Markdown file in a `content/*` directory and returns its
 * frontmatter, typed as `T`. Backs the two collections Decap CMS (`/admin`)
 * manages — `content/blog` and `content/gallery` — where each file's
 * frontmatter *is* the data; nobody reads the Markdown body itself.
 *
 * Uses `fs` at build time, so this (and anything that imports it) must
 * never be reachable from a "use client" component — Next.js would try to
 * bundle `fs` for the browser and fail. `blog.ts` is split into a
 * client-safe half and `blog-posts.ts` (the fs-touching half) specifically
 * to keep that boundary safe; see the comment there before changing it.
 */
export function readContentCollection<T>(dir: string): T[] {
  const fullDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => matter(fs.readFileSync(path.join(fullDir, file), "utf8")).data as T);
}
