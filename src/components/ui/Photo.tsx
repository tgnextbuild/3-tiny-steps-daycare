import { PlaceholderImage } from "./PlaceholderImage";
import { SiteImage } from "./SiteImage";
import { siteImageExists } from "@/lib/images";
import type { Photo as PhotoData } from "@/types/content";

export interface PhotoProps {
  photo: PhotoData;
  /** Matches PlaceholderImage's shapes; ignored once a real photo exists. */
  shape?: "rectangle" | "circle" | "blob";
  /** Drops the placeholder caption in containers too small to fit it. */
  compact?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "cover" (default) crops to fill the box; "contain" shows the whole photo, letterboxed. */
  fit?: "cover" | "contain";
}

/**
 * The single way the site renders a data-driven photo: the real image from
 * `public/images/` when that file exists, and a labelled placeholder naming
 * the expected filename when it doesn't. Server component — the existence
 * check happens at build time.
 */
export function Photo({
  photo,
  shape = "rectangle",
  compact = false,
  className = "",
  sizes,
  priority,
  fit,
}: PhotoProps) {
  if (siteImageExists(photo.filename)) {
    return (
      <SiteImage
        filename={photo.filename}
        alt={photo.label}
        className={className}
        sizes={sizes}
        priority={priority}
        fit={fit}
      />
    );
  }

  return (
    <PlaceholderImage
      filename={photo.filename}
      label={photo.label}
      shape={shape}
      compact={compact}
      className={className}
    />
  );
}
