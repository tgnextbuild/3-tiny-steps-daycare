"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LearningFocus } from "./LearningFocus";
import { MonthRibbon } from "./MonthRibbon";
import { Icon } from "@/components/ui/Icon";
import { Modal } from "@/components/ui/Modal";
import { lookingBack } from "@/data/blog";
import { accentClasses, cardHoverLiftClasses } from "@/lib/accent";
import { scrollToId, useOpenTargetIndex } from "@/lib/useOpenFromQuery";
import type { AccentColor } from "@/types/content";

export interface LookingBackItem {
  id: string;
  month: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  accent: AccentColor;
  /** True when this recap had more photos than just its cover — shows a link to the Gallery in the modal. */
  hasMorePhotos: boolean;
  /** Pre-rendered photo for the card, passed down from the server page. */
  thumbnail: ReactNode;
  /** Pre-rendered photo for the modal. */
  cover: ReactNode;
}

const TITLE_ID = "looking-back-modal-title";

/**
 * Earlier recaps. Each card opens the full write-up in a centered modal
 * rather than a separate page — a recap is short, and staying put keeps the
 * reader in the timeline they were browsing.
 */
export function LookingBack({ items }: { items: LookingBackItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = items.find((item) => item.id === openId) ?? null;
  const targetIndex = useOpenTargetIndex(items, (item) => `recap-${item.id}`);

  // Arriving from a search result (?open=recap-...) auto-opens that
  // month's recap and scrolls its card into view.
  useEffect(() => {
    if (targetIndex === -1) return;
    setOpenId(items[targetIndex].id);
    scrollToId(`recap-card-${items[targetIndex].id}`);
  }, [targetIndex, items]);

  if (items.length === 0) return null;

  return (
    <>
      <ul
        className={`mx-auto mt-8 grid gap-5 ${
          items.length === 1
            ? "max-w-md"
            : items.length === 2
              ? "max-w-4xl sm:grid-cols-2"
              : "max-w-5xl sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {items.map((item) => {
          const colors = accentClasses[item.accent];
          return (
            <li key={item.id}>
              <button
                type="button"
                id={`recap-card-${item.id}`}
                onClick={() => setOpenId(item.id)}
                aria-haspopup="dialog"
                className={`group flex w-full items-center gap-4 rounded-[1.75rem] ${colors.bgTint} p-4 text-left ${cardHoverLiftClasses}`}
              >
                <span className="relative size-20 shrink-0 overflow-hidden rounded-[1.25rem] bg-cream-dark sm:size-24">
                  {item.thumbnail}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-heading text-h3 uppercase ${colors.text}`}
                  >
                    {item.month}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 font-heading text-button text-ink underline underline-offset-4 group-hover:no-underline">
                    {lookingBack.ctaLabel}
                    <Icon name="chevron-down" className="size-3.5 -rotate-90" />
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <Modal
        open={active !== null}
        onClose={() => setOpenId(null)}
        titleId={TITLE_ID}
        size="lg"
      >
        {active && (
          <div>
            <MonthRibbon
              month={active.month}
              bgClassName={accentClasses[active.accent].bgTint}
              className="-ml-6 sm:-ml-7"
            />

            <h2
              id={TITLE_ID}
              className={`mt-4 font-heading text-h2 leading-snug ${accentClasses[active.accent].text}`}
            >
              {active.title}
              <span className="mt-1 block font-medium">{active.subtitle}</span>
            </h2>

            <div className="relative mt-4 aspect-16/10 w-full overflow-hidden rounded-[1.5rem] bg-cream-dark">
              {active.cover}
            </div>

            <p className="mt-4 text-body text-ink/75">{active.description}</p>

            {active.hasMorePhotos && (
              <Link
                href="/blog/gallery"
                className={`mt-3 inline-flex items-center gap-1 font-heading text-button underline underline-offset-4 hover:no-underline ${accentClasses[active.accent].text}`}
              >
                See more {active.month} photos in the Gallery
                <Icon name="chevron-down" className="size-3.5 -rotate-90" />
              </Link>
            )}

            <div className="mt-5">
              <LearningFocus focus={active.focus} compact />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
