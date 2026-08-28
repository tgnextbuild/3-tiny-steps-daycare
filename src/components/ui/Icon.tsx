export type IconName =
  | "baby"
  | "heart"
  | "shield"
  | "chat"
  | "family"
  | "calendar"
  | "people"
  | "phone"
  | "clipboard"
  | "calendar-clock"
  | "envelope"
  | "lock"
  | "folder"
  | "home-heart"
  | "home"
  | "heart-pulse"
  | "search"
  | "book"
  | "first-aid"
  | "community"
  | "leaf"
  | "star"
  | "sparkle"
  | "hearts-small"
  | "menu"
  | "close"
  | "download"
  | "eye"
  | "instagram"
  | "tiktok"
  | "facebook"
  | "linktree"
  | "pin"
  | "clock"
  | "chevron-down"
  | "heart-dollar"
  | "backpack"
  | "lightbulb"
  | "hand"
  | "hand-helping"
  | "palette"
  | "document-pen"
  | "parking"
  | "check"
  | "error-circle"
  | "sun";

/**
 * Small hand-rolled line-icon set, kept intentionally lightweight (no icon
 * library dependency) so every icon shares the same rounded, friendly
 * stroke weight used throughout the mockup.
 */
export function Icon({
  name,
  className = "size-6",
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "baby":
      // Lucide "baby" (ISC license) — https://lucide.dev
      return (
        <svg {...common}>
          <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
          <path d="M15 12h.01" />
          <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
          <path d="M9 12h.01" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.35-9.5-8.8C.8 8.1 2 4.8 5.2 4.1 7.4 3.6 9.7 4.6 12 7.4c2.3-2.8 4.6-3.8 6.8-3.3 3.2.7 4.4 4 2.7 7.1C19 15.65 12 20 12 20Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-2.5Z" />
          <path d="m9.2 12 1.9 1.9 3.7-3.9" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5.5h16v10H10l-4.5 4v-4H4Z" />
          <path d="M8 9.5h8M8 12.5h5" />
        </svg>
      );
    case "family":
      // Lucide "users" (ISC license) — https://lucide.dev
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
          <path d="M7.5 13.2h2M11 13.2h2M14.5 13.2h2M7.5 16.5h2M11 16.5h2" />
        </svg>
      );
    case "calendar-clock":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
          <circle cx="12" cy="15" r="3.1" />
          <path d="M12 13.6v1.5l1.1.9" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9.5" r="2.4" />
          <path d="M3.5 19c.6-3 2.8-4.7 5.5-4.7s4.9 1.7 5.5 4.7" />
          <path d="M15.7 14.7c2.2.2 3.9 1.8 4.4 4.3" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3.5h3l1.5 4-2 1.7a12 12 0 0 0 5.3 5.3l1.7-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C10.9 18.7 5.3 13.1 4.5 6.1A1.5 1.5 0 0 1 6 3.5Z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
          <rect x="9" y="3" width="6" height="3" rx="1.2" />
          <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4" />
        </svg>
      );
    case "envelope":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
          <path d="m4.5 6.5 7.5 6 7.5-6" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5.5" y="11" width="13" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          <path d="M12 14.5v2.5" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z" />
        </svg>
      );
    case "home-heart":
      return (
        <svg {...common}>
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10v9.5h12V10" />
          <path d="M12 17.2s-2.6-1.6-2.6-3.4c0-1 .8-1.7 1.7-1.7.5 0 .9.2 1.2.6a1.6 1.6 0 0 1 1.2-.6c.9 0 1.7.7 1.7 1.7 0 1.8-3.2 3.4-3.2 3.4Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10v9.5h5V15h2v4.5h5V10" />
        </svg>
      );
    case "heart-pulse":
      return (
        <svg {...common}>
          <path d="M12 19.5s-6.5-4-8.6-8C1.8 8.4 2.8 5.6 5.6 5c2-.4 3.9.5 6.4 3 2.5-2.5 4.4-3.4 6.4-3 2.8.6 3.8 3.4 2.2 6.5-2.1 4-8.6 8-8.6 8Z" />
          <path d="M6.5 11.5h2.2l1.3-2.4 1.6 4 1.2-1.6h3.2" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6" />
          <path d="m19 19-4-4" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5.2c2.3-.9 4.6-.9 7 0v14c-2.4-.9-4.7-.9-7 0Z" />
          <path d="M20 5.2c-2.3-.9-4.6-.9-7 0v14c2.4-.9 4.7-.9 7 0Z" />
        </svg>
      );
    case "first-aid":
      return (
        <svg {...common}>
          <path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5Z" />
        </svg>
      );
    case "community":
      return (
        <svg {...common}>
          <circle cx="5" cy="8" r="2.2" />
          <circle cx="19" cy="8" r="2.2" />
          <circle cx="12" cy="9" r="3.1" />
          <path d="M2 18c.4-2.3 1.7-3.7 3.4-3.9" />
          <path d="M22 18c-.4-2.3-1.7-3.7-3.4-3.9" />
          <path d="M6 19.5c1-3.4 3.3-5.2 6-5.2s5 1.8 6 5.2" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M5 19c-1.5-6.5 2-13 14-14-1 11.5-7.5 15-14 14Z" />
          <path d="M6 18c3-3.5 6-7 12.5-12" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.2 5.3 5.7.5-4.3 3.8 1.3 5.6L12 15.8 6.9 18.2l1.3-5.6-4.3-3.8 5.7-.5Z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" />
          <path d="m6 6 2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
        </svg>
      );
    case "hearts-small":
      return (
        <svg {...common}>
          <path d="M9 15.5s-4.3-2.6-5.7-5.3C2.6 8.5 3.2 6.7 5 6.3c1.3-.3 2.5.3 4 1.9 1.5-1.6 2.7-2.2 4-1.9 1.8.4 2.4 2.2 1.7 3.9-1.4 2.7-5.7 5.3-5.7 5.3Z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 6.5h16M4 12h16M4 17.5h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m5 5 14 14M19 5 5 19" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3.5v11.5M8 11.5l4 4 4-4" />
          <path d="M4.5 17v2.5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V17" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2.5 12S5.8 5.5 12 5.5 21.5 12 21.5 12 18.2 18.5 12 18.5 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M13 3v11.8a3.2 3.2 0 1 1-2.4-3.1" />
          <path d="M13 3c.4 2.3 2 3.8 4.3 4.1" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            stroke="none"
            d="M15 3.3c-.9-.2-1.9-.3-2.7-.3-3 0-5 1.9-5 5.4v2.1H4.8v3.4h2.5V21h3.5v-7.1h2.7l.5-3.4h-3.2V8.6c0-1 .3-1.6 1.6-1.6H15V3.3Z"
          />
        </svg>
      );
    case "linktree":
      return (
        <svg {...common}>
          <path d="M12 4v16" />
          <path d="M12 8 7.4 5.1M12 8l4.6-2.9" />
          <path d="M12 13 6.4 9.6M12 13l5.6-3.4" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21.5S5 15 5 9.8a7 7 0 0 1 14 0c0 5.2-7 11.7-7 11.7Z" />
          <circle cx="12" cy="9.8" r="2.4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3.2 2" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "heart-dollar":
      return (
        <svg {...common}>
          <path d="M12 19.5s-6.5-4-8.6-8C1.8 8.4 2.8 5.6 5.6 5c2-.4 3.9.5 6.4 3 2.5-2.5 4.4-3.4 6.4-3 2.8.6 3.8 3.4 2.2 6.5-2.1 4-8.6 8-8.6 8Z" />
          <path d="M12 8.7v6.6M13.6 9.6c-.4-.3-1-.5-1.6-.5-1 0-1.8.6-1.8 1.4 0 .8.8 1.1 1.8 1.4 1 .3 1.8.6 1.8 1.4 0 .8-.8 1.4-1.8 1.4-.6 0-1.2-.2-1.6-.5" />
        </svg>
      );
    case "backpack":
      return (
        <svg {...common}>
          <path d="M8 8.5V6a4 4 0 0 1 8 0v2.5" />
          <path d="M6 9.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" />
          <path d="M9.5 13h5M6 12.5h1.5M16.5 12.5H18" />
        </svg>
      );
    case "lightbulb":
      // Always ink outline + light-yellow bulb fill, regardless of the
      // currentColor an item's accent would otherwise pass in — a lit bulb
      // reads better as "black lines, yellow glass" than as a solid tint.
      return (
        <svg {...common} stroke="var(--color-ink)">
          <path d="M9 15.3v-1.3a5.5 5.5 0 1 1 6 0v1.3" fill="var(--color-light-yellow)" />
          <path d="M9.3 17.3h5.4" />
          <path d="M10 19.6h4" />
          <path d="M12 2.2v1.6" />
          <path d="M5.3 5.3l1.2 1.2" />
          <path d="M18.7 5.3l-1.2 1.2" />
        </svg>
      );
    case "hand":
      return (
        <svg {...common}>
          <path d="M8 12.5V5a1.5 1.5 0 0 1 3 0v6" />
          <path d="M11 10.5V4a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 11V5.5a1.5 1.5 0 0 1 3 0V13" />
          <path d="M17 9.5a1.5 1.5 0 0 1 3 0V15c0 3.6-2.2 6.5-6 6.5-3 0-4.4-1.1-6.2-3.4L5 14.3c-.6-.8-.4-1.7.3-2.2.7-.5 1.6-.4 2.2.3L9 14" />
        </svg>
      );
    case "hand-helping":
      // Lucide "hand-helping" (ISC license) — https://lucide.dev
      return (
        <svg {...common}>
          <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
          <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
          <path d="m2 13 6 6" />
        </svg>
      );
    case "palette":
      return (
        <svg {...common}>
          <path d="M12 3.5A8.5 8.5 0 1 0 12 20.5c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a4.5 4.5 0 0 0 4.5-4.5c0-4.2-3.8-6.7-8.5-6.7Z" />
          <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
          <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="14" cy="7" r="1" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="10" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "document-pen":
      return (
        <svg {...common}>
          <path d="M7 3.5h7l3 3v14h-10Z" />
          <path d="M14 3.5v3h3" />
          <path d="m15.8 12.7 2 2-4.3 4.3H11.5v-2Z" />
        </svg>
      );
    case "parking":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
          <path d="M9.5 16V8h2.8a2.3 2.3 0 0 1 0 4.6H9.5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8 12.3 2.6 2.6 5.4-5.6" />
        </svg>
      );
    case "error-circle":
      // Pairs visually with "check" (circle + mark) for status states, but
      // deliberately distinct from "close" — that one already means
      // "dismiss this panel" elsewhere on the site (mobile nav, modals),
      // so reusing it for "this failed" would overload the same glyph
      // with two unrelated meanings.
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m9 9 6 6M15 9l-6 6" />
        </svg>
      );
    case "sun":
      // Lucide "sun" (ISC license) — https://lucide.dev
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      );
  }
}
