import Image from "next/image";

// Literal class names (not template-built) so Tailwind's compiler can see
// them statically, same reasoning as accentClasses in lib/accent.ts.
const fitClasses = {
  cover: "object-cover",
  contain: "object-contain",
} as const;

export interface SiteImageProps {
  /** Filename under /public/images/. */
  filename: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "cover" crops to fill the box (thumbnails); "contain" shows the whole photo, letterboxed (the gallery lightbox). */
  fit?: keyof typeof fitClasses;
}

/** A real photo from /public/images/, sized to fill its parent like PlaceholderImage. */
export function SiteImage({
  filename,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  fit = "cover",
}: SiteImageProps) {
  return (
    <Image
      src={`/images/${filename}`}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`${fitClasses[fit]} ${className}`}
    />
  );
}
