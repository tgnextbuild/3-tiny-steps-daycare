import { Icon } from "./Icon";
import type { SocialLink } from "@/types/content";

const sizes = {
  sm: { badge: "size-11", icon: "size-6", wordmark: "text-[0.7rem]" },
  lg: { badge: "size-16", icon: "size-9", wordmark: "text-sm" },
} as const;

/**
 * The round, brand-colored link to one social profile. Shared by the footer
 * and the Contact page so both stay in step — Winnie has no recognizable
 * glyph, so its badge shows the wordmark instead of an icon.
 */
export function SocialBadge({
  social,
  size = "sm",
  className = "",
}: {
  social: SocialLink;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={social.label}
      style={{ background: social.bg }}
      className={`inline-flex ${s.badge} items-center justify-center rounded-full text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      {social.icon === "winnie" ? (
        <span
          className={`font-heading ${s.wordmark} leading-none font-bold tracking-tight`}
        >
          Winnie
        </span>
      ) : (
        <Icon name={social.icon} className={s.icon} />
      )}
    </a>
  );
}
