"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { faqHeading, faqItems } from "@/data/faqs";
import { slugify } from "@/lib/slugify";
import { scrollToId, useOpenTargetIndex } from "@/lib/useOpenFromQuery";

/**
 * Turns `**bold**` and `__underline__` markers in a paragraph into the
 * matching HTML — the only formatting FAQ answers support, kept simple on
 * purpose so `faqs.ts` never needs real HTML or Markdown.
 */
function renderFormattedText(text: string) {
  const pattern = /\*\*(.+?)\*\*|__(.+?)__/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else {
      parts.push(<u key={key++}>{match[2]}</u>);
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return parts;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const idBase = useId();
  const targetIndex = useOpenTargetIndex(faqItems, (item) => `faq-${slugify(item.question)}`);

  // Arriving from a search result (?open=faq-...) auto-expands that
  // question and scrolls it into view.
  useEffect(() => {
    if (targetIndex === -1) return;
    setOpenIndex(targetIndex);
    scrollToId(`${idBase}-button-${targetIndex}`);
  }, [targetIndex, idBase]);

  return (
    <div>
      <h2 className="font-heading text-h2 text-ink">{faqHeading}</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `${idBase}-panel-${i}`;
          const buttonId = `${idBase}-button-${i}`;
          return (
            <li
              key={item.question}
              className="overflow-hidden rounded-2xl bg-green/15"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="font-heading text-h3 text-ink">{item.question}</span>
                  <Icon
                    name="chevron-down"
                    className={`size-5 shrink-0 text-green-dark transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="flex flex-col gap-3 px-5 pb-4"
              >
                {item.answer.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-body text-ink/70">
                    {renderFormattedText(paragraph)}
                  </p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
