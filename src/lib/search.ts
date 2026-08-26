export interface SearchEntry {
  /** What's shown as the result's main line. */
  title: string;
  /** Small secondary line under the title — which page/section it's from. */
  section: string;
  /** Extra text matched against but never shown (e.g. an FAQ's answer, a program's description). */
  keywords?: string;
  /** Where clicking the result goes — a plain "#anchor" for always-visible content, or a "?open=" link for content behind an accordion or modal. */
  url: string;
}

/**
 * Small dependency-free fuzzy search over a fixed, in-memory list of
 * entries — the site's whole index is a few dozen items, so a real search
 * engine isn't warranted; a scored substring match is plenty and keeps the
 * page free of an extra library.
 */
export function searchEntries(entries: SearchEntry[], query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);

  return entries
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${title} ${entry.section.toLowerCase()} ${(entry.keywords ?? "").toLowerCase()}`;

      let score = 0;
      if (title.startsWith(q)) score += 5;
      else if (title.includes(q)) score += 3;
      for (const word of words) {
        if (title.includes(word)) score += 2;
        else if (haystack.includes(word)) score += 1;
      }

      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => entry);
}
