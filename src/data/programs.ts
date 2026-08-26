import type { IconName } from "@/components/ui/Icon";
import type { AccentColor, Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * PROGRAMS page — hero, age-group cards, and curriculum areas.
 * The daily schedule lives in its own file: `daily-schedule.ts`.
 * ------------------------------------------------------------------ */

export const programsHero = {
  heading: "Programs & Curriculums",
  body: "Our programs are designed to support every stage of early childhood. Through play, exploration, and hands-on experiences, children build the skills and confidence they need for their bright future.",
  image: { filename: "programs-hero.jpg", label: "Teacher working with children at a table" } as Photo,
};

/* To ADD or REMOVE an age group, copy or delete a whole `{ ... },` block. */
export interface ProgramCard {
  name: string;
  ageRange: string;
  description: string;
  bullets: string[];
  photo: Photo;
}

export const programs: ProgramCard[] = [
  {
    name: "Infants",
    ageRange: "6 weeks – 12 months",
    description:
      "A cozy, loving environment focused on comfort, bonding, and early sensory exploration.",
    bullets: [
      "Low child-to-caregiver ratio 3:1",
      "Sensory play & discovery",
      "Tummy time",
      "Motor skills",
    ],
    photo: { filename: "program-infants.jpg", label: "Infant reaching for a toy" },
  },
  {
    name: "Toddlers",
    ageRange: "12 months – 3 years",
    description:
      "Encouraging independence, social skills and curiosity through play and daily routines.",
    bullets: [
      "Independence building",
      "Introduction to group play",
      "Active play & exploration",
      "Potty training support",
    ],
    photo: { filename: "program-toddlers.jpg", label: "Toddler exploring outdoors with a caregiver" },
  },
  {
    name: "Preschoolers",
    ageRange: "3 years – 5 years",
    description:
      "Preparing for success with early literacy, pre-k readiness, and hands-on learning.",
    bullets: [
      "Early literacy",
      "Creative arts & expression",
      "School readiness skills",
      "Social-emotional growth",
    ],
    photo: { filename: "program-preschoolers.jpg", label: "Preschoolers practicing writing" },
  },
];

export interface CurriculumArea {
  icon: IconName;
  label: string;
  /**
   * Icon text color. Most areas use the shared AccentColor tokens; "violet" is
   * available as a fifth, genuinely distinct hue (see `iconTextColor` in
   * `src/lib/accent.ts`).
   */
  accent: AccentColor | "violet";
}

export const curriculum = {
  heading: "Our Curriculum and Learning Areas",
  subheading: "We support each child in the development of all key areas",
  areas: [
    { icon: "lightbulb", label: "Cognitive", accent: "yellow" },
    { icon: "heart", label: "Social & Emotional", accent: "crimson" },
    { icon: "chat", label: "Language & Literacy", accent: "azure" },
    { icon: "hand", label: "Physical Development", accent: "green" },
    { icon: "palette", label: "Creative Expression", accent: "violet" },
  ] as CurriculumArea[],
};
