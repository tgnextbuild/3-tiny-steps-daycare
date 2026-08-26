import type { AccentColor, Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * MEET THE STAFF (About Us page)
 *
 * To ADD a staff member: copy one of the blocks in `staffMembers` below,
 * paste it at the end of the list, and change the details.
 * To REMOVE one: delete its whole `{ ... },` block.
 *
 * `accent` is the card's color and can be one of:
 *   "green" | "crimson" | "azure" | "pastelAzure" | "yellow"
 *
 * `photo.filename` is the file to save under `public/images/`. Until that
 * file exists, the card shows a labelled placeholder instead.
 * ------------------------------------------------------------------ */
export interface StaffMember {
  name: string;
  photo: Photo;
  accent: AccentColor;
  credentials: string;
  favorite: string;
}

export const staffHeading = "Meet the Staff";

export const staffMembers: StaffMember[] = [
  {
    name: "Ms. Lilieth",
    photo: { filename: "staff-ms-lilieth.jpg", label: "Photo of Ms. Lilieth" },
    accent: "crimson",
    credentials: "CPR & First Aid Certified",
    favorite: "Favorite: Storytime & Sing-Alongs",
  },
  {
    name: "Ms. Diana",
    photo: { filename: "staff-ms-diana.jpg", label: "Photo of Ms. Diana" },
    accent: "green",
    credentials: "CPR & First Aid Certified",
    favorite: "Favorite: Building & STEM Play",
  },
  {
    name: "Ms. Patricia",
    photo: { filename: "staff-ms-patricia.jpg", label: "Photo of Ms. Patricia" },
    accent: "azure",
    credentials: "CPR & First Aid Certified",
    favorite: "Favorite: Sing-Alongs",
  },
];
