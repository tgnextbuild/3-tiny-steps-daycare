"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { faqHeading, faqItems } from "@/data/faqs";
import { slugify } from "@/lib/slugify";
import { useOpenFromQuery } from "@/lib/useOpenFromQuery";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const idBase = useId();
  const openTarget = useOpenFromQuery();

  // Arriving from a search result (?open=faq-...) auto-expands that
  // question and scrolls it into view.
  useEffect(() => {
    if (!openTarget) return;
    const index = faqItems.findIndex((item) => `faq-${slugify(item.question)}` === openTarget);
    if (index === -1) return;
    setOpenIndex(index);
    const buttonId = `${idBase}-button-${index}`;
    requestAnimationFrame(() => {
      document.getElementById(buttonId)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, [openTarget, idBase]);

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
                className="px-5 pb-4"
              >
                <p className="text-body text-ink/70">{item.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
