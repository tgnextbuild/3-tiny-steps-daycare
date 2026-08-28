"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import type { ResourceCard } from "@/data/resources";
import { accentClasses } from "@/lib/accent";
import { slugify } from "@/lib/slugify";
import { useOpenFromQuery } from "@/lib/useOpenFromQuery";

export function ResourceCardGrid({
  cards,
  columns = 3,
}: {
  cards: ResourceCard[];
  columns?: 2 | 3;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? cards[openIndex] : null;
  const openTarget = useOpenFromQuery();

  // Arriving from a search result (?open=resource-...) auto-opens that
  // resource's modal and scrolls its card into view.
  useEffect(() => {
    if (!openTarget) return;
    const index = cards.findIndex((card) => `resource-${slugify(card.title)}` === openTarget);
    if (index === -1) return;
    setOpenIndex(index);
    requestAnimationFrame(() => {
      document
        .getElementById(`resource-${slugify(cards[index].title)}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, [openTarget, cards]);

  return (
    <>
      <ul
        className={`grid gap-5 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
      >
        {cards.map((card, i) => {
          const colors = accentClasses[card.accent];
          return (
            <li key={card.title}>
              <button
                type="button"
                id={`resource-${slugify(card.title)}`}
                onClick={() => setOpenIndex(i)}
                className={`group flex h-full w-full flex-col items-start gap-3 rounded-[2rem] ${colors.bgTint} p-6 text-left transition-transform duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(43,36,32,0.35)]`}
              >
                <Icon name={card.icon} className={`size-8 ${colors.text}`} strokeWidth={1.6} />
                <h3 className="font-heading text-h3 tracking-wide text-ink uppercase">
                  {card.title}
                </h3>
                <p className="text-body text-ink/70">{card.body}</p>
              </button>
            </li>
          );
        })}
      </ul>

      <Modal open={active !== null} onClose={() => setOpenIndex(null)} titleId="resource-modal-title">
        {active && (
          <div>
            <Icon
              name={active.icon}
              className={`size-9 ${accentClasses[active.accent].text}`}
              strokeWidth={1.6}
            />
            <h3 id="resource-modal-title" className="mt-3 font-heading text-h3 text-ink">
              {active.title}
            </h3>
            <p className="mt-2 text-body text-ink/70">{active.body}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`/documents/${active.filename}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Icon name="eye" className="size-4" />
                  Preview
                </Button>
              </a>
              <a href={`/documents/${active.filename}`} download>
                <Button variant="secondary">
                  <Icon name="download" className="size-4" />
                  Download
                </Button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
