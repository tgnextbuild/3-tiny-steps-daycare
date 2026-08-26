import { Icon, type IconName } from "./Icon";

export interface HeadingOrnament {
  icon: IconName;
  /** Full className for the icon, e.g. "size-5 text-green-dark". */
  className: string;
  /** "flank" also mirrors a copy on the right of the title. */
  placement?: "flank" | "trailing";
  /** Tailwind gap class for the title row. */
  gap?: string;
}

export interface SectionHeadingProps {
  title: string;
  /** Color / casing classes for the heading itself, e.g. "text-azure uppercase". */
  className?: string;
  subtitle?: string;
  subtitleClassName?: string;
  ornament?: HeadingOrnament;
}

/**
 * The centered section title used across the site, with the optional
 * decorative icons (leaves, a sparkle) that sit beside some of them.
 */
export function SectionHeading({
  title,
  className = "",
  subtitle,
  subtitleClassName = "mt-3 max-w-xl",
  ornament,
}: SectionHeadingProps) {
  const heading = (
    <h2 className={`text-center text-h2 font-heading ${className}`}>{title}</h2>
  );

  return (
    <>
      {ornament ? (
        <div
          className={`flex items-center justify-center ${ornament.gap ?? "gap-3"}`}
        >
          {ornament.placement !== "trailing" && (
            <Icon name={ornament.icon} className={ornament.className} />
          )}
          {heading}
          <Icon
            name={ornament.icon}
            className={`${ornament.className} ${
              ornament.placement !== "trailing" ? "-scale-x-100" : ""
            }`}
          />
        </div>
      ) : (
        heading
      )}

      {subtitle && (
        <p className={`mx-auto text-center text-body text-ink/70 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </>
  );
}
