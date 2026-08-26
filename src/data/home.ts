import type { IconName } from "@/components/ui/Icon";
import type { AccentColor, Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * HOME page content.
 * ------------------------------------------------------------------ */

export const hero = {
  heading: "Your Child Is Our Responsibility",
  body: "Home daycare for infants and toddlers offering a bilingual environment where children value the importance of growing, learning, and playing together as one.",
  ctaLabel: "Enroll Now",
  ctaHref: "/contact",
  image: {
    filename: "hero-classroom.jpg",
    label: "A teacher leading a lesson with children at the classroom easel",
  } as Photo,
};

export interface WhyChooseItem {
  icon: IconName;
  label: string;
  accent: AccentColor;
}

export const whyChooseHeading = "Why Families Choose 3 Tiny Steps";

export const whyChooseItems: WhyChooseItem[] = [
  { icon: "baby", label: "Ages 6 Weeks to 5 Years", accent: "green" },
  { icon: "heart", label: "Loving & Nurturing Environment", accent: "crimson" },
  { icon: "shield", label: "Licensed Home Daycare", accent: "azure" },
  { icon: "chat", label: "Bilingual Learning", accent: "yellow" },
  { icon: "family", label: "Family-Focused Care", accent: "crimson" },
];

export interface QuickAccessCard {
  icon: IconName;
  eyebrow?: string;
  title: string;
  body: string;
  accent: AccentColor;
  href: string;
  /** "download" opens/downloads a file instead of navigating. */
  action: "navigate" | "download";
}

export const quickAccessCards: QuickAccessCard[] = [
  {
    icon: "calendar",
    eyebrow: "25-26",
    title: "Daycare Calendar",
    body: "View important dates, holidays, and events",
    accent: "green",
    href: "/documents/daycare_calendar.pdf",
    action: "download",
  },
  {
    icon: "people",
    title: "Parent Resources",
    body: "Access forms, helpful links, and parenting tools",
    accent: "crimson",
    href: "/parent-resources",
    action: "navigate",
  },
  {
    icon: "phone",
    title: "Contact Us",
    body: "Questions, comments, concerns? Reach out!",
    accent: "azure",
    href: "/contact",
    action: "navigate",
  },
];

export interface TimelineStep {
  step: number;
  icon: IconName;
  label: string;
  accent: AccentColor;
}

export const timelineHeading = "The Tiny Steps Timeline";

export const timelineSteps: TimelineStep[] = [
  { step: 1, icon: "clipboard", label: "Complete Contact Us form", accent: "green" },
  { step: 2, icon: "calendar-clock", label: "Schedule & Attend Tour", accent: "azure" },
  { step: 3, icon: "envelope", label: "Receive Enrollment Info", accent: "crimson" },
  { step: 4, icon: "lock", label: "Reserve Your Spot", accent: "green" },
  { step: 5, icon: "folder", label: "Submit Required Documentation", accent: "azure" },
  { step: 6, icon: "home-heart", label: "Welcome to 3 Tiny Steps", accent: "crimson" },
];

/**
 * The photo isn't set here — this banner always shows whichever recap is
 * newest in `blog.ts` (`currentPost.image`), so posting a new recap updates
 * this automatically. Nothing to change on this page when that happens.
 */
export const monthlyRecap = {
  ctaLabel: "View our Monthly Recap",
  ctaHref: "/blog",
};

export interface SafetyFeature {
  icon: IconName;
  label: string;
  accent: AccentColor;
}

export const safety = {
  headingPrefix: "Your Child's Safety is",
  headingAccent: "Our Priority",
  body: "Your child's safety, happiness, and well being are at the heart of everything we do. Our caring, trained staff create a warm, loving environment where little ones can learn, grow and thrive with confidence.",
  features: [
    { icon: "community", label: "Certified Staff", accent: "green" },
    { icon: "home", label: "Licensed Program", accent: "yellow" },
    { icon: "heart-pulse", label: "CPR and First Aid Certified", accent: "crimson" },
    { icon: "search", label: "Background Checked", accent: "crimson" },
    { icon: "shield", label: "Health & Safety Focused", accent: "azure" },
    { icon: "book", label: "Ongoing Professional Development", accent: "green" },
  ] as SafetyFeature[],
};
