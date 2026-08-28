import type { IconName } from "@/components/ui/Icon";
import type { Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * CONTACT US page — phone, hours, email, address, and the social row.
 * The social media URLs themselves live in `site.ts`.
 * ------------------------------------------------------------------ */

export const contactHero = {
  heading: "Contact Us",
  body: "We'd love to hear from you! Reach out to ask a question, schedule a tour, or start the enrollment process — our team typically responds within 3–5 business days.",
  image: { filename: "contact-hero.jpg", label: "Shelf of toys in the classroom" } as Photo,
};

export const mapAddress = "18 Chipping Lane, Norwalk, CT 06854";

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactDetail {
  icon: IconName;
  label: string;
  lines: string[];
  /** If set, the whole entry becomes one tap target (tel:, mailto:). */
  href?: string;
  /** If set instead of `href`, shows one small button per choice — e.g. picking a maps app. */
  links?: ContactLink[];
}

export const contactDetails: ContactDetail[] = [
  {
    icon: "phone",
    label: "Call Us",
    lines: ["(203) 818-8695"],
    href: "tel:+12038188695",
  },
  {
    icon: "clock",
    label: "Hours of Operation",
    lines: ["Monday - Friday", "7:30am - 5:00pm"],
  },
  {
    icon: "envelope",
    label: "Email",
    lines: ["3tinystepshomedaycare@gmail.com"],
    href: "mailto:3tinystepshomedaycare@gmail.com",
  },
  {
    icon: "pin",
    label: "Location",
    lines: ["18 Chipping Lane", "Norwalk, CT 06854"],
    links: [
      {
        label: "Apple Maps",
        href: `https://maps.apple.com/?daddr=${encodeURIComponent(mapAddress)}`,
      },
      {
        label: "Google Maps",
        href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`,
      },
    ],
  },
];

export const parking = {
  heading: "Easy Parking",
  body: "Safe parking is available in front of our daycare.",
};

export interface SocialCard {
  label: string;
  ctaLabel: string;
}

/** Display order for the "Connect with Us" row (site.ts holds the URLs). */
export const connectWithUsHeading = "Connect with Us";

export const connectWithUsOrder: SocialCard[] = [
  { label: "Winnie", ctaLabel: "View Page" },
  { label: "Linktree", ctaLabel: "View Page" },
  { label: "Instagram", ctaLabel: "Follow Us" },
  { label: "Facebook", ctaLabel: "Follow Us" },
  { label: "TikTok", ctaLabel: "Follow Us" },
];
