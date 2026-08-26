import type { IconName } from "@/components/ui/Icon";
import type { Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * ABOUT US page — mission, core values, and facility.
 * The provider and staff live in their own files: `provider.ts`, `staff.ts`.
 * ------------------------------------------------------------------ */

export const mission = {
  heading: "Our Mission",
  body: "At 3 Tiny Steps, our mission is to provide a warm, nurturing environment where every child feels safe, valued, and inspired to learn. We embrace each child's unique strengths and support their social, emotional, physical, and cognitive development through personalized, play-based learning experiences. By fostering meaningful relationships and a love of discovery, we help children grow, learn, and play together as one!",
  image: { filename: "mission-outdoor-play.jpg", label: "Outdoor play area photo" } as Photo,
};

export interface CoreValue {
  icon: IconName;
  label: string;
}

export const coreValues = {
  heading: "Our Core Values",
  items: [
    { icon: "first-aid", label: "Safety" },
    { icon: "heart", label: "Inclusivity" },
    { icon: "search", label: "Curiosity" },
    { icon: "community", label: "Community" },
  ] as CoreValue[],
};

export const facility = {
  heading: "Our Facility",
  body: "Our daycare is thoughtfully designed to feel like a second home for your little ones where they can play and learn in a safe place.",
  image: { filename: "facility-classroom.jpg", label: "Classroom / facility photo" } as Photo,
  features: [
    "Safe & Secure",
    "Clean and Sanitized",
    "Spacious Play Areas",
    "Comfortable Rest Areas",
    "Outdoor Space",
  ],
};
