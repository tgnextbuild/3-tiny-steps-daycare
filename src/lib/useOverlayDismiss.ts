"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Shared behavior for every full-screen overlay (Modal, the gallery
 * lightbox): closes on Escape, locks page scroll while open, and moves
 * keyboard focus onto the overlay when it appears.
 */
export function useOverlayDismiss(
  open: boolean,
  onClose: () => void,
  focusRef?: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    focusRef?.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose, focusRef]);
}
