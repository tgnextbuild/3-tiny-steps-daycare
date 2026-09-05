import { findGalleryPhoto } from "@/data/gallery";
import type { AccentColor } from "@/types/content";

/* ------------------------------------------------------------------ *
 * A DAY AT THE DAYCARE — the daily schedule on the Programs page.
 *
 * To ADD a time block: copy one `{ ... },` block, paste it where it belongs
 * in the list, and change the details. The blocks appear in list order.
 * To REMOVE one: delete its whole `{ ... },` block.
 *
 * `accent` sets the colored bar and heading color, one of:
 *   "green" | "crimson" | "azure" | "pastelAzure" | "yellow"
 * `subtitle` and `description` may be left as "" to hide them.
 * `nested: true` indents a block under the one above it (e.g. Infant Nap Time).
 * ------------------------------------------------------------------ */
export interface ScheduleBlock {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  accent: AccentColor;
  nested?: boolean;
}

export const dailyScheduleHeading = "A Day at the Daycare";

export const dailySchedule: ScheduleBlock[] = [
  {
    time: "7:00 AM - 8:00 AM",
    title: "Arrival & Welcome Play",
    subtitle: "Diapering & Potty Prep",
    description: "Gentle check-ins as children arrive and settle into morning free play.",
    accent: "green",
  },
  {
    time: "8:00 AM - 8:30 AM",
    title: "Morning Breakfast",
    subtitle: "Fueling up for the morning",
    description: "A healthy breakfast to start the day together.",
    accent: "crimson",
  },
  {
    time: "8:30 AM - 10:30 AM",
    title: "Morning Discovery",
    subtitle: "Storytime, Music, Movement",
    description:
      "Structured group activities including reading, dancing, and classroom learning.",
    accent: "azure",
  },
  {
    time: "9:00 AM - 9:30 AM",
    title: "Infant Nap Time",
    subtitle: "",
    description: "",
    accent: "yellow",
    nested: true,
  },
  {
    time: "10:30 AM - 12:00 PM",
    title: "Outdoor Exploration & Gross Motor Play",
    subtitle: "Gross motor play and fresh air",
    description:
      "Time spent outside on the playground building physical strength and socializing.",
    accent: "green",
  },
  {
    time: "12:00 PM - 1:00 PM",
    title: "Nourishing Lunch",
    subtitle: "Enjoying a healthy lunch",
    description:
      "Nutritious lunch together while practicing healthy eating habits and independence.",
    accent: "crimson",
  },
  {
    time: "1:00 PM - 1:30 PM",
    title: "Quiet Transition & Rest Preparation",
    subtitle: "Diapering / Potty Support & Fresh Change",
    description: "Fresh changes, potty support, and calming activities to prepare for rest.",
    accent: "azure",
  },
  {
    time: "1:30 PM - 3:30 PM",
    title: "Rest & Nap Time",
    subtitle: "Recharging minds and bodies",
    description: "Quiet environment for all children to rest.",
    accent: "green",
  },
  {
    time: "3:30 PM - 4:00 PM",
    title: "Afternoon Snack Time",
    subtitle: "Healthy afternoon fuel",
    description:
      "Nutritious and refreshing afternoon snack to fuel up for the rest of the day's activities.",
    accent: "crimson",
  },
  {
    time: "4:00 PM - 5:00 PM",
    title: "Open Ended Playtime",
    subtitle: "Child-led exploration",
    description:
      "Free play in our learning center or outdoor facility, encouraging creativity, sharing, and peer-to-peer social skills.",
    accent: "azure",
  },
  {
    time: "5:00 PM - 5:30 PM",
    title: "Wrap Up and Dismissal",
    subtitle: "",
    description: "Departure and daily updates.",
    accent: "green",
  },
];

/**
 * The three photos shown beside the schedule, named by filename so their
 * labels stay owned by `gallery.ts` — the one place every photo is
 * described. Swap a photo by changing a filename here to any other in
 * `galleryPhotos`; edit its caption in `gallery.ts` and it updates here too.
 */
export const dailyScheduleGallery = [
  "day-gallery-1.jpg",
  "day-gallery-2.jpg",
  "day-gallery-3.jpg",
].map(findGalleryPhoto);
