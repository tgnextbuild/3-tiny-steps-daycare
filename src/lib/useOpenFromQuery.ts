"use client";

import { useEffect, useState } from "react";

/**
 * Reads the `?open=` query param once after mount — used by content that
 * sits behind an accordion or modal (FAQ answers, resource cards, past
 * recaps) so a search result can land on the page and auto-expand the
 * right one. Deliberately reads `window.location.search` in an effect
 * instead of Next's `useSearchParams()`: that hook requires wrapping every
 * page that uses it in a Suspense boundary or it opts the page out of
 * static rendering, which isn't worth it here since this only ever matters
 * after the page has already mounted in the browser.
 */
export function useOpenFromQuery(): string | null {
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    setTarget(new URLSearchParams(window.location.search).get("open"));
  }, []);

  return target;
}

/**
 * Finds which item (if any) the `?open=` query param is pointing at, by
 * index. `getTargetId` should return the exact same `"prefix-slug"` string
 * used to build that item's search-index entry (e.g. `` `faq-${slugify(item.question)}` ``)
 * — matching against index rather than the item itself so callers whose
 * "open" state is an index (FAQSection, ResourceCardGrid) don't need to
 * re-derive one.
 *
 * Pulled out because every accordion/modal that supports this deep-linking
 * (FAQSection, ResourceCardGrid, LookingBack) was independently
 * re-implementing this exact `items.findIndex(...)` against `useOpenFromQuery()`
 * — sharing it means a future one gets it for free instead of copy-pasting
 * a fourth variant.
 */
export function useOpenTargetIndex<T>(items: T[], getTargetId: (item: T) => string): number {
  const openTarget = useOpenFromQuery();
  if (!openTarget) return -1;
  return items.findIndex((item) => getTargetId(item) === openTarget);
}

/**
 * Scrolls an element into view a tick after it's revealed (opening an
 * accordion/modal needs a frame to actually render before `scrollIntoView`
 * has anything correctly positioned to scroll to). Same
 * `requestAnimationFrame` + `scrollIntoView` incantation every deep-linkable
 * accordion/modal needs, so it's defined once here instead of three times.
 */
export function scrollToId(id: string): void {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
