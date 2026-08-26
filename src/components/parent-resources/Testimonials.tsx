"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { testimonials, testimonialsHeading } from "@/data/testimonials";

export function Testimonials() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="rounded-[2rem] bg-pastel-azure-tint p-6 sm:p-7">
      <h2 className="font-heading text-h2 text-ink">{testimonialsHeading}</h2>
      <ul className="mt-5 flex flex-col gap-4">
        {testimonials.map((t, i) => {
          const isOpen = expanded.has(i);
          return (
            <li key={t.name} className="rounded-2xl bg-white p-5">
              <div className="flex items-center gap-2">
                <p className="font-heading text-h3 text-ink">{t.name}</p>
                <span className="flex text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, star) => (
                    <Icon
                      key={star}
                      name="star"
                      className="size-4 fill-current"
                      strokeWidth={1.4}
                    />
                  ))}
                </span>
              </div>
              <p className="mt-2 text-body text-ink/70">
                {t.preview}
                {isOpen ? " " + t.more : "… "}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="font-medium text-azure underline-offset-2 hover:underline"
                >
                  {isOpen ? "Show less" : "read more"}
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
