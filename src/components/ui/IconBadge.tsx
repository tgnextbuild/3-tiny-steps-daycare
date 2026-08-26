import { Icon, type IconName } from "./Icon";
import { accentClasses } from "@/lib/accent";
import type { AccentColor } from "@/types/content";

export function IconBadge({
  icon,
  accent,
  size = "md",
  filled = true,
}: {
  icon: IconName;
  accent: AccentColor;
  size?: "sm" | "md" | "lg";
  filled?: boolean;
}) {
  const sizes = {
    sm: "size-11",
    md: "size-14",
    lg: "size-16",
  };
  const iconSizes = {
    sm: "size-5",
    md: "size-7",
    lg: "size-8",
  };
  const colors = accentClasses[accent];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${sizes[size]} ${
        filled ? `${colors.bgTint} ${colors.text}` : `${colors.text}`
      }`}
    >
      <Icon name={icon} className={iconSizes[size]} strokeWidth={1.8} />
    </span>
  );
}
