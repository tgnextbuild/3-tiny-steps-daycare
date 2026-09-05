import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import type { Photo as PhotoData } from "@/types/content";

export interface PageHeroProps {
  heading: string;
  body: string;
  image: PhotoData;
  /** Tailwind text color class for the heading, e.g. "text-azure". */
  headingClassName?: string;
  uppercase?: boolean;
  cta?: { label: string; href: string };
  /**
   * Which comes first on mobile — the text/CTA column or the photo. Defaults
   * to `"text-first"` when there's a `cta` and `"photo-first"` otherwise: a
   * visitor shouldn't have to scroll past a full-width photo to reach a
   * button (see CLAUDE.md — the audit that found the Home hero's CTA
   * sitting below the fold on phones), but a hero with no CTA has nothing
   * time-sensitive to protect from that scroll. Set this explicitly if a
   * future page wants a CTA without also wanting text-first, or vice versa
   * — the two are related defaults, not the same setting.
   */
  mobileOrder?: "text-first" | "photo-first";
  /** Anchor id so search results (and other links) can jump straight here. */
  id?: string;
}

/**
 * Shared hero layout used by every top-of-page intro across the site:
 * decorative stars, heading, body copy, and a photo — with the option of a
 * CTA button. Reused by Home, About, Contact, Parent Resources, and Programs.
 */
export function PageHero({
  heading,
  body,
  image,
  headingClassName = "text-azure",
  uppercase = false,
  cta,
  mobileOrder = cta ? "text-first" : "photo-first",
  id,
}: PageHeroProps) {
  const textFirst = mobileOrder === "text-first";

  return (
    <section id={id} className="bg-cream-dark/60">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14">
        <div className={`relative ${textFirst ? "order-1" : "order-2"} lg:order-1`}>
          <Icon
            name="star"
            className="absolute -top-6 left-1 size-5 text-light-yellow lg:-top-8"
          />
          <Icon
            name="sparkle"
            className="absolute -top-2 left-9 size-4 text-pastel-red lg:top-0 lg:left-11"
          />

          <h1
            className={`text-h1 font-heading leading-tight ${headingClassName} ${uppercase ? "uppercase" : ""}`}
          >
            {heading}
          </h1>
          <p className="mt-5 max-w-md text-body text-ink/75">{body}</p>

          {cta ? (
            <div className="relative mt-7 inline-block">
              <Button href={cta.href} variant="primary">
                {cta.label}
              </Button>
              <Icon
                name="hearts-small"
                className="absolute -bottom-5 -left-3 size-5 text-pastel-red"
              />
            </div>
          ) : (
            <Icon name="hearts-small" className="mt-6 size-5 text-pastel-red" />
          )}
        </div>

        <div
          className={`relative ${textFirst ? "order-2" : "order-1"} aspect-4/3 w-full overflow-hidden rounded-[2rem] lg:order-2 lg:aspect-auto lg:h-[26rem]`}
        >
          <Photo photo={image} priority />
        </div>
      </div>
    </section>
  );
}
