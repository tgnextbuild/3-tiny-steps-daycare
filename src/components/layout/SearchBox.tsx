"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { searchIndex } from "@/data/search-index";
import { searchEntries } from "@/lib/search";

/**
 * Site-wide search: fuzzy-matches against `searchIndex` as you type and
 * shows a dropdown of results. Selecting one (click or Enter) does a full
 * page navigation rather than a client-side route change — some results
 * point at an in-page anchor or a `?open=` link that auto-expands an
 * accordion/modal on load, and a real navigation is what makes both of
 * those work reliably whether or not you're already on that page.
 */
export function SearchBox({
  className = "",
  dropdownClassName = "right-0 left-0",
}: {
  className?: string;
  /** Positions/sizes the results dropdown. Defaults to matching the input's own width — pass a wider fixed width for a compact input (e.g. the desktop nav) so long suggestions have room to read. */
  dropdownClassName?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const results = useMemo(() => searchEntries(searchIndex, query), [query]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      if (results.length === 0) return;
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      if (results.length === 0) return;
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
      e.currentTarget.blur();
    } else if (e.key === "Enter") {
      const target = results[activeIndex] ?? results[0];
      if (target) {
        e.preventDefault();
        window.location.assign(target.url);
      }
    }
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <label className="relative block">
        <span className="sr-only">Search the site</span>
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={listId}
          aria-autocomplete="list"
          className="w-full rounded-full border border-ink/10 bg-white/80 py-2 pr-9 pl-4 text-body text-ink placeholder:text-ink/40 focus-visible:ring-2 focus-visible:ring-azure focus-visible:outline-none"
        />
        <Icon
          name="search"
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-ink/40"
        />
      </label>

      {showDropdown && (
        <ul
          id={listId}
          role="listbox"
          className={`absolute top-full z-50 mt-2 max-h-80 overflow-y-auto rounded-2xl bg-white p-2 shadow-lg ring-1 ring-ink/10 ${dropdownClassName}`}
        >
          {results.length === 0 ? (
            <li className="px-3 py-2 text-body text-ink/50">
              No results for &ldquo;{query}&rdquo;
            </li>
          ) : (
            results.map((result, i) => (
              <li key={result.url}>
                <a
                  href={result.url}
                  role="option"
                  aria-selected={i === activeIndex}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`block rounded-xl px-3 py-2.5 transition-colors ${
                    i === activeIndex ? "bg-azure-tint" : "hover:bg-cream-dark"
                  }`}
                >
                  <span className="block font-heading text-body leading-snug text-ink">
                    {result.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] text-ink/50">
                    {result.section}
                  </span>
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
