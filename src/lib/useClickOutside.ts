"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

/**
 * Closes a transient popup (the mobile nav, the search dropdown) when the
 * user points at anything outside it. Pass every element that should count
 * as "inside" — a toggle button usually needs to be listed alongside the
 * panel it opens, so its own click handler can do the toggling without this
 * firing first and fighting it.
 *
 * Listens on `mousedown` rather than `click` so the popup closes on press
 * instead of release, which is what makes a tap that lands outside feel
 * immediate on touch devices.
 */
export function useClickOutside(
  enabled: boolean,
  refs: RefObject<HTMLElement | null>[],
  onOutside: () => void,
) {
  // Both the callback and the refs array are new values on every render at
  // the call sites, so they're read through refs here — that keeps the
  // listener bound once per open/close instead of re-binding constantly.
  const onOutsideRef = useRef(onOutside);
  onOutsideRef.current = onOutside;
  const refsRef = useRef(refs);
  refsRef.current = refs;

  useEffect(() => {
    if (!enabled) return;
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedInside = refsRef.current.some((ref) => ref.current?.contains(target));
      if (!clickedInside) onOutsideRef.current();
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [enabled]);
}
