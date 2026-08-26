import { Icon } from "./Icon";

export interface PlaceholderImageProps {
  /**
   * Filename the real photo should be saved as under /public/images/ to
   * replace this placeholder — once it exists, swap the div below for
   * `<Image src={`/images/${filename}`} alt={label} fill />`.
   */
  filename: string;
  label: string;
  shape?: "rectangle" | "circle" | "blob";
  /** Drops the caption for containers too small to fit it (thumbnails). */
  compact?: boolean;
  className?: string;
}

const shapeClasses: Record<NonNullable<PlaceholderImageProps["shape"]>, string> = {
  rectangle: "rounded-[2rem]",
  circle: "rounded-full",
  blob: "rounded-[40%_60%_55%_45%/45%_40%_60%_55%]",
};

/**
 * Stand-in for a real photo. Renders a soft tinted panel with the expected
 * filename so content is easy to swap in later without touching layout code.
 */
export function PlaceholderImage({
  filename,
  label,
  shape = "rectangle",
  compact = false,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`${label} (placeholder)`}
      className={`relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden border-2 border-dashed border-azure/30 bg-gradient-to-br from-pastel-azure-tint via-cream-dark to-green-tint p-4 text-center ${shapeClasses[shape]} ${className}`}
    >
      <Icon name="sparkle" className="size-7 text-azure/50" />
      {!compact && (
        <span className="max-w-[85%] font-body text-[11px] leading-snug text-ink/60">
          {label}
          <br />
          <span className="text-ink/40">/images/{filename}</span>
        </span>
      )}
    </div>
  );
}
