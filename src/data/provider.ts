import { readContentFile } from "@/lib/content";
import { normalizeImagePath } from "@/lib/images";
import type { Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * MEET OUR PROVIDER (About Us page)
 *
 * Managed at `/admin` (Decap CMS) — a single Markdown file at
 * `content/provider.md`, read at build time. There's nothing here to edit
 * directly anymore; see src/data/README.md.
 * ------------------------------------------------------------------ */

/** The section heading never varies, so it's not a field /admin asks for. */
const PROVIDER_HEADING = "Meet Our Provider";

/** Must be kept in sync BY HAND with the "provider" file collection's `fields:` in public/admin/config.yml. */
interface ProviderFile {
  name: string;
  role: string;
  /** Filename of the provider's photo, uploaded via /admin. */
  photo: string;
  /** Each entry becomes its own paragraph. */
  bio: string[];
}

export interface Provider {
  heading: string;
  name: string;
  role: string;
  photo: Photo;
  bio: string[];
}

const providerFile = readContentFile<ProviderFile>("content/provider.md");

export const provider: Provider = {
  heading: PROVIDER_HEADING,
  name: providerFile?.name ?? "",
  role: providerFile?.role ?? "",
  photo: providerFile
    ? { filename: normalizeImagePath(providerFile.photo), label: `Photo of ${providerFile.name}` }
    : { filename: "", label: "" },
  bio: providerFile?.bio ?? [],
};
