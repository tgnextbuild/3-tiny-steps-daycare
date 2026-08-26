/**
 * Lowercase, hyphenated, alphanumeric-only version of a string — used to
 * build stable, readable URL fragments and query values from content text
 * (a staff name, an FAQ question, a resource title). Search results and the
 * on-page element they point to both call this on the SAME source text
 * (e.g. the same staff member's `name`), so the two always agree even as
 * content is added, removed, or reworded — nobody has to hand-write or
 * keep a slug in sync with the text it's derived from.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['".,!?]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
