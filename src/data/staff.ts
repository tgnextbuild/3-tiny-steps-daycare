import { readContentCollection } from "@/lib/content";
import { normalizeImagePath } from "@/lib/images";
import type { AccentColor, Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * MEET THE STAFF (About Us page)
 *
 * Staff members are managed at `/admin` (Decap CMS) — each is one
 * Markdown file under `content/staff/`, and this file just reads
 * whatever's there at build time. There's nothing here to edit directly
 * anymore; see src/data/README.md.
 * ------------------------------------------------------------------ */

/** Must be kept in sync BY HAND with the "staff" collection's `fields:` in public/admin/config.yml. */
interface StaffMemberFile {
  name: string;
  /** Filename of the staff photo, uploaded via /admin. */
  photo: string;
  accent: AccentColor;
  credentials: string;
  favorite: string;
}

export interface StaffMember {
  name: string;
  photo: Photo;
  accent: AccentColor;
  credentials: string;
  favorite: string;
}

export const staffHeading = "Meet the Staff";

export const staffMembers: StaffMember[] = readContentCollection<StaffMemberFile>(
  "content/staff",
).map((member) => ({
  name: member.name,
  // Every staff photo's alt text has only ever been "Photo of {name}" —
  // derived here instead of asking /admin for a caption that would always
  // just repeat the name field back.
  photo: { filename: normalizeImagePath(member.photo), label: `Photo of ${member.name}` },
  accent: member.accent,
  credentials: member.credentials,
  favorite: member.favorite,
}));
