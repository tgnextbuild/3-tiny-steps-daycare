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
