import type { IconName } from "@/components/ui/Icon";
import type { AccentColor, Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * PARENT RESOURCES page — hero, quick resources, downloadable forms, and
 * the Care4Kids panel. FAQs and testimonials live in `faqs.ts` and
 * `testimonials.ts`.
 *
 * HOW TO ADD OR UPDATE A RESOURCE / FORM
 * 1. Save the PDF into the `public/documents/` folder.
 * 2. Copy one of the `{ ... },` blocks below into the right list and set
 *    `filename` to the exact PDF file name (including `.pdf`).
 * To REMOVE one, delete its whole `{ ... },` block.
 * To REPLACE a form with an updated version, just overwrite the PDF in
 * `public/documents/` using the same file name — nothing here changes.
 *
 * `icon` must be one of the names in `src/components/ui/Icon.tsx`.
 * `accent` is the card color: "green" | "crimson" | "azure" | "pastelAzure" | "yellow".
 * ------------------------------------------------------------------ */

export const resourcesHero = {
  heading: "Parent Resources",
  body: "To keep your daily routine smooth, we've gathered all our essential forms, policy handbooks, and family checklists right here. Whether you're prepping for your child's first day or downloading health forms, find everything below!",
  image: { filename: "parent-resources-hero.jpg", label: "Outdoor playground slide" } as Photo,
};

export interface ResourceCard {
  icon: IconName;
  title: string;
  body: string;
  accent: AccentColor;
  /** File name of the PDF inside `public/documents/`. */
  filename: string;
}

export const quickResourcesHeading = "Quick Resources";

export const quickResources: ResourceCard[] = [
  {
    icon: "backpack",
    title: "First Day Supplies",
    body: "See what to pack for your child's first day to help them feel comfortable and ready!",
    accent: "green",
    filename: "first-day-supplies.pdf",
  },
  {
    icon: "book",
    title: "Parent Handbook",
    body: "Download our handbook for policies, procedures, and everything you need to know.",
    accent: "crimson",
    filename: "parent-handbook.pdf",
  },
  {
    icon: "calendar",
    title: "25-26 School Calendar",
    body: "View all important dates, holidays, and events in one place.",
    accent: "azure",
    // Same document as the Home page Quick Access calendar card.
    filename: "daycare_calendar.pdf",
  },
];

export const downloadableFormsHeading = "Downloadable Forms";

export const downloadableForms: ResourceCard[] = [
  {
    icon: "heart-pulse",
    title: "Physical Form",
    body: "Required health information form for enrollment.",
    accent: "green",
    filename: "physical-form.pdf",
  },
  {
    icon: "document-pen",
    title: "Enrollment Form",
    body: "Complete this form to provide the essential information needed to enroll your child in our daycare.",
    accent: "green",
    filename: "enrollment-form.pdf",
  },
  {
    icon: "lock",
    title: "Privacy Form",
    body: "We respect every family's privacy. This form gives you full control over how your child's information may be used within our daycare materials.",
    accent: "green",
    filename: "privacy-form.pdf",
  },
  {
    icon: "people",
    title: "Written Permission & Emergency Form",
    body: "Required consent and emergency contact information that helps us respond quickly and safely when needed.",
    accent: "green",
    filename: "written-permission-emergency-form.pdf",
  },
];

export const financialResources = {
  heading: "Financial Resources",
  intro:
    "We accept Care4Kids to help make quality care more affordable for families.",
  body: "Care4Kids helps eligible families pay for child care so you can focus on what matters most.",
  points: ["Easy to Apply", "Many programs accepted", "Supporting working families"],
  ctaLabel: "Learn More",
  image: { filename: "care4kids-family.jpg", label: "Children's colorful shoes on a play mat" } as Photo,
};
