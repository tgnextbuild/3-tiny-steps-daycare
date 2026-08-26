"use client";

import { useCallback, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { useOverlayDismiss } from "@/lib/useOverlayDismiss";

const TITLE_ID = "gallery-lightbox-title";
/** Minimum horizontal finger travel, in pixels, before a touch counts as a swipe. */
const SWIPE_THRESHOLD = 40;

export interface GalleryLightboxItem {
  /** Unique key, e.g. the photo's filename. */
  key: string;
  /** Shown as a caption under the enlarged photo, and read out as the lightbox's accessible title. */
  label: string;
  /** Pre-rendered `<Photo>` for the grid thumbnail (cropped to fill its tile). */
  thumbnail: ReactNode;
  /** Pre-rendered `<Photo fit="contain">` for the enlarged view (whole photo, uncropped). */
  full: ReactNode;
}

/**
 * The Gallery page's photo grid, plus the full-screen viewer it opens into:
 * tap a thumbnail to see the whole photo, then step through the set with
 * the arrow buttons, the keyboard, or a swipe. Escape, the X, or tapping the
 * dark surround all close it.
 *
 * Photos are rendered on the server (see the Gallery page) and passed in as
 * `thumbnail`/`full` nodes so this client component never needs to touch the
 * filesystem check that `<Photo>` normally does at build time.
 */
export function GalleryLightbox({ items }: { items: GalleryLightboxItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  useOverlayDismiss(openIndex !== null, close, closeButtonRef);

  const canPrev = openIndex !== null && openIndex > 0;
  const canNext = openIndex !== null && openIndex < items.length - 1;

  const showPrev = useCallback(() => {
    setOpenIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);
  const showNext = useCallback(() => {
    setOpenIndex((i) => (i !== null && i < items.length - 1 ? i + 1 : i));
  }, [items.length]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  };

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) showPrev();
    else if (delta < -SWIPE_THRESHOLD) showNext();
    touchStartX.current = null;
  };

  /** Only closes when the tap lands on the backdrop itself, not on a
   *  descendant (image, buttons) — so nothing needs to stopPropagation. */
  const closeIfBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
        {items.map((item, i) => (
          <li key={item.key}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              className="group relative block aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-cream-dark shadow-[0_14px_28px_-20px_rgba(43,36,32,0.55)] transition-transform duration-150 hover:-translate-y-1 focus-visible:-translate-y-1 sm:rounded-[1.5rem]"
            >
              {item.thumbnail}
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity duration-150 group-hover:bg-ink/20 group-hover:opacity-100 group-focus-visible:bg-ink/20 group-focus-visible:opacity-100">
                <Icon name="search" className="size-7 text-white drop-shadow-md" strokeWidth={1.8} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={TITLE_ID}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/90 backdrop-blur-sm"
          onClick={closeIfBackdrop}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-6"
            onClick={closeIfBackdrop}
          >
            <span aria-live="polite" className="font-heading text-button text-white/80">
              {openIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              ref={closeButtonRef}
              onClick={close}
              aria-label="Close"
              className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Icon name="close" className="size-6" />
            </button>
          </div>

          <div
            className="relative flex flex-1 flex-col items-center justify-center gap-3 px-2 py-4 sm:px-6"
            onClick={closeIfBackdrop}
          >
            <button
              type="button"
              onClick={showPrev}
              disabled={!canPrev}
              aria-label="Previous photo"
              className="absolute left-1 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white shadow-md transition-colors hover:bg-ink/75 disabled:pointer-events-none disabled:opacity-30 sm:left-4 sm:size-12"
            >
              <Icon name="chevron-down" className="size-6 rotate-90" />
            </button>

            <div className="relative h-[55vh] w-full max-w-3xl overflow-hidden rounded-[1.5rem] bg-white/5 shadow-2xl sm:h-[70vh]">
              {active.full}
            </div>

            {active.label && (
              <p id={TITLE_ID} className="max-w-xl text-center text-body text-white/80">
                {active.label}
              </p>
            )}

            <button
              type="button"
              onClick={showNext}
              disabled={!canNext}
              aria-label="Next photo"
              className="absolute right-1 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white shadow-md transition-colors hover:bg-ink/75 disabled:pointer-events-none disabled:opacity-30 sm:right-4 sm:size-12"
            >
              <Icon name="chevron-down" className="size-6 -rotate-90" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
