"use client";

import { useRef } from "react";
import { Icon } from "./Icon";
import { useOverlayDismiss } from "@/lib/useOverlayDismiss";

const widths = {
  md: "max-w-md",
  lg: "max-w-2xl",
} as const;

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  /** "lg" for content with a photo; "md" for short text. */
  size?: keyof typeof widths;
  children: React.ReactNode;
}

/** A simple centered, accessible modal: Escape and backdrop click both close it. */
export function Modal({ open, onClose, titleId, size = "md", children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useOverlayDismiss(open, onClose, dialogRef);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4"
      onClick={onClose}
    >
      {/* This outer panel wrapper never scrolls — only the card below it
          does — so the close button, positioned against THIS element,
          stays pinned in place no matter how far the content scrolls. */}
      <div className={`relative w-full ${widths[size]}`} onClick={(e) => e.stopPropagation()}>
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className="max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[2rem] bg-white p-6 shadow-xl focus:outline-none sm:p-7"
        >
          {children}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full bg-white/80 text-ink/50 shadow-sm backdrop-blur-sm hover:bg-white hover:text-ink"
        >
          <Icon name="close" className="size-5" />
        </button>
      </div>
    </div>
  );
}
